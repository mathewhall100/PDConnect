import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { stylesheet } from '../../styles';
import DoneIcon from '@material-ui/icons/Done';
import AppleDownload from '../../images/AppleDownload.png';
import GoogleDownload from '../../images/GoogleDownload.png';
import MobileImg from '../../images/wearables.jpg';
import PhysicianImg from '../../images/physician.jpg';
import PatientImg from '../../images/patient.jpg';
import Button from '@material-ui/core/Button';

class Connects extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Grid container spacing={24} className={classes.homepageFixedWidthContent} cols={3}>
                <Grid item xs={4} className={classes.connectItem}>
                    <div className={classes.connectHeader}>Download mobile app today!</div>
                    <div className={classes.connectImgContainer}>
                        <img src={MobileImg} className={classes.connectImg} alt="Download from Apple Store" />
                    </div>
                    <div className={classes.connectDescription}>
                        We developed a mobile application to help you better manage your Parkinsons disease. 
                    </div>
                    <span className={classes.connectImgContainer}>
                        <a href='/'><img src={AppleDownload} className={classes.connectDownloadImg} alt="Download from Apple Store" /></a>
                    </span>
                    <span className={classes.connectImgContainer}>
                        <a href='/'><img src={GoogleDownload} className={classes.connectDownloadImg} alt="Download from Google Store" /></a>
                    </span>
                </Grid>
                <Grid item xs={4} className={classes.connectItem}>
                    <div className={classes.connectHeader}>Connect with us!</div>
                    <div className={classes.connectImgContainer}>
                        <img src={PhysicianImg} className={classes.connectImg} alt="Create Account" />
                    </div>
                    <Grid item xs={12} className={classes.buttonContainer}>
                        <Button variant="outlined" color='primary' size='large' className={classes.buttonStyle}>Get Started</Button>
                    </Grid>
                    
                </Grid>
                <Grid item xs={4} className={classes.connectItem}>
                    <div className={classes.connectHeader}>Create an account</div>
                    <div className={classes.connectImgContainer}>
                        <img src={PatientImg} className={classes.connectImg} alt="Connect" />
                    </div>
                    <Grid item xs={12} className={classes.buttonContainer}>
                        <Button variant="outlined" color='primary' size='large' className={classes.buttonStyle}>Create Account</Button>
                    </Grid>
                    
                </Grid>
            </Grid>
        )
    }
}
Connects = withStyles(stylesheet)(Connects)
export default Connects;