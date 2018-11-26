import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { home2Stylesheet } from '../../styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import AppleDownload from '../../images/AppleDownload.png';
import GoogleDownload from '../../images/GoogleDownload.png';
import img from '../../images/elder_tech.jpeg';

class Hero extends Component {
    state = {
        open: false,
        redirect : false,
        redirectAddress : '/user/user_start',
    };

    handleModalOpen = () => {
        console.log("modal open")
        this.props.history.push(this.state.redirectAddress)
        // this.setState({ open: true });
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
        const { redirect, redirectAddress } = this.state
        if(redirect) {
            const url = redirectAddress;
            return(
                <Redirect to={url} />
            )
        }
        return(
            <div>
                <div style={{ background: 'linear-gradient(rgba(255,255,255,0) 60%,lightgray)'}}>
                    <Grid container spacing={40} className={classes.homepageContainer}>
                        <Grid item xs={1} sm={1} md={1} lg={1} />
                        <Grid item xs={10} sm={10} md={5} lg={5} className={classes.splitContent}>
                            <Grid container className={classes.imageContainer}>
                                <span className={classes.heroImgContainer}>
                                    <a href='/'><img src={img} className={classes.heroImg} alt="Download from Apple Store" /></a>
                                </span>
                            </Grid>
                            <Grid container className={classes.heroAppStore}>
                                <Grid item xs={12}>
                                    <span className={classes.heroImgContainer}>
                                        <a href='/'><img src={AppleDownload} className={classes.heroDownloadImg} alt="Download from Apple Store" /></a>
                                    </span>
                                    <span className={classes.heroImgContainer}>
                                        <a href='/'><img src={GoogleDownload} className={classes.heroDownloadImg} alt="Download from Google Store" /></a>
                                    </span>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={10} sm={10} md={5} lg={5} className={classes.splitContent}>
                            <div className={classes.HeroTitle}>
                                Your individualized Parkinsons treatment</div>
                            <div className={classes.description}>
                                Use this application to find your next best and latest Parkinsons disease treatments and clinical trials.
                            </div>
                            <div className={classes.buttonContainer}>
                                <Button variant='outlined' className={classes.homepageButton} onClick={() => this.handleModalOpen()}>Connect online today</Button>
                            </div>
                        </Grid>
                        <Grid item xs={1} sm={1} md={1} lg={1} />
                    </Grid>

                    </div>
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
                                <Button className={classes.homepageButton} onClick={() => { this.handleModalButton("/user/user_about")}}>Agree</Button>
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

Hero = withRouter(Hero)
Hero = withStyles(home2Stylesheet)(Hero)
export default Hero;