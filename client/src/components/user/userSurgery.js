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
        if (index) {
            console.log(index)
            this.setState({
                answerTrack: index,
                answerArray: this.props.userSurgery
            })
        }
    }

    handleNext= () => {
        console.log("submit - meds:, ", this.state.answerArray)
        this.props.submitUserSurgery(this.state.answerArray, this.state.answerTrack)
        if (this.props.review.redirect) {
            this.props.submitReview(false);
            this.props.history.push('/user/user_review');
        } else {
            this.props.history.push(this.state.redirectAddress)
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
            tempArray[tempIndex] = ""
        }

        tempTrack[index] = !tempTrack[index]

        this.setState({
            noAnswer: false,
            modalOpen: false,
            modalWarning: false,
            modalTitle : '',
            modalText : '',
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
            <section >
                <div className={classes.componentBox} >

                <p className={classes.sectionTitle}>Select all that apply</p>
                <br />

                {procedures.map((proc, index) => {

                    return (
                        <div key={index}>
                            <Grid container spacing={24}>
                                <Grid item xs={12} sm={12} md={12} lg={7}>
                                    <div className={classes.questionContainer}>
                                        <span className={classes.questionHead}>{proc.procedure}</span>
                                        <Button className={classes.helpButton} onClick={() => this.handleModalOpen(proc.procedure,proc.shortDescription) }>
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
                    modalWarning={false}
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
        review: state.review,
    }
}


UserSurgery = withRouter(UserSurgery)
UserSurgery = withStyles(userStylesheet)(UserSurgery)
UserSurgery = connect(mapStateToProps, mapDispatchToProps)(UserSurgery)
export default UserSurgery
