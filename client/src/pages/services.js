import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { resultStylesheet, PRIMARY_COLOR, SECONDARY_COLOR } from '../styles';
import SocMedBox from '../components/commons/socMedBox'

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

       //  this.treatmentResults()
       // this.trialResults()
    }

    handleServiceRedirect = (redirectAddress) => {
        console.log("service: ", redirectAddress)
        this.props.history.push(redirectAddress)

    }

    render() {

        const { handleSubmit, classes } = this.props
        const { listItemHover } = this.state

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
                            <h1 style={{color: PRIMARY_COLOR}}>Welcome to PD Connect</h1>
                            <br />
                            <h5>Based on your profile you have matched the following services. </h5>
                            <br />

                            <RenderServiceListItem avatar={treatmentImg} header="View treatments" text="We have found x treatments that may benefit you and to disucss with your doctor" redirectAddress="/results:treatments" />
                            <RenderServiceListItem avatar={trialsImg} header="View clinical trials" text="We have matched you with x clinical trials currently recruiting volunteers" redirectAddress="/results:trials" />
                            <RenderServiceListItem avatar={focusImg} header="View focus groups" text="Ther are x focus groups looking for participants like you" redirectAddress="/results:focusgroups" />
                            <RenderServiceListItem avatar={learnImg} header="Learn about your Parkinson disease" text="Knowledge articles aand videos tailored to you" />
                            <hr className={classes.hr} />
                            <RenderServiceListItem avatar={monitorImg} header="Monitor my symptoms" text="Use theis site or our mobile app to monitor your symptoms" />
                            <RenderServiceListItem avatar={assessImg} header="Assess my welllness" text="Complete a wellness questionnaire designed for Parkinson patients." />
                            <hr className={classes.hr} />
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                    <br /><br />
                    <SocMedBox />

                    <div className={classes.serviceSideContainer}>
                        <h3 style={{textAlign: "center", color: PRIMARY_COLOR}}>My Account</h3>
                        <hr className={classes.hr} />
                        <span style={beforeStyle}></span><h5 style={{float: "right", fontSize: "19px"}}>Bronze member</h5> <span style={afterStyle}></span> 
                        <span style={beforeStyle}></span><h5 style={{float: "right", fontSize: "19px"}}>You have 100 connect points</h5> <span style={afterStyle}></span> 
                        <hr style={{margin: "9px 0 17px 0"}}/>
                        <span style={beforeStyle}></span><h5 style={{float: "right", fontSize: "19px"}}><a className={classes.serviceSideAnchor}href="">View my activity</a></h5><span style={afterStyle}></span> 
                        <span style={beforeStyle}></span><h5 style={{float: "right", fontSize: "19px"}}><a className={classes.serviceSideAnchor}href="">Edit account details</a></h5> <span style={afterStyle}></span>
                        <span style={beforeStyle}></span><h5 style={{float: "right", fontSize: "19px"}}><a className={classes.serviceSideAnchor}href="">Earn points</a></h5> <span style={afterStyle}></span> 
                    </div>

                    <div className={classes.serviceSideContainer}>
                        <h3 style={{textAlign: "center", color: PRIMARY_COLOR}}>My profile</h3>
                        <hr className={classes.hr} />
                            <span style={beforeStyle}></span><h5 style={{float: "right", fontSize: "19px"}}>Your profile is 70% complete</h5> <span style={afterStyle}></span> 
                            <span style={beforeStyle}></span><h5 style={{float: "right", fontSize: "19px"}}>Next update due: Dec 2018</h5> <span style={afterStyle}></span> 
                            <hr style={{margin: "9px 0 17px 0"}}/>
                            <span style={beforeStyle}></span><h5 style={{float: "right", fontSize: "19px"}}><a className={classes.serviceSideAnchor}href="">View & edit profile information</a></h5> <span style={afterStyle}></span> 
                            <span style={beforeStyle}></span><h5 style={{float: "right", fontSize: "19px"}}><a className={classes.serviceSideAnchor}href="">Upgrade your profile</a></h5> <span style={afterStyle}></span> 
            
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