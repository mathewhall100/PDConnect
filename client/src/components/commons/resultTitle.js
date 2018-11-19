import React, { Component } from 'react';
import { startCase } from 'lodash'
import { withStyles } from '@material-ui/core/styles';

// import {resultStylesheet } from '../../styles';
const PRIMARY_COLOR = '#2F5597';

const styles = theme => ({
    title: {
        fontSize: '26px',
        fontWeight: 'bold',
        color : PRIMARY_COLOR,
        lineHeight: '1.6',
        textAlign: "center"
    },
})

    class ResultTitle extends Component  {
        render() {
            const { classes, text} = this.props
            return (
                    <h1 className={classes.title}>{startCase(text)}</h1>
            )
        }
    }

// ResultTitle = withStyles(resultStylesheet)(ResultTitle)
ResultTitle = withStyles(styles)(ResultTitle)
export default ResultTitle