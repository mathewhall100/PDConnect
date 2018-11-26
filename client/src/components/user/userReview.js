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
                       {!showBox[props.number] && <span className={classes.profileBoxButton2} style={{float: "right"}} onClick={() => this.handleShowBox(props.number)}>REVIEW</span> }

                       {/* <Button type="button" className={classes.profileBoxButton} style={{float: "right"}} onClick={() => this.handleShowBox(props.number)}>
                            {showBox[props.number] ? "HIDE" : "VIEW" }
                        </Button> */}

                    </div>
            )
        }

        const RenderEditButton = (props) => {
            return (
                <section>
                    <hr className={classes.hr} />
                    <Link to={props.link} style={{textDecoration: "none"}}>
                        <span className={classes.profileBoxButton2}>EDIT</span> 
                    </Link>
                    <span className={classes.profileBoxButton2} onClick={() => this.handleShowBox(props.number)}>CLOSE</span> 
                    <br />
                    <br />
                </section>
            )
        }


        return (
            <section>
                <div className={classes.componentBox} style={{marginTop: "75px"}}>

                    <p className={classes.sectionTitle}>Please review your entries below and edit any that are incorrect. Then click 'CREATE MY PROFILE AND CONTINUE'. </p>

                    <RenderBoxHeader title="About me" number={0} />
                    {showBox[0] && <div className={classes.profileBox}>
                        {userAbout && userAbout.age ?
                            <ul>
                                <li style={{fontSize: "1.2rem", marginLeft: "20px"}}>{userAbout.age} years old {startCase(userAbout.sex)}</li> 
                                <li style={{fontSize: "1.2rem", marginLeft: "20px"}}>{userAbout.race}</li>
                                <li style={{marginLeft: "20px", fontSize: "1.2rem"}}>First diagnosed with Parkinson disease: {userAbout.yearDiagnosed}</li> 
                                <li style={{marginLeft: "20px", fontSize: "1.2rem"}}>Began treatment for Parkinson disease: {userAbout.yearTreatment}</li>
                                
                            </ul> 
                        : null }
                        <RenderEditButton link="/user/user_about" number={0}/>
                    </div> }

                    <br />

                    <RenderBoxHeader title="My day-to-day activities" number={1} />
                    {showBox[1] && <div className={classes.profileBox}>
                    {userADL ? 
                       <p style={{fontSize: "1.2rem"}}>{PDADLs.filter(adl => adl.key === userADL)[0].title}</p>  
                       : null }
                       <RenderEditButton link="/user/user_life" number={1}/>
                    </div> }

                    <br />

                    <RenderBoxHeader title="Relatives with Parkinson disease" number={2}  />  

                    {showBox[2] && <div className={classes.profileBox}>
                        {userFamily ? userFamily[0] !== "none" ? 
                            <ul>
                               {userFamily.map((item, index) => {
                                    return (
                                        <li style={{fontSize: "1.2rem", marginLeft: "20px"}} key={index}>A {item}</li>
                                    )
                                }) }
                            </ul> 
                            :
                            <p style={{fontSize: "1.2rem"}}>None that I know of.</p> 
                        : null }
                        <RenderEditButton link="/user/user_family" number={2}/>
                    </div> }

                    <br />
                    
                    <RenderBoxHeader title="My current medications for Parkinson disease" number={3} />
                    {showBox[3] && <div className={classes.profileBox}>
                        {userMeds ? userMeds.length > 0 ? 
                            <ul>
                                {userMeds.map((item, index) => {
                                   let med = meds.filter(med => med.key === item)[0].generic
                                    return (
                                        <li key={index} style={{fontSize: "1.2rem", marginLeft: "20px"}}>{med}</li>
                                    )
                                }) }
                            </ul>
                            :
                            <p style={{fontSize: "1.2rem"}}> I take no medications for Parkinson disease.</p>
                        : null }
                        <RenderEditButton link="/user/user_meds" number={3}/>
                    </div> }

                    <br />

                    <RenderBoxHeader title="Surgeries or procedures for Parkinson disease" number={4} />
                    {showBox[4] && <div className={classes.profileBox}>
                        {userSurgery ? userSurgery.length > 0 ?
                            <ul>
                                {userSurgery.map((item, index) => {
                                    let proc = procedures.filter(proc => proc.key === item)[0].procedure
                                    return (
                                        <li key={index} style={{fontSize: "1.2rem", marginLeft: "20px"}}>{proc}</li>
                                    )
                                }) }
                            </ul>
                            :
                            <p style={{fontSize: "1.2rem"}}>I havn't had any surgery or procedures for Parkinson disease.</p> 
                        : null }
                        <RenderEditButton link="/user/user_surgery"number={4}/>
                    </div> }

                    <br />

                    <RenderBoxHeader title="Current motor symptoms" number={5} />
                    {showBox[5] && <div className={classes.profileBox}>
                        {userMotorSy ? userMotorSy.length > 0 ?
                            <ul>
                                {userMotorSy.map((item, index) => {
                                    let symptom = motorSy.filter(sy => sy.key === item)[0].symptom
                                    return (
                                        <li key={index} style={{fontSize: "1.2rem", marginLeft: "20px"}}>{symptom}</li>
                                    )
                                }) }
                            </ul>
                            :
                            <p style={{fontSize: "1.2rem"}}>I didn't record any symptoms of Parkinson disease</p>
                        : null }
                        <RenderEditButton link="/user/user_motorsy" number={5}/>
                    </div> }

                    <br />

                    <RenderBoxHeader title="Current non-motor symptoms" number={6}/>
                    {showBox[6] && <div className={classes.profileBox}>
                        {userNonMotorSy ? userNonMotorSy.length > 0 ?
                            <ul>
                                {userNonMotorSy.map((item, index) => {
                                    let symptom = nonMotorSy.filter(sy => sy.key === item)[0].symptom
                                    return (
                                        <li key={index} style={{fontSize: "1.2rem", marginLeft: "20px"}}>{symptom}</li>
                                    )
                                }) }
                            </ul>
                            :
                            <p style={{fontSize: "1.2rem"}}>I didn't record any non-motor symptoms</p>
                        : null }
                        <RenderEditButton link="/user/user_nonmotorsy" number={6}/>
                    </div> }

                <br />
                <Button type="button" type="variant" className={classes.userNavButtonRight} onClick={() => this.handleCreateProfile()}>CREATE MY PROFILE AND CONTINUE</Button>

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