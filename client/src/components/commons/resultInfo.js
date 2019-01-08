import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { PRIMARY_COLOR } from '../../themes.js'

const styles = () => ({
    infoTitle: {
        textAlign: "center",
        textWeight: "bold",
        color: PRIMARY_COLOR
    },
    infoText: {
        padding: "20px 20px 10px 20px",
        fontSize: "18px",
        lineheight: "30px",
        textAlign: "justify"
    },
})

    class ResultInfo extends PureComponent  {
        render() {
            const { classes, subtitle='', text=''} = this.props
            return (
                <React.Fragment>
                    <br />
                    { subtitle && <h4 className={classes.infoTitle}>{subtitle}</h4> }
                    { text && <p className={classes.infoText} >{text}</p> }
                </React.Fragment>
            )
        }
    }

ResultInfo = withStyles(styles)(ResultInfo)
export default ResultInfo