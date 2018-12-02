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
import DoneIcon from '@material-ui/icons/Done';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';


import { activity_level } from '../../constants';
import {userStylesheet, QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR } from '../../styles';
import { submitUserSurgery, updateStepperCount, submitReview} from '../../actions/index.js'
import QuestionButtonIcons from '../commons/userQuestionButtonIcons'
import UserModal from '../commons/userModal'
import { procedures } from '../../constants'


 class UserSurgery extends Component {

    state = {
        answerArray: [],
        answerTrack: [],
        noAnswer: false,
        open : false,
        modalTitle : '',
        modalDescription : '',
        redirectAddress : '/user/user_motorsy',
    }

    componentDidMount() {
        window.scroll(0,0)
        this.props.updateStepperCount()
        const index = this.props.userTrack
        if (index && index.length > 0) {
            console.log("index: ", index)
            this.setState({
                answerTrack: index,
                answerArray: this.props.userSurgery,
                answerNone: false
            })
        } else if (this.props.userAnswerNone) {
            console.log(this.props.userAnswerNone)
            this.setState({
                answerNone: true
            })
        }
    }

    handleNext = () => {
        console.log("submit - meds:, ", this.state.answerArray)
        if (this.state.answerNone || this.state.answerArray.length > 0) {
             this.props.submitUserSurgery(this.state.answerArray, this.state.answerTrack, this.state.answerNone)
            if (this.props.review.redirect) {
                this.props.submitReview(false);
                this.props.history.push('/user/user_review');
            } else {
                this.props.history.push(this.state.redirectAddress)
            }
        } else {
            this.setState({modalWarning: true})
            this.handleModalOpen("This question is important!","There are a number of surgical operations and procedures that can treat certain symptoms of Parkinson disease in certain patients. It is importnat for us to know if you have had any of these surgeries or procedures so that we can best match you to treatments you might benefit from.")
            }
    }

    handleAnswerSelect = (index, key) => {
        console.log("handleAnswerselect : ", key)
        this.setState({modalOpen: false})
        let tempTrack = this.state.answerTrack
        let tempArray = this.state.answerArray
        const tempIndex = tempArray.indexOf(key)

        if (tempIndex < 0) {tempArray.push(key)}
        else if (tempTrack[index] === true && tempIndex >= 0) {
            tempArray.splice(tempIndex, 1)
        }
        tempTrack[index] = !tempTrack[index]

        this.setState({
            answerNone: false,
            modalOpen: false,
            answerTrack: tempTrack,
            answerArray: tempArray
        })
    }

    handleNoneSelect = () => {
        console.log('answerNone')
        this.setState({
            modalOpen: false,
            answerNone: true,
            answerTrack: [],
            answerArray: []
        })
    }

    handleModalOpen = (title, text, warning) => {
        console.log(title);
         this.setState({
             modalTitle : title,
             modalText : text,
             modalOpen: true,
             modalwarning: warning
        });
     };


    render() {

        const { handleSubmit, pristine, submitting, classes } = this.props
        const { answerTrack, answerNone, modalOpen, modalTitle, modalText, modalWarning } = this.state

        return (
            <section>
                <div className={classes.componentBox} >

                <Grid container spacing={0}>
                    <Grid item xs={12} sm={8}>
                        <div className={classes.headerQuestion}>None</div>
                        <br />
                    </Grid>
                        <Grid item xs={12} sm={4}>
                             <Button type="button" className={classes.questionButton} style={{borderColor: answerNone ? QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR : null}} onClick={() => this.handleNoneSelect()}>
                                <QuestionButtonIcons answerConditional={answerNone} />
                            </Button>
                        </Grid>
                    </Grid>
                    <br />
                    <p className={classes.sectionTitle}>Or, Select any that have have had from the following list</p>

                      <hr className={classes.hr}/>

                {procedures.map((proc, index) => {

                    return (
                        <div key={index}>
                            <Grid container spacing={24}>
                                <Grid item xs={12} sm={12} md={12} lg={7}>
                                    <div className={classes.questionContainer}>
                                        <span className={classes.questionHead}>{proc.procedure}</span>
                                        <Button className={classes.helpButton} onClick={() => this.handleModalOpen(proc.procedure, proc.description, false) }>
                                            <HelpIcon color="primary" className={classes.helpIcon}/>
                                            </Button>
                                        <br />
                                        <span className={classes.questionText}>
                                            {proc.shortDescription}
                                        </span>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={5}>
                                        <Button type="button" className={classes.questionButton} style={{borderColor: answerTrack[index] ? QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR : null}} onClick={() => this.handleAnswerSelect(index, proc.key)}>
                                            <QuestionButtonIcons answerConditional = {answerTrack[index]} />
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
                    modalWarning={modalWarning}
                /> }

            </section>

        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitUserSurgery, updateStepperCount, submitReview }, dispatch);
}

const mapStateToProps = (state) => {
    console.log("state: ", state)
    return {
        userSurgery: state.surgery.surgery,
        userTrack: state.surgery.track,
        userAnswerNone: state.surgery.answerNone,
        review: state.review,
    }
}


UserSurgery = withRouter(UserSurgery)
UserSurgery = withStyles(userStylesheet)(UserSurgery)
UserSurgery = connect(mapStateToProps, mapDispatchToProps)(UserSurgery)
export default UserSurgery
