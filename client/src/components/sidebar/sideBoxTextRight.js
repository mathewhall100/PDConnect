import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
    alignRight: {
        textAlign: "right"
    }
})

export class SideBoxTextRight extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.alignRight}>
                {this.props.children}
            </div>
        )
    }
}

SideBoxTextRight= withStyles(styles)(SideBoxTextRight)
export default SideBoxTextRight


