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
import { submitUserSurgery, updateStepperCount} from '../../actions/index.js'
import BottomNav from '../commons/userBottomNav'
import TopTitle from '../commons/userTopTitle'
import QuestionButtonIcons from '../commons/userQuestionButtonIcons'
import UserModal from '../commons/userModal'
import { procedures } from '../../constants'


 class UserSurgery extends Component {

    state = {
        answerArray: [],
        answerTrack: [],
        noAnswer: false,
        open : false,
        modalTitle : '',
        modalDescription : '',
        redirect: false,
        redirectAddress : '/user/user_motorsy',
    }  

    componentDidMount() {
        window.scroll(0,0)
        this.props.updateStepperCount()
        const index = this.props.userTrack
        if (index) {
            console.log(index)
            this.setState({
                answerTrack: index,
                answerArray: this.props.userSurgery
            })
        }
    }

    handleNext= () => {
        console.log("submit - meds:, ", this.state.answerArray)
        this.props.submitUserSurgery(this.state.answerArray, this.state.answerTrack)
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
            modalOpen: false,
            modalWarning: false,
            modalTitle : '',
            modalText : '',
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
        this.setState({redirectAddress: '/user/user_meds'}, () => this.setState({redirect: true}) )
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
                                            <Button className={classes.helpButton} onClick={() => this.handleModalOpen(proc.procedure,proc.shortDescription) }>
                                                <HelpIcon color="primary" className={classes.helpIcon}/>
                                                </Button>
                                            <br />
                                            <span className={classes.questionText}> 
                                                {proc.shortDescription}
                                            </span> 
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                            <Button type="button" className={classes.questionButton} style={{borderColor: answerTrack[index] ? QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR : null}} onClick={() => this.handleAnswerSelect(index, proc.procedure)}>
                                                <QuestionButtonIcons answerConditional = {answerTrack[index]} />
                                            </Button>
                                    </Grid>
                                </Grid>
                                <br />
                            </div>
                        )
                    }) }
   
                    <BottomNav handleNext={this.handleNext} handleBack={this.handleBack} />    
            
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
    return bindActionCreators({ submitUserSurgery, updateStepperCount }, dispatch);
}

const mapStateToProps = (state) => {
    console.log("state: ", state)
    return {
        userSurgery: state.surgery.surgery,
        userTrack: state.surgery.track
    }
}


UserSurgery = withRouter(UserSurgery)
UserSurgery = withStyles(userStylesheet)(UserSurgery)
UserSurgery = connect(mapStateToProps, mapDispatchToProps)(UserSurgery)
export default UserSurgery
