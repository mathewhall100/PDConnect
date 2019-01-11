import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startCase } from 'lodash'

import { withStyles } from '@material-ui/core/styles';
import ArrowUp from '@material-ui/icons/ExpandLess';
import ArrowDown from '@material-ui/icons/ExpandMore';

import { SECONDARY_COLOR, WARNING_COLOR } from '../../themes';
import { PDADLs, meds, procedures, motorSy, nonMotorSy } from '../../constants'
import { updateStepperCount, submitReview } from '../../actions/index.js'
import UserNavButton from '../buttons/userNavButton'
import UserSectionHead from '../texts/userSectionHead'

const styles = () => ({
    profileSectionHeader: {
        lineHeight: 2,
        fontSize: "17px",
        fontWeight: "bold",
    },
    profileEditBtn: {
        float: "right", 
        backgroundColor: "white",
        color: 'black',
        fontWeight: "bold",
        fontSize: "14px",
        marginLeft: "10px",
        '&:hover': {
            color: SECONDARY_COLOR,
            cursor : 'pointer',
        }
    },
    profileArrowBtn: {
        float: "right"
    },
    profileArrowIcon: {
        fontSize: "32"
    },
    li: {
        marginLeft: "20px"
    }
})


 class UserReview extends Component {

    componentDidMount() {
        window.scroll(0,0)
        this.props.updateStepperCount()
    }

    state = {
        showBox: [1],
        noAgree: false,
        redirectAddress : '/user/user_account'
    }

    handleCreateProfile = () => {
        if (this.props.stepper.agree) {
            this.props.history.push(this.state.redirectAddress)
        }
        else {this.setState({noAgree: true}) }
    }

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

        const { classes, userAbout, userFamily, userADL, userMeds, userSurgery, userMotorSy, userNonMotorSy, stepper: { agree } } = this.props
        const { showBox, noAgree } = this.state

        const RenderBoxHeader = props => 
                <div>
                    <span className={classes.profileSectionHeader}>{props.title}</span>
                    <span className={classes.profileEditBtn} onClick={() => { this.redirectStuff(props.link)}}>
                        EDIT 
                    </span>
                    <span className={classes.profileArrowBtn} onClick={() => this.handleShowBox(props.number)}>
                        {showBox[props.number] ? 
                            <ArrowUp className={classes.profileArrowBtn} /> 
                        : 
                            <ArrowDown className={classes.profileArrowBtn} /> }
                    </span>
                </div>

        return (
            <React.Fragment>

                <UserSectionHead text="Please check your entries below and click 'edit' to make changes. Then click 'CREATE MY PROFILE AND CONTINUE'." /><br />

                <RenderBoxHeader title="About me" number={0} link="/user/user_about"/>
                {showBox[0] && <div>
                    {userAbout && userAbout.age ?
                        <ul>
                            <li>{userAbout.age} years old {startCase(userAbout.sex)}</li>
                            <li>{userAbout.race}</li>
                            <li>First diagnosed with Parkinson disease: {userAbout.yearDiagnosed}</li>
                            <li>Began treatment for Parkinson disease: {userAbout.yearTreatment}</li>
                        </ul>
                    : null }
                </div> }

                <RenderBoxHeader title="Relatives with Parkinson disease" number={2} link="/user/user_family" />
                {showBox[2] && <div>
                    {userFamily ? userFamily[0] !== "none" ?
                        <ul>
                            {userFamily.map((item, index) => {
                                return (
                                    <li key={index}>A {item}</li>
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
                                    <li key={index} >{med}</li>
                                )
                            }) }
                        </ul>
                        :
                        <p> I take no medications for Parkinson disease.</p>
                    : null }
                </div> }

                <RenderBoxHeader title="Surgeries or procedures for Parkinson disease" number={4} link="/user/user_surgery" />
                {showBox[4] && <div>
                    {userSurgery ? userSurgery.length > 0 ?
                        <ul>
                            {userSurgery.map((item, index) => {
                                let proc = procedures.filter(pr => pr.key === item)[0].procedure
                                return (
                                    <li key={index} >{proc}</li>
                                )
                            }) }
                        </ul>
                        :
                        <p>I havn't had any surgery or procedures for Parkinson disease.</p>
                    : null }
                </div> }

                <RenderBoxHeader title="My day-to-day activities" number={1} link="/user/user_life" />
                {showBox[1] && <div>
                    {userADL ?
                        <ul>
                            <li>{PDADLs.filter(adl => adl.key === userADL)[0].title.slice(3)}</li>
                        </ul>
                    : null }
                </div> }

                <RenderBoxHeader title="Current motor symptoms" number={5} link="/user/user_motorsy"/>
                {showBox[5] && <div>
                    {userMotorSy ? userMotorSy.length > 0 ?
                        <ul>
                            {userMotorSy.map((item, index) => {
                                let symptom = motorSy.filter(sy => sy.key === item)[0].symptom
                                return (
                                    <li key={index} >{symptom}</li>
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
                                    <li key={index} >{symptom}</li>
                                )
                            }) }
                        </ul>
                        :
                        <p>I didn't record any non-motor symptoms</p>
                    : null }
                </div> }

                <br /><br ></br>
                <UserNavButton type="button" width="100%" text="CREATE MY PROFILE AND CONTINUE" handleBtn={this.handleCreateProfile} />
                
                <br /><br />
                {agree === false ? <span style={{color: noAgree ? WARNING_COLOR : null, fontWeight: noAgree ? "bold" : null}}>*You need to agree to the term and condition in order to continue.</span>: null}

             </React.Fragment>
        )
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
        stepper : state.stepper,
    }
})

UserReview = withRouter(UserReview)
UserReview = withStyles(styles)(UserReview)
UserReview = connect(mapStateToProps, mapDispatchToProps)(UserReview)
export default UserReview