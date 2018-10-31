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
        this.setState({redirect : true})
        
        
        
    }
    
    render() {
        const { handleSubmit, classes, pristine, submitting } = this.props;
        const { redirect } = this.state;
        if(redirect){
            return(
                <Redirect to='/current_treatment' />
            )
        }else{ 

        }
        return (
                <div>

                    <div style={{marginTop: "50px", textAlign: "center"}}>
                        <h1>About Youself</h1>
                    </div>

                    <div style={{marginTop: "40px", paddingLeft: "20px"}}>
                        <h3>Tell us a bit about yourself so we can individualize the information we give you.</h3>
                    </div>

                    <div style={{marginTop: "40px", padding: "20px"}}>

                        <form autoComplete='off' onSubmit={handleSubmit(this.submit.bind(this))}>
                            <Grid container spacing={24}>
                                <Grid item xs={12}>
                                    <Select
                                        label='Age'
                                        name='age'
                                        labelWidth='90'
                                        items={[{ "value": 55, "text": 55 }, { "value": 56, "text": 56 }]}
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
                                        labelWidth='90'
                                        label='Years diagnosed with Parkinsons'
                                        items = {arrYearsDescending}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Select
                                        name='yearFirstSymptoms'
                                        width='90%'
                                        labelWidth='500'
                                        label='Year first diagnosed with Parkinsons'
                                        items={arrYearsDescending}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Select
                                        name='startPDTreatment'
                                        width='90%'
                                        labelWidth='500'
                                        label='When did you start treatment for Parkinsons'
                                        items={arrYearsDescending}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Select
                                        name='performDailyActivities'
                                        label='How do you rate your current ability to perform daily activities?'
                                        width='90%'
                                        labelWidth='500'
                                        items= {activity_level}
                                    />
                                </Grid>
                                <Grid xs={12} item>
                                    <Button type="submit" className={styles.Button} disabled={pristine || submitting}>
                                        Next
                                    </Button>
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
    },
    
});
const formData = {
    form: 'user_info', //unique identifier for this form 
    validate,
}

function validate(values) {
    //console.log("Error values: ", values) 
    const errors = {};
    return errors;
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