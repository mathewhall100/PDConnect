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


import { activity_level } from '../constants';
import {userStylesheet } from '../styles';
//import { submitUserMeds} from '../actions/UserAboutLifeAction'


 class UserSurgery extends Component {

    state = {
        answerArray: [],
        answerTrack: [],
        noAnswer: false,
        open : false,
        modalTitle : '',
        modalDescription : '',
        redirect: false,
        redirectAddress : 'test',
    }  

    handleSubmit = () => {
        console.log("submit - meds:, ", this.state.answerArray)

        // this.submitUserSurgeries(this.state.answerArray)
        // this.setState({
        //     redirect: true
        // })
    }

    handleAnswerSelect = (index, name) => {
        console.log("handleAnswerselect : ", name)
        let tempTrack = this.state.answerTrack
        let tempArray = this.state.answerArray
        const tempIndex = tempArray.indexOf(name)

        if (tempIndex < 0) {tempArray.push(name)}
        else if (tempTrack[index] === true && tempIndex >= 0) {
            tempArray[tempIndex] = ""
        }

        tempTrack[index] = !tempTrack[index]

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
        this.setState({
            redirect: true,
            redirectAddress: '/'
        })
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
        const { redirect, redirectAddress, answerTrack,noAnswer } = this.state


        const procedures= [
            {procedure: "Deep Brain Stimulation", shortDescription: "Electrodes implanted into the brain", description: ""},
            {procedure: "Feeding tube placement", shortDescription: "Placement of a narrow feeding tube throuigh the stomach wall (a Peg-J tube) to deliver drugs such as Duopa directly into the intestine.", description: ""},
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

        const BottomNav= (props) => {
            return (
                <Grid container spacing={24} className={classes.buttonContainer}>
                    <Grid item xs={12}>
                        <hr className={classes.hr} />
                    </Grid>
                    <Grid item xs={3}>
                        <Button type="button" className={classes.backButton} onClick={() => this.handleClearForm()}>CLEAR</Button>  
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
                    {props.answerConditional  && <DoneIcon className={classes.doneIcon} /> }
                    {props.answerConditional && <DoneIcon className={classes.doneIcon} style={{position: "absolute", left: "7px", top: "7px"}} /> }
                    {props.answerConditional && <DoneIcon className={classes.doneIcon} style={{position: "absolute", left: "7px", top: "8px"}} /> }
                    {props.answerConditional && <DoneIcon className={classes.doneIcon} style={{position: "absolute", left: "8px", top: "9px"}} /> } 
                    {!props.answerConditional && <DoneOutlineIcon className={classes.doneOutlineIcon} /> }
                </span>
            )
        }

        return (
            <section className={classes.root}>
                <div className={classes.componentBox}>
                    
                    <TopTitle title="Have you ever had any of the following procedures or surgeries to treat Parkinson disease? " />

                    <br />

                    {procedures.map((proc, index) => {

                        return (
                            <div key={index}>
                                <Grid container spacing={24}>
                                    <Grid item xs={12} sm={8}>
                                        <div className={classes.questionContainer}>
                                            <span className={classes.questionHead}>{proc.procedure}</span>  
                                            <Button className={classes.helpButton} onClick={() => this.handleOpen({title: proc.procedure, description: proc.shortDescription}) }>
                                                <HelpIcon color="primary" className={classes.helpIcon}/>
                                                </Button>
                                            <br />
                                            <span className={classes.questionText}> 
                                                {proc.shortDescription}
                                            </span> 
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                            <Button type="button" className={classes.questionButton} style={{borderColor: answerTrack[index] ? "green" : null}} onClick={() => this.handleAnswerSelect(index, proc.procedure)}>
                                                <QuestionButtonIcons answerConditional = {answerTrack[index]} />
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
//     return bindActionCreators({ submitUserMeds }, dispatch);
// }


UserSurgery = withRouter(UserSurgery)
UserSurgery = withStyles(userStylesheet)(UserSurgery)
// UserSurgery = connect(null, mapDispatchToProps)(UserSurgery)
export default UserSurgery
