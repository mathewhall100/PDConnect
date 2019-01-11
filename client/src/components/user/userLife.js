import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'


import { updateStepperCount, submitUserLife, submitReview } from '../../actions/index.js'
import QuestionButtonIcons from '../commons/userQuestionButtonIcons'
import BtnPlusModal from '../commons/buttonPlusModal'
import UserNavButton from '../buttons/userNavButton'
import UserSectionHead from '../texts/userSectionHead'
import { PDADLs } from '../../constants'
import { QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR } from '../../themes'
import { userComponentStyles } from './userComponentStyles'


 class UserLife extends Component {

    componentDidMount() {
        window.scroll(0,0)
        this.props.updateStepperCount()
        const index = this.props.userADLTrack
        if (index) {this.handleAnswerSelect(index)}
    }

    state = {
        activeBtn: [],
        warningModal: false,
        redirectAddress : '/user/user_motorsy',
    }

    handleAnswerSelect = (index) => {
        this.setState({modalOpen: false})
        let tempArray = [0, 0, 0, 0, 0,]
        tempArray[index] = 1
        this.setState({activeBtn: tempArray})
    }

    handleNext = () => {
        const { activeBtn } = this.state
        const ADL = activeBtn.indexOf(1)
        console.log("submit - ADL:, ", ADL)
        if (ADL >= 0) {
            this.props.submitUserLife(PDADLs[ADL].key, ADL)
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

    handleClearForm() {
        console.log("clear form")
        this.setState({activeBtn: []})
    }

    render() {

        const { classes } = this.props
        const { activeBtn, warningModal } = this.state

        return (
            <React.Fragment>

                    <UserSectionHead text="Select the most accurate answer below" /><br />

                    {PDADLs.map((question, index) => {
                        return (
                            <div key={index}>
                                <Grid container spacing={24}>
                                    <Grid item xs={12} sm={8} md={8}>
                                        <div className={classes.questionContainer} >
                                            <span className={classes.questionHead}>{question.title}</span>
                                            <BtnPlusModal btnType="help" btnLabel=""  modalTitle={PDADLs[index].title} modalText={PDADLs[index].text} modalWarning={false} /><br />
                                        </div>
                                    </Grid>


                                    <Grid item xs={12} sm={4} md={4}>
                                        <Button type="button" className={classes.questionButton}  style={{position: "relative", top: "-5px", borderColor: activeBtn[index] ? QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR : null}} onClick={() => this.handleAnswerSelect(index)}>

                                        <QuestionButtonIcons answerConditional={activeBtn[index] ? true : false} />

                                        </Button>
                                    </Grid>

                                </Grid>
                            </div>
                        )
                    }) }

                    <br />
                    <UserNavButton type="button" width="100%" text="SAVE AND CONTINUE" handleBtn={this.handleNext} />

                    { warningModal && <BtnPlusModal btnType="none" modalTitle="This question is important!" modalText="Many treatments and clinical trials in Parkinson disease are only appropriate for patients affected by Parkinson disease to a certain degree or in a certain way. Answering this question is importnat as it helps us further individualize the treatments and trials we suggest may be appropriate for you." modalWarning={true} /> }

            </React.Fragment>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateStepperCount, submitUserLife, submitReview }, dispatch);
}

const mapStateToProps = (state =>{
    console.log("state: ", state)
    return {
        userADL: state.adl.ADL,
        userADLTrack: state.adl.track,
        review: state.review,
    }
})

UserLife = withRouter(UserLife)
UserLife = withStyles(userComponentStyles)(UserLife)
UserLife = connect(mapStateToProps, mapDispatchToProps)(UserLife)
export default UserLife
