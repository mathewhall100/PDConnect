import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from './pages/home';
import CurrentTreatment from './pages/currentTreatment';
import PreviousTreatment from './pages/previousTreatment';
import Result from './pages/results';
import Response from './pages/response';
import SideEffect from './pages/sideEffect';
import Treatment from './pages/treatment';
import TreatmentInfo from './pages/treatmentInfo';
import UserInfo from './pages/userinfo';
import IntroChoice from './pages/introChoice';
import NotFound from './pages/notFound';
import Symptom from './pages/symptom';
import InfoDBS from './infoFiles/DBS'
import InfoApomorphine from './infoFiles/Apomorphine.js'
import InfoDuopa from './infoFiles/Duopa.js'

class Routes extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/side_effect' render={props => <SideEffect ></SideEffect>} />
                    {/* <Route path='/side_effect' render={props => <SideEffect {...this.props}></SideEffect>} /> */}
                    <Route path='/response' render={props => <Response ></Response>} />
                    <Route path='/symptom' render={props => <Symptom {...this.props}></Symptom>} />
                    <Route path='/intro_choice' render={props => <IntroChoice {...this.props}></IntroChoice>} />
                    <Route path='/treatment'  render={props => <Treatment {...this.props}></Treatment>} />
                    <Route path='/user_info' render={props => <UserInfo ></UserInfo>} />
                    <Route path='/treatment_details' render={props => <TreatmentInfo {...this.props}></TreatmentInfo>} />
                    <Route path='/current_treatment' render={props => <CurrentTreatment></CurrentTreatment>} />
                    <Route path='/previous_treatment' render={props => <PreviousTreatment></PreviousTreatment>} />
                    <Route path="/result" render={props => <Result ></Result>} />
                    <Route path="/info_dbs" render={props => <InfoDBS {...this.props}></InfoDBS>} />
                    <Route path="/info_apomorphine" render={props => <InfoApomorphine {...this.props}></InfoApomorphine>} />
                    <Route path="/info_duopa" render={props => <InfoDuopa {...this.props}></InfoDuopa>} />
                    <Route path="/notfound" component={NotFound} />
                    <Route exact path='/' render={props => <Homepage {...this.props}></Homepage>} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }

}
export default (Routes);
