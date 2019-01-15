import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'

import BtnPlusModal from './buttonPlusModal'

const styles = (theme) => ({
    questionContainerMost: {
        minHeight: "80px",
        marginBottom: "10px",
    },
    questionContainerMeds: {
        minHeight: "60px",
    },
    questionContainerNone: {
        marginTop: "18px"
    },
    questionHead: {
        fontSize: "18px",
        fontWeight: "bold",
    },
    questionText: {
        fontSize: "18px",
    }
})

class DisplayQuestionText extends PureComponent  {

    render() {
        const { classes, title, questionText, modalText, modalImages} = this.props

        if (title === "None") {
            return (
                <div className={classes.questionContainerNone}>
                    <span className={classes.questionHead}>None</span>
                </div>
            )
        } else if (modalImages) {
            return (
                <div className={classes.questionContainerMeds}>
                    <span className={classes.questionHead}>{title}</span>
                    <BtnPlusModal btnType="help" modalTitle={title} modalText={modalText} modalImages={modalImages} modalWarning={false}/><br />
                    <span className={classes.questionText}>{questionText}</span>
                </div>
            )
        } else {
            return (
                <div className={classes.questionContainerMost}>
                    <span className={classes.questionHead}>{title}</span>
                    <BtnPlusModal btnType="help" modalTitle={title} modalText={modalText} modalImages={modalImages} modalWarning={false}/><br />
                    <span className={classes.questionText}>{questionText}</span>
                </div>
            )
        }
    }
}

DisplayQuestionText = withStyles(styles)(DisplayQuestionText)
export default DisplayQuestionText