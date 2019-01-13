
import { MAXWIDTH, MINHEIGHT, PRIMARY_COLOR, APP_MARGIN, APP_PADDING } from '../../themes'

export const resultStyles = () => ({
    
    resultRoot: {
        maxWidth: MAXWIDTH,
        minHeight : MINHEIGHT,
        margin: APP_MARGIN,
        padding: APP_PADDING
    },
    resultContainer: {
        minHeight: "865px",
        padding: "30px",
        border: "2px solid lightgrey",
        borderRadius: "0 5px 5px 5px",
        backgroundColor: "#F8F8F8",
    },
    resultBox: {
        border: "1px solid grey",
        borderRadius: "5px",
        margin: "20px",
    },
    resultBoxTextBox: {
        minHeight: "130px"
    },
    resultBoxTitle: {
        fontWeight: "bold",
        margin: "20px",
        fontSize: "20px"
    },
    resultBoxText: {
        margin: "20px",
        fontSize: "18px"
    },
    actionMenuBox: {
        marginRight: "10px", 
        padding: "8px 5px 5px 10px"
    },
    actionMenuBtn : {
        backgroundColor: "#F8F8F8 !important",
        padding: 0,
        border: "2px solid #F8F8F8",
        '&:focus': {outline: 'none' },
        '&:hover': {
            borderBottom: "2px solid #BF9000",
        }
    },
    actionMenuIcon: {
        color: 'black'
    },
    actionMenuText: {
        fontWeight: "bold",
        color: PRIMARY_COLOR,
    }

})