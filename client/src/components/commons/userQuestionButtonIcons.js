import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import {userStylesheet } from '../../styles';

class QuestionButtonIcon extends Component  {

    render() {
        const { classes, answerConditional } = this.props
        return (
            <span>
                {answerConditional === true && <DoneIcon className={classes.doneIcon} /> }
                {answerConditional === true && <DoneIcon className={classes.doneIcon} style={{position: "absolute", left: "11px", top: "5px"}} /> }
                {answerConditional === true  && <DoneIcon className={classes.doneIcon} style={{position: "absolute", left: "11px", top: "6px"}} /> }
                {answerConditional === true && <DoneIcon className={classes.doneIcon} style={{position: "absolute", left: "11px", top: "7px"}} /> } 
                {!answerConditional && <DoneOutlineIcon className={classes.doneOutlineIcon} /> }
            </span>
        )
    }
}

QuestionButtonIcon = withStyles(userStylesheet)(QuestionButtonIcon)
export default QuestionButtonIcon