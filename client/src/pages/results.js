import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { reset, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import FormText from '../components/forms/FormText';
import FormTextPassword from '../components/forms/FormTextPassword';
import { submitTrialResult, submitTreatmentResult } from '../actions/ResultAction';
import {resultStylesheet, QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR } from '../styles';
import TopTitle from '../components/commons/userTopTitle'
import SubTitle from '../components/commons/userSubTitle'



function TabContainer({ children, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
  };
  

class Results extends Component {

    state = {
        value: 0,
        treatmentResults: [],
        trialResults: [],
        redirect: false
    }

    componentDidMount() {

        console.log(this.props.userAbout)
        console.log(this.props.userADL)
        console.log(this.props.userFamily)
        console.log(this.props.userMeds)
        console.log(this.props.userSurgery)
        console.log(this.props.userMotorSy)
        console.log(this.props.userNonMotorSy)

        this.treatmentResults()
        this.trialResults()
    }
        

    treatmentResults() {
        console.log("treatmentResults called")

        let treatmentResults = [];
    
        if (this.testBotTox() === true)  {
            treatmentResults.push({
                medication_name: "Botulinum Toxin",
                summary: "Injections of a muscle paralysing agent (botulinum toxin) used to treat troublesome drooling and pedal dystonia",
                link: "info_bottox"
            })
        }
        if (this.testDBS() === true) {
            treatmentResults.push({
                medication_name: "Deep Brain Stimulation",
                summary: "Surgical procedure to treat fluctuating motor symptoms despite oral medication",
                link: "info_DBS"
            }) 
        }
        if (this.testRytary() === true) {
            treatmentResults.push({
                medication_name: "Rytary",
                summary: "Slow release carbidopa/levodopa to treat early wear'off' symptoms",
                link: "info_rytary"
            })
        }
        if (this.testDuopa() === true) {
            treatmentResults.push({
                medication_name: "Duopa",
                summary: "Infusion of carbidopa/levodopa straigh into the intestine via a surgically placed tube. Treats unpredictable motor fluctuations and eraly wear 'off' symptoms",
                link: "info_duopa"
            }) 
        }
        if (this.testDroxidopa() === true) {
            treatmentResults.push({
                medication_name: "Droxidopa",
                summary: "Medication used to treat dizziness and lightheadedness on changing position or standing caused by parkinson disease.",
                link: "info_droxidopa"
            })
        }
        if (this.testNuplazid() === true) {

            treatmentResults.push({
                medication_name: "Nuplazid",
                summary: "Treatment for hallucinations and delusions associated with Parkinson disease",
                link: "info_nuplazid"
            }) 
        }
       if (this.testApomorphine() === true) {
            treatmentResults.push({
                medication_name: "Apomorphine",
                summary: "Medication that is injected just under the skin to treat  sudden, unpredictable and early wear'off' symptoms.",
                link: "info_apomorphine"
            })
        }
        console.log("treatmentResults: ", treatmentResults)
        this.props.submitTreatmentResult(treatmentResults);
        this.setState({treatmentResults: treatmentResults})
    }

    trialResults() {
        console.log("trialResults called")
        let trialResults = [];

        if (this.testSPARK() === true)  {
            trialResults.push({
                trial_name: "SPARK",
                summary: "The SPARK study is for people who have been recently diagnosed with Parkinson’s disease and are looking to take a proactive step in their care.",
                link: "info_SPARK"
            })
        }

        if (this.testNILO() === true) {
            trialResults.push({
                trial_name: "NILO-PD",
                summary: "The NILO-PD study will investigate the safety and tolerability of nilotinib in stable patienst diagnosed with Parkinson disease for more than 5 years",
                link: "info_NILO"
            }) 
        }
        console.log("trialResults: ", trialResults)
        this.props.submitTrialResult(trialResults);
        this.setState({trialResults: trialResults})
    }


    testBotTox = () => {
        // console.log("testBotTox")
        // let test = null;
        // test = this.props.userNonMotorSy.filter(symptom => symptom === "drooling")
        // console.log(test.length)
        // if  (test.length > 0) {return true} else {return false}

        return true
    }

    testDBS() {
        console.log("testDBS")
        // let test1 = null;
        // let test2 = null;
        // let test3 = null;
        // let test4 = null;
        // let test5 = null;

        // test1 = parseInt(this.props.userAbout.yearDiagnosed) < 2014 ? true : false
        // test2 = this.props.userMotorSy.filter(symptom => symptom === "suddenoff") 
        // test3 = this.props.userMotorSy.filter(symptom => symptom === "freezing")
        // test4 = this.props.userMotorSy.filter(symptom => symptom ===  "dyskinesia")
        // test5 = this.props.userNonMotorSy.filter(symptom => symptom ===  "cogdecline")

        // console.log("DBS: ", test1, test2.length, test3.length, test4.length)

        // if (test1 && (test2.length > 0 || test3.length > 0 || test4.length > 0) && test5.length < 1) {return true} else {return false}

        return true
    }


    testRytary() {  
        console.log("testRytary")
        // let test1 = null;
        // let test2 = null;
        // let test3 = null;

        // test1 = this.props.userMeds.length > 0 ? true : false
        // test2 = this.props.userMotorSy.filter(symptom => symptom === "suddenoff") 
        // test3 = this.props.userMotorSy.filter(symptom => symptom ===  "dyskinesia")

        // console.log("rytary: ", test1, test2.length, test3.length)

        // if (test1 && (test2.length > 0 || test3.length > 0)) {return true} else {return false}
    }

    testDuopa() {
        console.log("testDuopa")
        // let test1 = null;
        // let test2 = null;
        // let test3 = null;
        // let test4 = null;
        // let test5 = null;

        // test1 = this.props.userNonMotorSy.filter(symptom => symptom === "dysphagia")
        // test2 = this.props.userNonMotorSy.filter(symptom => symptom === "slowtransit")
        // test3 = this.props.userMotorSy.filter(symptom => symptom === "suddenoff") 
        // test4 = this.props.userMotorSy.filter(symptom => symptom ===  "dyskinesia")
        // test5 = this.props.userMeds.length > 0 ? true : false

        // console.log("dupoa: ", test1.length, test2.length, test3.length, test4.length, test5)

        // if ((test1.length > 0 ||  test2.length > 0) && (test3.length > 0 || test4.length > 0) && test5) {return true} else {return false}

        return true
    }

    testDroxidopa() { 
        console.log("testDroxidopa")
        // let test = null;
        // test = this.props.userNonMotorSy.filter(symptom => symptom === "orthostatic")
        // console.log(test.length)
        // if  (test.length > 0) {return true} else {return false}

        return true
    }

    testNuplazid() {
        console.log("testNuplazid")
        // let test = null;
        // test = this.props.userNonMotorSy.filter(symptom => symptom === "psychosis")
        // console.log(test.length)
        // if  (test.length > 0) {return true} else {return false}
    }

    testApomorphine() {
        console.log("testApomorphine")
        // let test1 = null;
        // let test2 = null;

        // test1 = this.props.userMotorSy.filter(symptom => symptom === "freezing")
        // test2 = this.props.userMotorSy.filter(symptom => symptom === "suddenoff")
        // console.log(test1.length, test2.length)
        // if  (test1.length > 0 && test2.length > 1) {return true} else {return false}
    }

    testSPARK() {
        console.log("testSpark")
        // let test1 = null;
        // let test2 = null;
        // let test3 = null;

        // test1 = (parseInt(this.props.userAbout.age) > 40 && parseInt(this.props.userAbout.age) < 81 ) ? true : false
        // test2 = parseInt(this.props.userAbout.yearDiagnosed) > 2015 ? true : false
        // test3 = this.props.userMeds.length < 1 ? true : false

        // console.log("spark: ", test1, test2, test3)

        // if (test1 && test2 && test3) {return true} else {return false}

        return true
    }


    testNILO() {
        console.log("testNILO")
        // let test1 = null;
        // let test2 = null;
        // let test3 = null;

        // test1 = (parseInt(this.props.userAbout.age) > 40 && parseInt(this.props.userAbout.age) < 80 ) ? true : false
        // test2 = parseInt(this.props.userAbout.yearDiagnosed) < 2013 ? true : false
        // test3 = this.props.userMeds.length > 0 ? true : false

        // console.log("spark: ", test1, test2, test3)

        // if (test1 && test2 && test3) {return true} else {return false}

        return true
    }


    handleMoreInfo(link) {
        console.log(link)
        this.setState({page: link})
        this.setState({redirect: true})
    }

    
    handleChange = (event, value) => {
        this.setState({ value });
      };
    
    handleChangeIndex = index => {
        this.setState({ value: index });
      };

    submit = (values) =>  {
        console.log(values)
    }



    render() {

        const { handleSubmit, classes } = this.props
        const { page, redirect, treatmentResults, trialResults } = this.state


        if (redirect) { 
            const url = `/${page}`;
            console.log("URL: ", url)
            console.log("redirect to: " + url);
            return<Redirect to={url} />;
        }
        
        return (
            <div className={classes.root}>

               <AppBar position="static" color="default" style={{margin: "0 auto", maxWidth: "1350px"}}>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab label="Treatments >" className={classes.tabTitle}/>
                    <Tab label="Trials >" className={classes.tabTitle}/>
                    <Tab label="Groups >" className={classes.tabTitle}/>
                    <Tab label="Actions" className={classes.tabTitle}/>
                </Tabs>
               

                </AppBar>

                <SwipeableViews
                    axis={'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >

                    <TabContainer dir={"rtl"}>

                        <div className={classes.resultContainer}>
                            <br />
                            <h1 className={classes.title}>Treatments</h1>
                            <br />

                            <div >
                            
                                <div>
                                    <h1 className={classes.subtitle}>Based on the information you have entered you may benefit from discussing the following treatments with the doctor that looks after you for your Parkinsons disease.</h1>
                                </div>

                                <div> 
                                    <Grid container spacing={24}>
                                        {treatmentResults.map((treatment, index) => {
                                            return (
                                                <Grid item xs={12} sm={12} md={6}>
                                                    <div key={index} className={classes.resultBox}>
                                                        <div className={classes.resultTextBox}>
                                                            <div className={classes.resultTitle}>
                                                                {index+1} {treatment.medication_name}
                                                            </div>
                                                            <div className={classes.resultText}>
                                                                {treatment.summary}
                                                            </div>
                                                        </div>
                                                        <div style={{margin: "20px", fontSize: "20px", textAlign : 'right'}}>
                                                            <Button type="button" className={classes.button} onClick={() => this.handleMoreInfo(treatment.link)}>Find Out More</Button>
                                                        </div>
                                                    </div> 
                                                </Grid>                            
                                            ) 
                                        }) }
                                    </Grid> 
                                </div>
                            </div>

                            <br />

                        </div> 

                    </TabContainer>

                    <TabContainer dir={"rtl"}>

                        <div className={classes.resultContainer}>
                            <br />
                            <h1 className={classes.title}>Clinical Trials</h1>
                            <br />

                            <div />
                                <div>
                                    <h1 className={classes.subtitle}>Based on the information you have entered you may be eligable to participate in the following clinical trials</h1>
                                </div>


                                <div style={{marginTop: "35px"}}> 
                                    <Grid container spacing={24}>
                                        {trialResults.map((trial, index) => {
                                            return (
                                                <Grid item xs={12} sm={12} md={6}>
                                                    <div key={index} className={classes.resultBox}>
                                                        <div className={classes.resultTextBox}>
                                                            <div className={classes.resultTitle}>
                                                                {index+1} {trial.trial_name}
                                                            </div>
                                                            <div className={classes.resultText}>
                                                                {trial.summary}
                                                            </div>
                                                        </div>
                                                        <div style={{margin: "20px", fontSize: "20px", textAlign : 'right'}}>
                                                            <Button type="button" className={classes.button} onClick={() => this.handleMoreInfo(trial.link)}>Find Out More</Button>
                                                        </div>
                                                    </div> 
                                                </Grid>
                                            ) 
                                        })}

                                    </Grid>
                                
                                </div>

                            <br />

                        </div> 
                        
                    </TabContainer>

                    <TabContainer dir={"rtl"}></TabContainer>

                      <TabContainer dir={"rtl"}>

                        <Grid container spacing={24}> 

                            <Grid item xs={12} sm={12} md={4}>
                                <div className={classes.emailContainer}>
                                    <form autoComplete="off" onSubmit={handleSubmit(this.submit.bind(this))}>
                                        <div >
                                            <h1 className={classes.title}>Create an account</h1>
                                        </div>

                                            <FormTextPassword
                                                name="password1"
                                                label="Password"
                                                width="90%"
                                            />

                                            <br />

                                            <Button type="submit" className={classes.btn}>Create Account</Button>
                                        <br />
                                    </form>
                                </div>
                            </Grid>   
                            
                            <Grid item xs={12} sm={12} md={4}>
                                <div className={classes.emailContainer}>
                                    <form autoComplete="off" onSubmit={handleSubmit(this.submit.bind(this))}>
                                        <div >
                                            <h1 className={classes.title}>Email Me The Results</h1>
                                        </div>
                                        <FormText
                                        name="email"
                                        label="Email (john.doe@you.com"
                                        width="90%"
                                        />
                                        <br />
                                    </form>
                                </div>
                            </Grid>
                        
                            <Grid item xs={12} sm={12} md={4}>
                                <div className={classes.emailContainer}>
                                    <form autoComplete="off" onSubmit={handleSubmit(this.submit.bind(this))}>
                                        <div >
                                            <h1 className={classes.title}>Print Results</h1>
                                        </div>
                                        <Button type="submit" className={classes.btn}>Print</Button>
                                        <br />
                                    </form>
                                </div>
                            </Grid>

                        </Grid>

                    </TabContainer>

                </SwipeableViews>
            </div>
        );
    }
}

                                // <div>
                                //     <h1 className={classes.subtitle}>Create an account to keep track of your symptoms and stay up-to-date with the latest Parkinsons treatment!
                                //     </h1>
                                // </div>

                                



const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ submitTreatmentResult, submitTrialResult }, dispatch);
}

const mapStateToProps = (state) => {
    console.log("State : ", state);
    return {
        userAbout: state.about,
        userADL: state.life.ADL,
        userFamily: state.family.family,
        userMeds: state.meds.meds,
        userSurgery: state.surgery.surgery,
        userMotorSy: state.motorSy.motorSy,
        userNonMotorSy: state.nonMotorSy.nonMotorSy, 
    }
  };

const formData = {
    form: "CreateAccountForm" //unique identifier for this form 
}

Results = withRouter(Results)
Results = reduxForm(formData)(Results)
Results = withStyles(resultStylesheet)(Results)
Results = connect(mapStateToProps, mapDispatchToProps)(Results)
export default Results