import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    hr: {
        height: "1px",
        color: "lightgrey",
        opacity: 0.8,
    },
})

class Hr extends PureComponent  {

    margin = () => { 
        return {
            marginRight: this.props.full ?  null : "24px" 
        }
    }

    render() {
        const { classes } = this.props
        return (
            <hr className={classes.hr} style={this.margin()} />
        )
    }
}

Hr = withStyles(styles)(Hr)
export default Hr