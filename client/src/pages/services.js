import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { resultStylesheet, PRIMARY_COLOR, SECONDARY_COLOR } from '../styles';
import SocMedBox from '../components/commons/socMedBox'



class UserServices extends Component {

    state = {
        listItemHover: false,
    }



    componentDidMount() {
        window.scroll(0, 0)
    }

    handleServiceRedirect = (redirectAddress) => {
        console.log("service: ", redirectAddress)
        this.props.history.push(redirectAddress)

    }

    render() {

        const { handleSubmit, classes } = this.props
        const { listItemHover } = this.state

        const beforeStyle = {
            display: 'table'
          };
      
          const afterStyle = {
            ...beforeStyle,
            clear: 'both'
          };

        const RenderServiceListItem = (props) => {
            return (
                <div className={classes.serviceListBox} onClick={() => this.handleServiceRedirect(props.redirectAddress)}>
                    <Grid container spacing={8} >
                        <Grid item xs={12} sm={2}>
                            Avatar<br />image<br />
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
                            <h1 style={{color: PRIMARY_COLOR}}>Welcome to PD Connect</h1>
                            <br />
                            <h5>Based on your profile you have matched the following services. </h5>
                            <br />

                            <RenderServiceListItem header="View treatments" text="We have found x treatments that may benefit you and to disucss with your doctor" redirectAddress="/results:treatments" />
                            <RenderServiceListItem header="View clinical trials" text="We have matched you with x clinical trials currently recruiting volunteers" redirectAddress="/results:trials" />
                            <RenderServiceListItem header="View focus groups" text="Ther are x focus groups looking for participants like you" redirectAddress="/results:focusgroups" />
                            <RenderServiceListItem header="Learn about your Parkinson disease" text="Knowledge articles aand videos tailored to you" />
                            <hr className={classes.hr} />
                            <RenderServiceListItem header="Monitor my symptoms" text="Use theis site or our mobile app to monitor your symptoms" />
                            <RenderServiceListItem header="Assess my welllness" text="Complete a wellness questionnaire designed for Parkinson patients." />
                            <hr className={classes.hr} />

                        </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                    <br />
                    <SocMedBox />

                    <div className={classes.serviceSideContainer}>
                        <h3 style={{textAlign: "center", color: PRIMARY_COLOR}}>My Account</h3>
                        <hr className={classes.hr} />
                        <span style={beforeStyle}></span><h5 style={{float: "right", fontSize: "19px"}}>Bronze member</h5> <span style={afterStyle}></span> 
                        <span style={beforeStyle}></span><h5 style={{float: "right", fontSize: "19px"}}>You have 100 connect points</h5> <span style={afterStyle}></span> 
                        <hr style={{margin: "8px 0 16px 0"}}/>
                        <span style={beforeStyle}></span><h5 style={{float: "right", fontSize: "19px"}}>View account</h5> <span style={afterStyle}></span> 
                        <span style={beforeStyle}></span><h5 style={{float: "right", fontSize: "19px"}}>Earn points</h5> <span style={afterStyle}></span> 
                    </div>

                    <div className={classes.serviceSideContainer}>
                        <h3 style={{textAlign: "center", color: PRIMARY_COLOR}}>My profile</h3>
                        <hr className={classes.hr} />
                            <span style={beforeStyle}></span><h5 style={{float: "right", fontSize: "19px"}}>Your profile is 70% complete</h5> <span style={afterStyle}></span> 
                            <span style={beforeStyle}></span><h5 style={{float: "right", fontSize: "19px"}}>Next update due: Dec 2018</h5> <span style={afterStyle}></span> 
                            <hr style={{margin: "8px 0 16px 0"}}/>
                            <span style={beforeStyle}></span><h5 style={{float: "right", fontSize: "19px"}}>View/update profile</h5> <span style={afterStyle}></span> 
                            <span style={beforeStyle}></span><h5 style={{float: "right", fontSize: "19px"}}>Enhance your profile</h5> <span style={afterStyle}></span> 
            
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