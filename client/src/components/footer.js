import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Logo from '../images/PDC_logo_square.png'
import phoneIcon from '../images/phone.png';
import mailIcon from '../images/mail.png';
import AppleDownload from '../images/AppleDownload.png';
import GoogleDownload from '../images/GoogleDownload.png';
import { PRIMARY_COLOR, MAXWIDTH } from '../themes'

const styles = (theme) => ({
    footerContainer: {
        padding: '45px 20px 15px 20px',
        marginTop: '60px',
        backgroundColor : 'lightgrey',
        borderTop: "2px solid",
        borderColor: PRIMARY_COLOR
    },
    footerCenter: {
        maxWidth: MAXWIDTH,
        padding: "0 20px 0 40px",
        margin: '0 auto',
    },
    footerLogo: {
        height: '90px',
        width: '90px',
        margin: '5px 20px 0 0',
        float: "left",
        [theme.breakpoints.down('xs')]: {
            
            display: "none"
        },
    },
    responsiveSection: {
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
            fontSize: "16px"
        },
    },
    footerText: {
        color: "#000",
        fontWeight: "bold",
        fontSize: "16px",
        [theme.breakpoints.down('md')]: {
            marginTop: "5px",
            fontSize: "14px"
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
            [theme.breakpoints.down('xs')]: {
            textAlign: "center",
            fontSize: "16px"
        },
        },
    },
    footerResponsiveText: {
        color: "#000",
        fontWeight: "bold",
        fontSize: "16px",
        [theme.breakpoints.down('md')]: {
            marginTop: "5px",
            fontSize: "13px"
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "16px"
        },
    },
    footerAppStore : {
        margin: '-8px auto 20px auto',
        fontWeight: "bold", 
        fontSize: "20px", 
        [theme.breakpoints.down('md')]: {
            margin: '0 auto'
        },
        [theme.breakpoints.down('sm')]: {
            textAlign: "center"
        },
    },
    footerDownloadImg: {
        padding: '15px 20px 15px 0',
        maxWidth: '225px',
        maxHeight: 'auto',
        [theme.breakpoints.down('md')]: {
            maxWidth: "165px",
            padding: "0 20px 0 0"
        }, 
        [theme.breakpoints.down('sm')]: {
            marginTop: "10px"
        },
    },
    
})

class Footer extends PureComponent {
    render() {
        const { classes } = this.props

        const RenderRights = props => 
            <div className={classes.responsiveSection}>
                <a href="/"><img src={Logo} className={classes.footerLogo} alt='PD Connect' /></a>
                <span className={classes.footerText}>
                    <span className={classes.footerResponsiveText}>© 2017-2018 PD Connect.</span><br />
                    All Rights Reserved. <br />
                    <a href='/' className={classes.footerText}>Terms & Conditions</a><br />
                    <a href='/' className={classes.footerText}>Privacy Policy</a>
                </span>
            </div>

        const RenderAddress = props => 
            <div className={classes.footerText}>
                123 Great Western Blv<br />
                Cleveland, Ohio 44123<br />
                <a href='tel:8003333333' className={classes.footerText}><img src={phoneIcon} alt="phone icon"/>(800)-333-3333</a><br />
                <a href='mailto:medmonitor.io@gmail.com' className={classes.footerResponsiveText}><img src={mailIcon} alt="mail icon"/>medmonitor.io@gmail.com</a>
            </div>

        const RenderDownloadBtns = props => 
            <div className={classes.footerAppStore}>
                Download the app:<br /> 
                <a href='/'><img src={AppleDownload} className={classes.footerDownloadImg} alt="Download from Apple Store" /></a>
                <a href='/'><img src={GoogleDownload} className={classes.footerDownloadImg} alt="Download from Google Store" /></a>
            </div>
        
        return (
            <footer className={classes.footerContainer}>
                <div className={classes.footerCenter}>

                    <Grid container spacing={16}>

                        <Grid item md={4} sm={7} xs={12}>
                            <RenderRights />
                        </Grid>

                        <Grid item md={3} sm={5} xs={12}>
                            <RenderAddress />
                        </Grid>

                        <Grid item md={5} sm={12} xs={12}>
                            <RenderDownloadBtns />
                        </Grid>

                    </Grid>
                    
                </div>
            </footer>

        )
    }
}


Footer = withStyles(styles)(Footer)
export default Footer;