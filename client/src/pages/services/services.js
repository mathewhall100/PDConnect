import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Badge from '@material-ui/core/Badge'


import Sidebar from '../../components/sidebar/sidebar'
import assessImg from '../../images/avatar/services/assess.png';
import focusImg from '../../images/avatar/services/focus.png';
import learnImg from '../../images/avatar/services/learn.png';
import monitorImg from '../../images/avatar/services/monitor.png';
import treatmentImg from '../../images/avatar/services/treatments.png';
import trialsImg from '../../images/avatar/services/trials.png';
import { testApomorphine, testBotTox, testDBS, testDroxidopa, testDuopa, testNILO, testNuplazid, testRytary, testSPARK } from '../../functions/logicFunctions';
import { submitTrialResult, submitTreatmentResult, submitFocusGroupResult } from '../../actions/ResultAction';
import { serviceStyles } from './serviceStyles.js' 
import Hr from '../../components/commons/Hr'


class Services extends Component {

    state = {
        redirectAddress: '',
        treatmentResults: [],
        trialResults: [],
        focusGroupResults: []
    }

    componentDidMount() {
        window.scroll(0, 0)
        this.fetchTreatmentResults()
        this.fetchTrialResults()
        this.fetchFocusGroupResults()
    }

    handleServiceRedirect = (redirectAddress) => {
        console.log("service: ", redirectAddress)
        this.props.history.push(redirectAddress)

    }

    fetchTreatmentResults() {
        console.log("treatmentResults called")

        let treatmentResults = [];
        if (testBotTox(this.props.userNonMotorSy)) {
            treatmentResults.push({
                medication_name: "Botulinum Toxin",
                summary: "Injections of a muscle paralysing agent (botulinum toxin) used to treat troublesome drooling and pedal dystonia",
                mediaLnk1: "https://www.youtube.com/embed/fWzRQassYjI",
                key: "bottox"
            })
        }
        if (testDBS(this.props.userAbout, this.props.userMotorSy, this.props.userNonMotorSy)) {
            treatmentResults.push({
                medication_name: "Deep Brain Stimulation",
                summary: "Surgical procedure to treat fluctuating motor symptoms despite oral medication",
                mediaLnk1: "https://www.youtube.com/embed/2wvj7XJrQW4",
                key: "dbs"
            })
        }
        if (testRytary(this.props.userMeds, this.props.userMotorSy)) {
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
                mediaLnk1: "https://www.youtube.com/embed/tpvxz6wbjVY",
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

    fetchTrialResults() {
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

    fetchFocusGroupResults() {
        console.log("focusgroupResults called")
        let focusGroupResults = [];

        // logic here

        console.log("focusGroupResults: ", focusGroupResults)
        this.props.submitFocusGroupResult(focusGroupResults);
        this.setState({ focusGroupResults: focusGroupResults })
    }

    getText = (start, number, end) => {
        let text = start.concat(" ").concat(number ? number : "no").concat(" " + end)
        return text
    }

    render() {

        const { classes } = this.props
        const { treatmentResults, trialResults, focusGroupResults } = this.state

        const RenderServiceListItem = (props) => {
            const { index, avatar, header, badgeContent, text, redirectAddress } = props
            return (
                <React.Fragment>

                    <div className={classes.serviceListBox} onClick={() => this.handleServiceRedirect(redirectAddress)}>
                        <Grid container spacing={8} >

                            <Grid item xs={12} sm={2}>
                                <img className={classes.serviceIcon} src={avatar} alt={header} />
                            </Grid>

                            <Grid item xs={12} sm={10}>
                                <span className={classes.serviceListHeader}>{header}</span> 
                                {badgeContent && <Badge className={classes.badge} badgeContent={badgeContent} color="primary"> 
                                    <span> </span>
                                </Badge> }
                                <br />
                                <span className={classes.serviceListText}>{text}</span>
                            </Grid>

                        </Grid>
                    </div>

                    {HrPosn.includes(index) ? <Hr /> : null }

                </React.Fragment>
            )
        }

        const serviceList = [
            {avatar: treatmentImg, header: "View treatments",  badgeContent: `${treatmentResults.length}` , text: this.getText("We have found", treatmentResults.length, "treatments that may benefit you and to discuss with your doctor"), redirectAddress: "/results:treatments" },
            {avatar: trialsImg, header: "View clinical trials",  badgeContent: `${trialResults.length}` , text: this.getText("We have matched you with", trialResults.length, "clinical trials currently recruiting volunteers"), redirectAddress: "/results:trials" },
            {avatar: focusImg, header: "View focus groups",  badgeContent: "0" , text: this.getText("There are", focusGroupResults.length, "focus groups looking for participants like you"), redirectAddress: "/results:focusgroups" },
            {avatar: learnImg, header: "Learn about your Parkinson disease",  badgeContent: "" , text: "Knowledge articles aand videos tailored to you", redirectAddress: "/services" },
            {avatar: monitorImg, header: "Monitor my symptoms",  badgeContent: "" , text: "Use this site or our mobile app to monitor your symptoms", redirectAddress: "/services" },
            {avatar: assessImg, header: "Assess my wellness",  badgeContent: "" , text: "Complete a wellness questionnaire designed for Parkinson patients." , redirectAddress: "/services" }
        ]

        const HrPosn = [3, 5]

        // Services component return
        return (
            <div className={classes.servicesRoot}>

               <br />

                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={8}>
                        <div className={classes.serviceMainContainer}>

                            <h1 className={classes.servicePageTitle}>Thank you for sharing your profile with us.</h1> <br />
                           
                            <h5>Based on the information you entered, we have found the following services personalized to you:</h5>

                            { serviceList.map((service, index) => {
                                return (
                                    <RenderServiceListItem
                                        key={index}
                                        index={index}
                                        avatar={service.avatar} 
                                        header={service.header}
                                        badgeContent={service.badgeContent}
                                        text={service.text} 
                                        redirectAddress={service.redirectAddress}
                                    />
                                )
                            }) }

                        </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>

                        <Sidebar />

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
    return bindActionCreators({ submitTreatmentResult, submitTrialResult, submitFocusGroupResult }, dispatch);
}

Services = withRouter(Services)
Services = withStyles(serviceStyles)(Services)
Services = connect(mapStateToProps, mapDispatchToProps)(Services)
export default Services