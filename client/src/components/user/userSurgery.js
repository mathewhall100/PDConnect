import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { submitUserSurgery, updateStepperCount, submitReview} from '../../actions/index.js'
import BtnPlusModal from '../commons/buttonPlusModal'
import UserNavButton from '../buttons/userNavButton'
import UserSectionHead from '../texts/userSectionHead'
import UserDisplayQuestion from './userDisplayQuestion'

import Hr from '../commons/userHr'
import { procedures } from '../../constants'


 class UserSurgery extends Component {

    state = {
        answerArray: [],
        answerTrack: [],
        answerNone: false,
        warningModal: false,
        redirectAddress : '/user/user_life',
    }

    componentDidMount() {
        window.scroll(0,0)
        this.props.updateStepperCount()
        const index = this.props.userTrack
        if (index && index.length > 0) {
            this.setState({
                answerTrack: index,
                answerArray: this.props.userSurgery,
                answerNone: false
            })
        } else if (this.props.userAnswerNone) {
            this.setState({ answerNone: true})
        }
    }

    handleNext = () => {
        console.log("submit - surgeries:, ", this.state.answerArray)
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

    handleAnswerSelect = (index, choice="", key) => {
        console.log("handleAnswerselect : ", key)
        this.setState({modalOpen: false})
        let tempTrack = this.state.answerTrack
        let tempArray = this.state.answerArray
        const tempIndex = tempArray.indexOf(key)

        if (tempIndex < 0) {tempArray.push(key)}
        else if (tempTrack[index] === true && tempIndex >= 0) { tempArray.splice(tempIndex, 1) }
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

        const { answerTrack, answerNone, warningModal } = this.state

        return (
            <React.Fragment>

                <UserDisplayQuestion
                    type="single"
                    title="None" 
                    questionText=""
                    modalText=""
                    modalImages=""
                    index={0}
                    active={answerNone}
                    questionKey=""
                    handleSelect={this.handleNoneSelect}
                />

                <br />
                <UserSectionHead text="Or, Select any that you have had from the following list" />
                <Hr full={true}/><br />

                {procedures.map((proc, index) => {
                    return (
                        <div key={index}>
                            <UserDisplayQuestion
                                type="single"
                                title={proc.procedure} 
                                questionText={proc.shortDescription} 
                                modalText={proc.description} 
                                index={index}
                                active={answerTrack[index]}
                                questionKey={proc.key} 
                                handleSelect={this.handleAnswerSelect}
                                />
                        </div>
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
UserSurgery = connect(mapStateToProps, mapDispatchToProps)(UserSurgery)
export default UserSurgery
