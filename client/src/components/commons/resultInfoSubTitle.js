import React, { Component } from 'react';
import { startCase } from 'lodash'
import { withStyles } from '@material-ui/core/styles';

import {resultStylesheet } from '../../styles';

    class ResultInfoSubTitle extends Component  {
        render() {
            const { classes, text} = this.props
            return (
                <h4 className={classes.infoTitle}>{text}</h4>
            )
        }
    }

ResultInfoSubTitle = withStyles(resultStylesheet)(ResultInfoSubTitle)
export default ResultInfoSubTitle