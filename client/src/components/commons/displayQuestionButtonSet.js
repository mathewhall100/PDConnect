import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close';
import {
    QUESTION_BUTTON_DEFAULT_COLOR,
    QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR,
    QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR, 
    QUESTION_BUTTON_ACTIVE_TERTIARY_COLOR} from '../../themes';
import DisplayQuestionButtonIcon from './displayQuestionButtonIcon'

const styles = () => ({
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
        outline : "none !important",
         '&:hover': {
             backgroundColor: "white",
         },
    },
    questionButtonText: {
        fontWeight:"bold",
        color: QUESTION_BUTTON_DEFAULT_COLOR,
        marginTop: "-2px"
    },
    unsureIcon: {
        fontSize: "48px",
        color: QUESTION_BUTTON_ACTIVE_TERTIARY_COLOR,
        padding: 0,
        position: "relative",
        marginTop: 0,
        top: "-15px"
    },
    closeIcon: {
        fontSize: "44px",
        color: QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR,
        padding: 0,
        marginTop: "-6px"
    },
})

class DisplayQuestionButtonSet extends PureComponent  {

    handleSelect = (index, choice, key) => {
        console.log("choice:", index, " ", choice, " ", key )
        this.props.handleSelect(index, choice, key)
    }

    render() {
        const { classes, index, answer, symptomKey } = this.props
            
        const RenderButton = (props) => 
            <Button type="button" 
                className={classes.questionButton} 
                style={{borderColor: answer === props.option ? props.color : null}} 
                onClick={() => this.handleSelect(index, props.option, symptomKey)}
            >
                {answer !== props.option ? <span className={classes.questionButtonText}>{props.text}</span> : props.icon}
            </Button>

        const buttons = [
            { option: "ns", color: {QUESTION_BUTTON_ACTIVE_TERTIARY_COLOR}, icon: <span className={classes.unsureIcon}>?</span>, txt: "not sure"},
            { option: "no", color: {QUESTION_BUTTON_ACTIVE_SECONDARY_COLOR}, icon: <CloseIcon className={classes.closeIcon} />, txt: "no" },
            { option: "yes", color: {QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR}, icon: <DisplayQuestionButtonIcon answerConditional={answer === "yes" ? true : false}  />, txt: "yes"}
        ]

        return (
            buttons.map((btn, idx) => <RenderButton key={idx} option={btn.option} color={btn.color} icon={btn.icon} text={btn.txt} /> )
        )
        
    }
}

DisplayQuestionButtonSet = withStyles(styles)(DisplayQuestionButtonSet)
export default DisplayQuestionButtonSet