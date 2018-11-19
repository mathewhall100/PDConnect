import React, { Component } from 'react';
import { startCase } from 'lodash'
import { withStyles } from '@material-ui/core/styles';

import {resultStylesheet } from '../../styles';

    class ResultInfoSubText extends Component  {
        render() {
            const { classes, text} = this.props
            return (
                <span className={classes.infoSubText}>{text}</span>
            )
        }
    }

ResultInfoSubText = withStyles(resultStylesheet)(ResultInfoSubText)
export default ResultInfoSubText