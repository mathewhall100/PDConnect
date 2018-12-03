import pillBottlesImg from './images/pill_bottle.jpg';
import tabletReportHandsImg from './images/tablet_report_hands.jpg';

{/*import heartShapeImg from './images/heartshapepills.jpeg';
import eldHighFiveImg from './images/elder_highfive.jpg';
import elderLaptopMilkImg from './images/elder_laptop_milk.jpeg';
import elderTechImg from './images/elder_tech.jpeg'
import patientImg from './images/patient.jpg';
import patientStressBallImg from './images/patientStressBall.jpeg';
import physicianShowReportImg from './images/physician_show_report.jpg';

import pillsImg from './images/pills.jpg';
import reportImg from './images/report.jpg';
import stethoscopeImg from './images/stethoscope.jpg';
const SECONDARY_COLOR_GRADIENT_FADE_DOWN = 'linear-gradient(to bottom, #bf9000 0%, #ffffff 100%)'
const PRIMARY_COLOR_GRADIENT_FADE_DOWN = 'linear-gradient(to bottom, #2f5597 0%, lightgrey 100%)'
*/}


export const PRIMARY_COLOR = '#2F5597';
const PRIMARY_COLOR_HOVER = '#4d6591';

export const SECONDARY_COLOR = '#BF9000';

const MAXWIDTH = '1280px';
const MINHEIGHT = '920px';

export const QUESTION_BUTTON_DEFAULT_COLOR = 'grey'
export const QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR = '#BF9000';
export const QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR = "black"
export const WARNING_COLOR = "red"


export const userStylesheet = theme => ({
    root: {
        maxWidth: MAXWIDTH,
        minHeight : MINHEIGHT,
        margin: 'auto',
        padding: "0 20px 40px 40px"
    },

    stepperContainer : {
        width : '100%',
        marginRight: "40px",
        marginTop: "40px",
        fontFamily : 'Muli',
    },
    stepperCounter : {
        lineHeight: 2,
    },
    stepperPageName : {
        fontWeight : 'bold',
        lineHeight: 2,
    },
    stepperSubtitle: {
        lineHeight: 1.,
        fontSize: "17px"
    },
    stepperImg : {
        height : '50px',
        width : '50px',
    },
    spacingContainer: {
        height: "100px",
    },
    componentBox : {
        marginTop: "60px",
        height: "auto",
        // borderLeft: "1px solid rgb(211,211,211, 0.5)",
        borderLeft: "1px solid rgb(191, 144, 0, 0.5)",
        paddingLeft: "30px",
        fontFamily : 'Muli'
    },
    labelText: {
        fontSize: "23px"
    },
    selectLabel: {
        height: "45px",
        color: "black",
        fontWeight: "bold",
        backgroundColor: "white !important",
    },
    title: {
        fontSize: '32px',
        fontWeight: 'bold',
        color : PRIMARY_COLOR,
        lineHeight: '1.6',
    },
    subtitle: {
        fontSize: '20px',
        margin: "20px 0 20px 0",
    },
    sectionTitle: {
        fontStyle: "italic",
    },
    questionContainer: {
        minHeight: "80px",
        marginBottom: "10px"
    },
    questionHead: {
        fontSize: "17px",
        fontWeight: "bold",
        // lineHeight: 1.5
    },
    questionText: {
        fontSize: "18px",

    },
    headerQuestion: {
        marginTop: "15px",
        fontSize: "18px",
        fontWeight: "bold"
    },
    questionButton: {
        float: "right",
        width: "50px",
        height: "60px",
        backgroundColor: "white",
        border: "4px solid",
        borderColor: QUESTION_BUTTON_DEFAULT_COLOR,
        borderRadius: "50%",
        marginLeft: "20px",
        position: "relative",
        top: "5px",
         '&:hover': {
             backgroundColor: "white",
         },
         '&:focus': {
             outline : "none !important"
         },
         '&:active': {
             outline: "none !important"
         }
    },
    questionButtonText: {
        fontWeight:"bold",
        color: QUESTION_BUTTON_DEFAULT_COLOR
    },
    helpButton: {
        position: "relative",
        top: "-5px",
        margin: 0,
        padding: 0,
        backgroundColor: "white",
        '&:hover': {
            backgroundColor: "white"
        },
        '&:focus': {outline: 0}
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
    userNavButton : {
        textDecoration: "none",
        backgroundColor: PRIMARY_COLOR,
        borderColor: "#000080",
        border: "2px solid",
        width: '80%',
        color: 'white',
        fontWeight: "bold",
        fontSize: "14px",
        '&:hover': {
            color: PRIMARY_COLOR,
            backgroundColor: "lightgrey",
            border: "2px solid",
            borderColor: PRIMARY_COLOR
        }
    },

    userNavButtonRight : {
        backgroundColor: PRIMARY_COLOR,
        borderColor: "#000080",
        border: "2px solid",
        borderradius: "6px",
        marginTop: "15px",
        padding: "10px",
        width: '100%',
        color: 'white',
        fontWeight: "bold",
        fontSize: "14px",
        '&:hover': {
            color: PRIMARY_COLOR,
            backgroundColor: "lightgrey",
            border: "2px solid",
            borderColor: PRIMARY_COLOR
        },
        '&:disabled' : {
            color : "grey",
            backgroundColor : 'lightgrey',
            borderColor : 'grey',
        }
    },
    doneOutlineIcon: {
        fontSize: "36px",
        color: "#eeeeee",
        '&:hover': {
            color: QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR
        },
    },
    doneIcon: {
        fontSize: "48px",
        color: QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR,
        padding: 0,
        margin: -6
    },
    helpIcon : {
        fontSize: "28px",
        '&:hover': {
            color: "darkblue",
            backgroundColor: 'initial !important',
        },
    },
    closeIcon: {
        fontSize: "44px",
        color: QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR,
        padding: 0,
        marginTop: -6
    },
    hr: {
        height: "1px",
        color: "lightgrey",
        opacity: 0.8,
        marginRight: "24px"
    },
    errorText: {
        fontSize: "15px",
        color: "red",
        position: "relative",
        left: "-45px",
        top: "30px"
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 80,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
    treeContainer: {
        width: "800px",
        height: "500px",
        position: "relative",
     },
    treeBtn: {
        width: "150px",
        height: "60px",
        backgroundColor: "white",
        border: "2px solid grey",
        borderRadius: "10px",
        fontSize: "15px",
        fontWeight: "bold",
        position: "absolute",
        '&:hover': {
            backgroundColor: "lightgrey",
        },
     },
    treeLinkHorizontal: {
        width: "120px",
        backgroundColor: "lightgrey",
        position: "absolute",
        zIndex: -100
    },
    treeLinkVertical: {
        width: "5px",
        backgroundColor: "lightgrey",
        position: "absolute",
        zIndex: -100
    },
    profileSectionHeader: {
        marginTop: "10px",
        fontSize: "18px",
        fontWeight: "bold",
    },
    profileBoxButton: {
        backgroundColor: "white",
        color: 'black',
        fontWeight: "bold",
        fontSize: "14px",
        '&:hover': {
            color: SECONDARY_COLOR,
            // borderBottom: "2px solid",
            // borderColor: SECONDARY_COLOR,
            fontWeight: "bold",
            cursor : 'pointer',
        }
    },
    profileTermsButton: {
        backgroundColor: "#EEE",
        width: '60px',
        color: 'black',
        fontWeight: "bold",
        fontSize: "14px",
        border: "2px solid",
        borderColor: "grey",
        borderRadius: '3px',
        padding: '5px 10px 5px 10px',
        margin: "10px",
        '&:hover': {
            cursor : 'pointer',
            color: PRIMARY_COLOR,
            backgroundColor: "lightgrey",
            border: "2px solid",
            borderColor: PRIMARY_COLOR,
            fontWeight: "bold",
        }
    },
    listItems: {
        fontSize: "17px",
        fontWeight: "bold",
        lineHeight: 2
    },
    startPageButton: {
        backgroundColor: PRIMARY_COLOR,
        borderColor: "#000080",
        border: "2px solid",
        borderRadius: "6px",
        margin: "10px",
        padding: "10px",
        color: 'white',
        fontWeight: "bold",
        fontSize: "18px",
        '&:hover': {
            color: PRIMARY_COLOR,
            backgroundColor: "lightgrey",
            border: "2px solid",
            borderColor: "#000080"
        }
    },
    startPageButton2: {
        backgroundColor: "white",
        borderColor: "#000080",
        border: "2px solid",
        borderRadius: "6px",
        margin: "10px",
        padding: "6px",
        color: 'grey',
        fontWeight: "bold",
        fontSize: "16px",
        '&:hover': {
            color: PRIMARY_COLOR,
            backgroundColor: "lightgrey",
            border: "2px solid",
            borderColor: "#000080"
        }
    }

})

export const resultStylesheet = theme => ({
    root: {
        maxWidth: MAXWIDTH,
        minHeight : MINHEIGHT,
        margin: 'auto',
        padding: "0 40px 40px 40px"
    },
    appBar: {
        width: "100%",
        height: "60px",
        // backgroundColor: PRIMARY_COLOR,
        // backgroundImage: PRIMARY_COLOR_GRADIENT_FADE_DOWN,
        marginBottom: "30px",
        padding: "10px 0 20px 0",
        color: PRIMARY_COLOR,
        fontSize: "28px",
        fontWeight: "bold",
        // borderRadius: "5px"
    },
    tabBar: {
        height: "80px",
        backgroundColor: "#eeeeee"
    },
    title: {
        fontSize: '26px',
        fontWeight: 'bold',
        color : PRIMARY_COLOR,
        lineHeight: '1.6',
        textAlign: "center",
    },
    subtitle: {
        fontSize: '18px',
        fontWeight: "bold",
        lineHeight: "26px",
        margin: "20px",
    },
    tabTitle: {
        fontSize: '22px',
        fontWeight: 'bold',
        lineHeight: '1.6',
        textAlign: "center",
        padding: "10px",
    },
    resultContainer: {
        minHeight: "865px",
        padding: "30px",
        border: "2px solid lightgrey",
        borderRadius: "0 5px 5px 5px",
        backgroundColor: "#F8F8F8",
    },
    tabBar: {
        position: "relative",
        top: "-10px",
        fontSize: "16px",
        fontWeight: "bold"
    },
    tabButtonLeft: {
        padding: "12px 34px 12px 20px",
        borderTop: "2px solid lightgrey",
        borderLeft: "2px solid lightgrey",
        borderRight: "1px solid lightgrey",
        borderBottom: "none",
        borderRadius: "5px 5px 0 0",
        backgroundColor: "white",
        position: "relative",
        top: "1px",
        '&:hover': {
            cursor: "pointer",
            color: PRIMARY_COLOR
        }
    },
    tabButtonMiddle: {
        padding: "12px 34px 12px 20px",
        borderTop: "2px solid lightgrey",
        borderLeft: "1px solid lightgrey",
        borderRight: "1px solid lightgrey",
        borderBottom: "none",
        borderRadius: "5px 5px 0 0",
        backgroundColor: "white",
        position: "relative",
        top: "1px",
        '&:hover': {
            cursor: "pointer",
            color: PRIMARY_COLOR
        }
    },
    tabButtonRight: {
        padding: "12px 34px 12px 20px",
        borderTop: "2px solid lightgrey",
        borderLeft: "1px solid lightgrey",
        borderRight: "2px solid lightgrey",
        borderBottom: "none",
        borderRadius: "5px 5px 0 0",
        backgroundColor: "white",
        position: "relative",
        top: "1px",
        '&:hover': {
            cursor: "pointer",
            color: PRIMARY_COLOR
        }
    },
    tabButtonSelected: {
        padding: "12px 34px 12px 20px",
        borderTop: "2px solid lightgrey",
        borderLeft: "2px solid lightgrey",
        borderRight: "2px solid lightgrey",
        borderBottom: "2px solid #F8F8F8",
        borderRadius: "5px 5px 0 0",
        backgroundColor: "#F8F8F8",
        color: PRIMARY_COLOR,
        position: "relative",
        top: "1px",
        '&:hover': {
            cursor: "pointer"
        }
    },
    badge: {
        position: "relative",
        top: "-10px",
        left: "17px"
    },
    resultBox: {
        border: "1px solid grey",
        borderRadius: "5px",
        margin: "20px",
    },
    resultTextBox: {
        minHeight: "130px"
    },
    resultTitle: {
        fontWeight: "bold",
        margin: "20px",
        fontSize: "20px"
    },
    resultText: {
        margin: "20px",
        fontSize: "18px"
    },
    button: {
        width: "190px",
        height: "30px",
        paddingTop: '6px',
        border: "2px solid grey",
        borderRadius: "10px",
        fontSize: "14px",
        fontWeight: "bold",
        backgroundColor: "lightgrey",
        color: PRIMARY_COLOR,
        '&:hover': {
            backgroundColor: PRIMARY_COLOR,
            fontWeight: "bold",
            color: "white"
        }
    },
    resultBackButton: {
        float: "right",
        paddingTop: '6px',
        width: "100px",
        height: "30px",
        border: "2px solid #000080",
        borderRadius: "5px",
        fontSize: "14px",
        fontWeight: "bold",
        backgroundColor: PRIMARY_COLOR,
        color: "white",
        '&:hover': {
            border: "2px solid #000080",
            backgroundColor: "lightgrey",
            fontWeight: "bold",
            color: "#000080"
        }
    },
    printButton: {
        float: "right",
        margin: "-20px -20px 0 0",
        color: "black",
        fontWeight: "bold",
        backgroundColor: "lightgrey",
        '&:hover': {
            backgroundColor: "#bbbbbb",
        }
    },
    emailContainer: {
        border: "2px solid lightgrey",
        borderRadius: "5px",
        backgroundColor: "#F8F8F8",
        padding: "20px 10px 20px 25px",
        marginBottom: "40px"
    },
    accountContainer: {
        border: "2px solid lightgrey",
        borderRadius: "5px",
        backgroundColor: "#F8F8F8",
        padding: "20px 0 20px 25px",
        marginBottom: "40px"
    },
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
        '&:hover': {
            height: "36px",
            width: "36px",
            cursor: "pointer",
            margin: "7px 2px -3px 2px"

        }
    },
    serviceIcon: {
        maxWidth: '50px',
        maxHeight: '50px',
        margin: '5px',
    },
    infoTitle: {
        textAlign: "center",
        textWeight: "bold",
        color: PRIMARY_COLOR
    },
    infoText: {
        padding: "20px 20px 10px 20px",
        fontSize: "18px",
        lineheight: "30px",
        textAlign: "justify"
    },
    infoSubText: {
        padding: "20px 20px 10px 20px",
        fontSize: "15px",
        lineheight: "30px",
        textAlign: "justify"
    },
    mediaBox: {
        margin: "10px 20px 20px 0"
    },
    infoBullets: {
        padding: "0 20px 0 60px",
        fontSize: "18px",
        fontWeight: "bold"
    },
    listItems: {
        marginTop: 0,
        marginLeft: "-20px",
        '&:hover': {
            backgroundColor: "#eeeeee",
            cursor: "default"
        },
    },
    serviceMainContainer: {
        minHeight: "600px",
        padding: "20px 0",
        backgroundColor: "white",
    },
    serviceSideContainer: {
        border: "2px solid lightgrey",
        borderRadius: "5px",
        backgroundColor: "white",
        padding: "20px 20px 10px 20px",
        marginBottom: "30px",
        backgroundColor: "#F8F8F8",
    },
    serviceListBox: {
        margin: "10px 0 10px 0",
        padding: "10px",
        border: "2px solid white",
        '&:hover': {
            borderRadius: "5px",
            backgroundColor: "#F8F8F8",
            borderColor: SECONDARY_COLOR,
            cursor : 'pointer',
        }
    },
    serviceListHeader: {
        fontSize: "18px",
        fontWeight: "bold"
    },
    serviceListText: {
        fontSize: "16px",
    },
    serviceSideLink: {
        margin: "2px 0",
        padding: 0,
        backgroundColor: "#F8F8F8 !important",
        color: "black !important",
        border: "2px solid #F8F8F8",
        float: "right",
        fontSize: "16px",
        fontWeight: "bold",
        '&:hover': {
            backgroundColor: "lightgrey",
            cursor: "pointer",
            borderBottom: "2px solid #BF9000",
        }
    },
    resultActionBtn : {
        padding: 0,
        backgroundColor: "#F8F8F8 !important",
        border: "2px solid #F8F8F8",
        '&:focus': {outline: 'none' },
        '&:hover': {
            borderBottom: "2px solid #BF9000",
        }
    },

})



export const home2Stylesheet = theme => ({
    topBarBtn: {
        margin: "0 0 0 55px",
        backgroundColor: "white !important",
        color: "black !important",
        padding: 0,
        border: "2px solid #ffffff",
        fontWeight: "bold",
        fontSize: "15px",
        '&:focus': { outline: 'none' },
        '&:hover': {
            borderBottom: "2px solid #BF9000",
        }
    },
    topNavContainer: {
        height: "100px",
        width: "100%",
        borderBottom: "1px solid rgba(47,85,121,0.2)",
        borderOpacity: 0.5,
        boxShadow: "0 1px 2px 0 rgba(47, 85, 121, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.0)",
    },
    topNav: {
        maxWidth: MAXWIDTH,
        minHeight: MINHEIGHT,
        margin: 'auto',
        padding: "0 40px 40px 40px",
        margin: '0 auto',
        [theme.breakpoints.down('xs')]: {
            marginTop: '10px',
        },
    },

    topNavLogo: {
        height: '80px',
        width: '80px',
        margin: '10px 0 10px 0',
        // [theme.breakpoints.down('xs')]: {
        //     display: 'none',
        // },
    },
    leftTopNav: {
        textAlign: 'left',
    },
    rightTopNav: {
        textAlign: 'right',
        margin: 'auto',
    },
    HeroTitle : {
        fontSize : '76px',
        color : 'black',
        fontWeight : 'bolder',
        lineHeight : '1.5',
        fontFamily: "muli"
    },
    homeSubTitle: {
        fontSize : '44px',
        color : 'black',
        fontWeight : 'bolder',
        lineHeight : '1.5',
        fontFamily: "muli",
        textAlign: "center"
    },
    HeroWhiteTitle : {
        fontSize: '34px',
        color: 'white',
        fontWeight: 'bolder',
        lineHeight: '3',
    },
    description : {
        fontSize : '22px',
    },
    homepageContainer : {
        maxWidth: "1360px",
        margin: "0 auto",
        [theme.breakpoints.down('sm')]: {
            paddingTop: '50px',
            paddingBottom : '50px',
        },
    },
    startContainer : {
        margin: "50px 0 50px 0",
        alignItems : 'center',
    },
    buttonContainer : {
        paddingTop : '20px',
        margin : 'auto',
    },
    mobileImg : {
        display : 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            textAlign: 'center',
            margin: 'auto',
            minHeight: '250px',
            alignItems: 'middle',
            padding : '40px 0 40px 0',
        },
    },
    homepageButton : {
        backgroundColor: "lightgrey",
        fontSize : '18px',
        fontWeight: "bold",
        color: PRIMARY_COLOR,
        border: "2px solid #000080",
        // float : 'right',
        // textTransform : 'capitalize',
        '&:hover': {
            color: 'white',
            backgroundColor: PRIMARY_COLOR
        }
    },
    heroRotateText: {
        margin: 'auto',
        alignItems: 'center',
    },
    heroImg : {
        borderColor :'solid 1px grey',
        borderRadius: " 10px",
        width : '90%',
        marginTop: "30px"

    },
    heroAppStore : {
        margin : '00px 0 00px 0',
        width : '100%',
    },
    heroDownloadImg : {
        padding : '30px 50px 30px 0',
        width : '45%',
        maxHeight : 'auto',
    },
    treatmentImg: {
        maxWidth: '90%',
        textAlign : 'right',
    },
    aboutItemContainer : {
        alignItems : 'middle',
        minHeight: '250px',
    },
    aboutContentContainer : {
        paddingTop : '30px',
    },
    aboutImgContainer: {
        textAlign: 'right',
        [theme.breakpoints.down('sm')]: {
            display : 'none',
        },
    },
    promiseTitle: {
        fontSize: '23px',
        margin: 'auto',
        paddingTop :'15px',
        textAlign: 'center',
        color: 'white',
    },
    promiseCube : {
        minHeight : '250px',
        padding : '20px 20px 20px 20px',
        [theme.breakpoints.down('md')]: {
            margin : '15px',
            minHeight: '190px',
        },
    },
    promiseRowContainer : {
        display : 'flex',
        justifyContent : 'center',
    },
    promiseIconContainer : {
        textAlign : 'center',
    },
    promiseIcon : {
        maxWidth : '50px',
        maxHeight: '50px',
        margin: '20px',
    },
    promiseHeader: {
        color: 'white',
    },
    promiseDescription : {
        color : 'white',
        fontSize : '16px',
        textAlign : 'center',
        maxWidth: '70%',
        textAlign: 'center !important',
        margin: 'auto',
    },
    promiseSecondHeader: {
        color: SECONDARY_COLOR,
    },
    promiseListItem : {
        display: 'block',
        textAlign : 'center',
    },
    bigAvatar: {
        width: '100px',
        height: '100px',
    },
    avatarContainer: {
        textAlign: '-webkit-center',
    },
    wow : {
        background: PRIMARY_COLOR_HOVER,
        width: '100%',
        height : '350px',
        margin: '20px 0 20px 0',
        '&:hover': {
            height: '350px',
            background: SECONDARY_COLOR,
            color : `${PRIMARY_COLOR} !important`,
        },
        [theme.breakpoints.down('md')]: {
            margin: '15px',
            minHeight: '200px',

        },
    },
    connectHeader : {
        display: 'block',
        fontSize: '30px',
        color: 'black',
        margin: 'auto',
        padding: '40px 0 40px 0',
        textAlign: 'center',
    },
    footerContainer: {
        padding: '45px 20px 15px 20px',
        marginTop: '60px',
        backgroundColor : 'lightgrey',
        borderTop: "2px solid",
        borderColor: PRIMARY_COLOR,
    },
    footerCenter: {
        maxWidth: MAXWIDTH,
        padding: "0 20px 0 40px",
        margin: '0 auto',
    },
    socialIcon: {
        height: '45px',
        width: '45px',
        borderRadius: '5px',
        margin: '0 5px 0 5px',
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 40,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
    connectSubscribe: {
        display: 'grid',
        width: "400px",
        margin: "0 auto"
    },
    footerAppStore : {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1200px',
        textAlign : 'left',
    },
    footerDownloadImg: {
        padding: '15px 20px 15px 0',
        maxWidth: '225px',
        width: "90%",
        maxHeight: 'auto',
    },
    footerLogo: {
        height: '90px',
        width: '90px',
        margin: '0px 20px 0 0',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
});