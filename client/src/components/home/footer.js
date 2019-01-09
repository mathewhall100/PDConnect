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
                <div className={classes.footerCenter}>

                    <Grid container spacing={24}>

                        <Grid item md={4} xs={12}>

                                <div>
                                    <span style={{float: "left"}}><a href="/"><img src={Logo} className={classes.footerLogo} alt='PD Connect' /></a></span>
                                    <span >
                                        © 2017-2018 PD Connect.
                                        <br />
                                        All Rights Reserved.
                                        <br />
                                        <a href='/' style={{color: "black"}}>Terms & Conditions</a>
                                        <br />
                                        <a href='/' style={{color: "black"}}>Privacy Policy</a>
                                    </span>
                                </div>

                        </Grid>

                        <Grid item md={3} xs={12}>
                            <div style={{marginLeft: "10px", marginBottom: "20px"}}>
                                123 Great Western Blv<br />
                                Cleveland, Ohio 44123<br />
                                <a href='tel:8003333333'><img src={phoneIcon} />(800)-333-3333</a> <br />
                                <a href='mailto:medmonitor.io@gmail.com'><img src={mailIcon} />medmonitor.io@gmail.com</a>
                            </div>
                        </Grid>

                        <Grid item md={5} xs={12}>

                            <div className={classes.footerAppStore} style={{marginLeft: "10px", marginTop: "-8px", marginBottom: "20px", float: "right"}}>
                                <span style={{fontWeight: "bold", fontSize: "20px", textAlign: "left"}}>Download the app: </span>
                                <br />

                                <Grid container spacing={0}>
                                    <Grid item sm={6} xs={12}>
                                        <span className={classes.footerImgContainer}>
                                            <a href='/'><img src={AppleDownload} className={classes.footerDownloadImg} alt="Download from Apple Store" /></a>
                                        </span>
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <span className={classes.footerImgContainer} >
                                            <a href='/'><img src={GoogleDownload} className={classes.footerDownloadImg} alt="Download from Google Store" /></a>
                                        </span>
                                    </Grid>
                                </Grid>

                            </div>
                        </Grid>

                    </Grid>

                </div>
            </footer>

            // <footer className={classes.footerContainer}>
            //     <Grid container>
            //         <Grid md={1}xs={1}></Grid>
            //         <Grid md={10}xs={10}>
            //             <Grid container>
            //                 <Grid md={4} xs={12}>
            //                     <a href="/"><img src={Logo} className={classes.footerLogo} alt='PD Connect' /></a>
            //                     <br/>
            //                     © 2017-2018 PD Connect. All Rights Reserved. <br/>
            //                     <a href='/'>Privacy Policy</a>
            //                 </Grid>
            //                 <Grid md={4}xs={12}><br/><br/>
            //                     <img src={phoneIcon} />(800)-333-3333 <br /><br/>
            //                     <img src={mailIcon} />medmonitor.io@gmail.com
            //                 </Grid>
            //                 <Grid md={4} xs={12}>
            //                     <Grid container className={classes.footerAppStore}>
            //                         <Grid item xs={6}>
            //                             <span className={classes.footerImgContainer}>
            //                                 <a href='/'><img src={AppleDownload} className={classes.footerDownloadImg} alt="Download from Apple Store" /></a>
            //                             </span><br/>
            //                         </Grid>
            //                         <Grid item xs={6}>
            //                             <span className={classes.footerImgContainer}>
            //                                 <a href='/'><img src={GoogleDownload} className={classes.footerDownloadImg} alt="Download from Google Store" /></a>
            //                             </span>
            //                         </Grid>
            //                     </Grid>
            //                 </Grid>
            //             </Grid>
            //         </Grid>
            //         <Grid md={1} xs={1}></Grid>
            //     </Grid>

            // </footer>
        )
    }
}


Footer = withStyles(home2Stylesheet, { withTheme: true })(Footer)
export default Footer;