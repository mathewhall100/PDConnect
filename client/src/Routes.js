import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from './pages/home';
import CurrentTreatment from './pages/currentTreatment';
import PreviousTreatment from './pages/previousTreatment';
import Result from './pages/result';
import SideEffect from './pages/sideEffect';
import Treatment from './pages/treatment';
import TreatmentInfo from './pages/treatmentInfo';
import UserInfo from './pages/userinfo';
import IntroChoice from './pages/introChoice';
import NotFound from './pages/notFound';
import Symptom from './pages/symptom';

class Routes extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/side_effect' render={props => <SideEffect {...this.props}></SideEffect>} />
                    <Route path='/symptom' render={props => <Symptom {...this.props}></Symptom>} />
                    <Route path='/intro_choice' render={props => <IntroChoice {...this.props}></IntroChoice>} />
                    <Route path='/treatment'  render={props => <Treatment {...this.props}></Treatment>} />
                    <Route path='/user_info' render={props => <UserInfo {...this.props}></UserInfo>} />
                    <Route path='/treatment_details' render={props => <TreatmentInfo {...this.props}></TreatmentInfo>} />
                    <Route path='/current_treatment' render={props => <CurrentTreatment></CurrentTreatment>} />
                    <Route path='/previous_treatment' render={props => <PreviousTreatment></PreviousTreatment>} />
                    <Route path="/result" render={props => <Result {...this.props}></Result>} />
                    <Route path="/notfound" component={NotFound} />
                    <Route exact path='/' render={props => <Homepage {...this.props}></Homepage>} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }

}
export default (Routes);
