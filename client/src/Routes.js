import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from './pages/home/home';
import User from './pages/user';
import SignIn from './pages/signin';
import Result from './pages/results/summary';
import Services from './pages/services/services';
import TreatmentDisplay from './pages/results/treatments';
import TrialDisplay from './pages/results/trials';
import NotFound from './pages/notFound';

import { connect } from 'react-redux';
import { updateStepperCount } from './actions/Stepper';

class Routes extends Component {

    render() {
        return (
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
        )
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
