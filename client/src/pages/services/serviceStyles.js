
import { MAXWIDTH, MINHEIGHT, PRIMARY_COLOR, SECONDARY_COLOR, APP_PADDING, APP_MARGIN, MINWIDTH } from '../../themes'

export const serviceStyles = () => ({
    servicesRoot: {
        maxWidth: MAXWIDTH,
        minWidth: MINWIDTH,
        minHeight : MINHEIGHT,
        margin: APP_MARGIN,
        padding: APP_PADDING
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
        margin: "12px 0 12px 0",
        padding: "10px 10px 16px 10px",
        border: "2px solid white",
        '&:hover': {
            borderRadius: "5px",
            backgroundColor: "#F8F8F8",
            borderColor: SECONDARY_COLOR,
            cursor : 'pointer',
        }
    },
    serviceListHeader: {
        fontSize: "19px",
        fontWeight: "bold"
    },
    serviceListText: {
        fontSize: "17px",
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
    }
})