import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import fbIcon from '../../images/socialMedia/facebook.png';
import instagramIcon from '../../images/socialMedia/instagram.png';
import twitterIcon from '../../images/socialMedia/twitter.png';
import googleIcon from '../../images/socialMedia/google+.png';
import whatsappIcon from '../../images/socialMedia/whatsapp.png';
import linkedinIcon from '../../images/socialMedia/linkedin.png';
import skypeIcon from '../../images/socialMedia/skype.png';

import {resultStylesheet } from '../../styles';

    class SocMedBox extends Component  {
        render() {
            const { classes, title } = this.props
            return (
                <div className={classes.socMedContainer}>
                    <span className={classes.socMedText}>&nbsp;{title}</span>
                    <span>
                        <img className={classes.socialIcon}  style={{ transition: 'all .4s ease'}} src={fbIcon} alt="facebook icon" />
                        <img className={classes.socialIcon}  style={{ transition: 'all .4s ease'}} src={twitterIcon} alt="twitter icon" />
                        <img className={classes.socialIcon}  style={{ transition: 'all .4s ease'}} src={instagramIcon} alt="instagram icon" />
                        <img className={classes.socialIcon}  style={{ transition: 'all .4s ease'}} src={whatsappIcon} alt="whatsappicon" />
                        <img className={classes.socialIcon}  style={{ transition: 'all .4s ease'}} src={googleIcon} alt="google icon" />
                    </span>
                </div>
            )
        }
    }

SocMedBox = withStyles(resultStylesheet)(SocMedBox)
export default SocMedBox