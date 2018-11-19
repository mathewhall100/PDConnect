import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

import {resultStylesheet } from '../../styles';

    class ResultPrintButton extends Component  {
        render() {
            const { classes, text } = this.props
            return (
                <Button type="button" className={classes.printButton}>Print page</Button>
            )
        }
    }

ResultPrintButton = withStyles(resultStylesheet)(ResultPrintButton)
export default ResultPrintButton