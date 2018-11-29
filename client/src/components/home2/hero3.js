import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { home2Stylesheet } from '../../styles';
import Button from '@material-ui/core/Button';
import AppleDownload from '../../images/AppleDownload.png';
import GoogleDownload from '../../images/GoogleDownload.png';
import img from '../../images/PDImage1.jpg';

class Hero extends Component {
    state = {
        redirect : false,
        redirectAddress : '/user/user_start',
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
            <div className={classes.homepageContainer} style={{ background: 'linear-gradient(rgba(255,255,255,0) -10%, #eeeeee)'}}>
                <div style={{maxWidth: "1400px", margin: "0 auto"}}>

                    <Grid container spacing={24}>
                        
                        <Grid item xs={12} sm={12} md={8} lg={8}>
                            <div className={classes.heroTextContainer}>
                                <div className={classes.HeroTitle}>
                                    PD Connect</div>
                                <div className={classes.description}>
                                    Connecting Patients with Parkinson Disease for better health
                                </div>
                                <div className={classes.buttonContainer}>
                                    <Button variant='outlined' className={classes.homepageButton} onClick={() => this.handleModalOpen()}>Connect online today</Button>
                                </div>  
                                <span className={classes.heroImgContainer}>
                                    <a href='/'><img src={AppleDownload} className={classes.heroDownloadImg} alt="Download from Apple Store" /></a>
                                </span>
                                <span className={classes.heroImgContainer}>
                                    <a href='/'><img src={GoogleDownload} className={classes.heroDownloadImg} alt="Download from Google Store" /></a>
                                </span>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <a href='/'><img src={img} className={classes.heroImg} alt="Patient smiling with mobile phone" /></a>
                        </Grid>
                        
                    </Grid>

                    </div>
            
            </div>
        )
    }
}

Hero = withRouter(Hero)
Hero = withStyles(home2Stylesheet)(Hero)
export default Hero;