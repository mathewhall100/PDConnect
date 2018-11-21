import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {userStylesheet } from '../../styles';

    class BottomNav extends Component  {
        state= ({
            redirect : false,
            redirectUrl : '',
        })

        handleBack(prevPage) {
            this.setState({
                redirect : true,
                redirectUrl : prevPage,
            })
        }

        handleNext(nextPage) {
            this.setState({
                redirect : true,
                redirectUrl : nextPage,
            })
        }

        render() {
            const { redirect , redirectUrl } = this.state;
            const { classes, stepper : {prevPage, nextPage}} = this.props;

            if(redirect){
                const url = redirectUrl;
                return(
                    <Redirect to={url} />
                )
            }

            return (
                <Grid container spacing={24} >
                    <Grid item xs={12}>
                        <hr className={classes.hr} />
                    </Grid>
                    <Grid item xs={3}>
                        <Button type="button" variant='outlined' className={classes.userNavButton} onClick={() => this.handleBack(prevPage)}>BACK</Button>
                    </Grid>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={3}>
                        <Button type="button" variant='outlined' className={classes.userNavButton} onClick={() => this.handleNext(nextPage)}>NEXT</Button>
                    </Grid>
                </Grid>
            )
         }
    }
function mapStatsToProps(state) {
    console.log(state);
    return {
        user: state.user,
        currentTreatments: state.currentTreatments,
        previousTreatments: state.previousTreatments,
        userChoice: state.userChoice,
        symptom: state.symptom,
        sideEffect: state.sideEffect,
        stepper: state.stepper,

    }
}

BottomNav = withStyles(userStylesheet)(BottomNav);

export default connect(mapStatsToProps, {})(BottomNav);