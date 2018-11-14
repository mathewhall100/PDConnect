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
import {userStylesheet, QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR } from '../styles';
//import { submitUserMeds} from '../actions/UserAboutLifeAction'


 class UserMeds extends Component {

    state = {
        answerArray: [],
        answerTrack: [],
        noAnswer: false,
        open : false,
        modalTitle : '',
        modalDescription : '',
        redirect: false,
        redirectAddress : '/user/user_surgery',
    }  

    handleSubmit = () => {
        console.log("submit - meds:, ", this.state.answerArray)

        // this.submitUserMeds(this.state.answerArray)

        this.setState({redirect: true})

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

    handleNoAnswerelect = () => {
        console.log('NoanswerTrack')
        this.setState({
            noAnswer: true,
            answerTrack: [],
            answerArray: []}) 
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
            redirectAddress: "/user/user_family"}, () => this.setState({redirect: true}) )
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

        const medGroups = [
            {class: "dopamine agonist", target: "motor symptoms"},
            {class: "carbidopa/levodopa", target: "motor symptoms"},
            {class: "other", target: "motor symptoms"}
        ]

        const meds= [
            {generic: "Ropinirole", trade: ["Requip", "Ralnea", "Adartrel"], class: "dopamine agonist", description: ""},
            {generic: "Pramipixole", trade: ["Mirapex"], class: "dopamine agonist", description: ""},
            {generic: "Rotigotine", trade: ["Neupro"], class: "dopamine agonist", description: ""},

            {generic: "Sinemet", trade: [], class: "carbidopa/levodopa", description: ""},
            {generic: "Sinemet CR",  trade: [], class: "carbidopa/levodopa", description: ""},
            {generic: "Rytary",  trade: [], class: "carbidopa/levodopa", description: ""},
            {generic: "Doupa",  trade: [], class: "carbidopa/levodopa", description: ""},

            {generic: "Amantadine", trade: ["Amantadine"], class: "other", description: ""}
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
                    <Button type="button" variant="outlined" className={classes.nextButton} onClick={() => this.handleBack()}>BACK</Button>
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
                    {props.answerConditional  && <DoneIcon className={classes.doneIcon} /> }
                    {props.answerConditional && <DoneIcon className={classes.doneIcon} style={{position: "absolute", left: "11px", top: "5px"}} /> }
                    {props.answerConditional && <DoneIcon className={classes.doneIcon} style={{position: "absolute", left: "11px", top: "6px"}} /> }
                    {props.answerConditional && <DoneIcon className={classes.doneIcon} style={{position: "absolute", left: "11px", top: "7px"}} /> } 
                    {!props.answerConditional && <DoneOutlineIcon className={classes.doneOutlineIcon} /> }
                </span>
            )
        }



        return (
            <section >
                <div className={classes.componentBox}>
                    
                    <TopTitle title="Congratulations, you're half way through! Now tell us about the medications you take for Parkinson Disease. " />

                    <Grid container spacing={24}>
                    <Grid item xs={12} sm={8}>
                        <div className={classes.headerQuestion}>I don't take any medications for Parkinson disease: </div>
                    </Grid>
                        <Grid item xs={12} sm={4}>
                             <Button type="button" className={classes.questionButton} style={{borderColor: noAnswer ? "green" : null}}onClick={() => this.handleNoAnswerelect()}>
                                <QuestionButtonIcons answerConditional={noAnswer} />
                            </Button> 
                        </Grid>
                    </Grid>

                    {medGroups.map((group, index) => {

                        return (
                            <div key={index}>

                                <hr className={classes.hr}/>
                                <p className={classes.sectionTitle}> {startCase(group.class)} preparations for {group.target}</p>
                                <br />

                                {meds.filter(med => med.class === group.class).map((med, index) => {
                                    const answerIndex = meds.findIndex(medication => medication.generic == med.generic)

                                    return (
                                        
                                        <div key={index}>
                                            <Grid container spacing={24}>
                                                <Grid item xs={12} sm={8} >
                                                    <div style={{minHeight: "60px"}}>
                                                        <span className={classes.questionHead}>{med.generic}</span>  
                                                        <Button className={classes.helpButton} onClick={() => this.handleOpen({title: med.generic, description: med.description}) }>
                                                            <HelpIcon color="primary" className={classes.helpIcon}/>
                                                         </Button>
                                                        <br />
                                                        {med.trade.length > 0 && <span className={classes.questionText}>Examples:&nbsp;&nbsp;
                                                            {med.trade.map((trade, index) => {
                                                                return (
                                                                    <span key={index} className={classes.questionText}>
                                                                        {trade}
                                                                        {index === med.trade.length-1 ? "" : ", "} 
                                                                    </span> 
                                                                )
                                                             }) }
                                                        </span> }
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} sm={4} >
                                                         <Button type="button" className={classes.questionButton}  style={{borderColor: answerTrack[answerIndex] ? QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR : null}} onClick={() => this.handleAnswerSelect(answerIndex, med.generic)}>
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


UserMeds = withRouter(UserMeds)
UserMeds = withStyles(userStylesheet)(UserMeds)
// UserMeds = connect(null, mapDispatchToProps)(UserMeds)
export default UserMeds
