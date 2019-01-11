import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { submitUserNonMotorSy, updateStepperCount, submitReview} from '../../actions/index.js'
import UserNavButton from '../buttons/userNavButton'
import UserSectionHead from '../texts/userSectionHead'
import UserDisplayQuestion from './userDisplayQuestion'
import { nonMotorSy } from '../../constants'


 class UserNonMotorSy extends Component {

    state = {
        answerArray: [],
        answerTrack: [],
        redirectAddress: '/user/user_review',
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
        let tempTrack = this.state.answerTrack
        let tempArray = this.state.answerArray
        let ind = tempArray.indexOf(key)
        if (choice === "ns" || choice === "no") {
            tempTrack[index] = choice
            ind >= 0 ? tempArray.splice(ind, 1) : null
            // if 'ns', option to open help modal would go here
        } else {
            tempTrack[index] = choice
            tempArray.indexOf(key) < 0 ? tempArray.push(key) : null
        }
        this.setState({
            answerTrack: tempTrack,
            answerArray: tempArray
        })
    }

    render() {

        const { answerTrack } = this.state

        return (
            <React.Fragment>

                <UserSectionHead text="Tick all that apply, 'no' if you don't take that medication and 'not sure' for more description.Scroll down to view all." /><br />

                {nonMotorSy.map((sy, index) => {
                    return (
                        <UserDisplayQuestion 
                            type="set"
                            title={sy.symptom} 
                            questionText={sy.shortDescription} 
                            modalText={sy.description} 
                            index={index} 
                            answer={answerTrack[index]}
                            symptomKey={sy.key} 
                            handleSelect={this.handleAnswerSelect}
                        />
                    )
                }) }

                <br />
                <UserNavButton type="button" width="100%" text="SAVE AND CONTINUE" handleBtn={this.handleNext} />

            </React.Fragment>
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
UserNonMotorSy = connect(mapStateToProps, mapDispatchToProps)(UserNonMotorSy)
export default UserNonMotorSy
