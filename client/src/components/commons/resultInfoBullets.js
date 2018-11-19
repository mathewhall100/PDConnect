import React, { Component } from 'react';
import { startCase } from 'lodash'
import { withStyles } from '@material-ui/core/styles';

import {resultStylesheet } from '../../styles';

    class ResultInfoBullets extends Component  {
        render() {
            const { classes, bullet} = this.props
            return (
                <ul  className={classes.infoBullets}>
                    <li>{bullet}</li>
                </ul>
            )
        }
    }

ResultInfoBullets = withStyles(resultStylesheet)(ResultInfoBullets)
export default ResultInfoBullets