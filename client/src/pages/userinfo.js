import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { reduxForm } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import { submitUserInfo } from '../actions/UserInfoAction'
import FormLabel from '@material-ui/core/FormLabel';
import { connect } from 'react-redux';
import Select from '../components/forms/FormSelect';
import TextBox from '../components/forms/FormText';
import Radio from '../components/forms/FormRadio';
import Button from '@material-ui/core/Button';
import { activity_level } from '../constants';
import { withRouter, Redirect } from 'react-router-dom';
import { age, years } from '../constants';
const arrRace = [
    {
        "value" : "American Indian or Alaska Native",
        "text" : "American Indian or Alaska Native",
    },
    {
        "value": "Asian",
        "text": "Asian",
    },
    {
        "value": "Black or African American",
        "text": "Black or African American",
    },
    {
        "value": "Native Hawaiian or Other Pacific Islander",
        "text": "Native Hawaiian or Other Pacific Islander",
    },
    {
        "value": "White",
        "text": "White",
    },
    {
        "value": "Hispanic or Latino or Spanish Origin",
        "text": "Hispanic or Latino or Spanish Origin"
    },
    {
        "value" : "Not Hispanic or Latino or Spansih Origin",
        "text": "Not Hispanic or Latino or Spansih Origin"
    }
]

let arrYearsDescending = [
    {
        "value" : "2018",
        "text" : "2018"
    },
    {
        "value": "2017",
        "text": "2017"
    },
    {
        "value": "2016",
        "text": "2016"
    },
    {
        "value": "2015",
        "text": "2015"
    },
    {
        "value": "2014",
        "text": "2014"
    },
    {
        "value": "2013",
        "text": "2013"
    },
    {
        "value": "2012",
        "text": "2012"
    }
];


class UserInfo extends Component {

    state = {
        redirect : false,
        redirectAddress : '',
    }
    componentWillMount() {
        this.handleInitialize();
    }

    handleInitialize() {
        const initData = this.props.user
        console.log("in handle init, init data is : ", initData);
        this.props.initialize(initData);
    }

    componentDidMount() {
        this.setState({
            age : this.props.user.age
        })
    }
    submit(values){
        console.log("props : ", this.props);
        console.log("values : " , values);
        this.props.submitUserInfo(values)
        this.setState({
            redirect : true,
            redirectAddress : '/current_treatment'
        })
    }
    handleBack=() => {
        this.setState({
            redirect : true,
            redirectAddress : '/intro_choice'
        })
    }
    
    render() {
        const { handleSubmit, classes, pristine, submitting } = this.props;
        const { redirect, redirectAddress } = this.state;
        if(redirect){
            return(
                <Redirect to={redirectAddress} />
            )
        }
        return (
                <div>

                    <div style={{marginTop: "50px", textAlign: "center"}}>
                        <h1>About Yourself</h1>
                    </div>

                    <div style={{marginTop: "40px", paddingLeft: "20px"}}>
                        <h3>Tell us about yourself so we can provide individualized information.</h3>
                    </div>

                    <div style={{marginTop: "40px", padding: "20px"}}>

                        <form autoComplete='off' onSubmit={handleSubmit(this.submit.bind(this))}>
                            <Grid container spacing={24}>
                                <Grid item xs={12}>
                                    <Select
                                        label='Age'
                                        name='age'
                                        labelWidth='90'
                                        items={age}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Radio
                                        label='Sex'
                                        name='sex'
                                        labelWidth='90'
                                        items={[{ "value": "male", "label": "male" }, { "value": "female", "label": "female" }]}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Select 
                                        name='race'
                                        label='Race'
                                        width='90%'
                                        labelWidth='90'
                                        items={arrRace}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Select
                                        name='yearDiagnosed'
                                        width='90%'
                                        labelWidth='300'
                                        label='When were you diagnosed with Parkinson disease?'
                                        items = {years}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Select
                                        name='yearFirstSymptoms'
                                        width='90%'
                                        labelWidth='300'
                                        label='When did your symptoms first start?'
                                        items={years}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Select
                                        name='startPDTreatment'
                                        width='90%'
                                        labelWidth='320'
                                        label='When did you start treatment for Parkinson?'
                                        items={years}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Select
                                        name='performDailyActivities'
                                        label='How do you rate your current ability to perform daily activities?'
                                        width='90%'
                                        labelWidth='440'
                                        items={years}
                                    />
                                </Grid>
                                <Grid xs={6} item style={{textAlign: 'center'}}>
                                    <span style={{ marginRight: '50px', textAlign : 'center' }}>
                                        <Button variant='contained' color='secondary' className={classes.Btn} onClick={()=> {this.handleBack()}} className={classes.button}>
                                            Back
                                        </Button>
                                    </span>
                                </Grid>
                                <Grid xs={6} item style={{ textAlign: 'center' }}>
                                    <span style={{ marginRight: '50px', textAlign: 'center' }}>
                                        <Button type="submit" className={classes.button} >
                                            Next
                                        </Button>
                                    </span>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
            </div>
        );
    }
}

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
        width: "150px",
        height: "30px",
        border: "2px solid grey",
        borderRadius: "10px",
        fontSize: "14px"
    },
    
});
const formData = {
    form: 'user_info', //unique identifier for this form 
    validate,
}

function validate(values) {
    const errors = {}
    if (!values.age) {
        errors.age = 'Age cannot be empty'
    }
    if (!values.sex) {
        errors.sex = 'Please select a value'
    } 
    if (!values.race) {
        errors.race = 'Please select a race'
    }
    if(!values.yearDiagnosed) {
        errors.yearDiagnosed = 'Please select a value here'
    }
    if (!values.yearFirstSymptoms) {
        errors.yearFirstSymptoms = 'Please select a value here'
    }
    if (!values.startPDTreatment) {
        errors.startPDTreatment = 'Please select a value here'
    }
    if (!values.performDailyActivities) {
        errors.performDailyActivities = 'Please select a value here'
    }
    return errors
}
function mapStatsToProps(state) {
    console.log(state);
    return {
        currentTreatments : state.currentTreatments,
        previousTreatments: state.previousTreatments,
        user: state.user,
        userChoice : state.userChoice,
        symptom : state.symptom,
        sideEffect : state.sideEffect,
    }
}

UserInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

UserInfo = reduxForm(formData)(UserInfo);
UserInfo = withStyles(styles)(UserInfo);
UserInfo = withRouter(UserInfo);
export default connect(mapStatsToProps, { submitUserInfo })(UserInfo);