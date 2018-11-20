
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import {resultStylesheet } from '../../styles';

    class ResultDisplayVideo extends Component  {
        render() {
            const { classes, mediaLnk} = this.props
            return (
                <iframe src={mediaLnk} width="340" height="255" frameborder="1" allowfullscreen="true" className={classes.mediaBox}></iframe> 
            )
        }
    }

ResultDisplayVideo = withStyles(resultStylesheet)(ResultDisplayVideo)
export default ResultDisplayVideo