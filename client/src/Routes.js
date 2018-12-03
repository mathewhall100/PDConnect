import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from './pages/home2';
import User from './pages/user';
import SignIn from './pages/signin';
import Result from './pages/results';
import Services from './pages/services';
import TreatmentDisplay from './pages/treatmentDisplay';
import TrialDisplay from './pages/trialDisplay';
import NotFound from './pages/notFound';

import { connect } from 'react-redux';
import { updateStepperCount } from './actions/Stepper';
class Routes extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/user' component={User} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/home' component={Homepage} />
                    <Route path='/services' component={Services} />
                    <Route path='/results:id' component={Result} />
                    <Route path='/treatment:id' component={TreatmentDisplay} />
                    <Route path='/trial:id' component={TrialDisplay} />
                    <Route path="/notfound" component={NotFound} />
                    <Route exact path='/' render={props => <Homepage {...this.props}></Homepage>} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

function mapStatsToProps(state) {
    //console.log(state);
    return {
        currentTreatments: state.currentTreatments,
        previousTreatments: state.previousTreatments,
        user: state.user,
        userChoice: state.userChoice,
        symptom: state.symptom,
        sideEffect: state.sideEffect,
        stepper : state.stepper,
    }
}

export default connect(mapStatsToProps, {updateStepperCount})(Routes);
