import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import {userStylesheet } from '../../styles';
import { PDADLs, meds, procedures, motorSy, nonMotorSy } from '../../constants'
import { updateStepperCount } from '../../actions/index.js'



 class UserReview extends Component {

    componentDidMount() {
        window.scroll(0,0)
        this.props.updateStepperCount()
    }

    state = {
        showBox: [null],
        redirectAddress : '/user/user_account'
    }  

    handleCreateProfile() {
        // check to see if checkbox signed - if not display modal & do not save
        // save checkbox 
        this.props.history.push(this.state.redirectAddress)
    }

    handleShowBox = (index) => {
        let indexValue = null
        let tempArray = []
        indexValue = this.state.showBox[index]
        this.setState({ showBox: [] })
        tempArray[index] = !indexValue
        this.setState({ showBox: tempArray })
    }

    handleNext = () => {
        
    }
    
    render() {

        const { classes, userAbout, userFamily, userADL, userMeds, userSurgery, userMotorSy, userNonMotorSy} = this.props
        const { showBox } = this.state

        const RenderBoxHeader = (props) => {
            return (
                <div className={classes.profileSectionHeader}>
                       <span style={{position: "relative", top: "5px"}}>{props.title}</span>
                       <Button type="button" className={classes.profileBoxButton} style={{float: "right"}} onClick={() => this.handleShowBox(props.number)}>
                            {showBox[props.number] ? "HIDE" : "VIEW" }
                        </Button>
                    </div>
            )
        }

        const RenderEditButton = (props) => {
            return (
                <section>
                    <hr className={classes.hr} />
                    <Link to={props.link} style={{textDecoration: "none"}}><Button type="button" className={classes.profileBoxButton}>EDIT</Button></Link>
                    <br />
                    <br />
                </section>
            )
        }

        return (
            <section>
                <div className={classes.componentBox} style={{marginTop: "75px"}}>

                    <p className={classes.sectionTitle}>Review your answers and edit if required.Then click 'CREATE PROFILE AND CONTINUE'</p>

                    <RenderBoxHeader title="About me" number={0} />
                    {showBox[0] && <div className={classes.profileBox}>
                        <p>Age: {userAbout.age}</p> 
                        <p>Sex: {userAbout.sex}</p>
                        <p>Race/Ethnicity {userAbout.race}</p>
                        <p>Diagnosed with Parkinson disease: {userAbout.yearDiagnosed}</p> 
                        <p>Started treatment for Parkinson disease: {userAbout.yearTreatment}</p>
                        <RenderEditButton link="/user/user_about" />
                    </div> }

                    <br />

                    <RenderBoxHeader title="My day-to-day activities" number={1} />
                    {showBox[1] && <div className={classes.profileBox}>
                    {userADL ? 
                       <p>{PDADLs.filter(adl => adl.key === userADL)[0].title} </p>  
                       : null }
                       <RenderEditButton link="/user/user_life" />
                    </div> }

                    <br />

                    <RenderBoxHeader title="My family history" number={2}  />  
                    {showBox[2] && <div className={classes.profileBox}>
                        {userFamily ? userFamily.length > 0 ? 
                            <div>
                                <p>Family members also affected by Parkinson disease: </p>
                                {userFamily.map((item, index) => {
                                    return (
                                        <p key={index}>{index === userFamily.length-1 ? item : `${item}, ` }</p>
                                    )  
                                }) }
                            </div> 
                            :
                            <p>I have no family members with Parkinson disease.</p>
                        : null }
                        <RenderEditButton link="/user/user_family" />
                    </div> }

                    <br />
                    
                    <RenderBoxHeader title="My medications" number={3} />
                    {showBox[3] && <div className={classes.profileBox}>
                        {userMeds ? userMeds.length > 0 ? 
                            <div>
                                <p>My current medications for Parkinson disease are: </p>
                                {userMeds.map((item, index) => {
                                   let med = meds.filter(med => med.key === item)[0].generic
                                    return (
                                        <p key={index}>{med}</p>
                                    )
                                }) }
                            </div>
                            :
                            <p> I take no medications for Parkinson disease.</p>
                        : null }
                        <RenderEditButton link="/user/user_meds" />
                    </div> }

                    <br />

                    <RenderBoxHeader title="My surgeries and procedures" number={4} />
                    {showBox[4] && <div className={classes.profileBox}>
                        {userSurgery ? userSurgery.length > 0 ?
                            <div>
                                <p>I have had the following surgeries or procedures for Parkinson disease: </p>
                                {userSurgery.map((item, index) => {
                                    let proc = procedures.filter(proc => proc.key === item)[0].procedure
                                    return (
                                        <p key={index}>{proc}</p>
                                    )
                                }) }
                            </div>
                            :
                            <p>I havn't had any surgery or procedures for Parkinson disease.</p> 
                        : null }
                        <RenderEditButton link="/user/user_surgery" />
                    </div> }

                    <br />

                    <RenderBoxHeader title="My symptoms (motor)" number={5} />
                    {showBox[5] && <div className={classes.profileBox}>
                        {userMotorSy ? userMotorSy.length > 0 ?
                        <div>
                            <p>Symptoms that have bothered me over the past month: </p>
                            {userMotorSy.map((item, index) => {
                                let symptom = motorSy.filter(sy => sy.key === item)[0].symptom
                                return (
                                    <p key={index}>{symptom}</p>
                                )
                            }) }
                            </div>
                            :
                            <p>I didn't record any symptoms of Parkinson disease</p>
                        : null }
                        <RenderEditButton link="/user/user_motorsy" />
                    </div> }

                    <br />

                    <RenderBoxHeader title="My symptoms (non-motor)" number={6}/>
                    {showBox[6] && <div className={classes.profileBox}>
                        {userNonMotorSy ? userNonMotorSy.length > 0 ?
                        <div>
                            <p>Other symptoms that have bothered me are: </p>
                            {userNonMotorSy.map((item, index) => {
                                let symptom = nonMotorSy.filter(sy => sy.key === item)[0].symptom
                                return (
                                    <p key={index}>{symptom}</p>
                                )
                            }) }
                            </div>
                            :
                            <p>I didn't record any furtehr symptoms</p>
                        : null }
                        <RenderEditButton link="/user/user_nonmotorsy" />
                    </div> }

                <br />
                <Button type="button" type="variant" className={classes.userNavButtonRight} onClick={() => this.handleCreateProfile()}>CREATE PROFILE AND CONTINUE</Button>

                </div>
                
            </section>

        );
    }
}


function mapDispatchToProps(dispatch) {
     return bindActionCreators({ updateStepperCount }, dispatch);
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
    }
})

UserReview = withRouter(UserReview)
UserReview = withStyles(userStylesheet)(UserReview)
UserReview = connect(mapStateToProps, mapDispatchToProps)(UserReview)
export default UserReview