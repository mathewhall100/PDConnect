import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom'; 
import Grid from '@material-ui/core/Grid';
import { stylesheet } from '../../styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import AppleDownload from '../../images/AppleDownload.png';
import GoogleDownload from '../../images/GoogleDownload.png';


class Hero extends Component {
    state = {
        open: false,
        redirect : false,
        redirectAdress : '',
    };

    handleModalOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    handleModalButton = (route) => {
        this.setState({
            redirect : true,
            redirectAddress : route,
        })
    };
    render(){
        const { classes } = this.props;
        const { modalOpen, modalTitle, modalText, modalWarning, redirect, redirectAdress } = this.state
        if(redirect) {
            const url = redirectAdress;
            return(
                <Redirect to={url} />
            )
        }
        return(
            <div style={{position: "relative", height: "auto"}}>
                <div className={classes.parallax}></div>
            
                <div className={classes.hero}>
                    <div className={classes.card}>
                        
                        <Grid container className={classes.content}>
                            <Grid item lg={12} md={12} xs={12} className={classes.heroTitle}>
                                Use this application to find your next best and latest Parkinsons disease treatments and clinical trials.
                            </Grid>
                            <Grid item lg={12} md={12} xs={12}>
                                <div className={classes.description}>
                                    Want to know what is the next best treatments or clinical trial out there waiting for you?
                                </div>
                            </Grid>
                            <Grid item xs={12} className={classes.startButtonContainer}>
                                <div className={classes.title}>
                                    <Button variant='outlined' className={classes.startButton} onClick={() => this.handleModalOpen()}>Start</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                        
                </div> 
                <Grid container  className={classes.heroAppStore}>
                    <Grid item xs={12}>
                        <span className={classes.heroImgContainer}>
                            <a href='/'><img src={AppleDownload} className={classes.heroDownloadImg} alt="Download from Apple Store" /></a>
                        </span>
                        <span className={classes.heroImgContainer}>
                            <a href='/'><img src={GoogleDownload} className={classes.heroDownloadImg} alt="Download from Google Store" /></a>
                        </span>
                    </Grid>
                </Grid>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <h6 id="modal-title">
                            Before you provide any personal information..
                        </h6>
                        <div id="simple-modal-description">
                             We want you to understand that this application by no mean serve as a prescription. 
                             Please talk to you doctor about this before go to the pharmacy. 
                            <div>
                            <Button className={classes.modalBtn} onClick={() => { this.handleModalButton("/user/userAbout")}}>Agree</Button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
} 

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}


Hero = withStyles(stylesheet)(Hero)
export default Hero;