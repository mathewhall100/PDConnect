import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { resultStylesheet, PRIMARY_COLOR, SECONDARY_COLOR } from '../styles';

import assessImg from '../images/avatar/services/assess.png';
import focusImg from '../images/avatar/services/focus.png';
import learnImg from '../images/avatar/services/learn.png';
import monitorImg from '../images/avatar/services/monitor.png';
import treatmentImg from '../images/avatar/services/treatments.png';
import trialsImg from '../images/avatar/services/trials.png';
import { testApomorphine, testBotTox, testDBS, testDroxidopa, testDuopa, testNILO, testNuplazid, testRytary, testSPARK } from '../functions';
import { submitTrialResult, submitTreatmentResult } from '../actions/ResultAction';


class UserServices extends Component {

    state = {
        redirectAddress: '',
        treatmentResults: [],
        trialResults: [],
    }



    componentDidMount() {
        window.scroll(0, 0)
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

    handleBack = () => {
        this.setState({
            redirectAddress: '/'
        }, () => this.setState({ redirect: true }))
    }
    treatmentResults() {
        console.log("treatmentResults called")

        let treatmentResults = [];
        if(testBotTox(this.props.userNonMotorSy)){
            treatmentResults.push({
                medication_name: "Botulinum Toxin",
                summary: "Injections of a muscle paralysing agent (botulinum toxin) used to treat troublesome drooling and pedal dystonia",
                mediaLnk1: "https://www.youtube.com/embed/fWzRQassYjI",
                key: "bottox"
            })
        }
        if(testDBS(this.props.userAbout, this.props.userMotorSy, this.props.userNonMotorSy)){
            treatmentResults.push({
                medication_name: "Deep Brain Stimulation",
                summary: "Surgical procedure to treat fluctuating motor symptoms despite oral medication",
                mediaLnk1: "https://www.youtube.com/embed/2wvj7XJrQW4",
                key: "dbs"
            })
        }
        if(testRytary(this.props.userMeds, this.props.userMotorSy)){
            treatmentResults.push({
                medication_name: "Rytary",
                summary: "Slow release carbidopa/levodopa to treat early wear'off' symptoms",
                mediaLnk1: "https://www.youtube.com/embed/uPjnpKth40o",
                key: "rytary"
            })
        }

        if (testDuopa(this.props.userNonMotorSy, this.props.userMotorSy, this.props.userMeds)) {
            treatmentResults.push({
                medication_name: "Duopa",
                summary: "Infusion of carbidopa/levodopa directly into the intestine via a surgically placed feeding tube. Treats unpredictable motor fluctuations and early wear 'off'",
                mediaLnk1: "https://www.youtube.com/embed/GaCiXlXwBp8",
                key: "duopa"
            })
        }
        if (testDroxidopa(this.props.userNonMotorSy)) {
            treatmentResults.push({
                medication_name: "Droxidopa",
                summary: "Medication used to treat dizziness and lightheadedness on changing position or standing caused by parkinson disease.",
                mediaLnk1: "https://www.youtube.com/embed/4RTAAkA9cG8",
                key: "droxidopa"
            })
        }
        if (testNuplazid(this.props.userNonMotorSy)) {

            treatmentResults.push({
                medication_name: "Nuplazid",
                summary: "Treatment for hallucinations and delusions associated with Parkinson disease",
                mediaLnk1: "https://www.youtube.com/embed/ZDbxEZP2qDY",
                key: "nuplazid"
            })
        }
        if (testApomorphine(this.props.userMotorSy)) {
            treatmentResults.push({
                medication_name: "Apomorphine",
                summary: "Medication that is injected just under the skin to treat  sudden, unpredictable and early wear'off' symptoms.",
                mediaLnk1: "https://www.youtube.com/embed/4RTAAkA9cG8",
                key: "apomorph"
            })
        }

        console.log("treatmentResults: ", treatmentResults)
        this.props.submitTreatmentResult(treatmentResults);
        this.setState({ treatmentResults: treatmentResults })

    };
    trialResults() {
        console.log("trialResults called")
        let trialResults = [];

        if (testSPARK(this.props.userAbout, this.props.userMeds)) {
            trialResults.push({
                trial_name: "SPARK",
                summary: "The SPARK study is for people who have been recently diagnosed with Parkinson’s disease and are looking to take a proactive step in their care.",
                mediaLnk1: "https://www.youtube.com/embed/OpWugct99BI",
                key: "spark"
            })
        }

        if (testNILO(this.props.userAbout, this.props.userMeds)) {
            trialResults.push({
                trial_name: "NILO-PD",
                summary: "The NILO-PD study will investigate the safety and tolerability of nilotinib in stable patienst diagnosed with Parkinson disease for more than 5 years",
                mediaLnk1: "https://www.youtube.com/embed/OpWugct99BI",
                key: "nilo"
            })
        }

        console.log("trialResults: ", trialResults)
        this.props.submitTrialResult(trialResults);
        this.setState({ trialResults: trialResults })
    };

    render() {

        const { handleSubmit, classes } = this.props
        const {  } = this.state

        const RenderServiceListItem = (props) => {
            return (
                <div className={classes.serviceListBox} >
                    <Grid container spacing={8} >
                        <Grid item xs={12} sm={2}>
                            <img className={classes.serviceIcon} src={props.avatar} alt={props.header} />
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <span className={classes.serviceListHeader}>{props.header}</span>
                            <br />
                            <span className={classes.serviceListText}>{props.text}</span>
                        </Grid>
                    </Grid>
                </div>
            )
        }

        return (
            <div className={classes.root}>

               <br />

                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={8}>
                        <div className={classes.serviceMainContainer}>
                            <h1>Welcome to PD Connect</h1>
                            <br />
                            <h5>Based on your profile we have matched the following services. </h5>

                            <br />

                            <RenderServiceListItem avatar={treatmentImg} header="View treatments" text="We have found x treatments that may benefit you and to disucss with your doctor" color={PRIMARY_COLOR}/>
                            <RenderServiceListItem avatar={trialsImg} header="View clinical trials" text="We have matched you with x clinical trials currently recruiting volunteers" color={PRIMARY_COLOR}/>
                            <RenderServiceListItem avatar={focusImg} header="View focus groups" text="Ther are x focus groups looking for participants like you" color={PRIMARY_COLOR}/>
                            <RenderServiceListItem avatar={learnImg} header="Learn about your Parkinson disease" text="Knowledge articles aand videos tailored to you" color={PRIMARY_COLOR}/>
                            <hr className={classes.hr} />
                            <RenderServiceListItem avatar={monitorImg} header="Monitor my symptoms" text="Use theis site or our mobile app to monitor your symptoms" color={SECONDARY_COLOR}/>
                            <RenderServiceListItem avatar={assessImg} header="Assess my welllness" text="Complete a wellness questionnaire designed for Parkinson patients." color={SECONDARY_COLOR}/>

                        </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                    <br />

                    <div className={classes.serviceSideContainer}>
                        </div>
                    <div className={classes.serviceSideContainer}>
                        </div>


                    </Grid>
                </Grid>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    console.log("state ", state)
    return {
        accountResponse: state.accountResponse,
        userAbout: state.about,
        userADL: state.adl.ADL,
        userFamily: state.family.family,
        userMeds: state.meds.meds,
        userSurgery: state.surgery.surgery,
        userMotorSy: state.motorSy.motorSy,
        userNonMotorSy: state.nonMotorSy.nonMotorSy,
        creds: state.creds,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ submitTreatmentResult, submitTrialResult }, dispatch);
}

UserServices = withRouter(UserServices)
UserServices = withStyles(resultStylesheet)(UserServices)
UserServices = connect(mapStateToProps, mapDispatchToProps)(UserServices)
export default UserServices