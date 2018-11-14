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


import { activity_level } from '../../constants';
import {userStylesheet, QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR } from '../../styles';
import { updateStepperCount, submitUserMeds} from '../../actions/index.js'
import BottomNav from '../commons/userBottomNav'
import TopTitle from '../commons/userTopTitle'
import QuestionButtonIcons from '../commons/userQuestionButtonIcons'
import UserModal from '../commons/userModal'
import {meds, medGroups } from '../../constants'


class UserMeds extends Component {

    state = {
        answerArray: [],
        answerTrack: [],
        noAnswer: false,
        open : false,
        modalTitle : '',
        modalText : '',
        redirect: false,
        redirectAddress : '/user/user_surgery',
    }  

    componentDidMount() {
        this.props.updateStepperCount()
    }

    handleNext = () => {
        console.log("submit - meds:, ", this.state.answerArray)
        this.props.submitUserMeds(this.state.answerArray)
        this.setState({redirect: true})
    }

    handleAnswerSelect = (index, name) => {
        console.log("handleAnswerselect : ", name)
        this.setState({modalOpen: false})
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
            answerArray: tempArray,
            modalOpen: false
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
            <section >
                <div className={classes.componentBox}>
                    
                    <TopTitle title="Congratulations, you're half way through! Now tell us about the medications you take for Parkinson Disease. " />

                    <Grid container spacing={24}>
                    <Grid item xs={12} sm={8}>
                        <div className={classes.headerQuestion}>I don't take any medications for Parkinson disease: </div>
                    </Grid>
                        <Grid item xs={12} sm={4}>
                             <Button type="button" className={classes.questionButton} style={{borderColor: noAnswer ? QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR : null}} onClick={() => this.handleNoAnswerelect()}>
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
                                                        <Button className={classes.helpButton} onClick={() => this.handleModalOpen(med.generic, med.description) }>
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
    return bindActionCreators({ updateStepperCount, submitUserMeds }, dispatch);
}


UserMeds = withRouter(UserMeds)
UserMeds = withStyles(userStylesheet)(UserMeds)
UserMeds = connect(null, mapDispatchToProps)(UserMeds)
export default UserMeds
