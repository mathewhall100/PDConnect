
import { PRIMARY_COLOR } from '../../themes'

export const sideBarStyles = () => ({
    sidebarContainer: {
        marginTop: "30px"
    },
    sideBox: {
        border: "2px solid lightgrey",
        borderRadius: "5px",
        padding: "20px 20px 10px 20px",
        marginBottom: "25px",
        backgroundColor: "#F8F8F8",
    },
    sideBoxHeader: {
        marginBottom: "18px", 
        color: PRIMARY_COLOR,
        textAlign: "center"
    },
    sideBoxText: {
        fontSize: "19px"
    },
    sideBoxLinkSeparater: {
        margin: "2px 0"
    },
    sideBoxLink: {
        backgroundColor: "#F8F8F8 !important",
        color: "black !important",
        border: "2px solid #F8F8F8",
        fontSize: "16px",
        fontWeight: "bold",
        '&:hover': {
            cursor: "pointer",
            backgroundColor: "lightgrey",
            borderBottom: "2px solid #BF9000",
            textDecoration: "none",
        }
    },
    sideBoxHr: {
        margin: "10px 0 15px 0"
    },
})