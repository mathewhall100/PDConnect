
import { MAXWIDTH, MINHEIGHT, PRIMARY_COLOR, SECONDARY_COLOR } from '../../themes'

export const serviceStyles = () => ({
    servicesRoot: {
        maxWidth: MAXWIDTH,
        minHeight : MINHEIGHT,
        margin: 'auto',
        padding: "0 40px 40px 40px"
    },
    serviceMainContainer: {
        minHeight: "600px",
        padding: "20px 0",
        backgroundColor: "white",
    },
    servicePageTitle: {
        color: PRIMARY_COLOR
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
    hr: {
        backgroundColor: SECONDARY_COLOR,
        opacity: 0.3
    },
    sideHr: {
        margin: "10px 0 15px 0"
    },
    serviceSideHeader: {
        textAlign: "center", 
        color: PRIMARY_COLOR
    },
    serviceSideText: {
        float: "right", 
        fontSize: "19px"
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
    serviceIcon: {
        maxWidth: '50px',
        maxHeight: '50px',
        margin: '5px',
    },
    badge: {
        position: "relative",
        top: "-10px",
        left: "17px"
    },
    serviceSideContainer: {
        border: "2px solid lightgrey",
        borderRadius: "5px",
        padding: "20px 20px 10px 20px",
        marginBottom: "30px",
        backgroundColor: "#F8F8F8",
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

})