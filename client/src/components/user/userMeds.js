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
import { updateStepperCount, submitUserMeds, submitReview} from '../../actions/index.js'
import QuestionButtonIcons from '../commons/userQuestionButtonIcons'
import UserModal from '../commons/userModal'
import {meds, medGroups } from '../../constants'


class UserMeds extends Component {

    state = {
        answerArray: [],
        answerTrack: [],
        answerNone: false,
        open : false,
        modalTitle : '',
        modalText : '',
        redirectAddress : '/user/user_surgery',
    }

    componentDidMount() {
        window.scroll(0,0)
        this.props.updateStepperCount()
        const index = this.props.userTrack
        if (index && index.length > 0) {
            console.log("index: ", index)
            this.setState({
                answerTrack: index,
                answerArray: this.props.userMeds,
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
             this.props.submitUserMeds(this.state.answerArray, this.state.answerTrack, this.state.answerNone)
            if (this.props.review.redirect) {
                this.props.submitReview(false);
                this.props.history.push('/user/user_review');
            } else {
                this.props.history.push(this.state.redirectAddress)
            }
        } else {
            this.setState({modalWarning: true})
            this.handleModalOpen("This question is important!","To suggest treatments you may benefit from we need to know what medications you currently take for Parkinson disease. Also, participation in many clinical trials and focus groups depends on how you are currently treated. Please take the time to tell us about the medications you take for Parkinson disease or select 'none' if you do not take any")
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
            answerTrack: tempTrack,
            answerArray: tempArray,
            modalOpen: false
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
        const { answerTrack, answerNone, modalOpen, modalTitle, modalText, modalWarning } = this.state

        return (
            <section >
                <div className={classes.componentBox} >

                    <Grid container spacing={24}>
                    <Grid item xs={12} sm={8}>
                        {/* <div className={classes.headerQuestion} >None (I don't take any medications for Parkinson disease)</div> */}
                        <div className={classes.headerQuestion} style={{position: "relative", top: '10px'}}>None</div>
                        <br />
                    </Grid>
                        <Grid item xs={12} sm={4}>
                             {/* <Button type="button" className={classes.questionButton} style={{position: "relative", top: "15px", borderColor: answerNone ? QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR : null}} onClick={() => this.handleNoneSelect()}> */}
                             <Button type="button" className={classes.questionButton} style={{borderColor: answerNone ? QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR : null}} onClick={() => this.handleNoneSelect()}>
                                <QuestionButtonIcons answerConditional={answerNone} />
                            </Button>
                        </Grid>
                    </Grid>
                    <br />
                     <p className={classes.sectionTitle}>Or, Select all that apply from the following list (scroll down to view all).</p>


                    {medGroups.map((group, index) => {

                        return (
                            <div key={index}>

                                <hr className={classes.hr}/>

                                {meds.filter(med => med.class === group.class).map((med, index) => {
                                    const answerIndex = meds.findIndex(medication => medication.generic == med.generic)

                                    return (

                                        <div key={index}>
                                            <Grid container spacing={24}>
                                                <Grid item xs={12} sm={8} >
                                                    <div style={{minHeight: "60px"}}>
                                                        <span className={classes.questionHead}>{med.generic}</span>
                                                        <Button className={classes.helpButton} onClick={() => this.handleModalOpen(med.generic, med.description) }>
                                                            <HelpIcon color="primary" className={classes.helpIcon} />
                                                         </Button>
                                                        <br />
                                                        {med.trade.length > 0 && <span className={classes.questionText}>(
                                                            {med.trade.map((trade, index) => {
                                                                return (
                                                                    <span key={index} className={classes.questionText}>
                                                                        {trade}
                                                                        {index === med.trade.length-1 ? "" : ", "}
                                                                    </span>
                                                                )
                                                            
                                                             }) }
                                                             )
                                                        </span> }
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} sm={4} >
                                                         <Button type="button" className={classes.questionButton}  style={{borderColor: answerTrack[answerIndex] ? QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR : null}} onClick={() => this.handleAnswerSelect(answerIndex, med.key)}>
                                                            <QuestionButtonIcons answerConditional={answerTrack[answerIndex]} />
                                                        </Button>
                                                </Grid>
                                            </Grid>
                                            <br />
                                        </div>
                                    )
                                }) }
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
    return bindActionCreators({ updateStepperCount, submitUserMeds, submitReview }, dispatch);
}

const mapStateToProps = (state) => {
    console.log("state: ", state)
    return {
        userMeds: state.meds.meds,
        userTrack: state.meds.track,
        userAnswerNone: state.meds.answerNone,
        review: state.review,
    }
}

UserMeds = withRouter(UserMeds)
UserMeds = withStyles(userStylesheet)(UserMeds)
UserMeds = connect(mapStateToProps, mapDispatchToProps)(UserMeds)
export default UserMeds
