import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Redirect} from 'react-router-dom';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';

import ResultsBar from '../components/commons/resultsBar'
import ResultTabsWithBadge from '../components/commons/resultTabsWithBadge'
import ResultPrintButton from '../components/commons/resultPrintBtn'
import ResultMainSubTitle from '../components/commons/resultMainSubTitle'
import EmailBox from '../components/commons/emailBox'
import AccountBox from '../components/commons/accountBox'
import SocMedBox from '../components/commons/socMedBox'
import { submitTrialResult, submitTreatmentResult } from '../actions/ResultAction';
import { resultStylesheet } from '../styles';


class Results extends Component {

    state = {
        tabSelected: 0,
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
                mediaLnk1: "https://www.youtube.com/embed/fWzRQassYjI",
                key: "bottox"
            })
        }
        if (this.testDBS() === true) {
            treatmentResults.push({
                medication_name: "Deep Brain Stimulation",
                summary: "Surgical procedure to treat fluctuating motor symptoms despite oral medication",
                mediaLnk1: "https://www.youtube.com/embed/2wvj7XJrQW4",
                key: "dbs"
            })
        }
        if (this.testRytary() === true) {
            treatmentResults.push({
                medication_name: "Rytary",
                summary: "Slow release carbidopa/levodopa to treat early wear'off' symptoms",
                mediaLnk1: "https://www.youtube.com/embed/uPjnpKth40o",
                key: "rytary"
            })
        }
        if (this.testDuopa() === true) {
            treatmentResults.push({
                medication_name: "Duopa",
                summary: "Infusion of carbidopa/levodopa directly into the intestine via a surgically placed feeding tube. Treats unpredictable motor fluctuations and early wear 'off'",
                mediaLnk1: "https://www.youtube.com/embed/GaCiXlXwBp8",
                key: "duopa"
            })
        }
        if (this.testDroxidopa() === true) {
            treatmentResults.push({
                medication_name: "Droxidopa",
                summary: "Medication used to treat dizziness and lightheadedness on changing position or standing caused by parkinson disease.",
                mediaLnk1: "https://www.youtube.com/embed/4RTAAkA9cG8",
                key: "droxidopa"
            })
        }
        if (this.testNuplazid() === true) {

            treatmentResults.push({
                medication_name: "Nuplazid",
                summary: "Treatment for hallucinations and delusions associated with Parkinson disease",
                mediaLnk1: "https://www.youtube.com/embed/ZDbxEZP2qDY",
                key: "nuplazid"
            })
        }
       if (this.testApomorphine() === true) {
            treatmentResults.push({
                medication_name: "Apomorphine",
                summary: "Medication that is injected just under the skin to treat  sudden, unpredictable and early wear'off' symptoms.",
                mediaLnk1: "https://www.youtube.com/embed/4RTAAkA9cG8",
                key: "apomorph"
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
                mediaLnk1: "https://www.youtube.com/embed/OpWugct99BI",
                key: "spark"
            })
        }

        if (this.testNILO() === true) {
            trialResults.push({
                trial_name: "NILO-PD",
                summary: "The NILO-PD study will investigate the safety and tolerability of nilotinib in stable patienst diagnosed with Parkinson disease for more than 5 years",
                mediaLnk1: "https://www.youtube.com/embed/OpWugct99BI",
                key: "nilo"
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

    handleMoreInfo(type, item) {
        console.log(type, " ", item)
        this.setState({item: `${type}:${item}`}, () => this.setState({redirect: true}) )
    }

    handleChange = (event, value) => {
        this.setState({ value });
      };

    handleChangeIndex = index => {
        this.setState({ value: index });
      };

    handleTabClick = (tab) => {
        console.log("tab: ", tab)
        this.setState({tabSelected: tab})
    }


    render() {

        const { handleSubmit, classes } = this.props
        const { redirect, treatmentResults, trialResults, tabSelected, item } = this.state


        if (redirect) {
            const url = `/${item}`;
            console.log("URL: ", url)
            console.log("redirect to: " + url);
            return<Redirect to={url} />;
        }

        const RenderTreatments= () => {
            return (
                <div className={classes.resultContainer}>
                    <ResultPrintButton /><br />
                    <h1 className={classes.title}>Treatments to discuss with your doctor</h1>
                    <div>
                        {treatmentResults.map((treatment, index) => {
                            return (
                                <div key={index} className={classes.resultBox}>
                                    <Grid container spacing={8}>
                                        <Grid item xs={12} sm={12} md={7}>
                                            <div className={classes.resultTextBox}>
                                                <div className={classes.resultTitle}>
                                                    {treatment.medication_name}
                                                </div>
                                                <div className={classes.resultText}>
                                                    {treatment.summary}
                                                </div>
                                            </div>
                                            <div style={{margin: "10px 20px 20px 20px"}}>
                                                <Button type="button" className={classes.button} onClick={() => this.handleMoreInfo("treatment", treatment.key)}>Find Out More</Button>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={5}>
                                            <iframe title={index} width="240" height="180" style={{marginTop: "26px", marginLeft: "20px"}}
                                                src={treatment.mediaLnk1}>
                                            </iframe>
                                        </Grid>
                                    </Grid>
                                </div>
                            )
                        }) }
                    </div>
                    <br />
                </div>
            )
        }


        const RenderTrials= () => {
            return (
                <div className={classes.resultContainer}>
                    <ResultPrintButton /><br />
                    <h1 className={classes.title}>Clinical Trials you might volunteer for</h1>
                    <div>
                        {trialResults.map((trial, index) => {
                            return (
                                <div key={index} className={classes.resultBox}>
                                    <Grid container spacing={8}>
                                        <Grid item xs={12} sm={12} md={7}>
                                            <div className={classes.resultTextBox}>
                                                <div className={classes.resultTitle}>
                                                    {trial.trial_name}
                                                </div>
                                                <div className={classes.resultText}>
                                                    {trial.summary}
                                                </div>
                                            </div>
                                            <div style={{margin: "10px 20px 20px 20px"}}>
                                                <Button type="button" className={classes.button} onClick={() => this.handleMoreInfo("trial", trial.key)}>Find Out More</Button>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={5}>
                                            <iframe width="240" height="180" style={{marginTop: "26px", marginLeft: "20px"}}
                                                src={trial.mediaLnk1}>
                                            </iframe>
                                        </Grid>
                                    </Grid>
                                </div>
                            )
                        })}
                    </div>
                    <br />
                </div>
            )
        }

        const RenderFocusGroups= () => {
            return (
                <div className={classes.resultContainer}>
                    <ResultPrintButton /><br />
                    <h1 className={classes.title}>Focus Groups you might participate in</h1>
                    <ResultMainSubTitle text={`There are no focus groups suitable for you at present.`} />`
                    <br />
                </div>
            )
        }

        return (
            <div className={classes.root}>

                <ResultsBar redirectAddress = "/results" />

                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={8}>

                    <ResultTabsWithBadge
                        tabs={[
                            {text: "TREATMENTS", badgeContent: treatmentResults.length},
                            {text: "TRIALS", badgeContent: trialResults.length},
                            {text: "FOCUS GROUPS", badgeContent: 0},
                        ]}
                        handleTabClick={this.handleTabClick}
                    />
                    {tabSelected === 0 && <RenderTreatments /> }
                    {tabSelected === 1 && <RenderTrials /> }
                    {tabSelected === 2 && <RenderFocusGroups /> }
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <br />

                        <EmailBox />

                        <AccountBox />

                        <SocMedBox />

                    </Grid>
                </Grid>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ submitTreatmentResult, submitTrialResult }, dispatch);
}

const mapStateToProps = (state) => {
    console.log("State : ", state);
    return {
        userAbout: state.about,
        userADL: state.adl.ADL,
        userFamily: state.family.family,
        userMeds: state.meds.meds,
        userSurgery: state.surgery.surgery,
        userMotorSy: state.motorSy.motorSy,
        userNonMotorSy: state.nonMotorSy.nonMotorSy,
    }
  };


Results = withRouter(Results)
Results = withStyles(resultStylesheet)(Results)
Results = connect(mapStateToProps, mapDispatchToProps)(Results)
export default Results