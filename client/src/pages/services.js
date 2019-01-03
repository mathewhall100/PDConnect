import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Badge from '@material-ui/core/Badge'

import { resultStylesheet, PRIMARY_COLOR, SECONDARY_COLOR } from '../styles';
import SocMedBox from '../components/commons/socMedBox'
import assessImg from '../images/avatar/services/assess.png';
import focusImg from '../images/avatar/services/focus.png';
import learnImg from '../images/avatar/services/learn.png';
import monitorImg from '../images/avatar/services/monitor.png';
import treatmentImg from '../images/avatar/services/treatments.png';
import trialsImg from '../images/avatar/services/trials.png';
import { testApomorphine, testBotTox, testDBS, testDroxidopa, testDuopa, testNILO, testNuplazid, testRytary, testSPARK } from '../functions';
import { submitTrialResult, submitTreatmentResult, submitFocusGroupResult } from '../actions/ResultAction';


class UserServices extends Component {

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

    render() {

        const { classes } = this.props
        const { treatmentResults, trialResults, focusGroupResults } = this.state

        const beforeStyle = {
            display: 'table'
          };

          const afterStyle = {
            ...beforeStyle,
            clear: 'both'
          };

        const RenderServiceListItem = (props) => {
            return (
                <div className={classes.serviceListBox} onClick={() => this.handleServiceRedirect(props.redirectAddress)}>
                    <Grid container spacing={8} >
                        <Grid item xs={12} sm={2}>
                            <img className={classes.serviceIcon} src={props.avatar} alt={props.header} />
                           
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <span className={classes.serviceListHeader}>{props.header}</span> 
                            {props.badgeContent && <Badge className={classes.badge} badgeContent={props.badgeContent} color="primary"> 
                                <span> </span>
                            </Badge> }
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
                            <h1 style={{color: PRIMARY_COLOR}}>Thank you for sharing your profile with us.</h1>
                            <br />
                            <h5>Based on the information you entered, we have found the following services personalized to you:</h5>
                            <br />

                            <RenderServiceListItem
                                 avatar={treatmentImg} 
                                 header="View treatments" 
                                 badgeContent={`${treatmentResults.length}`} 
                                 text={`We have found ${treatmentResults.length > 0 ? treatmentResults.length : "no"} treatments that may benefit you and to disucss with your doctor`} 
                                 redirectAddress="/results:treatments" 
                            />

                            <RenderServiceListItem 
                                avatar={trialsImg} 
                                header="View clinical trials" 
                                badgeContent={`${trialResults.length}`} 
                                text={`We have matched you with ${trialResults.length > 0 ? trialResults.length : "no"} clinical trials currently recruiting volunteers`} 
                                redirectAddress="/results:trials" 
                            />
                            <RenderServiceListItem 
                                avatar={focusImg} 
                                header="View focus groups" 
                                badgeContent="0" 
                                text={`There are ${focusGroupResults.length > 0 ? focusGroupResults.length : "no"} focus groups looking for participants like you`} 
                                redirectAddress="/results:focusgroups" 
                            />
                            <RenderServiceListItem 
                                avatar={learnImg} 
                                header="Learn about your Parkinson disease"  
                                text="Knowledge articles aand videos tailored to you"
                             />

                            <hr className={classes.hr} />

                            <RenderServiceListItem 
                                avatar={monitorImg} 
                                header="Monitor my symptoms" 
                                text="Use this site or our mobile app to monitor your symptoms" 
                            />
                            <RenderServiceListItem 
                                avatar={assessImg} 
                                header="Assess my welllness" 
                                text="Complete a wellness questionnaire designed for Parkinson patients." 
                            />

                            <hr className={classes.hr} />

                        </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <br />
                        <SocMedBox title="Share this site: "/>
                        <br />
                        
                        <div className={classes.serviceSideContainer}>
                            <h3 style={{textAlign: "center", color: PRIMARY_COLOR}}>My Bookmarks</h3>
                            <hr className={classes.hr} />

                            <span style={beforeStyle}></span>
                            <h5 className={classes.serviceSideLink} onClick={() => this.handleServiceRedirect('/account/activity')}>View Bookmarks</h5>
                            <span style={afterStyle}></span>

                        </div>

                        <div className={classes.serviceSideContainer}>

                            <h3 style={{textAlign: "center", color: PRIMARY_COLOR}}>My Account</h3>
                            <hr className={classes.hr} />

                            <span style={beforeStyle}></span>
                            <h5 style={{float: "right", fontSize: "19px"}}>Bronze member</h5> 
                            <span style={afterStyle}></span>

                            <span style={beforeStyle}></span>
                            <h5 style={{float: "right", fontSize: "19px"}}>You have 100 connect points</h5> 
                            <span style={afterStyle}></span>

                            <hr style={{margin: "9px 0 13px 0"}}/>

                            <span style={beforeStyle}></span>
                            <h5 className={classes.serviceSideLink} onClick={() => this.handleServiceRedirect('/account/activity')}>View account</h5>
                            <span style={afterStyle}></span>

                            <span style={beforeStyle}></span>
                            <h5 className={classes.serviceSideLink} onClick={() => this.handleServiceRedirect('/account/earn')}>Earn points</h5>
                            <span style={afterStyle}></span>
                            
                        </div>

                        <div className={classes.serviceSideContainer}>

                            <h3 style={{textAlign: "center", color: PRIMARY_COLOR}}>My profile</h3>
                            <hr className={classes.hr} />

                            <span style={beforeStyle}></span>
                            <h5 style={{float: "right", fontSize: "19px"}}>Your profile is 70% complete</h5>
                            <span style={afterStyle}></span>

                            <span style={beforeStyle}></span>
                            <h5 style={{float: "right", fontSize: "19px"}}>Next update due: Dec 2018</h5>
                            <span style={afterStyle}></span>

                            <hr style={{margin: "9px 0 13px 0"}}/>

                            <span style={beforeStyle}></span>
                            <h5 className={classes.serviceSideLink} onClick={() => this.handleServiceRedirect('/profile')}>View profile </h5>
                            <span style={afterStyle}></span>

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
    return bindActionCreators({ submitTreatmentResult, submitTrialResult, submitFocusGroupResult }, dispatch);
}

UserServices = withRouter(UserServices)
UserServices = withStyles(resultStylesheet)(UserServices)
UserServices = connect(mapStateToProps, mapDispatchToProps)(UserServices)
export default UserServices