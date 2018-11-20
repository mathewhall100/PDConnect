import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
import { updateStepperCount, submitUserLife } from '../../actions/index.js'
import TopTitle from '../commons/userTopTitle'
import SubTitle from '../commons/userSubTitle'
import QuestionButtonIcons from '../commons/userQuestionButtonIcons'
import UserModal from '../commons/userModal'
import { PDADLs } from '../../constants'


 class UserLife extends Component {

    componentDidMount() {
        window.scroll(0,0)
        this.props.updateStepperCount()
        console.log("CWRP: ", this.props.userADL)
        const index = this.props.userADL
        if (index) {this.handleAnswerSelect(index)}
    }

    state = {
        activeBtn: [],
        modalOpen: false,
        modalWarning: false,
        modalTitle : '',
        modalText : '',
        redirect: false,
        redirectAddress : '/user/user_family',
    }  

    handleAnswerSelect = (index) => {
        this.setState({modalOpen: false})
        let tempArray = [0, 0, 0, 0, 0,]
        tempArray[index] = 1
        this.setState({activeBtn: tempArray})
    }

    handleNext = () => {
        const { activeBtn } = this.state
        const ADL = activeBtn.indexOf(1)
        console.log("submit - ADL:, ", ADL)
        if (ADL >= 0) {
            this.props.submitUserLife({
                ADL: ADL,
            }) 
            this.setState({redirect: true})
        } else {
            this.setState({modalWarning: true})
            this.handleModalOpen("This question is important!", "Many treatments and clinical trials in Parkinson disease are only appropriate for patients affected by Parkinson disease to a certain degree or in a certain way. Answering this question is importnat as it helps us further individualize the treatments and trials we suggest may be appropriate for you." )
        }
    }
    
    handleClearForm() {
        console.log("clear form")
        this.setState({activeBtn: []})
    }

    handleBack = () => {
        this.setState({
            redirectAddress: '/user/user_about'}, () => this.setState({redirect: true}) )
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
        const { redirect, redirectAddress, activeBtn, modalOpen, modalTitle, modalText, modalWarning  } = this.state

        if (redirect) { 
            const url = `${redirectAddress}`;
            console.log("redirect to .. " + url);
            return<Redirect to={url} />;
        }

        return (
            <section>
                <div className={classes.componentBox}>
                    {PDADLs.map((question, index) => {
                        return (
                            <div key={index}>
                                <Grid container spacing={24}>
                                    <Grid item xs={12} sm={8} md={8}>
                                        <div className={classes.questionContainer} >
                                            <span className={classes.questionHead}>{question.title}</span>
                                            <br />
                                            <Button type="button" id="modalBtn" className={classes.helpButtton} onClick={() => this.handleModalOpen(PDADLs[index].title, PDADLs[index].text)}>
                                                <HelpIcon color="primary" className={classes.helpIcon}/>
                                                    &nbsp;&nbsp;More Details and examples
                                            </Button>
                                        </div>
                                    </Grid>


                                    <Grid item xs={12} sm={4} md={4}>
                                        <Button type="button" className={classes.questionButton}  style={{borderColor: activeBtn[index] ? QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR : null}} onClick={() => this.handleAnswerSelect(index)}>

                                        <QuestionButtonIcons answerConditional={activeBtn[index] ? true : false} />
                                           
                                        </Button>
                                    </Grid>

                                </Grid>
                            </div>
                        )
                    }) }

                </div>

                { modalOpen && <UserModal 
                    modalOpen={modalOpen}
                    modalTitle={modalTitle} 
                    modalText={modalText} 
                    modalWarning={modalWarning} 
                /> }

            </section>

        );
    }
}


function mapDispatchToProps(dispatch) {
     return bindActionCreators({ updateStepperCount, submitUserLife }, dispatch);
}

const mapStateToProps = (state =>{
    console.log("state: ", state)
    return {
        userADL: state.life.ADL
    }
})

UserLife = withRouter(UserLife)
UserLife = withStyles(userStylesheet)(UserLife)
UserLife = connect(mapStateToProps, mapDispatchToProps)(UserLife)
export default UserLife
