import React, { Component } from 'react';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { reset, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import FormLabel from '@material-ui/core/FormLabel';
import Select from './forms/FormSelect';
import TextBox from './forms/FormText';
import Radio from './forms/FormRadio';

import { age, raceEthnicity, years, activity_level } from '../constants';
// import { submitUserInfo } from '../actions/UserInfoAction'
// import { submitTestComponentData } from '../actions/TestComponentAction'


const styles = theme => ({
    root: {
        paddingTop: "20px",
    },
    componentBox: {
        width: "800px",
        height: "auto",
        margin: "20px auto",
        border: "1px solid lightgrey",
        padding: "20px"


    },
    textCenter: {
        textAlign: "center"
    },
    textStyle: {
        marginTop: '40px',
        marginBottom: '40px'
    },
    hr: {
        height: "1px", 
        color:  "lightgrey",
        opacity: 0.5
    },
    basicBtn: {
        width: "150px",
        height: "30px",
        marginRight: "60px",
        backgroundColor: "white",
        border: "2px solid grey",
        borderRadius: "10px",
        fontSize: "14px",
        '&:hover': {
            backgroundColor: "lightgrey",
        },
    },
});



 class TestComponent extends Component {

    state = {
        displayBox: null,
        medIndex: 1,
        redirect: false,
        redirectAddress : 'response',
    }


    submit(values) {
        console.log("submitPrevious: ", values)

        // this.props.submitPreviousTreatment(previousTreatment)  //reducer

        this.setState({
            redirectAddress: '/response',
            redirect: true
        })

    }

    handleClearForm() {
        this.props.reset()
    }

    handleAddMedication() {
        console.log("add medication: ", this.state.medIndex)
    }

    handleBack = () => {
        this.setState({
            redirect: true,
            redirectAddress: '/current_treatment'
        })
    }
    render() {

        const { handleSubmit, pristine, submitting, classes } = this.props
        const { redirect, redirectAddress } = this.state

        if (redirect) { 
            const url = `${redirectAddress}`;
            console.log("redirect to .. " + url);
            return<Redirect to={url} />;
        }


        const SubComponent = (props) => {

            return (

                <div>

                </div>

            )
            
        }

        const SubComponent2 = (props) => {

            return (
                <div>
                    
                </div> 
            )
        }


        return (
            <section className={classes.root}>
                <div className={classes.componentBox}>
                    <h1 className={classes.textCenter}>Let's get started! Tell us a bit about you.</h1>
                    <hr className={classes.hr} />
                    <br />

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
                                    name='sex' 
                                    label='Sex'
                                    labelWidth='90'
                                    items={[{ "value": "male", "label": "male" }, { "value": "female", "label": "female" }]}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Select 
                                    name='race'
                                    label='Race/Ethnicity'
                                    width='90%'
                                    labelWidth='90'
                                    items={raceEthnicity}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Select
                                    name='yearDiagnosed'
                                    width='90%'
                                    labelWidth='300'
                                    label='What year were you diagnosed with Parkinson disease?'
                                    items = {years}
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <Select
                                    name='yearFirstSymptoms'
                                    width='90%'
                                    labelWidth='300'
                                    label='When did your symptoms first start?'
                                    items={years}
                                />
                            </Grid> */}
                            <Grid item xs={12}>
                                <Select
                                    name='startPDTreatment'
                                    width='90%'
                                    labelWidth='320'
                                    label='Approxiamately when did you start treatment for Parkinson Disease?'
                                    items={years}
                                />
                            </Grid>
                        </Grid>

                        <br />
                        <hr className={classes.hr} />
                        <br />
                        <Button type="submit" color="primary" className={classes.basicBtn}>NEXT</Button>
                        <Button type="button" color="primary" className={classes.basicBtn} onClick={() => this.handleClearForm}>CLEAR</Button>  
                    
                     </form>
                </div>
            </section>

        );
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ submitTestComponentData }, dispatch);
// }

const formData = {
    form: 'TestComponentForm', //unique identifier for this form 
    //validate,      
}

TestComponent = reduxForm(formData)(TestComponent)
TestComponent = withRouter(TestComponent)
TestComponent = withStyles(styles)(TestComponent)
//TestComponent = connect(null, mapDispatchToProps)(TestComponent)
export default TestComponent
