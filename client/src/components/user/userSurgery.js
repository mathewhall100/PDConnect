import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import {userComponentStyles } from './userComponentStyles'
import {QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR } from '../../themes'
import { submitUserSurgery, updateStepperCount, submitReview} from '../../actions/index.js'
import QuestionButtonIcons from '../commons/userQuestionButtonIcons'
import BtnPlusModal from '../commons/buttonPlusModal'
import UserNavButton from '../buttons/userNavButton'
import UserSectionHead from '../texts/userSectionHead'
import Hr from '../commons/userHr'
import { procedures } from '../../constants'


 class UserSurgery extends Component {

    state = {
        answerArray: [],
        answerTrack: [],
        noAnswer: false,
        warningModal: false,
        redirectAddress : '/user/user_life',
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
            this.setState({warningModal: false}, () => this.setState({warningModal: true}) )
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
            answerArray: tempArray
        })
    }

    handleNoneSelect = () => {
        console.log('answerNone')
        this.setState({
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

                    <Grid item xs={12} sm={12} md={12} lg={7}>
                        <div className={classes.headerQuestion}>None</div><br />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={5}>
                            <Button type="button" className={classes.questionButton} style={{borderColor: answerNone ? QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR : null}} onClick={() => this.handleNoneSelect()}>
                            <QuestionButtonIcons answerConditional={answerNone} />
                        </Button>
                    </Grid>

                </Grid>
                <br />
                <UserSectionHead text="Or, Select any that you have had from the following list" />
                <Hr full={true}/><br />

                {procedures.map((proc, index) => {
                    return (
                        <Grid container spacing={24} key={index}>

                            <Grid item xs={12} sm={12} md={12} lg={7}>
                                <div className={classes.questionContainer}>
                                    <span className={classes.questionHead}>{proc.procedure}</span>
                                    <BtnPlusModal btnType="help" modalTitle={proc.procedure} modalText={proc.description} modalWarning={false} /><br />
                                    <span className={classes.questionText}>{proc.shortDescription}</span>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={5}>
                                <Button type="button" className={classes.questionButton} style={{borderColor: answerTrack[index] ? QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR : null}} onClick={() => this.handleAnswerSelect(index, proc.key)}>
                                    <QuestionButtonIcons answerConditional = {answerTrack[index]} />
                                </Button>
                            </Grid>

                        </Grid>
                    )
                }) }

                <br /><br />
                <UserNavButton type="button" width="100%" text="SAVE AND CONTINUE" handleBtn={this.handleNext} />

                { warningModal && <BtnPlusModal btnType="none" modalTitle="This question is important!" modalText="There are a number of surgical operations and procedures that can treat certain symptoms of Parkinson disease in certain patients. It is importnat for us to know if you have had any of these surgeries or procedures so that we can best match you to treatments you might benefit from." modalWarning={true} /> }
            
            </React.Fragment>
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
UserSurgery = withStyles(userComponentStyles)(UserSurgery)
UserSurgery = connect(mapStateToProps, mapDispatchToProps)(UserSurgery)
export default UserSurgery
