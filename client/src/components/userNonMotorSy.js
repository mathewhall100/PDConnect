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


import { activity_level } from '../constants';
import {userStylesheet, QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR, QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR } from '../styles';
//import { submitUserNonMotorSy} from '../actions/UserNonMotorSyAction'


 class UserNonMotorSy extends Component {

    state = {
        answerArray: [],
        answerTrack: [],
        noAnswer: false,
        open : false,
        modalTitle : '',
        modalDescription : '',
        redirect: false,
        redirectAddress : 'results',
    }  

    handleSubmit = () => {
        console.log("submit - meds:, ", this.state.answerArray)

        // this.submitUserNonMotorSy(this.state.answerArray)

        this.setState({redirect: true })
    }

    handleMedSelect = (index, choice, name) => {
        //console.log("handlemedselect : ", index, " + ", name)
        let tempTrack = this.state.answerTrack
        let tempArray = this.state.answerArray
        if (choice === "ns" || choice === "no") {
            tempTrack[index] = choice
            let ind = tempArray.indexOf(name)
            ind >= 0 ? tempArray[ind] = null : null
            if (choice === "ns") {this.handleOpen({title: name}) }
          

        } 
        else {
            tempTrack[index] = choice
            tempArray.indexOf(name) < 0 ? tempArray.push(name) : null
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

    getModalStyle = () => {
        const top = 50;
        const left = 50;
    
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    handleOpen = (modalItem) => { 
        console.log(modalItem);
         this.setState({ 
             open: true, 
             modalTitle : modalItem.title,
             modalDescription : modalItem.description
        });
     };

     handleClose = () => {
         this.setState({ open: false });
     };


    render() {

        const { handleSubmit, pristine, submitting, classes } = this.props
        const { redirect, redirectAddress, answerTrack, noAnswer } = this.state


        const motorSy= [
            {motorSy: "Hallucinations or delusions", shortDescription: "Seeying things that you know are not really there or firmly beleiving seomething despite good evidence that it is not real or true.", description: ""},
            {motorSy: "Dizziness & lightheadedness", shortDescription: "Dizziness, lightheadedness or even feeling you may faint, particularly just after you have got up from sitting down or changed position ", description: ""},
            {motorSy: "Constipation", shortDescription: "Infrequent and or difficuklty opening your bowels.", description: ""},
            {motorSy: "Poor sleep", shortDescription: "Difficulty getting to sleep or waking in the night and unable to get back to sleep", description: ""},
            {motorSy: "Depression", shortDescription: "Low mood and feeling sof hopelessness", description: ""},
            {motorSy: "Poor cognition", shortDescription: "Difficulty thinking or remembering things to a point where it affects your life and others notice it.", description: ""},
            
        ]


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

        const SubTitle = (props) => {
            return (
                <div>
                    <h3 className={classes.subtitle}>{props.subtitle}</h3>
                    <hr className={classes.hr}/>
                </div>
            )
        }

        const BottomNav= (props) => {
            return (
                <Grid container spacing={24} className={classes.buttonContainer}>
                    <Grid item xs={12}>
                        <hr className={classes.hr} />
                    </Grid>
                    <Grid item xs={3}>
                        <Button type="button" variant='outlined' className={classes.nextButton} onClick={() => this.handleBack()} >BACK</Button>
                        {/* <Button type="button" className={classes.backButton} onClick={() => this.handleClearForm()}>CLEAR</Button>   */}
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3} className={classes.nextButtonContainer}>
                        <Button type="submit" variant='outlined' className={classes.nextButton} onClick={() => this.handleSubmit()} >NEXT</Button>
                    </Grid>
                </Grid>
            )
        }

        const QuestionButtonIcons = (props) => {
            return (
                <span>
                    {props.answerConditional !== "yes" && <span className={classes.questionButtonText}>yes</span> }
                    {props.answerConditional === "yes" && <DoneIcon className={classes.doneIcon} /> }
                    {props.answerConditional === "yes" && <DoneIcon className={classes.doneIcon} style={{position: "absolute", left: "11px", top: "5px"}} /> }
                    {props.answerConditional === "yes" && <DoneIcon className={classes.doneIcon} style={{position: "absolute", left: "11px", top: "6px"}} /> }
                    {props.answerConditional === "yes" && <DoneIcon className={classes.doneIcon} style={{position: "absolute", left: "11px", top: "7px"}} /> } 
                </span>
            )
        }

        return (
            <section className={classes.root}>
                <div className={classes.componentBox}>
                    
                    <TopTitle title="Last question! About any non-motor symptoms" />

                    <SubTitle subtitle="Patients with Parkinson disease eperience a wide ramge of symptoms that aren't just related to movement, though this varies a lot from person to person. tell us if you have had any of the following problems in the past month. " />

                    <p className={classes.sectionTitle}>Non-motor symptoms</p>

                    {motorSy.map((sy, index) => {

                        return (
                            <div key={index}>
                                <Grid container spacing={24}>

                                    <Grid item xs={12} sm={12} md={7} >
                                        <div className={classes.questionContainer}>
                                           
                                                <span className={classes.questionHead}>{sy.motorSy}</span>  
                                                <Button className={classes.helpButton} onClick={() => this.handleOpen({title: sy.motorSy, description: sy.shortDescription }) }>
                                                    <HelpIcon color="primary" className={classes.helpIcon}/>
                                                </Button>
                                            <br />
                                            <span className={classes.questionText} > 
                                                {sy.shortDescription}
                                            </span> 
                                        </div>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={5}>
                                        <Button type="button" className={classes.questionButton} style={{marginLeft: "25px", borderColor: answerTrack[index] === "ns" ? QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR : null}} onClick={() => this.handleMedSelect(index, "ns", sy.motorSy)}>
                                            <span className={classes.questionButtonText} style={{color: answerTrack[index] === "ns" ? QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR : null}} >not sure</span>
                                        </Button>
                                        <Button type="button" className={classes.questionButton}  style={{marginLeft: "25px", borderColor: answerTrack[index] === "no" ? QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR : null}} onClick={() => this.handleMedSelect(index, "no", sy.motorSy)}>
                                            {answerTrack[index] !== "no" && <span className={classes.questionButtonText}>no</span> }
                                            {answerTrack[index] === "no" && <CloseIcon className={classes.closeIcon} /> }
                                        </Button>
                                        <Button type="button" className={classes.questionButton}  style={{borderColor: answerTrack[index] === "yes" ? QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR : null}} onClick={() => this.handleMedSelect(index, "yes", sy.motorSy)}>
                                            <QuestionButtonIcons answerConditional={answerTrack[index]} />      
                                        </Button>
                                    </Grid>

                                </Grid>
                                <br />
                            </div>
                        )
                    }) }
   
                    <BottomNav />            
            
                </div>

                <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <div style={this.getModalStyle()}  className={classes.paper}>
                            <Typography variant="h6" id="modal-title">
                                {this.state.modalTitle}
                            </Typography>
                            <hr />
                            <Typography variant="subtitle1" id="simple-modal-description">
                                {this.state.modalDescription}
                            </Typography>
                        </div>
                </Modal>

            </section>

        );
    }
}


// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ submitUserNonMotorSy }, dispatch);
// }


UserNonMotorSy = withRouter(UserNonMotorSy)
UserNonMotorSy = withStyles(userStylesheet)(UserNonMotorSy)
// UserNonMotorSy = connect(null, mapDispatchToProps)(UserNonMotorSy)
export default UserNonMotorSy
