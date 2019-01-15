import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = () => ({

})


class ResultGrid extends Component {
  render() {
    return (
        <Grid container spacing={24}>
            <Grid item xs={12} sm={12} md={6}>
                {this.props.children[0]}
                </Grid>
            <Grid item xs={12} sm={12} md={6}>
                {this.props.children[1]}
                </Grid>
        </Grid>
    )
  }
}

ResultGrid= withStyles(styles)(ResultGrid)
export default ResultGrid