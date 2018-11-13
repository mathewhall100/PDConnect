import Jumbotron from './images/rawpixel-600792-unsplash.jpg';
import image from './images/jess-watters-701054-unsplash.jpg';
import { white } from 'ansi-colors';

const PRIMARY_COLOR = '#2F5597';
const PRIMARY_COLOR_HOVER = '#4d6591';
const PRIMARY_COLOR_GRADIENT_FADE_DOWN = 'linear-gradient(to bottom, #2f5597 0%, #ffffff 100%)'
const SECONDARY_COLOR = '#BF9000';
const SECONDARY_COLOR_GRADIENT_FADE_DOWN = 'linear-gradient(to bottom, #bf9000 0%, #ffffff 100%)'
const MAXWIDTH = '1480px';

export const userStylesheet = theme => ({
    root: {
        maxWidth: MAXWIDTH,
        margin: 'auto',
    },
    title: {
        fontSize: '35px',
        fontWeight: 'bold',
        color : PRIMARY_COLOR,
        lineHeight: '2',
    },
    componentBox : {
        height: "auto",
        margin: "20px auto",
        border: "1px solid lightgrey",
        padding: "30px 30px 30px 30px",
        fontFamily : 'Muli'
    },
    buttonContainer : {
        width : "100%",
        paddingTop : '5%'
    },
    backButton : {
        backgroundColor : 'white',
        width: '80%',
        color: 'rgb(225, 0, 80)',
        '&:hover': {
            color: 'white',
            backgroundColor:'rgb(225, 0, 80)',
        }
    },
    nextButton : {
        backgroundColor: PRIMARY_COLOR,
        width: '80%',
        color: 'white',
        '&:hover': {
            color: PRIMARY_COLOR
        }
    },
    doneIcon: {
        fontSize: "14px",
        color: "green",
        position: "relative",
        top: "20px",
        left: "10px"
    },
    iconBtn : {
        '&:hover': {
            color: "darkblue",
            backgroundColor: 'initial !important',
        },
    },
    iconHover : {
        fontSize: "28px",
        '&:hover': {
            color: "darkblue",
            backgroundColor : 'initial !important',
        },
    },
    hr: {
        height: "1px",
        color: "lightgrey",
        opacity: 0.5
    },
    errorText: {
        fontSize: "15px",
        color: "red",
        position: "relative",
        left: "-45px",
        top: "32px"
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 40,
            backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[5],
                    padding: theme.spacing.unit * 4,
    },
})
export const stylesheet = theme => ({
    parallax : {
        backgroundImage: `url(${image})`,
        backgroundAttachment : 'fixed',
        backgroundPosition : 'center',
        backgroundRepeat : 'no-repeat',
        backgroundSize : 'cover',
        minHeight : '500px',
        maxHeight : '500px',
        maxWidth : '100vw !immportant',
    },
    parallaxPromise : {
        backgroundImage: `url(${Jumbotron})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '500px',
        maxHeight: '500px',
        maxWidth: '100vw !immportant',
        
    },
    homepageFixedWidthContent : {
        maxWidth : MAXWIDTH,
        margin : 'auto',
    },
    loginBtn: {
        width: "550px",
        height: "30px",
        backgroundColor: "white",
        border: "2px solid grey",
        borderRadius: "10px",
        fontSize: "14px"
    },
    homepageHeader : {
        paddingTop : '25px',
        display: 'block',
        fontSize: '30px',
        color: PRIMARY_COLOR,
        textAlign : 'center',
        fontWeight : 'bold',
        fontFamily : 'Helvetica',
    },
    heroParallax : {
        minHeight: '650px',
        position : 'relative',
        backgroundSize : 'cover',
    },
    hero: {
        paddingTop: '20px',
        paddingBottom: '20px',
        display: 'contents',
        position: 'absolute',
    },
    heroImg: {
        width: '100%',
    },
    heroTitle: {
        position: 'absolute',
        top: '15%',
        right: '10%',
        fontSize: '34px',
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
        borderRadius: '22px',
        padding: '15px 40px',
        backgroundColor: 'rgba(164, 164, 164, 0.2)',
    },
    heroList: {
        color: SECONDARY_COLOR,
        fontSize: '18px',
        verticalAlign: 'middle',
    },
    
    promise: {
        paddingTop: '20px',
        paddingBottom: '20px',
        display: 'contents',
        position: 'absolute',
    },
    promiseContainer : {
        position: 'absolute',
        marginLeft: 'auto',
        marginRight : 'auto',
        maxWidth : MAXWIDTH,
        top: "12%",
        left : 0,
        right : 0,
    },
    promiseHeader: {
        color: PRIMARY_COLOR,
    },
    promiseSecondHeader: {
        color: SECONDARY_COLOR,
    },
    promiseListItem : {
        display: 'block',
        textAlign : 'center',
    },
   
    
    promiseDescription: {
        display: 'block',
        padding: '15px 50px 0px 50px',
        display: 'block',
    },
    connect: {
        paddingTop: '50px',
        paddingBottom: '20px',
        textAlign: 'center'
    },
    connectItem: {

    },
    connectHeader: {
        display: 'block',
        fontSize: '30px',
        color: PRIMARY_COLOR,
    },
    connectDescription: {
        paddingTop: '5px',
    },
    connectImgContainer: {
        width: '100%',
    },
    connectImg: {
        width: '80%',
    },
    connectDownloadImg: {
        width: '50%',
        padding: '30px',
    },
    buttonStyle: {
        backgroundColor: PRIMARY_COLOR,
        width: '80%',
        marginTop: '67px',
        color: 'white',
        '&:hover': {
            color: PRIMARY_COLOR
        }
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: '120px',
        height: '120px',
    },
    avatarContainer : {
        textAlign : '-webkit-center',
    },
    aboutHeader: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        backgroundColor: theme.palette.background.default,
    },
    aboutImg: {
        height: 255,
        display: 'block',
        maxWidth: 400,
        width: '100%',
    },
    aboutContainer : {
        paddingTop: "3%",
    },
    aboutContent : {
        backgroundColor: 'rgba(164, 164, 164, 0.2)',
        padding : '3% !important',
    },
    aboutImgContainer : {
        padding : '0px 12px 0px 12px !important',
        textAlign : 'center',
    },
    treatmentImg : {
        maxWidth: "80%"
    },
    buttonContainer : {
        width : "100%",
        paddingTop : '5%'
    },
    aboutButton : {
        width : "100%",
        backgroundColor : PRIMARY_COLOR,
        color : "white",
        '&:hover': {
            color: PRIMARY_COLOR
        }
    },
    footerContainer : {
        paddingTop : '40px',
        backgroundColor: PRIMARY_COLOR,
        color : "white",
        paddingBottom : '10px',
        marginTop : '60px'
    }
    
});
