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


import { activity_level } from '../constants';
//import { submitUserProcs} from '../actions/UserProcsAction'


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
        width: "150px",
        height: "60px",
        marginLeft: "25px",
        backgroundColor: "white",
        border: "2px solid grey",
        borderRadius: "5px",
        fontSize: "14px",
        '&:hover': {
            backgroundColor: "lightgrey",
        },
        '&:active': {
            backgroundColor: "lightgrey",
        }
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
    iconBtn: {
        marginTop: "-7px",
        '&:hover': {
            backgroundColor: "white",
        },
    },
    iconHover: {
        fontSize: "28px",
        '&:hover': {
            color: "darkblue",
        },
    },
    selectLabel: {
        fontSize: "20px",
        fontWeight: "bold"
    },
    doneIcon: {
        fontSize: "14px", 
        color: "green", 
        position: "relative", 
        top: "20px", 
        left: "10px"
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
        width: theme.spacing.unit * 40,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },

});


 class UserProcs extends Component {

    state = {
        open : false,
        modalTitle : '',
        modalDescription : '',
        redirect: false,
        redirectAddress : 'test',
    }  

    handleQuestionBtn = (ans, index) => {
        console.log("here : ",  ans, index)
    }

    handleSubmit = () => {
        // const { activeBtn } = this.state
        // const ADL = activeBtn.indexOf(1)
        // console.log("submit - ADL:, ", ADL)
        // if (ADL >= 0) {
        //     // this.submitUserLife( {
        //     //     ADL: this.state.activeBtn.indexOf("1"),
        //     // })
        // } else {
        //     this.setState({modalWarning: true})
        //     this.handleOpen("This question is important!", "Many treatments and clinical trials in Parkinson disease are only appropriate for patients affected by Parkinson disease to a certain degree or in a certain way. Answering this question is importnat as it helps us further individualize the treatments and trials we suggest may be appropriate for you." )
        // }
    }
    
    handleClearForm() {
        console.log("clear form")
        this.props.reset()
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
             modalTitle : modalItem.modal,
             modalDescription : modalItem.modal
        });
     };

     handleClose = () => {
         this.setState({ open: false });
     };


    render() {

        const { handleSubmit, pristine, submitting, classes } = this.props
        const { redirect, redirectAddress } = this.state

        const meds= [
            {name: "", class: "", description: ""},
            {name: "", class: "", description: ""},
            {name: "", class: "", description: ""},
            {name: "", class: "", description: ""},
            {name: "", class: "", description: ""},
            {name: "", class: "", description: ""},
            {name: "", class: "", description: ""},
            {name: "", class: "", description: ""}
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
                    <Button type="submit" color="primary" className={classes.basicBtn}>NEXT</Button>
                    <Button type="button" color="primary" className={classes.basicBtn} onClick={() => this.handleClearForm()}>CLEAR</Button>  
                    <br />
                </div> 
            )
        }


        return (
            <section className={classes.root}>
                <div className={classes.componentBox}>
                    
                    <TopTitle title="Congratulations, your half way through the questions! Now tell us about the medications you take for Parkinson Disease. " />

                    <SubTitle subtitle="Select 'yes' for each medication you take. Click the info icon for more information to help decide if you take this medication or not. " />
                         
                    {meds.map((activity, index) => {
                    return (
                        <div>
                            <Grid container spacing={24}>
                                <Grid item xs={12} sm={12} md={5}>
                                    <span className={classes.questionText}>{activity.text}</span>
                                </Grid>
                                <Grid item xs={12} sm={12} md={7}>
                                    <div >
                                        <Button type="button" className={classes.questionBtn} onClick={() => this.handleQuestionBtn("ns", index)}>No or not sure</Button>
                                        {/* <Button type="button" className={classes.questionBtn} onClick={() => this.handleQuestionBtn("no", index)}>No</Button> */}
                                        <Button type="button" className={classes.questionBtn} onClick={() => this.handleQuestionBtn("yes", index)}>Yes, I take this medication</Button>
                                    </div>
                                </Grid>
                            </Grid>
                            <br />
                            <hr className={classes.hr}/>
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


UserProcs = withRouter(UserProcs)
UserProcs = withStyles(styles)(UserProcs)
// UserProcs = connect(null, mapDispatchToProps)(UserProcs)
export default UserProcs
