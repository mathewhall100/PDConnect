import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Route, Switch } from "react-router-dom"; 

import UserAbout from '../components/userAbout';
import UserLife from '../components/userLife';
import UserFamily from '../components/userFamily';
import UserMeds from '../components/userMeds';
import UserSurgery from '../components/userSurgery';
import UserMotorSy from '../components/userMotorSy';
import UserNonMotorSy from '../components/userNonMotorSy';
import Result from './results'; 
import NotFound from './notFound';

import InfoDBS from '../infoFiles/DBS'
import InfoApomorphine from '../infoFiles/Apomorphine.js'
import InfoDuopa from '../infoFiles/Duopa.js'
import InfoRytary from '../infoFiles/Rytary.js'
import InfoNuplazid from '../infoFiles/Nuplazid.js'
import InfoDroxidopa from '../infoFiles/Droxidopa.js'
import InfoBotTox from '../infoFiles/BotTox.js'
import InfoSpark from '../infoFiles/SPARK.js'
import InfoNilo from '../infoFiles/NILO.js'

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
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        <Stepper onPage={this.props.stepper.stepperCount} />
                    </Grid>
                    <Grid item xs={9}>
                        <Switch>
                            <Route path='/user/user_about' render={props => <UserAbout></UserAbout>} />
                            <Route path='/user/user_life' render={props => <UserLife></UserLife>} />
                            <Route path='/user/user_family' render={props => <UserFamily></UserFamily>} />
                            <Route path='/user/user_meds' render={props => <UserMeds></UserMeds>} />
                            <Route path='/user/user_surgery' render={props => <UserSurgery></UserSurgery>} />
                            <Route path='/user/user_motorsy' render={props => <UserMotorSy></UserMotorSy>} />
                            <Route path='/user/user_nonmotorsy' render={props => <UserNonMotorSy></UserNonMotorSy>} />
                            <Route path="/user/result" render={props => <Result ></Result>} />

                            <Route path="/user/info_dbs" render={props => <InfoDBS {...this.props}></InfoDBS>} />
                            <Route path="/user/info_apomorphine" render={props => <InfoApomorphine {...this.props}></InfoApomorphine>} />
                            <Route path="/user/info_duopa" render={props => <InfoDuopa {...this.props}></InfoDuopa>} />
                            <Route path="/user/info_rytary" render={props => <InfoRytary {...this.props}></InfoRytary>} />
                            <Route path="/user/info_nuplazid" render={props => <InfoNuplazid {...this.props}></InfoNuplazid>} />
                            <Route path="/user/info_droxidopa" render={props => <InfoDroxidopa {...this.props}></InfoDroxidopa>} />
                            <Route path="/user/info_bottox" render={props => <InfoBotTox {...this.props}></InfoBotTox>} />
                            <Route path="/user/info_spark" render={props => <InfoSpark {...this.props}></InfoSpark>} />
                            <Route path="/user/info_nilo" render={props => <InfoNilo {...this.props}></InfoNilo>} />
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
    console.log(state);
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