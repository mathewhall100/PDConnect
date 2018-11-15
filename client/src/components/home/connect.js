import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { stylesheet } from '../../styles';
import PhysicianImg from '../../images/physician.jpg';
import PatientImg from '../../images/patient.jpg';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import fbIcon from '../../images/socialMedia/facebook.png';
import instagramIcon from '../../images/socialMedia/instagram.png';
import youtubeIcon from '../../images/socialMedia/youtube.png';
import twitterIcon from '../../images/socialMedia/twitter.png';

class Connects extends Component {
    state={
        email : '',
        redirect : false,
        redirectTo : '',
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleRedirect = (page)=>{
        this.setState({
            redirect : true,
            redirectTo : `${page}`
        })
    }
    render() {
        const { redirect, redirectTo } = this.state;
        const { classes } = this.props;
        if(redirect){
            const url = `${redirectTo}`;
            return(
                <Redirect exact to={url} />
            )
        }
        return (
            <Grid container className={classes.homepageFixedWidthContent}>
                <hr />
                <Grid container spacing={24} className={classes.connectItem}>
                    
                    <Grid item xs={12} className={classes.homepageHeader}>
                        Connect with Us
                        <hr />
                    </Grid>
                    
                </Grid>
                <Grid container spacing={24}>
                    <Grid item md={4} lg={4} xs={12}>
                        <div className={classes.connectHeader}> 
                            Subscribe to Connect PD 
                            <Grid item xs={12}>
                                <img className={classes.socialIcon} src={fbIcon} alt="facebook icon" />
                                <img className={classes.socialIcon} src={twitterIcon} alt="twitter icon" />
                                <img className={classes.socialIcon} src={instagramIcon} alt="instagram icon" />
                                <img className={classes.socialIcon} src={youtubeIcon} alt="youtube icon" />
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item md={5} lg={5} xs={10} className={classes.connectDescriptionContainer}>
                        <div className={classes.description}>
                            Join us to learn more about the latest Parkinsons disease treatment from pharmaceutical companies world wide
                        </div>
                    </Grid>
                    <Grid item md={3} lg={3} xs={12} className={classes.connectRight}>
                        <div className={classes.connectSubscribe}>
                            <TextField
                                id="outlined-e-mail"
                                label="e-mail address"
                                className={classes.textField}
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                                margin="normal"
                                variant="outlined"
                            />
                            <div className={classes.connectButtonContainer}>
                                <Button variant='outlined' className={classes.connectButton}>Subscribe </Button>
                            </div>
                        </div>
                        
                    </Grid>
                </Grid>
                {/* 
                <Grid item xs={12}>
                    <div className={classes.title}> Let's get started </div>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Button variant='outlined'> Let's get started </Button>
                        </Grid>
                    </Grid>
                    
                </Grid>
                <Grid item xs={3} className={classes.connectItem}>
                    <div className={classes.connectHeader}>Connect with us!</div>
                    <div className={classes.connectImgContainer}>
                        <img src={PhysicianImg} className={classes.connectImg} alt="Create Account" />
                    </div>
                    <Grid item xs={12} className={classes.buttonContainer}>
                        <Button variant="outlined" color='primary' size='large' className={classes.buttonStyle} onClick={()=>{this.handleRedirect('/user/user_about')}}>Get Started</Button>
                    </Grid>
                    
                </Grid>
                <Grid item xs={3} className={classes.connectItem}>
                    <div className={classes.connectHeader}>Create an account</div>
                    <div className={classes.connectImgContainer}>
                        <img src={PatientImg} className={classes.connectImg} alt="Connect" />
                    </div>
                    <Grid item xs={12} className={classes.buttonContainer}>
                        <Button variant="outlined" color='primary' size='large' className={classes.buttonStyle}>Create Account</Button>
                    </Grid>
                    
                </Grid>
                <Grid item xs={3} className={classes.connectItem}>

                </Grid>
                */}
            </Grid>
        )
    }
}
Connects = withStyles(stylesheet)(Connects)
export default Connects;