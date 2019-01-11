
// Styling for signin page

import { MAXWIDTH, MINHEIGHT, PRIMARY_COLOR } from '../../themes'

export const authStyles = theme => ({
    root: {
        maxWidth: MAXWIDTH,
        minHeight : MINHEIGHT,
        margin: 'auto',
        padding: "0 20px 40px 40px"
    },
    container: {
        maxWidth: "600px", 
        margin: "75px auto"
    },
    label: {
        fontWeight: "bold", 
        position: "relative", 
        top: "15px", 
        fontSize: "18px"
    },
    submitBtn: {
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
   messageTxt: {
        float: "right", 
        marginTop: "15px",
        color: "#000",
        '&:hover': {
            color: 'black'
        }
    },
    errorTxt: {
        float: "left", 
        marginTop: "15px",
        color: "red"
    }

})