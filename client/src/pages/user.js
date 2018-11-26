import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Route, Switch } from "react-router-dom";

import UserStart from '../components/user/userStart';
import UserAbout from '../components/user/userAbout';
import UserLife from '../components/user/userLife';
import UserFamily from '../components/user/userFamily';
import UserMeds from '../components/user/userMeds';
import UserSurgery from '../components/user/userSurgery';
import UserMotorSy from '../components/user/userMotorSy';
import UserNonMotorSy from '../components/user/userNonMotorSy';
import UserReview from '../components/user/userReview';
import UserNewAccount from '../components/user/userNewAccount';
import UserAccount from '../components/user/userAccount';
import UserServices from './services';
import NotFound from './notFound';

import Stepper from '../components/stepper';
import { updateStepperCount } from '../actions/Stepper';
import { userStylesheet } from '../styles';


class User extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={24}>

                    <Grid item lg={6} md={6} sm={12}  xs={12}>
                        <Stepper/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12}  xs={12}>
                        <Switch>
                            <Route path='/user/user_start' render={props => <UserStart></UserStart>} />
                            <Route path='/user/user_about' render={props => <UserAbout></UserAbout>} />
                            <Route path='/user/user_life' render={props => <UserLife></UserLife>} />
                            <Route path='/user/user_family' render={props => <UserFamily></UserFamily>} />
                            <Route path='/user/user_meds' render={props => <UserMeds></UserMeds>} />
                            <Route path='/user/user_surgery' render={props => <UserSurgery></UserSurgery>} />
                            <Route path='/user/user_motorsy' render={props => <UserMotorSy></UserMotorSy>} />
                            <Route path='/user/user_nonmotorsy' render={props => <UserNonMotorSy></UserNonMotorSy>} />  
                            <Route path='/user/user_review' component={UserReview} />
                            <Route path='/user/user_account' component={UserNewAccount} />
                            <Route path='/user/account' component={UserAccount} />
                            <Route path="/notfound" component={NotFound} />
                            <Route component={NotFound} />
                        </Switch>
                    </Grid>

                </Grid>
            </div>
        );
    }
}

User.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    //console.log(state);
    return {
        stepper: state.stepper,
    }

};

User = connect(mapStateToProps, { updateStepperCount })(User)
User = withStyles(userStylesheet)(User)
export default User;