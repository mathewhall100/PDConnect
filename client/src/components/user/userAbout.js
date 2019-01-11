import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import DoneIcon from '@material-ui/icons/Done'

import { age, sex, raceEthnicity, years } from '../../constants'
import { updateStepperCount, submitUserAbout, submitReview} from '../../actions/index.js'
import UserSectionHead from '../texts/userSectionHead'
import UserNavButton from '../buttons/userNavButton'
import { QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR, WARNING_COLOR } from '../../themes'

const styles = () => ({
    questionLabel: {
        fontSize: "17px",
        fontWeight: "bold"
    },
    selectLabel: {
        height: "45px",
        color: "black",
        fontWeight: "bold"
    },
    selectMenuItem: {
        color: "grey", 
        fontSize: "18px", 
        fontWeight: "normal"
    },
    doneIcon: {
        fontSize: "36px",
        fontWeight: "bold",
        color: QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR,
        padding: 0,
        marginLeft: "12px"
    },
    errorText: {
        fontSize: "15px",
        color: WARNING_COLOR,
        position: "relative",
        left: "-25px",
        top: "35px"
    }

})


 class UserAbout extends Component {

    state = {
        redirectAddress : '/user/user_family',
    }

    componentWillMount() {
        this.handleInitialize();
    }

    componentDidMount() {
        window.scroll(0,0)
        this.props.updateStepperCount()
    }

    handleInitialize() {
        const initData = this.props.userAbout
        console.log("in handle init, init data is : ", initData);
        this.props.initialize(initData)
    }

    submit(values) {
        console.log("values : " , values)
        this.props.submitUserAbout(values)
        if (this.props.review.redirect){
            this.props.submitReview(false)
            this.props.history.push('/user/user_review')
        } else {
            this.props.history.push(this.state.redirectAddress)
        }
    }

    render() {

        const { handleSubmit, classes } = this.props

        const RenderSelect = (field) => {
            const { input, width, meta: { pristine, touched, error }, children } = field
            return (
                <div>
                    <FormControl variant="outlined" style={{width: `${width}`}}>
                        <Select 
                            displayEmpty={true}
                            {...input}
                            onSelect={(value) => input.onChange(value)}
                            children={children}
                            input={
                                <OutlinedInput
                                    className={classes.selectLabel}
                                    name=' '
                                    id="outlined"
                                />
                            }
                        >
                        </Select>
                    </FormControl>

                    {!pristine && !error ? <DoneIcon className={classes.doneIcon} /> : ''}
                    <span className={classes.errorText}>{touched ? error : ''}</span>
                        
                </div>
            )
        };

        const RenderQuestion = props => 
            <React.Fragment>
                <br />
                <h4 className={classes.questionLabel} >{props.label}</h4>
                <Field name={props.name} component={RenderSelect} width={props.width} >
                    <MenuItem value="" disabled ><span className={classes.selectMenuItem}>{props.firstMenuItem}</span></MenuItem>
                    {props.menuItems.map(item => <MenuItem key={item.value} value={item.value} >{item.text}</MenuItem> )}
                </Field>
             </React.Fragment>

        const questions = [
            { label: "How old are you?", name: "age", width: "150px", firstMenuItem: "Select Age", menuItems: age },
            { label: "What is your sex?", name: "sex", width: "150px", firstMenuItem: "Select Sex", menuItems: sex },
            { label: "What do you consider yourself?", name: "race", width: "380px", firstMenuItem: "Select race/ethnicity", menuItems: raceEthnicity },
            { label: "When were you first diagnosed with Parkinson disease?", name: "yearDiagnosed", width: "150px", firstMenuItem: "Select year", menuItems: years },
            { label: "When did you start treatment for Parkinson Disease?", name: "yearTreatment", width: "150px", firstMenuItem: "Select year", menuItems: years }
        ]

        // component return
        return (
            <React.Fragment>
                
                <UserSectionHead text="Please select an entry for each box." />

                <form autoComplete='off' onSubmit={handleSubmit(this.submit.bind(this))}>
                    {questions.map((question, idx) => 
                        <RenderQuestion key={idx}
                            label={question.label} 
                            name={question.name} 
                            width={question.width}
                            firstMenuItem={question.firstMenuItem} 
                            menuItems={question.menuItems} /> 
                    )}
                    <br /><br />
                    <UserNavButton type="submit" width="100%" text="SAVE AND CONTINUE" />
                </form>

            </React.Fragment>
        );
    }
}

function validate(values) {
    const errors = {}
    if (!values.age) {
        errors.age = '*required'
    }
    if (!values.sex) {
        errors.sex = '*required'
    }
    if (!values.race) {
        errors.race = '*required'
    }
    if(!values.yearDiagnosed) {
        errors.yearDiagnosed = '*required'
    }
    if(!values.yearTreatment) {
        errors.yearTreatment = '*required'
    }
    if (values.yearTreatment < values.yearDiagnosed) {
        errors.yearTreatment = '*start of treatment must be after date of diagnosis'
    }
    return errors
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateStepperCount, submitUserAbout, submitReview }, dispatch);
}

const mapStateToProps = (state) => {
    console.log("state ", state)
    return {
        userAbout: state.about,
        review :state.review,
    }
}

const formData = {
    form: 'userAboutForm', //unique identifier for this form
    validate,
}

UserAbout = reduxForm(formData)(UserAbout)
UserAbout = withRouter(UserAbout)
UserAbout = withStyles(styles)(UserAbout)
UserAbout = connect(mapStateToProps, mapDispatchToProps)(UserAbout)
export default UserAbout
