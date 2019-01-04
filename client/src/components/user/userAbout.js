import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import DoneIcon from '@material-ui/icons/Done';

import { age, sex, raceEthnicity, years } from '../../constants';
import {userStylesheet } from '../../styles';
import { updateStepperCount, submitUserAbout, submitReview} from '../../actions/index.js'


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
        this.props.initialize(initData);
    }

    submit(values) {
        console.log("values : " , values);
        this.props.submitUserAbout(values)
        if (this.props.review.redirect){
            this.props.submitReview(false);
            this.props.history.push('/user/user_review');
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

                    <span >
                        <FormControl variant="outlined"  style={{width: `${width}`}}>
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
                    </span>

                    <span>
                        {!pristine && !error ? <DoneIcon className={classes.doneIcon} style={{marginLeft: "5px", color: "green"}}/> : ''}
                    </span>

                    <span className={classes.errorText} style={{position: "relative", top: "5px", left: "20px"}}>
                            {touched ? error : ''}
                    </span>

                </div>
            )
        };


        return (
            <div className={classes.componentBox} >

                <p className={classes.sectionTitle}>Please select an entry for each box</p>

                <div>
                    <form autoComplete='off' onSubmit={handleSubmit(this.submit.bind(this))}>
                        <br />

                        <h4 className={classes.questionHead} >How old are you?</h4>
                        <Field name="age" component={RenderSelect} width={"150px"} >
                            <MenuItem value="" disabled ><span className={classes.selectMenuItem}>Select age</span></MenuItem>
                            {age.map(item => <MenuItem key={item.value} value={item.value} >{item.text}</MenuItem> )}
                        </Field>

                        <br />

                        <h4 className={classes.questionHead} >What is your sex?</h4>
                        <Field name="sex" component={RenderSelect} width={"150px"} >
                            <MenuItem value="" disabled ><span className={classes.selectMenuItem}>Select sex</span></MenuItem>
                            {sex.map(item => <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem> )}
                        </Field>

                        <br />

                        <h4 className={classes.questionHead} >What do you consider yourself?</h4>
                        <Field name="race" component={RenderSelect} width={"380px"} >
                            <MenuItem value="" disabled ><span className={classes.selectMenuItem}>Select race/ethnicity</span></MenuItem>
                            {raceEthnicity.map(item => <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem> )}
                        </Field>

                        <br />

                        <h4 className={classes.questionHead} >When were you first diagnosed with Parkinson disease?</h4>
                        <Field name="yearDiagnosed" component={RenderSelect} width={"150px"} >
                            <MenuItem value="" disabled ><span className={classes.selectMenuItem}>Select year</span></MenuItem>
                            {years.map(item => <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem> )}
                        </Field>

                        <br />

                        <h4 className={classes.questionHead}>When did you start treatment for Parkinson Disease?</h4>
                        <Field name="yearTreatment" component={RenderSelect} width={"150px"} >
                            <MenuItem value="" disabled ><span className={classes.selectMenuItem}>Select year</span></MenuItem>
                            {years.map(item => <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem> )}
                        </Field>
                        <br />

                        <Button type="submit" type="variant" className={classes.userNavButtonRight}>SAVE AND CONTINUE</Button>

                    </form>

                </div>

            </div>

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
UserAbout = withStyles(userStylesheet)(UserAbout)
UserAbout = connect(mapStateToProps, mapDispatchToProps)(UserAbout)
export default UserAbout
