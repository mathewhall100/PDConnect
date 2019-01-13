import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import fbIcon from '../../images/socialMedia/facebook.png';
import instagramIcon from '../../images/socialMedia/instagram.png';
import twitterIcon from '../../images/socialMedia/twitter.png';
import googleIcon from '../../images/socialMedia/google+.png';
import whatsappIcon from '../../images/socialMedia/whatsapp.png';
import linkedinIcon from '../../images/socialMedia/linkedin.png';
// import skypeIcon from '../../images/socialMedia/skype.png';
import { PRIMARY_COLOR } from '../../themes.js'

const style = () => ({

    container: {

    },
    text: {
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: 'muli',
        marginRight: "10px",
        color: PRIMARY_COLOR,
    },
    icon : {
        height : '30px',
        width : '30px',
        margin : '0 5px 3px 5px',
        borderRadius : '3px',
        transition: 'all .4s ease',
        '&:hover': {
            height: "36px",
            width: "36px",
            margin: "-3px 2px -3px 2px",
            cursor: "pointer"
        }
    },
})

class SocMedBox extends PureComponent  {
    render() {
        const { classes, title } = this.props
        const socIcons = [
            {icon: fbIcon, alt: "facebook icon"},
            {icon: twitterIcon, alt: "twitter icon"},
            {icon: instagramIcon, alt: "insragram icon"},
            {icon: whatsappIcon, alt: "whatsapp icon"},
            {icon: googleIcon, alt: "google icon"},
            {icon: linkedinIcon, alt: "linkedin icon"}
        ]

        return (
            <div className={classes.container}>
                <span className={classes.text}>&nbsp;{title}</span>
                {socIcons.map((icon, idx) => <img key={idx} className={classes.icon} src={icon.icon} alt={icon.alt} /> )}
            </div>
        )
    }
}

SocMedBox = withStyles(style)(SocMedBox)
export default SocMedBox