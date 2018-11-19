import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import {resultStylesheet } from '../../styles';

    class ResultMainSubTitle extends Component  {
        render() {
            const { classes, text} = this.props
            return (
                <h1 className={classes.subtitle}>{text}</h1>
            )
        }
    }

ResultMainSubTitle = withStyles(resultStylesheet)(ResultMainSubTitle)
export default ResultMainSubTitle