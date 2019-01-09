import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HomepageButton from './homepageButton'
import AppleDownload from '../../images/AppleDownload.png';
import GoogleDownload from '../../images/GoogleDownload.png';
import img from '../../images/PDImage1.jpg';
import { SECONDARY_COLOR } from '../../themes'

const styles = (theme) => ({
    heroImgContainer: {
        width: "80%",
        margin: "10px auto 0 auto",
        [theme.breakpoints.down('sm')]: {
            padding: "0 0 0 40px"
        },
    },   
    heroImg : {
        borderColor :'solid 1px grey',
        borderRadius: " 10px",
        width : '90%',
    },
    heroDownloadImg: {
        width : '43%',
        maxHeight : 'auto', 
        margin: "30px 20px -10px 0"
    },
    heroTextContainer: {
        width: "90%", 
        margin: "0 auto", 
        textAlign: "center"
    },
    heroTitle : {
        fontSize : '76px',
        color : 'black',
        fontWeight : 'bolder',
        lineHeight : '1.5',
        fontFamily: "muli"
    },    
    heroDescription : {
        fontSize : '22px',
    },
    heroRotatingText: {
        fontSize: "44px", 
        color: SECONDARY_COLOR, 
        fontWeight: "bold", 
        fontFamily: "muli"
    }
})

class Hero extends Component {

    render () {

        const { classes } = this.props

        return(
            <Grid container spacing={24} >
            
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className={classes.heroImgContainer}>
                        <a href='/'><img src={img} className={classes.heroImg} alt="Patient with mobile device" /></a>
                        <a href='/'><img src={AppleDownload} className={classes.heroDownloadImg} alt="Download from Apple Store" /></a>
                        <a href='/'><img src={GoogleDownload} className={classes.heroDownloadImg} alt="Download from Google Store" /></a>
                    </div>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className={classes.heroTextContainer}>
                        <div className={classes.heroTitle}>
                            PD Connect</div>
                        <div className={classes.heroDescription}>
                            Connecting patients with Parkinson disease <br />to resources for a healthier life. <br />
                        </div>
                        <br />
                        <span className={classes.heroRotatingText}>
                            <span className="rotating" >
                                Treatments,
                                Clinicial trials,
                                Focus groups,
                                Knowledge,
                                More...
                            </span> 
                        </span>
                        <br/>
                        <br />
                        <HomepageButton type="link" targetUrl="user/user_start" text="CONNECT ONLINE TODAY" />
                    </div>
                </Grid>

            </Grid>  
         )
    }
}

Hero = withRouter(Hero)
Hero = withStyles(styles)(Hero)
export default Hero