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


import { activity_level } from '../constants';
//import { submitUserLife} from '../actions/UserLifeAction'


const styles = theme => ({
    root: {
        paddingTop: "20px",
    },
    componentBox: {
        maxWidth: "800px",
        height: "auto",
        margin: "20px auto",
        border: "1px solid lightgrey",
        padding: "30px 30px 30px 30px"
    },
    titleStyle: {
        textAlign: "center",
        lineHeight: "40px"
    },
    textStyle: {
        marginTop: '40px',
        marginBottom: '40px'
    },
    subtitleStyle: {
        lineHeight: "30px"
    },
    questionText: {
        fontSize: "20px",
    },
    questionBtn: {
        float: "right",
        width: "110px",
        height: "30px",
        marginTop: "5px",
        marginLeft: "25px",
        backgroundColor: "white",
        border: "2px solid grey",
        borderRadius: "5px",
        fontSize: "14px",
        '&:hover': {
            backgroundColor: "lightgrey",
        },
    },
    medSelectBtn2: {
        float: "right",
        width: "50px",
        height: "60px",
        // marginLeft: "25px",
        backgroundColor: "white",
        border: "4px solid grey",
        borderRadius: "50%",
        position: "relative",
        top: "-15px",
        // fontSize: "14px",
         '&:hover': {
             backgroundColor: "white",
         },
    },
    medSelectBtnActive: {
        float: "right",
        width: "50px",
        height: "60px",
        backgroundColor: "white",
        border: "8px solid grey",
        borderRadius: "50%",
        position: "relative",
        top: "-10px",
         '&:hover': {
             backgroundColor: "white",
         },
    },
    hr: {
        height: "1px", 
        color:  "lightgrey",
        opacity: 0.5
    },
    labelText: {
        fontSize: "18px"
    },
    inputLabel: {
        fontSize: "18px",
        color: "black"
    },
    doneIcon: {
        fontSize: "48px", 
        color: "green", 
        padding: 0,
        margin: -6
    },
    doneOutlineIcon: {
        fontSize: "36px",
        color: "#eeeeee",
        '&:hover': {
            color: "green"
        },
    },
    helpBtn: {
        marginTop: "2px",
        paddingTop: "10px",
    },
    iconHover: {
        fontSize: "24px",
        '&:hover': {
            color: "darkblue",
        },
    },
    selectLabel: {
        fontSize: "20px",
        fontWeight: "bold"
    },
    errorText: {
        fontSize: "15px", 
        color: "red", 
        position: "relative", 
        left: "-45px", 
        top: "32px"
    },
    basicBtn: {
        width: "150px",
        height: "30px",
        marginRight: "25px",
        backgroundColor: "white",
        border: "2px solid grey",
        borderRadius: "10px",
        fontSize: "14px",
        '&:hover': {
            backgroundColor: "lightgrey",
        },
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 80,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },

});



 class UserLife extends Component {

    state = {
        activeBtn: [],
        open: false,
        modalWarning: false,
        modalTitle : '',
        modalDescription : '',
        redirect: false,
        redirectAddress : 'test',
    }  

    handleAnswerSelect = (index) => {
        console.log("here : ",  index)
        let tempArray = [0, 0, 0, 0, 0,]
        tempArray[index] = 1
        this.setState({activeBtn: tempArray})
    }

    handleSubmit = () => {
        const { activeBtn } = this.state
        const ADL = activeBtn.indexOf(1)
        console.log("submit - ADL:, ", ADL)
        if (ADL >= 0) {
            // this.submitUserLife( {
            //     ADL: this.state.activeBtn.indexOf("1"),
            // })
        } else {
            this.setState({modalWarning: true})
            this.handleOpen("This question is important!", "Many treatments and clinical trials in Parkinson disease are only appropriate for patients affected by Parkinson disease to a certain degree or in a certain way. Answering this question is importnat as it helps us further individualize the treatments and trials we suggest may be appropriate for you." )
        }
        //this.setState({redirect: true})
    }
    

    handleClearForm() {
        console.log("clear form")
        this.setState({activeBtn: []})
    }

    handleBack = () => {
        this.setState({
            redirect: true,
            redirectAddress: '/'
        })
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

    handleOpen = (text, modalText) => { 
        console.log(modalText);
         this.setState({ 
             open: true, 
             modalTitle : text,
             modalDescription : modalText
        });
     };

     handleClose = () => {
         this.setState({ open: false });
     };


    render() {

        const { handleSubmit, pristine, submitting, classes } = this.props
        const { redirect, redirectAddress, activeBtn, modalWarning  } = this.state

        const PDADLs = [
            {text: "1) No difﬁculties with day-to-day activities.",modalText: "For example: Your Parkinson’s disease at present is not affecting your daily living"},
            {text: "2) Mild difﬁculties with day-to-day activities.",modalText: "For example: Slowness with some aspects of housework, gardening or shopping. Able to dress and manage personal hygiene completely independently but rate is slower. You may feel that your medication is not quite effective as it was."},
            {text: "3) Moderate difﬁculties with day-to-day activities.",modalText: "For example: Your Parkinson’s disease is interfering with your daily activities. It is increasinglydifﬁcult to do simple activities without some help such as rising from a chair, washing, dressing,shopping, housework. You may have some difﬁculties walking and may require assistance. Difﬁcultieswith recreational activities or the ability to drive a car. The medication is now less effective."},
            {text: "4) High levels of difﬁculties with day-to-day activities.",modalText: "For example: You now require much more assistance with activities of daily living such as washing,dressing, housework or feeding yourself. You may have greater difﬁculties with mobility and ﬁnd youare becoming more dependent for assistance from others or aids and appliances. Your medicationappears to be signiﬁcantly less effective."},
            {text: "5) Extreme difﬁculties with day-to-day activities.", modalText: "For example: You require assistance in all daily activities. These may include dressing, washing,feeding yourself or walking unaided. You may now be housebound and obtain little or no beneﬁtfrom your medication."} 
        ]


        if (redirect) { 
            const url = `${redirectAddress}`;
            console.log("redirect to .. " + url);
            return<Redirect to={url} />;
        }

        const TopTitle = (props) => {
            return (
                <div>
                    <h1 className={classes.titleStyle}>{props.title}</h1>
                    <br />
                    <hr className={classes.hr} />
                    <br />

                </div>
            )
        }

        const SubTitle = (props) => {
            return (
                <div>
                    <h3 className={classes.subtitleStyle}>{props.subtitle}</h3>
                    <br />
                    <hr className={classes.hr}/>
                    <br />
                </div>
            )
        }

        const BottomNav= (props) => {
            return (
                <div>
                    <br />
                    <br />
                    <Button type="button" color="primary" className={classes.basicBtn} onClick={() => this.handleSubmit()}>NEXT</Button>
                    <Button type="button" color="primary" className={classes.basicBtn} onClick={() => this.handleClearForm()}>CLEAR</Button>  
                    <br />
                </div> 
            )
        }


        return (
            <section className={classes.root}>
                <div className={classes.componentBox}>
                    
                    <TopTitle title="Now tell us a little about how Parkinson disease affects you" />

                    <SubTitle subtitle="Please check the box next to the description that best describes how your Parkinson disease has affected your day-to-day activities in the last month." />

                    {PDADLs.map((activity, index) => {
                        return (
                            <div>
                                <Grid container spacing={24}>
                                    <Grid item xs={12} sm={8} md={8}>
                                        <div className={classes.questionText}>{activity.text}</div>

                                        <Button className={classes.helpBtn} onClick={() => this.handleOpen(PDADLs[index].text, PDADLs[index].modalText)}>
                                            <HelpIcon color="primary" className={classes.iconHover}/>
                                                &nbsp;&nbsp;More Details and examples
                                        </Button> 
                                    </Grid>


                                    <Grid item xs={12} sm={4} md={4}>
                                        <Button type="button" className={classes.medSelectBtn2}  style={{borderColor: activeBtn[index] ? "green" : null}} onClick={() => this.handleAnswerSelect(index)}>
                                            {activeBtn[index] === 1 && <DoneIcon className={classes.doneIcon} /> }
                                            {activeBtn[index] === 1 && <DoneIcon className={classes.doneIcon} style={{position: "absolute", left: "11px", top: "5px"}} /> }
                                            {activeBtn[index] === 1  && <DoneIcon className={classes.doneIcon} style={{position: "absolute", left: "11px", top: "6px"}} /> }
                                            {activeBtn[index] === 1 && <DoneIcon className={classes.doneIcon} style={{position: "absolute", left: "11px", top: "7px"}} /> } 
                                            {!activeBtn[index] && <DoneOutlineIcon className={classes.doneOutlineIcon} /> }
                                        </Button>
                                    </Grid>

                                </Grid>
                                <br />
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
                            <Typography variant="h6" id="modal-title" style={{color: modalWarning ? "red" : "grey"}}>
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
//     return bindActionCreators({ submitUserLife }, dispatch);
// }


UserLife = withRouter(UserLife)
UserLife = withStyles(styles)(UserLife)
// UserLife = connect(null, mapDispatchToProps)(UserLife)
export default UserLife
