import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { reset, reduxForm } from 'redux-form';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';

import FormText from '../components/forms/FormText';
import FormTextPassword from '../components/forms/FormTextPassword';
import { submitTrialResult, submitMedicalResult } from '../actions/ResultAction';

const styles = theme => ({
    root: {

    },
    textBox: {
        textAlign: "center"
    },
    TextStyle: {
        marginTop: '40px',
        marginBottom: '40px'
    },
    Btn: {
        width: "190px",
        height: "30px",
        backgroundColor: "white",
        border: "2px solid grey",
        borderRadius: "10px",
        fontSize: "14px"
    },

});

class Results extends Component {

    state = {
        treatmentResults: [],
        trialResults: [],
        redirect: false
    }

    componentDidMount() {

        this.treatmentResults()
        this.trialResults()
        
        // Mathew : use  submitTrialResult(array), submitMedicalResult(array) to send results to store, 
        /* note array can be an array of object  i.e : 
            [ 
                {
                    medication_name : 'duopa',
                    summary : 'summary text',
                    link : 'link address',
                },
                {
                    medication_name : 'duopa',
                    summary : 'summary text',
                    link : 'link address',
                },
            ]
        */
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
        this.props.submitMedicalResult(treatmentResults);
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
        console.log("testBotTox")
        let test = null;
        test = this.props.symptoms.filter(symptom => symptom.short_name === "drooling")
        console.log(test.length)
        if  (test.length > 0) {return true} else {return false}
    }

    testDBS() {
        console.log("testDBS")
        let test1 = null;
        let test2 = null;
        let test3 = null;
        let test4 = null;
        let test5 = null;

        test1 = parseInt(this.props.userInfo.yearDiagnosed) < 2014 ? true : false
        test2 = this.props.symptoms.filter(symptom => symptom.short_name === "suddenoff") 
        test3 = this.props.symptoms.filter(symptom => symptom.short_name === "freezing")
        test4 = this.props.symptoms.filter(symptom => symptom.short_name ===  "dyskinesia")
        test5 = this.props.symptoms.filter(symptom => symptom.short_name ===  "memory")

        console.log("DBS: ", test1, test2.length, test3.length, test4.length)

        if (test1 && (test2.length > 0 || test3.length > 0 || test4.length > 0) && test5.length < 1) {return true} else {return false}
    }


    testRytary() {  
        console.log("testRytary")
        let test1 = null;
        let test2 = null;
        let test3 = null;

        test1 = this.props.currentTreatments.length > 0 ? true : false
        test2 = this.props.symptoms.filter(symptom => symptom.short_name === "suddenoff") 
        test3 = this.props.symptoms.filter(symptom => symptom.short_name ===  "dyskinesia")

        console.log("rytary: ", test1, test2.length, test3.length)

        if (test1 && (test2.length > 0 || test3.length > 0)) {return true} else {return false}
    }

    testDuopa() {
        console.log("testDuopa")
        let test1 = null;
        let test2 = null;
        let test3 = null;
        let test4 = null;
        let test5 = null;

        test1 = this.props.symptoms.filter(symptom => symptom.short_name === "swallow")
        test2 = this.props.symptoms.filter(symptom => symptom.short_name === "nausea")
        test3 = this.props.symptoms.filter(symptom => symptom.short_name === "suddenoff") 
        test4 = this.props.symptoms.filter(symptom => symptom.short_name ===  "dyskinesia")
        test5 = this.props.currentTreatments.length > 0 ? true : false

        console.log("dupoa: ", test1.length, test2.length, test3.length, test4.length, test5)

        if ((test1.length > 0 ||  test2.length > 0) && (test3.length > 0 || test4.length > 0) && test5) {return true} else {return false}
    }

    testDroxidopa() { 
        console.log("testDroxidopa")
        let test = null;
        test = this.props.symptoms.filter(symptom => symptom.short_name === "dizziness")
        console.log(test.length)
        if  (test.length > 0) {return true} else {return false}
    }

    testNuplazid() {
        console.log("testNuplazid")
        let test = null;
        test = this.props.symptoms.filter(symptom => symptom.short_name === "hallucinations")
        console.log(test.length)
        if  (test.length > 0) {return true} else {return false}
    }

    testApomorphine() {
        console.log("testApomorphine")
        let test1 = null;
        let test2 = null;

        test1 = this.props.symptoms.filter(symptom => symptom.short_name === "freezing")
        test2 = this.props.symptoms.filter(symptom => symptom.short_name === "suddenoff")
        console.log(test1.length, test2.length)
        if  (test1.length > 0 && test2.length > 1) {return true} else {return false}
    }

    testSPARK() {
        console.log("testSpark")
        let test1 = null;
        let test2 = null;
        let test3 = null;

        test1 = (parseInt(this.props.userInfo.age) > 40 && parseInt(this.props.userInfo.age) < 81 ) ? true : false
        test2 = parseInt(this.props.userInfo.yearDiagnosed) > 2015 ? true : false
        test3 = this.props.currentTreatments.length < 1 ? true : false

        console.log("spark: ", test1, test2, test3)

        if (test1 && test2 && test3) {return true} else {return false}
    }


    testNILO() {
        console.log("testNILO")
        let test1 = null;
        let test2 = null;
        let test3 = null;

        test1 = (parseInt(this.props.userInfo.age) > 40 && parseInt(this.props.userInfo.age) < 80 ) ? true : false
        test2 = parseInt(this.props.userInfo.yearDiagnosed) < 2013 ? true : false
        test3 = this.props.currentTreatments.length > 0 ? true : false

        console.log("spark: ", test1, test2, test3)

        if (test1 && test2 && test3) {return true} else {return false}
    }


    handleMoreInfo(link) {
        console.log(link)
        this.setState({page: link})
        this.setState({redirect: true})
    }

    
   submit(values) {
       console.log("submit: ", values)
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

            <div>

                {(this.props.userChoice.choice === "treatments" || this.props.userChoice.choice === "both") && <div>
                    <div className={classes.textBox} style={{marginTop: "50px"}}>
                        <h1>Treatments</h1>
                    </div>

                    <div style={{margin: "25px"}}>
                        <h3>Based on the information you have entered you may benefit from discussing the following treatments with the doctor that looks after you for your Parkinsons disease.</h3>
                    </div>

                    <div style={{marginTop: "35px"}}> 
                        
                        {treatmentResults.map((treatment, index) => {

                            return (
                                <div key={index} style={{border: "1px solid grey", borderRadius: "5px", margin: "20px"}}>
                                    <div style={{margin: "20px", fontSize: "20px"}}>
                                        {index+1} {treatment.medication_name}
                                    </div>
                                    <div style={{margin: "20px", fontSize: "20px"}}>
                                        {treatment.summary}
                                    </div>
                                    <div style={{margin: "20px", fontSize: "20px", textAlign : 'right'}}>
                                        <Button type="button" className={classes.Btn} onClick={() => this.handleMoreInfo(treatment.link)}>Find Out More</Button>
                                    </div>
                                </div>
                            ) 
                        })}
                    
                    </div>

                    <br />
                    <br />

                </div> }

                {(this.props.userChoice.choice === "trials" || this.props.userChoice.choice === "both") && <div>

                    <div className={classes.textBox} style={{marginTop: "50px"}}>
                        <h1>Clinical Trials</h1>
                    </div>

                    <div style={{margin: "25px"}}>
                        <h3>You may be eligable to paticipate in the following Parkinsons disease clinical trials</h3>
                    </div>

                    <div style={{marginTop: "35px"}}> 
                        
                        {trialResults.map((trial, index) => {

                            return (
                                <div key={index} style={{border: "1px solid grey", borderRadius: "5px", margin: "20px"}}>
                                    <div style={{margin: "20px", fontSize: "20px"}}>
                                        {trial.trial_name}
                                    </div>
                                    <div style={{margin: "20px", fontSize: "20px"}}>
                                        {trial.summary}
                                    </div>
                                    <div style={{margin: "20px", fontSize: "20px", textAlign : 'right'}}>
                                        <Button type="button" className={classes.Btn} onClick={() => this.handleMoreInfo(trial.link)}>Find Out More</Button>
                                    </div>
                                </div>
                            ) 
                        })}
                    
                    </div>

                    <br />
                    <br />

                </div> }
                
                <div style={{border: "1px solid grey", borderRadius: "5px", margin: "20px", padding: "20px"}}>

                    <form autoComplete="off" onSubmit={handleSubmit(this.submit.bind(this))}>

                        <div className={classes.textBox} style={{ marginTop: '50px' }}>
                            <Button variant='contained' color='primary' className={classes.Email}>Email Me The Results</Button>
                        </div>
                        <FormText
                          name="email"
                          label="Email (john.doe@you.com"
                          width="90%"
                        />
                        <br />
                        <div style={{ margin: "25px" }}>
                            <h3>
                                Create an account to keep track of your symptoms and stay up-to-date with the latest Parkinsons treatment!
                            </h3>
                        </div>
                        <FormTextPassword
                            name="password1"
                            label="Password"
                            width="90%"
                        />
                        <br />
                        <Button type="submit" className={classes.Btn}>Create Account</Button>
                    </form>

                </div>

                {/* {this.props.userChoice.choice}
                {this.props.userInfo.age}
                {this.props.currentTreatments[0].name} 
                {this.props.previousTreatments[0].name}
                {this.props.sideEffects[0].name}
                {this.props.symptoms[0].short_name}  */}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("State : ", state);
    return {
        userChoice: state.userChoice,
        userInfo: state.user,
        currentTreatments: state.treatments.current_treatment,
        previousTreatments: state.treatments.previous_treatment,
        sideEffects: state.sideEffect,
        symptoms: state.symptom.sufferedSymptoms
    }
  };

const formData = {
    form: "CreateAccountForm" //unique identifier for this form 
}

Results = withRouter(Results)
Results = reduxForm(formData)(Results)
Results = withStyles(styles)(Results)
Results = connect(mapStateToProps, { submitTrialResult, submitMedicalResult })(Results)
export default Results