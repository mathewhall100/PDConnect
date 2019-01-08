import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    infoSubText: {
        padding: "20px 20px 10px 20px",
        fontSize: "15px",
        lineheight: "30px",
        textAlign: "justify"
    },
})

    class ResultInfoSubText extends PureComponent  {
        render() {
            const { classes, text} = this.props
            return (
                <span className={classes.infoSubText}>{text}</span>
            )
        }
    }

ResultInfoSubText = withStyles(styles)(ResultInfoSubText)
export default ResultInfoSubText