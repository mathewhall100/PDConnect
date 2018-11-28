import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { home2Stylesheet } from '../../styles';
import Grid from '@material-ui/core/Grid';
import Logo from '../../images/PDC_logo_square.png'
import phoneIcon from '../../images/phone.png';
import mailIcon from '../../images/mail.png';
import AppleDownload from '../../images/AppleDownload.png';
import GoogleDownload from '../../images/GoogleDownload.png';

class Footer extends Component {
    render() {
        const { classes } = this.props;

        return (
            <footer className={classes.footerContainer}>
                <Grid container>
                    <Grid md={1}xs={1}></Grid>
                    <Grid md={10}xs={10}>
                        <Grid container>
                            <Grid md={4} xs={12}>
                                <a href="/"><img src={Logo} className={classes.footerLogo} alt='PD Connect' /></a>
                                <br/>
                                © 2017-2018 PD Connect. All Rights Reserved. <br/>
                                <a href='/'>Privacy Policy</a>
                            </Grid>
                            <Grid md={4}xs={12}><br/><br/>
                                <img src={phoneIcon} />(800)-333-3333 <br /><br/>
                                <img src={mailIcon} />medmonitor.io@gmail.com
                            </Grid>
                            <Grid md={4} xs={12}>
                                <Grid container className={classes.footerAppStore}>
                                    <Grid item xs={6}>
                                        <span className={classes.footerImgContainer}>
                                            <a href='/'><img src={AppleDownload} className={classes.footerDownloadImg} alt="Download from Apple Store" /></a>
                                        </span><br/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <span className={classes.footerImgContainer}>
                                            <a href='/'><img src={GoogleDownload} className={classes.footerDownloadImg} alt="Download from Google Store" /></a>
                                        </span>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid md={1} xs={1}></Grid>
                </Grid>

            </footer>
        )
    }
}


Footer = withStyles(home2Stylesheet, { withTheme: true })(Footer)
export default Footer;