import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { resultStylesheet, PRIMARY_COLOR, SECONDARY_COLOR } from '../styles';

import assessImg from '../images/avatar/services/assess.png';
import focusImg from '../images/avatar/services/focus.png';
import learnImg from '../images/avatar/services/learn.png';
import monitorImg from '../images/avatar/services/monitor.png';
import treatmentImg from '../images/avatar/services/treatments.png';
import trialsImg from '../images/avatar/services/trials.png';


class UserServices extends Component {

    state = {
        redirectAddress: '',
    }



    componentDidMount() {
        window.scroll(0, 0)
    }

    handleBack = () => {
        this.setState({
            redirectAddress: '/'
        }, () => this.setState({ redirect: true }))
    }


    render() {

        const { handleSubmit, classes } = this.props
        const {  } = this.state

        const RenderServiceListItem = (props) => {
            return (
                <div className={classes.serviceListBox} >
                    <Grid container spacing={8} >
                        <Grid item xs={12} sm={2}>
                            <img className={classes.serviceIcon} src={props.avatar} alt={props.header} />
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <span className={classes.serviceListHeader}>{props.header}</span>
                            <br />
                            <span className={classes.serviceListText}>{props.text}</span>
                        </Grid>
                    </Grid>
                </div>
            )
        }

        return (
            <div className={classes.root}>

               <br />

                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={8}>
                        <div className={classes.serviceMainContainer}>
                            <h1>Welcome to PD Connect</h1>
                            <br />
                            <h5>Based on your profile we have matched the following services. </h5>

                            <br />

                            <RenderServiceListItem avatar={treatmentImg} header="View treatments" text="We have found x treatments that may benefit you and to disucss with your doctor" color={PRIMARY_COLOR}/>
                            <RenderServiceListItem avatar={trialsImg} header="View clinical trials" text="We have matched you with x clinical trials currently recruiting volunteers" color={PRIMARY_COLOR}/>
                            <RenderServiceListItem avatar={focusImg} header="View focus groups" text="Ther are x focus groups looking for participants like you" color={PRIMARY_COLOR}/>
                            <RenderServiceListItem avatar={learnImg} header="Learn about your Parkinson disease" text="Knowledge articles aand videos tailored to you" color={PRIMARY_COLOR}/>
                            <hr className={classes.hr} />
                            <RenderServiceListItem avatar={monitorImg} header="Monitor my symptoms" text="Use theis site or our mobile app to monitor your symptoms" color={SECONDARY_COLOR}/>
                            <RenderServiceListItem avatar={assessImg} header="Assess my welllness" text="Complete a wellness questionnaire designed for Parkinson patients." color={SECONDARY_COLOR}/>

                        </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                    <br />

                    <div className={classes.serviceSideContainer}>
                        </div>
                    <div className={classes.serviceSideContainer}>
                        </div>


                    </Grid>
                </Grid>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    console.log("state ", state)
    return {
        accountResponse: state.accountResponse
    }
}


UserServices = withRouter(UserServices)
UserServices = withStyles(resultStylesheet)(UserServices)
// UserServices = connect(mapStateToProps, { submitUserServices})(UserServices)
export default UserServices