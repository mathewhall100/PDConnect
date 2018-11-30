import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startCase } from 'lodash';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal';
import HelpIcon from '@material-ui/icons/Help';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';


import { activity_level } from '../../constants';
import {userStylesheet, QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR, QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR } from '../../styles';
import { updateStepperCount, submitUserMotorSy, submitReview } from '../../actions/index.js'
import QuestionButtonIcons from '../commons/userQuestionButtonIcons'
import UserModal from '../commons/userModal'
import { motorSy } from '../../constants'


 class UserMotorSy extends Component {

    state = {
        answerArray: [],
        answerTrack: [],
        noAnswer: false,
        open : false,
        modalTitle : '',
        modalText : '',
        modalWarning: "",
        redirectAddress : '/user/user_nonmotorsy',
    }

    componentDidMount() {
        window.scroll(0,0)
        this.props.updateStepperCount()
        const index = this.props.userTrack
        if (index) {this.setState({
            answerTrack: index,
            answerArray: this.props.userMotorSy
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
        this.setState({modalOpen: false})
        let tempTrack = this.state.answerTrack
        let tempArray = this.state.answerArray
        if (choice === "ns" || choice === "no") {
            tempTrack[index] = choice
            let ind = tempArray.indexOf(key)
            ind >= 0 ? tempArray.splice(ind, 1) : null
            choice === "ns" ? this.handleModalOpen(motorSy.filter(sy => sy.key === key)[0].symptom, motorSy.filter(sy => sy.key === key)[0].description) : null
        }
        else {
            tempTrack[index] = choice
            tempArray.indexOf(key) < 0 ? tempArray.push(key) : null
        }
        this.setState({
            noAnswer: false,
            answerTrack: tempTrack,
            answerArray: tempArray
        })
    }

    handleModalOpen = (title, text) => {
        console.log(title);
         this.setState({
             modalTitle : title,
             modalText : text,
             modalOpen: true
        });
     };


    render() {

        const { handleSubmit, pristine, submitting, classes } = this.props
        const { answerTrack, noAnswer, modalOpen, modalTitle, modalText, modalWarning } = this.state

        return (
            <section>
                <div className={classes.componentBox}>

                    <p className={classes.sectionTitle}>Tick all that apply, 'no' if you don't take that medication and 'not sure' for more description. Scroll down to view all. </p>
                    <br />

                    {motorSy.map((sy, index) => {

                        return (
                            <div key={index}>
                                <Grid container spacing={24}>

                                    <Grid item xs={12} sm={12} md={12} lg={6}>

                                    <div className={classes.questionContainer}>
                                            <span className={classes.questionHead}>{sy.symptom}</span>
                                            <Button className={classes.helpButton} onClick={() => this.handleModalOpen(sy.symptom, sy.description) }>
                                                <HelpIcon color="primary" className={classes.helpIcon}/>
                                            </Button>
                                        <br />
                                        <span className={classes.questionText} >
                                            {sy.shortDescription}
                                        </span>
                                    </div>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={6}>
                                        <Button type="button" className={classes.questionButton} style={{borderColor: answerTrack[index] === "ns" ? QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR : null}} onClick={() => this.handleAnswerSelect(index, "ns", sy.key)}>
                                            <span className={classes.questionButtonText}  style={{color: answerTrack[index] === "ns" ? QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR : null}}>not sure</span>
                                        </Button>
                                        <Button type="button" className={classes.questionButton} style={{borderColor: answerTrack[index] === "no" ? QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR : null}} onClick={() => this.handleAnswerSelect(index, "no", sy.key)}>
                                            {answerTrack[index] !== "no" && <span className={classes.questionButtonText}>no</span> }
                                            {answerTrack[index] === "no" && <CloseIcon className={classes.closeIcon} /> }
                                        </Button>
                                        <Button type="button" className={classes.questionButton}  style={{borderColor: answerTrack[index] === "yes" ? QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR : null}} onClick={() => this.handleAnswerSelect(index, "yes", sy.key)}>
                                            <QuestionButtonIcons answerConditional={answerTrack[index] === "yes" ? true : false}  />
                                        </Button>
                                    </Grid>

                                </Grid>
                                <br />
                            </div>
                        )
                    }) }

                    <Button type="button" type="variant" className={classes.userNavButtonRight} onClick={() => this.handleNext()}>SAVE AND CONTINUE</Button>

                </div>

                { modalOpen && <UserModal
                    modalOpen={modalOpen}
                    modalTitle={modalTitle}
                    modalText={modalText}
                    modalWarning={false}
                /> }

            </section>

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
UserMotorSy = withStyles(userStylesheet)(UserMotorSy)
UserMotorSy = connect(mapStateToProps, mapDispatchToProps)(UserMotorSy)
export default UserMotorSy
