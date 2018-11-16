import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { reset, reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import FormLabel from '@material-ui/core/FormLabel';
import TextBox from '../forms/FormText';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import HelpIcon from '@material-ui/icons/Help';
import DoneIcon from '@material-ui/icons/Done';

import { age, sex, raceEthnicity, years, activity_level } from '../../constants';
import {userStylesheet } from '../../styles';
import { updateStepperCount, submitUserAbout} from '../../actions/index.js'
import BottomNav from '../commons/userBottomNav'
import TopTitle from '../commons/userTopTitle'
import UserModal from '../commons/userModal'


 class UserAbout extends Component {

    state = {
        modalOpen: false,
        modalTitle: '',
        modalDescription : '',
        modalwarning: false,
        redirect: false,
        redirectAddress : '/user/user_life',
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
        this.setState({redirect : true})
    }

    handleClearForm() {
        console.log("clear form")
        this.props.reset()
    }

    handleBack = () => {
        this.setState({
            redirectAddress: '/'}, () => this.setState({redirect: true}) )
    }

    handleModalOpen = (title, text) => { 
        console.log(title);
         this.setState({ 
             modalTitle : title,
             modalText : text,
             modalWarning : false,
             modalOpen: true
        });
     };


    render() {

        const { handleSubmit, pristine, submitting, classes } = this.props
        const { redirect, redirectAddress, modalOpen, modalTitle, modalText, modalWarning } = this.state


        if (redirect) { 
            const url = `${redirectAddress}`;
            console.log("redirect to .. " + url);
            return<Redirect exact to={url} />;
        }

        const RenderSelect = (field) => {

            const {input, label, width, modal, labelWidth, meta: { pristine, touched, error }, children, ...custom} = field

            return (
    
                <div> 

                    <span>
                        <FormControl variant="outlined"  style={{width: `${width}`}}>  
                            <InputLabel className={classes.inputLabel}>
                                {label}
                            </InputLabel>    
                            <Select
                                {...input}
                                onSelect={(event, index, value) => input.onChange(value)}
                                children={children}
                                {...custom}
                                input={
                                    <OutlinedInput
                                        className={classes.selectLabel}
                                        labelWidth={labelWidth}
                                        name=' '
                                        id="outlined"
                                    />
                                }
                            >
                            </Select>
                        </FormControl> 
                    </span>

                    { (pristine || error) && <Button className={classes.helpButton} style={{position: "relative", top: "-38px", left: "-5px"}} onClick={() => this.handleModalOpen(label, label)}>
                        <HelpIcon color="primary" className={classes.helpIcon}/>
                    </Button> }

                    <span className={classes.doneIcon}>
                        {!pristine && !error ? <DoneIcon /> : ''}
                    </span>
                    
                    <span className={classes.errorText} >
                            {touched ? error : ''}
                    </span>
                
                </div>
            )
        };

        const BottomNav= (props) => {
            return (
                <Grid container spacing={24} className={classes.buttonContainer}>
                    <Grid item xs={12}>
                        <hr className={classes.hr} />
                    </Grid>
                    <Grid item xs={3}>
                     <Button type="button" variant='outlined' className={classes.nextButton} onClick={() => this.handleBack()}>BACK</Button>
                        {/* <Button type="button" className={classes.backButton} onClick={() => this.handleClearForm()}>CLEAR</Button>   */}
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3} className={classes.nextButtonContainer}>
                        <Button type="submit" variant='outlined' className={classes.nextButton}>NEXT</Button>
                    </Grid>
                </Grid>
            )
        }


        return (
            <div className={classes.componentBox} >
                <div>
                    <TopTitle title="Let's get started! Tell us a bit about you." />

                    <form autoComplete='off' onSubmit={handleSubmit(this.submit.bind(this))}>
                        <br />

                                <Field 
                                        name="age"
                                        component={RenderSelect} 
                                        label="Your age"
                                        width={"150px"}
                                        labelWidth={75}
                                        modal={1}
                                    >
                                        {age.map(item => 
                                        <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>
                                        )}
                                </Field>

                                <br /><br />

                                 <Field 
                                        name="sex"
                                        component={RenderSelect} 
                                        label="Your sex"
                                        width={"150px"}
                                        labelWidth={75}
                                        modal={2}
                                    >
                                        {sex.map(item => 
                                        <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>
                                        )}
                                </Field>

                                <br /><br />
                           
                                <Field 
                                        name="race"
                                        component={RenderSelect} 
                                        label="Your race/ethnicity"
                                        width={"320px"}
                                        labelWidth={150}
                                        modal={3}
                                    >
                                        {raceEthnicity.map(item => 
                                        <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>
                                        )}
                                </Field>

                                <br />

                                <h4 className={classes.labelText}>When were you first diagnosed with Parkinson disease?</h4>
                                <Field 
                                        name="yearDiagnosed"
                                        component={RenderSelect} 
                                        label="Year"
                                        width={"150px"}
                                        labelWidth={40}
                                        modal={4}
                                    >
                                        {years.map(item => 
                                        <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>
                                        )}
                                </Field>

                                <br />

                                <h4 className={classes.labelText}>When did you start treatment for Parkinson Disease?</h4>
                                <Field 
                                        name="yearTreatment"
                                        component={RenderSelect} 
                                        label="Year"
                                        width={"150px"}
                                        labelWidth={40}
                                        modal={5}
                                    >
                                        {years.map(item => 
                                        <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>
                                        )}
                                </Field> 
                       
                       <BottomNav />

                    </form>

                </div>

                { modalOpen && <UserModal 
                    modalOpen={modalOpen}
                    modalTitle={modalTitle} 
                    modalText={modalText} 
                    modalWarning={modalWarning} 
                /> }

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
    return bindActionCreators({ updateStepperCount, submitUserAbout }, dispatch);
}

const mapStateToProps = (state) => {
    console.log("state ", state)
    return {
        userAbout: state.about
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
