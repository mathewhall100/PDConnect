// Common styles for user components

import * as theme from  '../../themes'

export const userComponentStyles = () => ({
    labelText: {
        fontSize: "23px",
    },
    selectLabel: {
        height: "45px",
        color: "black",
        fontWeight: "bold",
    },
    selectMenuItem: {
        color: "grey", 
        fontSize: "18px", 
        fontWeight: "normal",
    },
    doneOutlineIcon: {
        fontSize: "36px",
        color: "#eeeeee",
        '&:hover': {
            color: theme.QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR
        },
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
        borderColor: theme.QUESTION_BUTTON_DEFAULT_COLOR,
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
        color: theme.QUESTION_BUTTON_DEFAULT_COLOR
    },
    doneIcon: {
        fontSize: "48px",
        fontWeight: "bold",
        color: theme.QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR,
        padding: 0,
        margin: "-6px"
    },
    unsureIcon: {
        fontSize: "48px",
        color: theme.QUESTION_BUTTON_ACTIVE_TERTIARY_COLOR,
        padding: 0,
        position: "relative",
        marginTop: 0,
        top: "-15px"
    },
    closeIcon: {
        fontSize: "44px",
        color: theme.QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR,
        padding: 0,
        marginTop: "-6px"
    },
    errorText: {
        fontSize: "15px",
        color: "red",
        position: "relative",
        left: "-45px",
        top: "30px"
    }
    
})