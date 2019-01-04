import React, { Component } from 'react';
import { withRouter, } from 'react-router-dom';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import {submitReview } from '../../actions/index.js'
import {userStylesheet } from '../../styles';

class BottomNav extends Component  {
    handleBack = () => {
        if (this.props.review.redirect) {
            this.props.submitReview(false);
            this.props.history.push('/user/user_review');
        } else {
            this.props.history.push(this.props.stepper.prevPage)
        }
    }


    render() {

        const { classes, review : { redirect }} = this.props;

        const SecondButton = () => {
            if (window.location.pathname === '/user/user_account') {
                return (
                    <div style={{width: "40%", float: "right"}} >
                        <Link to={"/services"} style={{textDecoration: "none"}}>
                            <Button type="button" variant='outlined' className={classes.userNavButton} style={{width: "80%"}}>SKIP FOR NOW</Button>
                        </Link>
                    </div>
                )
            } else return null
        }

        
        return (
            <React.Fragment>
                <br />
                <hr className={classes.hr} style={{marginRight: "40px"}}/>
                <br />
                <Grid container spacing={24} >
                    {!redirect ?
                        <Grid item xs={3}>
                            <Button type="button" variant='outlined' className={classes.userNavButton} onClick={() => this.handleBack()}>BACK</Button>
                        </Grid>
                    :
                    null }

                    <Grid item xs={9}>
                        <SecondButton  style={{float: "right"}}/>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}


function mapStatsToProps(state) {
    console.log(state);
    return {
        stepper: state.stepper,
        review :state.review,
    }
}

BottomNav = withStyles(userStylesheet)(BottomNav);
BottomNav = withRouter(BottomNav)
export default connect(mapStatsToProps, { submitReview})(BottomNav);