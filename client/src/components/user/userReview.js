import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startCase } from 'lodash'

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import {userStylesheet } from '../../styles';
import { PDADLs, meds, procedures, motorSy, nonMotorSy } from '../../constants'
import { updateStepperCount, submitReview } from '../../actions/index.js'



 class UserReview extends Component {

    componentDidMount() {
        window.scroll(0,0)
        this.props.updateStepperCount()
    }

    state = {
        showBox: [1],
        redirectAddress : '/user/user_account'
    }

    handleCreateProfile() {
        this.props.history.push(this.state.redirectAddress)
    }

    // handleShowBox = (index) => {
    //     let indexValue = null
    //     let tempArray = []
    //     indexValue = this.state.showBox[index]
    //     this.setState({ showBox: [] })
    //     tempArray[index] = !indexValue
    //     this.setState({ showBox: tempArray })
    // }

    handleShowBox = (index) => {
        let indexValue = null
        let tempArray = this.state.showBox
        indexValue = this.state.showBox[index]
        tempArray[index] = !indexValue
        this.setState({ showBox: tempArray })
    }

    redirectStuff = (url) => {
        this.props.submitReview(true);
        this.props.history.push(url);


    }
    render() {

        const { classes, userAbout, userFamily, userADL, userMeds, userSurgery, userMotorSy, userNonMotorSy} = this.props
        const { showBox } = this.state

        const RenderBoxHeader = (props) => {
            return (
                <div className={classes.profileSectionHeader}>
                       <span >{props.title}</span>  
                       <span className={classes.profileBoxButton} style={{float: "right", marginLeft: "15px"}}  onClick={() => { this.redirectStuff(props.link)}}>EDIT</span> 
                       <span className={classes.profileBoxButton} style={{float: "right"}} onClick={() => this.handleShowBox(props.number)}>{showBox[props.number] ? "HIDE" : "VIEW"}</span>  
                </div>
            )
        }

        return (
            <section>
                <div className={classes.componentBox} style={{marginTop: "75px"}}>

                    <p className={classes.sectionTitle}>Please check your entries below and edit any that are incorrect. Then click 'CREATE MY PROFILE AND CONTINUE'. </p>

                    <RenderBoxHeader title="About me" number={0} link="/user/user_about"/>
                    {showBox[0] && <div>
                        {userAbout && userAbout.age ?
                            <ul>
                                <li style={{marginLeft: "20px"}}>{userAbout.age} years old {startCase(userAbout.sex)}</li>
                                <li style={{marginLeft: "20px"}}>{userAbout.race}</li>
                                <li style={{marginLeft: "20px"}}>First diagnosed with Parkinson disease: {userAbout.yearDiagnosed}</li>
                                <li style={{marginLeft: "20px"}}>Began treatment for Parkinson disease: {userAbout.yearTreatment}</li>

                            </ul>
                        : null }
                    </div> } 

                    <RenderBoxHeader title="My day-to-day activities" number={1} link="/user/user_life" />
                    {showBox[1] && <div>
                        {userADL ?
                            <ul>
                                <li style={{marginLeft: "20px"}}>{PDADLs.filter(adl => adl.key === userADL)[0].title}</li>
                            </ul> 
                        : null }
                    </div> }

                    <RenderBoxHeader title="Relatives with Parkinson disease" number={2} link="/user/user_family" />
                    {showBox[2] && <div>
                        {userFamily ? userFamily[0] !== "none" ?
                            <ul>
                               {userFamily.map((item, index) => {
                                    return (
                                        <li style={{marginLeft: "20px"}} key={index}>A {item}</li>
                                    )
                                }) }
                            </ul>
                            :
                            <p>None that I know of.</p>
                        : null }
                    </div> }

                    <RenderBoxHeader title="My current medications for Parkinson disease" number={3} link="/user/user_meds" />
                    {showBox[3] && <div>
                        {userMeds ? userMeds.length > 0 ?
                            <ul>
                                {userMeds.map((item, index) => {
                                   let med = meds.filter(med => med.key === item)[0].generic
                                    return (
                                        <li key={index} style={{marginLeft: "20px"}}>{med}</li>
                                    )
                                }) }
                            </ul>
                            :
                            <p> I take no medications for Parkinson disease.</p>
                        : null }
                    </div> }

                    <RenderBoxHeader title="Surgeries or procedures for Parkinson disease" number={4} link="/user/user_surgery"/>
                    {showBox[4] && <div>
                        {userSurgery ? userSurgery.length > 0 ?
                            <ul>
                                {userSurgery.map((item, index) => {
                                    let proc = procedures.filter(pr => pr.key === item)[0].procedure
                                    return (
                                        <li key={index} style={{marginLeft: "20px"}}>{proc}</li>
                                    )
                                }) }
                            </ul>
                            :
                            <p>I havn't had any surgery or procedures for Parkinson disease.</p>
                        : null }
                    </div> }

                    <RenderBoxHeader title="Current motor symptoms" number={5} link="/user/user_motorsy"/>
                    {showBox[5] && <div>
                        {userMotorSy ? userMotorSy.length > 0 ?
                            <ul>
                                {userMotorSy.map((item, index) => {
                                    let symptom = motorSy.filter(sy => sy.key === item)[0].symptom
                                    return (
                                        <li key={index} style={{marginLeft: "20px"}}>{symptom}</li>
                                    )
                                }) }
                            </ul>
                            :
                            <p>I didn't record any symptoms of Parkinson disease</p>
                        : null }
                    </div> }

                    <RenderBoxHeader title="Current non-motor symptoms" number={6} link="/user/user_nonmotorsy"/>
                    {showBox[6] && <div>
                        {userNonMotorSy ? userNonMotorSy.length > 0 ?
                            <ul>
                                {userNonMotorSy.map((item, index) => {
                                    let symptom = nonMotorSy.filter(sy => sy.key === item)[0].symptom
                                    return (
                                        <li key={index} style={{marginLeft: "20px"}}>{symptom}</li>
                                    )
                                }) }
                            </ul>
                            :
                            <p>I didn't record any non-motor symptoms</p>
                        : null }
                    </div> }

                <br />
                <Button type="button" type="variant" className={classes.userNavButtonRight} onClick={() => this.handleCreateProfile()}>CREATE MY PROFILE AND CONTINUE</Button>

                </div>

            </section>

        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateStepperCount, submitReview }, dispatch);
}

const mapStateToProps = (state =>{
    console.log("state: ", state)
    return {
        userAbout: state.about,
        userADL: state.adl.adl,
        userFamily: state.family.family,
        userMeds: state.meds.meds,
        userSurgery: state.surgery.surgery,
        userMotorSy: state.motorSy.motorSy,
        userNonMotorSy: state.nonMotorSy.nonMotorSy,
        review : state.review,
    }
})

UserReview = withRouter(UserReview)
UserReview = withStyles(userStylesheet)(UserReview)
UserReview = connect(mapStateToProps, mapDispatchToProps)(UserReview)
export default UserReview