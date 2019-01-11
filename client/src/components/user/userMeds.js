import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { userComponentStyles } from './userComponentStyles'
import {QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR } from '../../themes'
import { updateStepperCount, submitUserMeds, submitReview} from '../../actions/index.js'
import QuestionButtonIcons from '../commons/userQuestionButtonIcons'
import BtnPlusModal from '../commons/buttonPlusModal'
import UserNavButton from '../buttons/userNavButton'
import UserSectionHead from '../texts/userSectionHead'
import Hr from '../commons/userHr'
import {meds, medGroups } from '../../constants'


class UserMeds extends Component {

    state = {
        answerArray: [],
        answerTrack: [],
        answerNone: false,
        warningModal: false,
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
            this.setState({warningModal: false}, () => this.setState({warningModal: true}) )
        }
    }

    handleAnswerSelect = (index, key) => {
        console.log("handleAnswerselect : ", key)
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

    render() {

        const { classes } = this.props
        const { answerTrack, answerNone, warningModal } = this.state

        return (
            <React.Fragment>

                <Grid container spacing={24}>
                    <Grid item xs={12} sm={8}>
                        <div className={classes.headerQuestion} style={{position: "relative", top: "10px"}}>None</div>
                        <br />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                            <Button type="button" className={classes.questionButton} style={{borderColor: answerNone ? QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR : null}} onClick={() => this.handleNoneSelect()}>
                            <QuestionButtonIcons answerConditional={answerNone} />
                        </Button>
                    </Grid>
                </Grid>
                <br />
                {/* <UserSectionHead text="Or, Select all that apply from the following list (scroll down to view all)." /> */}


                {medGroups.map((group, index) => {

                    return (
                        <div key={index}>
                            <Hr full={true}/>
                            <UserSectionHead text={group.text} /><br />
                            
                            {meds.filter(med => med.class === group.class).map((med, idx) => {
                                const answerIndex = meds.findIndex(medication => medication.generic === med.generic)
                                return (
                                    <div key={idx}>
                                        <Grid container spacing={24}>

                                            <Grid item xs={12} sm={8} >
                                                <div style={{minHeight: "60px"}}>
                                                    <span className={classes.questionHead}>{med.generic}</span>
                                                    <BtnPlusModal btnType="help" btnLabel="" modalTitle={med.generic} modalText={med.description} modalWarning={false} modalImages={med.images}/><br />
                                                    {med.trade.length > 0 && <span className={classes.questionText}>
                                                        {med.trade.map((trade, idx) => {
                                                            return (
                                                                <span key={idx} className={classes.questionText}>
                                                                    {trade}
                                                                    {index === med.trade.length-1 ? "" : ", "}
                                                                </span>
                                                            )
                                                        }) }
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

                <br />
                <UserNavButton type="button" width="100%" text="SAVE AND CONTINUE" handleBtn={this.handleNext} />

                 { warningModal && <BtnPlusModal btnType="none" modalTitle="This question is important!" modalText="To suggest treatments you may benefit from we need to know what medications you currently take for Parkinson disease. Also, participation in many clinical trials and focus groups depends on how you are currently treated. Please take the time to tell us about the medications you take for Parkinson disease or select 'none' if you do not take any" modalWarning={true} /> }

            </React.Fragment>
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
UserMeds = withStyles(userComponentStyles)(UserMeds)
UserMeds = connect(mapStateToProps, mapDispatchToProps)(UserMeds)
export default UserMeds
