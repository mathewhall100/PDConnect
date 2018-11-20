import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import {userStylesheet } from '../../styles';

    class BottomNav extends Component  {

        handleBack() {
            this.props.handleBack()
        }

        handleNext() {
            this.props.handleNext()
        }

        render() {

            const { classes } = this.props

            return (
                <Grid container spacing={24} >
                    <Grid item xs={12}>
                        <hr className={classes.hr} />
                    </Grid>
                    <Grid item xs={3}>
                        <Button type="button" variant='outlined' className={classes.userNavButton} onClick={() => this.handleBack()}>BACK</Button>
                    </Grid>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={3}>
                        <Button type="button" variant='outlined' className={classes.userNavButton} onClick={() => this.handleNext()}>NEXT</Button>
                    </Grid>
                </Grid>
            )
         }
    }

BottomNav = withStyles(userStylesheet)(BottomNav)
export default BottomNav