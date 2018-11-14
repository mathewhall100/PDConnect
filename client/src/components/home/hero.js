import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { stylesheet } from '../../styles';
import DoneIcon from '@material-ui/icons/Done';
import Button from '@material-ui/core/Button';
import AppleDownload from '../../images/AppleDownload.png';
import GoogleDownload from '../../images/GoogleDownload.png';

class Hero extends Component {
    
    render(){
        const { classes } = this.props;
        return(
            <div style={{position: "relative", height: "auto"}}>
                <div className={classes.parallax}></div>
            
                <div className={classes.hero}>
                    <div className={classes.card}>
                        
                        <Grid container className={classes.content}>
                            <Grid item xs={12} className={classes.heroTitle}>
                                Use this application to find your next best and latest Parkinsons disease treatments and clinical trials.
                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.description}>
                                    Want to know what is the next best treatments or clinical trial out there waiting for you?
                                </div>
                            </Grid>
                            <Grid item xs={12} className={classes.startButtonContainer}>
                                <div className={classes.title}>
                                    <Button variant='outlined' className={classes.startButton} >Start</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                        
                </div> 
                <Grid container  className={classes.heroAppStore}>
                    <Grid item xs={12}>
                        <span className={classes.connectImgContainer}>
                            <a href='/'><img src={AppleDownload} className={classes.heroDownloadImg} alt="Download from Apple Store" /></a>
                        </span>
                        <span className={classes.connectImgContainer}>
                            <a href='/'><img src={GoogleDownload} className={classes.heroDownloadImg} alt="Download from Google Store" /></a>
                        </span>
                    </Grid>
                </Grid>
            </div>
        )
    }
} 
Hero = withStyles(stylesheet)(Hero)
export default Hero;