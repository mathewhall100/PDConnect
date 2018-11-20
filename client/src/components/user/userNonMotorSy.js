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
import { submitUserNonMotorSy, updateStepperCount} from '../../actions/index.js'
import TopTitle from '../commons/userTopTitle'
import SubTitle from '../commons/userSubTitle'
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
        redirect: false,
        redirectAddress : '/results',
    }  


    componentDidMount() {
        window.scroll(0,0)
        this.props.updateStepperCount()
        const index = this.props.answerTrack
        if (index) {this.setState({
            answerTrack: index,
            answerArray: this.props.userNonMotorSy
            })
        }
        
    }

    handleNext = () => {
        console.log("submit - meds:, ", this.state.answerArray)
        this.props.submitUserNonMotorSy(this.state.answerArray, this.state.answerTrack)
        this.setState({redirect: true })
    }

    handleMedSelect = (index, choice, symptom) => {
        //console.log("handlemedselect : ", index, " + ", symptom)
        this.setState({modalOpen: false})
        let tempTrack = this.state.answerTrack
        let tempArray = this.state.answerArray
        if (choice === "ns" || choice === "no") {
            tempTrack[index] = choice
            let ind = tempArray.indexOf(symptom)
            ind >= 0 ? tempArray[ind] = null : null
            if (choice === "ns") {this.handleModalOpen(symptom, symptom) }
          

        } 
        else {
            tempTrack[index] = choice
            tempArray.indexOf(symptom) < 0 ? tempArray.push(symptom) : null
        }
        this.setState({
            noAnswer: false,
            answerTrack: tempTrack, 
            answerArray: tempArray
        })
    }

    handleClearForm() {
        console.log("clear form")
        this.setState({
            noAnswer: false,
            answerTrack: [],
            answerArray: []
        })
    }

    handleBack = () => {
        this.setState({ redirectAddress: '/user/user_motorsy'}, () => this.setState({  redirect: true}) )
    }

    handleInfoClick = (info) => {
        console.log(info)
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
        const { redirect, redirectAddress, answerTrack, noAnswer, modalOpen, modalTitle, modalText, modalWarning } = this.state

        if (redirect) { 
            const url = `${redirectAddress}`;
            console.log("redirect to .. " + url);
            return<Redirect to={url} />;
        }

        return (
            <section>
                <div className={classes.componentBox}>
                    <p className={classes.sectionTitle}>Non-motor symptoms</p>

                    {nonMotorSy.map((sy, index) => {

                        return (
                            <div key={index}>
                                <Grid container spacing={24}>

                                    <Grid item xs={12} sm={12} md={12} lg={6}>
                                        <div className={classes.questionContainer}>
                                           
                                                <span className={classes.questionHead}>{sy.symptom}</span>  
                                                <Button className={classes.helpButton} onClick={() => this.handleModalOpen(sy.symptom, sy.shortDescription) }>
                                                    <HelpIcon color="primary" className={classes.helpIcon}/>
                                                </Button>
                                            <br />
                                            <span className={classes.questionText} > 
                                                {sy.shortDescription}
                                            </span> 
                                        </div>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={6}>
                                        <Button type="button" className={classes.questionButton} style={{marginRight: 0, borderColor: answerTrack[index] === "ns" ? QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR : null}} onClick={() => this.handleMedSelect(index, "ns", sy.symptom)}>
                                            <span className={classes.questionButtonText} style={{color: answerTrack[index] === "ns" ? QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR : null}} >not sure</span>
                                        </Button>
                                        <Button type="button" className={classes.questionButton}  style={{borderColor: answerTrack[index] === "no" ? QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR : null}} onClick={() => this.handleMedSelect(index, "no", sy.symptom)}>
                                            {answerTrack[index] !== "no" && <span className={classes.questionButtonText}>no</span> }
                                            {answerTrack[index] === "no" && <CloseIcon className={classes.closeIcon} /> }
                                        </Button>
                                        <Button type="button" className={classes.questionButton}  style={{borderColor: answerTrack[index] === "yes" ? QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR : null}} onClick={() => this.handleMedSelect(index, "yes", sy.key)}>
                                        <QuestionButtonIcons answerConditional={answerTrack[index] === "yes" ? true : false}  />     
                                        </Button>
                                    </Grid>

                                </Grid>
                                <br />
                            </div>
                        )
                    }) }
           
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
    return bindActionCreators({ submitUserNonMotorSy, updateStepperCount }, dispatch);
}

const mapStateToProps = (state) => {
    console.log("state : ", state)
    return {
        userNonMotorSy: state.nonMotorSy.nonMotorSy, 
        userTrack: state.nonMotorSy.track
    }
}

UserNonMotorSy = withRouter(UserNonMotorSy)
UserNonMotorSy = withStyles(userStylesheet)(UserNonMotorSy)
UserNonMotorSy = connect(mapStateToProps, mapDispatchToProps)(UserNonMotorSy)
export default UserNonMotorSy
