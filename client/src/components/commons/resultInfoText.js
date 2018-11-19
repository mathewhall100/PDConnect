
import React, { Component } from 'react';
import { startCase } from 'lodash'
import { withStyles } from '@material-ui/core/styles';

import {resultStylesheet } from '../../styles';

    class ResultInfoText extends Component  {
        render() {
            const { classes, text} = this.props
            return (
                <p className={classes.infoText}>{text}</p>
            )
        }
    }

ResultInfoText = withStyles(resultStylesheet)(ResultInfoText)
export default ResultInfoText