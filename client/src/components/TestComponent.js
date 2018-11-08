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
//import { submitUserLife} from '../actions/UserAboutLifeAction'


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
    textCenter: {
        textAlign: "center"
    },
    textStyle: {
        marginTop: '40px',
        marginBottom: '40px'
    },
    questionText: {
        fontSize: "20px",
    },
    questionBtn: {
        float: "right",
        width: "110px",
        height: "30px",
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



 class UserLife extends Component {

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

        const activities = [
            {text: "I can carry out my usual activities and look after myself wothout help"},
            {text: "I can walk unaided"},
            {text: "I need some help to look after myself"},
            {text: "I require a walking aid to walk safely"},
            {text: "I need help with most daily activities"},
            {text: "I can't walk independently"},
            {text: "I need constant care"},
            {text: "I can no longer walk"}
        ]


        if (redirect) { 
            const url = `${redirectAddress}`;
            console.log("redirect to .. " + url);
            return<Redirect to={url} />;
        }

        const TopTitle = (props) => {
            return (
                <div>
                    <h1 className={classes.textCenter}>{props.title}</h1>
                    <br />
                    <hr className={classes.hr} />
                    <br />

                </div>
            )
        }

        const RenderButton = (props) => {

            

            return (
    
                <div> 

                    
                
                </div>
            )
        };

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
                    
                    <TopTitle title="Ok, that's great! Now tell us a little about your life." />

                    <h3>Please click all that apply to you:</h3>
                    <br />
                    <hr className={classes.hr}/>
                    <br />
                         
                         {activities.map((activity, index) => {
                            return (
                                <div>
                                    <Grid container spacing={24}>
                                        <Grid item xs={12} sm={12} md={5}>
                                            <span className={classes.questionText}>{activity.text}</span>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={7}>
                                            <div >
                                                <Button type="button" className={classes.questionBtn} onClick={() => this.handleQuestionBtn("ns", index)}>Not sure</Button>
                                                <Button type="button" className={classes.questionBtn} onClick={() => this.handleQuestionBtn("no", index)}>No</Button>
                                              <Button type="button" className={classes.questionBtn} onClick={() => this.handleQuestionBtn("yes", index)}>Yes</Button>
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
//     return bindActionCreators({ submitUserAboutLife }, dispatch);
// }


UserLife = withRouter(UserLife)
UserLife = withStyles(styles)(UserLife)
// UserLife = connect(null, mapDispatchToProps)(UserLife)
export default UserLife
