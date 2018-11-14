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
//import { submitUserMotorSy} from '../actions/UserMotorSyAction'


 class UserMotorSy extends Component {

    state = {
        answerArray: [],
        answerTrack: [],
        noAnswer: false,
        open : false,
        modalTitle : '',
        modalDescription : '',
        redirect: false,
        redirectAddress : '/user/user_nonmotorsy',
    }  

    handleSubmit = () => {
        console.log("submit - meds:, ", this.state.answerArray)

        // this.submitUserMotorSy(this.state.answerArray)

        this.setState({redirect: true})
    }

    handleAnswerSelect = (index, choice, name) => {
        //console.log("handleanswerselect : ", index, " + ", name)
        let tempArray = this.state.answerTrack
        let tempTrack = this.state.answerArray
        if (choice === "ns" || choice === "no") {
            tempArray[index] = choice
            let ind = tempTrack.indexOf(name)
            ind >= 0 ? tempTrack[ind] = null : null
            if (choice === "ns") {this.handleOpen({title: name}) }

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
            {motorSy: "Motor fluctuations", shortDescription: "Symptoms and ease of movement vary throughout the day even on medications.", description: ""},
            {motorSy: "Early wear off", shortDescription: "Your medications stop working aftr a while and symptoms return before next dose", description: ""},
            {motorSy: "Sudden, unpredictable wear off", shortDescription: "Your medications stop working and symptoms suddenly return without warning", description: ""},
            {motorSy: "Freezing", shortDescription: "Sudden freezing of movement at unpredicatble times", description: ""},
            {motorSy: "Tremor", shortDescription: "Shaking of the hands and arms that bothers you or prevents you doing things with your hands", description: ""},
            {motorSy: "Bothersome dyskinesia", shortDescription: "Movements that you can't control and that disrupt your life", description: ""},
            {motorSy: "Small handwriting", shortDescription: "Very small handwriting, which is not usual for you", description: ""},
            {motorSy: "Slowness walking", shortDescription: "Unusually slow walking, sometimes with a shuffling walk. ", description: ""},
            {motorSy: "Falls", shortDescription: "Falling over due to increased difficulty moving and walking", description: ""},
            {motorSy: "Drooling", shortDescription: "Drooling of saliva from the mouth which you have difficulty controlling", description: ""},
            {motorSy: "Difficulty swallowing", shortDescription: "Difficulty swallowing food or fluids. Choking episodes. ", description: ""},
            {motorSy: "Foot curling", shortDescription: "Involuntary curling of the foot and toes which can be painful and makes walking difficult.", description: ""},
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
                                            <Button className={classes.helpButton} onClick={() => this.handleOpen({title: sy.motorSy, description: sy.shortDescription}) }>
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
//     return bindActionCreators({ submitUserMotorSy }, dispatch);
// }


UserMotorSy = withRouter(UserMotorSy)
UserMotorSy = withStyles(userStylesheet)(UserMotorSy)
// UserMotorSy = connect(null, mapDispatchToProps)(UserMotorSy)
export default UserMotorSy
