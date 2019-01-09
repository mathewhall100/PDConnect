import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';

const style = () => ({ 
    subtitleStyle: {
        fontSize : '44px',
        fontWeight : 'bolder',
        lineHeight : '1.5',
        fontFamily: "muli",
        textAlign: "center"
    },
})

    class ResultMainSubtitle extends PureComponent  {
        render() {
            const { classes, text, color} = this.props
            return (
                <h1 className={classes.subtitleStyle} style={{color: color ? color : "black"}}>{text}</h1>
            )
        }
    }

ResultMainSubtitle = withStyles(style)(ResultMainSubtitle)
export default ResultMainSubtitle