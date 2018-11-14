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
import { updateStepperCount, submitUserMotorSy } from '../../actions/index.js'
import BottomNav from '../commons/userBottomNav'
import TopTitle from '../commons/userTopTitle'
import SubTitle from '../commons/userSubTitle'
import QuestionButtonIcons from '../commons/userQuestionButtonIcons'
import UserModal from '../commons/userModal'
import { motorSy } from '../../constants'


 class UserMotorSy extends Component {

    state = {
        answerArray: [],
        answerTrack: [],
        noAnswer: false,
        open : false,
        modalTitle : '',
        modalText : '',
        modalWarning: "",
        redirect: false,
        redirectAddress : '/user/user_nonmotorsy',
    }  

    componentDidMount() {
        this.props.updateStepperCount()
    }

    handleNext = () => {
        console.log("submit - meds:, ", this.state.answerArray)
        this.props.submitUserMotorSy(this.state.answerArray)
        this.setState({redirect: true})
    }

    handleAnswerSelect = (index, choice, name) => {
        console.log("handleanswerselect : ", choice, " + ", index, " + ", name)
        this.setState({modalOpen: false})
        let tempArray = this.state.answerTrack
        let tempTrack = this.state.answerArray
        if (choice === "ns" || choice === "no") {
            tempArray[index] = choice
            let ind = tempTrack.indexOf(name)
            ind >= 0 ? tempTrack[ind] = null : null
            if (choice === "ns") {this.handleModalOpen(name, "hello") }

        } 
        else {
            tempArray[index] = choice
            tempTrack.indexOf(name) < 0 ? tempTrack.push(name) : null
        }
        this.setState({
            noAnswer: false,
            answerTrack: tempArray, 
            answerArray: tempTrack
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
        this.setState({redirectAddress: '/user/user_surgery'}, () => this.setState({redirect: true}) )
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

        const TopTitle = (props) => {
            return (
                <div>
                    <h1 className={classes.title}>{props.title}</h1>
                    <hr className={classes.hr} />
                </div>
            )
        }


        return (
            <section>
                <div className={classes.componentBox}>
                    
                    <TopTitle title="Almost done! Lastly, about your symptoms" />

                    <SubTitle subtitle="Patients with Parkinson disease eperience a wide ramge of symptoms. Tell us about any of the following which you may haveb experienced over the past month by clicking the circles next to the symptom. Click on the help icon for more information about each symptom." />

                    <p className={classes.sectionTitle}>Let's start with motor symptoms</p>
                    <br />

                    {motorSy.map((sy, index) => {

                        return (
                            <div key={index}>
                                <Grid container spacing={24}>

                                    <Grid item xs={12} sm={12} md={7} >
                                   
                                    <div className={classes.questionContainer}>
                                            <span className={classes.questionHead}>{sy.motorSy}</span>  
                                            <Button className={classes.helpButton} onClick={() => this.handleModalOpen(sy.motorSy, sy.shortDescription) }>
                                                <HelpIcon color="primary" className={classes.helpIcon}/>
                                            </Button>
                                        <br />
                                        <span className={classes.questionText} > 
                                            {sy.shortDescription}
                                        </span>  
                                    </div>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={5}>
                                        <Button type="button" className={classes.questionButton} style={{marginLeft: "25px", borderColor: answerTrack[index] === "ns" ? QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR : null}} onClick={() => this.handleAnswerSelect(index, "ns", sy.motorSy)}>
                                            <span className={classes.questionButtonText}  style={{color: answerTrack[index] === "ns" ? QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR : null}}>not sure</span>
                                        </Button>
                                        <Button type="button" className={classes.questionButton} style={{marginLeft: "25px", borderColor: answerTrack[index] === "no" ? QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR : null}} onClick={() => this.handleAnswerSelect(index, "no", sy.motorSy)}>
                                            {answerTrack[index] !== "no" && <span className={classes.questionButtonText}>no</span> }
                                            {answerTrack[index] === "no" && <CloseIcon className={classes.closeIcon} /> }
                                        </Button>
                                        <Button type="button" className={classes.questionButton}  style={{borderColor: answerTrack[index] === "yes" ? QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR : null}} onClick={() => this.handleAnswerSelect(index, "yes", sy.motorSy)}>
                                            <QuestionButtonIcons answerConditional={answerTrack[index] === "yes" ? true : false}  />
                                        </Button>
                                    </Grid>
                                    
                                </Grid>
                                <br />
                            </div>
                        )
                    }) }
   
                    <BottomNav handleNext={this.handleNext} handleBack={this.handleBack}/>            
            
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
    return bindActionCreators({ submitUserMotorSy, updateStepperCount }, dispatch);
}


UserMotorSy = withRouter(UserMotorSy)
UserMotorSy = withStyles(userStylesheet)(UserMotorSy)
UserMotorSy = connect(null, mapDispatchToProps)(UserMotorSy)
export default UserMotorSy
