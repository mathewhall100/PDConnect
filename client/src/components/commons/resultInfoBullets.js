import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles =  () => ({
    infoBullets: {
        padding: "0 20px 0 60px",
        fontSize: "18px",
        fontWeight: "bold"
    }
})

class ResultInfoBullets extends Component  {
    render() {
        const { bullet, classes } = this.props
        return (
            <ul  className={classes.infoBullets}>
                <li>{bullet}</li>
            </ul>
        )
    }
}

ResultInfoBullets = withStyles(styles)(ResultInfoBullets)
export default ResultInfoBullets

