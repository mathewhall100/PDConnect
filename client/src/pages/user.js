import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Route, Switch } from "react-router-dom";

import UserAbout from '../components/user/userAbout';
import UserLife from '../components/user/userLife';
import UserFamily from '../components/user/userFamily';
import UserMeds from '../components/user/userMeds';
import UserSurgery from '../components/user/userSurgery';
import UserMotorSy from '../components/user/userMotorSy';
import UserNonMotorSy from '../components/user/userNonMotorSy';
import UserAccount from '../components/user/userAccount';
import Result from './results';
import NotFound from './notFound';

import Stepper from '../components/stepper';
import { updateStepperCount } from '../actions/Stepper';
import { userStylesheet } from '../styles';


const subTitleArray = ["find out about Parkinson disease treatments individualised for you",
    "discover Parkinson disease clinical trials you can participate in",
    "take away new knowledge about your condition to share with your doctor"]

class User extends Component {

    state = {
        redirect: false,
        subtitle: ""
    }

    render() {
        const { classes } = this.props;
        const { redirect, subtitle } = this.state;

        if (redirect) {
            const url = `/intro_choice`;
            console.log("redirect to .. " + url);
            return <Redirect to={url} />;
        }

        return (
            <div>
                <Grid container>
                    <Grid item xs={1}></Grid>
                    <Grid item md={4} sm={4} lg={4} xs={12}>
                        <Stepper />
                    </Grid>
                    <Grid item md={6} sm={6} lg={6} xs={12}>
                        <Switch>
                            <Route path='/user/user_about' render={props => <UserAbout></UserAbout>} />
                            <Route path='/user/user_life' render={props => <UserLife></UserLife>} />
                            <Route path='/user/user_family' render={props => <UserFamily></UserFamily>} />
                            <Route path='/user/user_meds' render={props => <UserMeds></UserMeds>} />
                            <Route path='/user/user_surgery' render={props => <UserSurgery></UserSurgery>} />
                            <Route path='/user/user_motorsy' render={props => <UserMotorSy></UserMotorSy>} />
                            <Route path='/user/user_nonmotorsy' render={props => <UserNonMotorSy></UserNonMotorSy>} />
                            <Route path='/user/account' component={UserAccount} />
                            <Route path="/user/result" render={props => <Result ></Result>} />
                            <Route path="/notfound" component={NotFound} />
                            <Route component={NotFound} />
                        </Switch>
                    </Grid>
                    <Grid item xs={1}></Grid>
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
        currentTreatments: state.currentTreatments,
        previousTreatments: state.previousTreatments,
        user: state.user,
        userChoice: state.userChoice,
        symptom: state.symptom,
        sideEffect: state.sideEffect,
        stepper: state.stepper,
    }

};

User = connect(mapStateToProps, { updateStepperCount })(User)
User = withStyles(userStylesheet)(User)
export default User;