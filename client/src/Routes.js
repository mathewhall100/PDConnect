import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from './pages/home';
import PriorTreatment from './pages/priorTreatment';
import Result from './pages/result';
import SideEffect from './pages/sideEffect';
import Treatment from './pages/treatment';
import TreatmentInfo from './pages/treatmentInfo';
import UserInfo from './pages/userinfo';
import IntroInfo from './pages/introInfo';
import NotFound from './pages/notFound';

class Routes extends Component {

    render() {
        return (
            <div>
                <Switch>
                    
                    <Route path='/side_effect' render={props => <SideEffect {...this.props}></SideEffect>} />
                    <Route path='/intro_info' render={props => <IntroInfo {...this.props}></IntroInfo>} />
                    <Route path='/treatment'  render={props => <Treatment {...this.props}></Treatment>} />
                    <Route path='/user_info' render={props => <UserInfo {...this.props}></UserInfo>} />
                    <Route path='/treatment_details' render={props => <TreatmentInfo {...this.props}></TreatmentInfo>} />
                    <Route path='/current_treatment' render={props => <PriorTreatment></PriorTreatment>} />
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
