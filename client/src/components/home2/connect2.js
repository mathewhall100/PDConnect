import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { home2Stylesheet } from '../../styles';
import PhysicianImg from '../../images/physician.jpg';
import PatientImg from '../../images/patient.jpg';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import fbIcon from '../../images/socialMedia/facebook.png';
import instagramIcon from '../../images/socialMedia/instagram.png';
import youtubeIcon from '../../images/socialMedia/youtube.png';
import twitterIcon from '../../images/socialMedia/twitter.png';

class Connects extends Component {
    state = {
        email: '',
        redirect: false,
        redirectTo: '',
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleRedirect = (page) => {
        this.setState({
            redirect: true,
            redirectTo: `${page}`
        })
    }
    render() {
        const { redirect, redirectTo } = this.state;
        const { classes } = this.props;
        if (redirect) {
            const url = `${redirectTo}`;
            return (
                <Redirect exact to={url} />
            )
        }
        return (
            <Grid container className={classes.homepageFixedWidthContent} >
                <Grid item md={1} lg={1} xs={1}></Grid>
                <Grid item md={10} lg={10} xs={10} > 
                    <div className={classes.HeroTitle}>
                        Connect with Us
                    </div>
                    <Grid container>
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
                                <Button variant='outlined' className={classes.homepageButton}>Subscribe </Button>
                            </div>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={1} lg={1} xs={1}></Grid>
            </Grid>
        )
    }
}
Connects = withStyles(home2Stylesheet)(Connects)
export default Connects;