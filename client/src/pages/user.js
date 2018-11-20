import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        subtitle: ""
    }

    render() {
        const { classes } = this.props;
        const { redirect, next, back } = this.state;

        return (
            <div className={classes.root}>
                <Grid container spacing={8}>

                    <Grid item lg={5} md={5} sm={12}  xs={12}>
                        <Stepper handleClickNext={this.handleNextClicked}/>
                    </Grid>
                    <Grid item lg={7} md={7} sm={12}  xs={12}>
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