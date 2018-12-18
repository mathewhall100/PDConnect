import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import HelpIcon from '@material-ui/icons/Help';
import CloseIcon from '@material-ui/icons/Close';

import {userStylesheet, QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR, QUESTION_BUTTON_ACTIVE_TERTIARY_COLOR, QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR } from '../../styles';
import { submitUserNonMotorSy, updateStepperCount, submitReview} from '../../actions/index.js'
import QuestionButtonIcons from '../commons/userQuestionButtonIcons'
import UserModal from '../commons/userModal'
import { nonMotorSy } from '../../constants'


 class UserNonMotorSy extends Component {

    state = {
        answerArray: [],
        answerTrack: [],
        noAnswer: false,
        open : false,
        modalTitle : '',
        modalText : '',
        modalWarning: "",
        redirectAddress : '/user/user_review',
    }


    componentDidMount() {
        window.scroll(0,0)
        this.props.updateStepperCount()
        const index = this.props.userTrack
        if (index) {this.setState({
            answerTrack: index,
            answerArray: this.props.userNonMotorSy
            })
        }
    }

    handleNext = () => {
        console.log("submit - meds:, ", this.state.answerArray)
        this.props.submitUserNonMotorSy(this.state.answerArray, this.state.answerTrack)
        if (this.props.review.redirect) {
            this.props.submitReview(false);
            this.props.history.push('/user/user_review');
        } else {
            this.props.history.push(this.state.redirectAddress)
        }
    }

    handleAnswerSelect = (index, choice, key) => {
        console.log("handleAnswerselect : ", choice, " + ", index, " + ", key)
        this.setState({modalOpen: false})
        let tempTrack = this.state.answerTrack
        let tempArray = this.state.answerArray
        if (choice === "ns" || choice === "no") {
            tempTrack[index] = choice
            let ind = tempArray.indexOf(key)
            ind >= 0 ? tempArray.splice(ind, 1) : null
            choice === "ns" ? this.handleModalOpen(nonMotorSy.filter(sy => sy.key === key)[0].symptom, nonMotorSy.filter(sy => sy.key === key)[0].description) : null }
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

        const { classes } = this.props
        const { answerTrack, noAnswer, modalOpen, modalTitle, modalText, modalWarning } = this.state

        const RenderQuestion = (props) => {
            const {symptom, shortDescription, description} = props
            return (
                <div className={classes.questionContainer}>
                    <span className={classes.questionHead}>{symptom}</span>
                    <Button className={classes.helpButton} onClick={() => this.handleModalOpen(symptom, description) }>
                        <HelpIcon color="primary" className={classes.helpIcon}/>
                    </Button>
                    <br />
                    <span className={classes.questionText} >
                        {shortDescription}
                    </span>
                </div>
            )
        }

        const RenderButtons = (props) => {
            const { index, symptomKey } = props
            return (
                <span>
                    <Button type="button" className={classes.questionButton} style={{borderColor: answerTrack[index] === "ns" ? QUESTION_BUTTON_ACTIVE_TERTIARY_COLOR : null}} onClick={() => this.handleAnswerSelect(index, "ns", symptomKey)}>
                        {answerTrack[index] !== "ns" && <span className={classes.questionButtonText} style={{marginTop: -3}}>not sure</span> }
                        {answerTrack[index] === "ns" && <span className={classes.unsureIcon}>?</span>}
                    </Button>

                    <Button type="button" className={classes.questionButton} style={{borderColor: answerTrack[index] === "no" ? QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR : null}} onClick={() => this.handleAnswerSelect(index, "no", symptomKey)}>
                        {answerTrack[index] !== "no" && <span className={classes.questionButtonText}>no</span> }
                        {answerTrack[index] === "no" && <CloseIcon className={classes.closeIcon} /> }
                    </Button>

                    <Button type="button" className={classes.questionButton}  style={{borderColor: answerTrack[index] === "yes" ? QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR : null}} onClick={() => this.handleAnswerSelect(index, "yes", symptomKey)}>
                        {answerTrack[index] !== "yes" && <span className={classes.questionButtonText}>yes</span> }
                        {answerTrack[index] === "yes" && <QuestionButtonIcons answerConditional={answerTrack[index] === "yes" ? true : false}  /> }
                    </Button>
                </span>
            )
        }

        return (
            <section>
                <div className={classes.componentBox}>

                    <p className={classes.sectionTitle}>Tick all that apply, 'no' if you don't take that medication and 'not sure' for more description.Scroll down to view all.</p>
                    <br />

                    {nonMotorSy.map((sy, index) => {

                        return (
                            <div key={index}>
                                <Grid container spacing={24}>

                                    <Grid item xs={12} sm={12} md={12} lg={6}>
                                        <RenderQuestion symptom={sy.symptom} shortDescription={sy.shortDescription} description={sy.description} />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={6}>
                                        <RenderButtons index={index} symptomKey={sy.key} />
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
    return bindActionCreators({ submitUserNonMotorSy, updateStepperCount, submitReview }, dispatch);
}

const mapStateToProps = (state) => {
    console.log("state : ", state)
    return {
        userNonMotorSy: state.nonMotorSy.nonMotorSy,
        userTrack: state.nonMotorSy.track,
        review: state.review,
    }
}

UserNonMotorSy = withRouter(UserNonMotorSy)
UserNonMotorSy = withStyles(userStylesheet)(UserNonMotorSy)
UserNonMotorSy = connect(mapStateToProps, mapDispatchToProps)(UserNonMotorSy)
export default UserNonMotorSy
