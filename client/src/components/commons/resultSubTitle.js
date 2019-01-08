import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';

const style = () => ({ 
    subtitle: {
        fontSize: '19px',
        fontWeight: "bold",
        lineHeight: "26px",
        margin: "20px",
    },
})

    class ResultMainSubTitle extends PureComponent  {
        render() {
            const { classes, text} = this.props
            return (
                <h1 className={classes.subtitle}>{text}</h1>
            )
        }
    }

ResultMainSubTitle = withStyles(style)(ResultMainSubTitle)
export default ResultMainSubTitle