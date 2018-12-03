import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { home2Stylesheet, SECONDARY_COLOR } from '../../styles';
import Button from '@material-ui/core/Button';
import AppleDownload from '../../images/AppleDownload.png';
import GoogleDownload from '../../images/GoogleDownload.png';
import img from '../../images/PDImage1.jpg';

class Hero extends Component {

    state = {
        redirectAddress : '/user/user_start',
    };

    handleConnectToday() {
        this.props.history.push(this.state.redirectAddress)
    }

    render () {

        const { classes } = this.props

        return(
            <div style={{ background: 'linear-gradient(rgba(255,255,255,0) 10%, rgba(240,240,240,1))'}}>

                <Grid container spacing={24} className={classes.homepageContainer}>
                
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div style={{width: "80%", margin: "0 auto"}}>
                            <span className={classes.heroImgContainer}>
                                <a href='/'><img src={img} className={classes.heroImg} alt="Patient with mobile device" /></a>
                            </span>

                                    <span className={classes.heroImgContainer}>
                                        <a href='/'><img src={AppleDownload} className={classes.heroDownloadImg} alt="Download from Apple Store" /></a>
                                    </span>

                                    <span className={classes.heroImgContainer} >
                                        <a href='/'><img src={GoogleDownload} className={classes.heroDownloadImg} alt="Download from Google Store" /></a>
                                    </span>

                        </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div style={{width: "90%", margin: "50px auto 0 auto", textAlign: "center"}}>
                            <div className={classes.HeroTitle}>
                                PD Connect</div>
                            <div className={classes.description}>
                                Connecting patients with Parkinson disease <br />to resources for a healthier life. <br />
                            </div>
                            <br />
                            <span className="rotating" style={{fontSize: "44px", color: SECONDARY_COLOR, fontWeight: "bold", fontFamily: "muli"}}>
                                Treatments,
                                Clinicial trials,
                                Focus groups,
                                Knowledge,
                                More...
                            </span> 
                            <br/>
                            <div className={classes.buttonContainer}>
                                <Button variant='outlined' className={classes.homepageButton} onClick={() => this.handleConnectToday()}>Connect online today</Button>
                            </div>
                        </div>
                    </Grid>

                </Grid>  
             </div>
        )
    }
}


Hero = withRouter(Hero)
Hero = withStyles(home2Stylesheet)(Hero)
export default Hero;