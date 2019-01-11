import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import DoneIcon from '@material-ui/icons/Done'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'
import { QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR, } from '../../themes';

const styles = () => ({
    doneIcon: {
        fontSize: "48px",
        fontWeight: "bold",
        color: QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR,
        padding: 0,
        margin: "-6px"
    },
    doneOutlineIcon: {
        fontSize: "36px",
        color: "#eeeeee",
        '&:hover': {
            color: QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR
        },
    },
})

class DisplayQuestionButtonIcon extends PureComponent  {

    render() {
        const { classes, answerConditional } = this.props

        const RenderDoneIcon = () => 
                <React.Fragment>
                        <DoneIcon className={classes.doneIcon} />
                        { Array.from({length:3}).map((x, i) => <DoneIcon className={classes.doneIcon} style={{position: "absolute", left: "11px", top: `${i+8}px`}} /> )}
                </React.Fragment>  

        return ( answerConditional === true ? <RenderDoneIcon /> : <DoneOutlineIcon className={classes.doneOutlineIcon} /> )
    }
}

DisplayQuestionButtonIcon = withStyles(styles)(DisplayQuestionButtonIcon)
export default DisplayQuestionButtonIcon