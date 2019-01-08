import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import fbIcon from '../../images/socialMedia/facebook.png';
import instagramIcon from '../../images/socialMedia/instagram.png';
import twitterIcon from '../../images/socialMedia/twitter.png';
import googleIcon from '../../images/socialMedia/google+.png';
import whatsappIcon from '../../images/socialMedia/whatsapp.png';
import linkedinIcon from '../../images/socialMedia/linkedin.png';
import skypeIcon from '../../images/socialMedia/skype.png';
import { PRIMARY_COLOR } from '../../themes.js'

const style = () => ({

    socMedContainer: {
        backgroundColor: "#F8F8F8",
        border: "2px solid lightgrey",
        borderRadius: "5px",
        padding: "10px 0 20px 20px",
    },
    socMedText: {
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: 'muli',
        position: "relative",
        top: "7px",
        color: PRIMARY_COLOR,
    },
    socialIcon : {
        height : '30px',
        width : '30px',
        borderRadius : '3px',
        margin : '10px 5px 0 5px',
        transition: 'all .4s ease',
        '&:hover': {
            height: "36px",
            width: "36px",
            cursor: "pointer",
            margin: "7px 2px -3px 2px"
        }
    },
})

class SocMedBox extends Component  {
    render() {
        const { classes, title } = this.props
        const socIcons = [
            {icon: fbIcon, alt: "facebook icon"},
            {icon: twitterIcon, alt: "twitter icon"},
            {icon: instagramIcon, alt: "insragram icon"},
            {icon: whatsappIcon, alt: "whatsapp icon"},
            {icon: googleIcon, alt: "google icon"}
    ]

        const SocialIcon = props =>
            <React.Fragment>
                <img className={classes.socialIcon} src={props.icon} alt={props.alt} />
            </React.Fragment>

        return (
            <div className={classes.socMedContainer}>
                <span className={classes.socMedText}>&nbsp;{title}</span>
                {socIcons.map((icon, idx) => <SocialIcon key={idx} icon={icon.icon} alt={icon.alt} />) }
            </div>
        )
    }
}

SocMedBox = withStyles(style)(SocMedBox)
export default SocMedBox