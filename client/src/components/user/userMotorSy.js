import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close';

import { userComponentStyles } from './userComponentStyles';
import {QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR, QUESTION_BUTTON_ACTIVE_TERTIARY_COLOR, QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR } from '../../themes';
import {updateStepperCount, submitUserMotorSy, submitReview } from '../../actions/index.js'
import QuestionButtonIcons from '../commons/userQuestionButtonIcons'
import { motorSy } from '../../constants'
import BtnPlusModal from '../commons/buttonPlusModal'
import UserNavButton from '../buttons/userNavButton'
import UserSectionHead from '../texts/userSectionHead'
import Hr from '../commons/userHr'

const MOTOR_FLUCT_KEYS = ["earlyoff", "suddenoff", "morningbrady", "freezing"]


 class UserMotorSy extends Component {

    state = {
        answerArray: [],
        answerTrack: [],
        displaySub: false,
        redirectAddress : '/user/user_nonmotorsy',
    }

    componentDidMount() {
        window.scroll(0,0)
        this.props.updateStepperCount()
        const index = this.props.userTrack
        
        if (index) { this.setState({
            answerTrack: index,
            answerArray: this.props.userMotorSy,
            displaySub: this.props.userMotorSy.find(elem => elem==="motorfluct") ? true : false
            })
        }
    }

    handleNext = () => {
        console.log("submit - meds:, ", this.state.answerArray)
        this.props.submitUserMotorSy(this.state.answerArray, this.state.answerTrack)
        if (this.props.review.redirect) {
            this.props.submitReview(false);
            this.props.history.push('/user/user_review');
        } else {
            this.props.history.push(this.state.redirectAddress)
        }
    }

    handleAnswerSelect = (index, choice, key) => {
        console.log("handleanswerselect : ", choice, " + ", index, " + ", key)
        let tempTrack = this.state.answerTrack
        let tempArray = this.state.answerArray
        let ind = tempArray.indexOf(key)
        if (choice === "ns" || choice === "no") {
            tempTrack[index] = choice  
            ind >= 0 ? tempArray.splice(ind, 1) : null
            // if 'ns', option to open help modal would go here
            if (key === "motorfluct") {
                MOTOR_FLUCT_KEYS.map(k => tempArray.indexOf(k) >= 0 ? tempArray.splice(tempArray.indexOf(k), 1) : null ) 
                tempTrack.fill(null, 5, 9)
                this.setState({displaySub: false })
            } 
        } else {
            tempTrack[index] = choice
            tempArray.indexOf(key) < 0 ? tempArray.push(key) : null
            this.setState({displaySub: key === "motorfluct" ? true : this.state.displaySub})
        }
        this.setState({
            answerTrack: tempTrack,
            answerArray: tempArray,
        })
    }

    render() {

        const { classes } = this.props
        const { answerTrack, displaySub } = this.state

        const RenderQuestions = (props) => 
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <RenderQuestion {...props} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <RenderButtons {...props} />
                    </Grid>
                </Grid> 


        const RenderQuestion = (props) => {
            const {symptom, shortDescription, description} = props
            return (
                <div className={classes.questionContainer}>
                    <span className={classes.questionHead}>{symptom}</span>
                    <BtnPlusModal btnType="help" modalTitle={symptom} modalText={description} modalWarning={false}/><br />
                    <span className={classes.questionText}>{shortDescription}</span>
                </div>
            )
        }

        const RenderButtons = (props) => {
            const { index, symptomKey } = props
            
            const RenderButton = (props) => 
                <Button type="button" 
                    className={classes.questionButton} 
                    style={{borderColor: answerTrack[index] === props.answer ? props.color : null}} 
                    onClick={() => this.handleAnswerSelect(index, props.answer, symptomKey)}
                >
                    {answerTrack[index] !== props.answer && <span className={classes.questionButtonText} style={{marginTop: -3}}>{props.text}</span> }
                    {answerTrack[index] === props.answer && props.icon}
                </Button>

            const buttons = [
                { answer: "ns", color: {QUESTION_BUTTON_ACTIVE_TERTIARY_COLOR}, icon: <span className={classes.unsureIcon}>?</span>, txt: "not sure"},
                { answer: "no", color: {QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR}, icon: <CloseIcon className={classes.closeIcon} />, txt: "no" },
                { answer: "yes", color: {QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR}, icon: <QuestionButtonIcons answerConditional={answerTrack[index] === "yes" ? true : false}  />, txt: "yes"}
            ]

            return (
                buttons.map((btn, index) => <RenderButton key={index} answer={btn.answer} color={btn.color} icon={btn.icon} text={btn.txt} /> )
            )
        }

        return (
            <React.Fragment>

                <UserSectionHead text="Tick all that apply, 'no' if you don't take that medication and 'not sure' for more description. Scroll down to view all." /><br />

                {motorSy.map((sy, index) => {
                    return (
                        <React.Fragment key={index}>

                            { sy.display === "main" && <RenderQuestions symptom={sy.symptom} shortDescription={sy.shortDescription} description={sy.description} index={index} symptomKey={sy.key} /> }

                            { sy.display === "sub" && displaySub && <span>
                                {index === 5 && <span>
                                    <Hr full={true}/> 
                                    <UserSectionHead text="OK, tell us a bit more about your motor fluctations. Do you have any of the following problems?" />
                                </span> }
                                <RenderQuestions symptom={sy.symptom} shortDescription={sy.shortDescription} description={sy.description} index={index} symptomKey={sy.key} />
                                {index === 8 && <Hr full={true}/>}
                            </span> }

                        </React.Fragment>
                    )
                }) }

                <br />
                <UserNavButton type="button" width="100%" text="SAVE AND CONTINUE" handleBtn={this.handleNext} />

            </React.Fragment>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitUserMotorSy, updateStepperCount, submitReview }, dispatch);
}

const mapStateToProps = (state) => {
    console.log("state: ", state)
    return {
        userMotorSy: state.motorSy.motorSy,
        userTrack: state.motorSy.track,
        review: state.review,
    }
}


UserMotorSy = withRouter(UserMotorSy)
UserMotorSy = withStyles(userComponentStyles)(UserMotorSy)
UserMotorSy = connect(mapStateToProps, mapDispatchToProps)(UserMotorSy)
export default UserMotorSy
