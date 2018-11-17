import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { reset, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { startCase } from 'lodash'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';

import FormText from '../components/forms/FormText';
import FormTextPassword from '../components/forms/FormTextPassword';
import {resultStylesheet, PRIMARY_COLOR, QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR } from '../styles';
import { treatmentInfo } from '../infoFiles/treatmentInfo'
import apomorphineGraph from '../img/apomorphineMedia1.PNG'



class TreatmentsDisplay extends Component {

    state = {
        tabSelected: 0,
        value: 0,
        treatmentResults: [],
        trialResults: [],
        redirect: false
    }

    componentDidMount() {
        window.scroll(0,0)
        const locn = window.location.href
        //const item = locn.substr(locn.lastIndexOf(':') + 1)
        const item = "apomorph"
        const treatment = treatmentInfo.filter(t => t.key === item)[0]
        console.log(treatment)
        this.setState({treatment: treatment})
    }


    handleChange = (event, value) => {
        this.setState({ value });
      };
    
    handleChangeIndex = index => {
        this.setState({ value: index });
      };

    handleTabClick = (tab) => {
        console.log("tab: ", tab)
        this.setState({tabSelected: tab})
    }

    submit = (values) =>  {
        console.log(values)
    }

    handleBack = () => {
        this.setState({
            redirectAddress: "/user/user_family"}, () => this.setState({redirect: true}) )
    }

    render() {

        const { handleSubmit, classes } = this.props
        const { page, treatment, redirect, treatmentResults, trialResults, tabSelected } = this.state

        const RenderOverview = () => {

            return (
                <div className={classes.resultContainer}>
                    <br />
                    <h1 className={classes.title}>{startCase(treatment.name)}</h1>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={12} md={6}>

                            <br />
                            <h4 className={classes.infoTitle}>Summary</h4>
                            <br />
                            <p className={classes.infoSummary}>{treatment.summary}</p>

                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <br />
                            
                            <iframe width="400" height="300" className={classes.mediaBox}
                                src={treatment.mediaLnk1}>
                            </iframe>
                        </Grid>
                    </Grid>
                    <br />
                    <h4 className={classes.infoTitle}>Description</h4>
                    <p className={classes.infoText}>{treatment.description}</p>
                    <br />
                    <h4 className={classes.infoTitle}>Who benefits from this medication?</h4>
                    <p className={classes.infoText}>{treatment.benefits}</p>
                    <br />
                    <h4 className={classes.infoTitle}>How is it taken?</h4>
                    <p className={classes.infoText}>{treatment.administration}</p>

                </div>
            )
        }

        const RenderPatientExp= () => {

            return (
                <div className={classes.resultContainer}>
                    <br />
                    <h1 className={classes.title}>{startCase(treatment.name)}</h1>

                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={12} md={6}>

                            <br />
                            <h4 className={classes.infoTitle}>Patient Stories</h4>
                            <br />
                            <p className={classes.infoSummary}>{treatment.patient}</p>

                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <br />
                            {treatment.mediaLnk2 ? 
                                treatment.mediaLnk2.map((lnk, index) => {
                                    return (
                                        <span>
                                            <iframe key={index} width="400" height="300" className={classes.mediaBox}
                                                src={lnk}>
                                            </iframe>
                                            <br />
                                            <br />
                                        </span>
                                    ) 
                                })
                                :
                                null }
                        </Grid>
                    </Grid>
                </div>
            )
        }

        const RenderEvidence= () => {

            return (
                <div className={classes.resultContainer}>
                    <br />
                    <h1 className={classes.title}>{startCase(treatment.name)}</h1>

                 
                        {treatment.evidence ? 
                            treatment.evidence.map((ev, index) => {
                                return (    
                                    <Grid key={index} container spacing={24}> 
                                        <Grid item xs={12} sm={12} md={6}>
                                            <br />
                                            <h4 className={classes.infoTitle}>{ev.name}</h4>
                                            <br />
                                            <p className={classes.infoSummary}>{ev.text}</p>
                                            <p className={classes.infoText}>Sourced from {ev.source}</p>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <br />
                                            <img src={apomorphineGraph} width="400" height="300" className={classes.mediaBox} />
                                            <br />
                                            <br />                             
                                        </Grid>
                                    </Grid>
                                ) 
                            })
                        :
                        null }
                </div>
            )
        }

        const RenderRisks = () => {

            return (
                <div className={classes.resultContainer}>
                    <br />
                    <h1 className={classes.title}>{startCase(treatment.name)}</h1>

                        <Grid container spacing={24}> 
                            <Grid item xs={12} sm={12} md={6}>
                                <br />
                                <h4 className={classes.infoTitle}>Common problems</h4>
                                <br />
                                <p className={classes.infoSummary}>{treatment.riskText}</p>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                            <br />
                                <h4 className={classes.infoTitle}>List of side effects</h4>
                                <br />
                                {treatment.riskBullets.map((bullet, index) => {
                                    return (
                                        
                                        <ul key={index}  className={classes.infoBullets}>
                                            <li>{bullet}</li>
                                        </ul>
                                    )

                                }) }                            
                            </Grid>
                        </Grid>

                </div>
            )
        }
        const RenderMore = () => {

            return (
                <div className={classes.resultContainer}>
                    <br />
                    <h1 className={classes.title}>{startCase(treatment.name)}</h1>

                        <Grid container spacing={24}> 
                            <Grid item xs={12} sm={12} md={6}>
                                <br />
                                <h4 className={classes.infoTitle}>More Information</h4>
                                <br />
                                <p className={classes.infoSummary}>{treatment.more}</p>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                                    
                            </Grid>
                        </Grid>

                </div>
            )
        }


        if (redirect) { 
            const url = `/${page}`;
            console.log("URL: ", url)
            console.log("redirect to: " + url);
            return<Redirect to={url} />;
        }
        
        return (
            <div className={classes.root}> 
            
                <div className={classes.tabBar}>
                
                    <span className={tabSelected === 0 ? classes.tabButtonSelected : classes.tabButtonLeft} onClick={() => this.handleTabClick(0)}>OVERVIEW</span>
                    <span className={tabSelected === 1 ? classes.tabButtonSelected : classes.tabButtonMiddle} onClick={() => this.handleTabClick(1)}>PATIENT STORIES</span>
                    <span className={tabSelected === 2 ? classes.tabButtonSelected : classes.tabButtonRight} onClick={() => this.handleTabClick(2)}>EVIDENCE</span>
                    <span className={tabSelected === 3 ? classes.tabButtonSelected : classes.tabButtonRight} onClick={() => this.handleTabClick(3)}>RISKS</span>
                    <span className={tabSelected === 4 ? classes.tabButtonSelected : classes.tabButtonRight} onClick={() => this.handleTabClick(4)}>MORE</span>

                </div>

                { treatment && <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={8}>

                        {tabSelected === 0 && <RenderOverview /> }
                        {tabSelected === 1 && <RenderPatientExp /> }
                        {tabSelected === 2 && <RenderEvidence /> }
                        {tabSelected === 3 && <RenderRisks /> }
                        {tabSelected === 4 && <RenderMore /> } 

                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                    
                        <div className={classes.emailContainer}>
                            <form autoComplete="off" onSubmit={handleSubmit(this.submit.bind(this))}>
                                <div >
                                    <h1 className={classes.title}>Create an account</h1>
                                </div>

                                    <FormText
                                        name="email"
                                        label="Email (john.doe@you.com"
                                        width="90%"
                                    />
                                    <br />

                                    <FormTextPassword
                                        name="password1"
                                        label="Password"
                                        width="90%"
                                    />

                                    <br />

                                    <Button type="submit" className={classes.btn}>Create Account</Button>
                                <br />
                            </form>
                        </div>
                    
                        <div className={classes.emailContainer}>
                            <form autoComplete="off" onSubmit={handleSubmit(this.submit.bind(this))}>
                                <div >
                                    <h1 className={classes.title}>Email Me The Results</h1>
                                </div>
                                <FormText
                                name="email"
                                label="Email (john.doe@you.com"
                                width="90%"
                                />
                                <br />
                            </form>
                        </div>
                    
                        <div className={classes.emailContainer}>
                            <form autoComplete="off" onSubmit={handleSubmit(this.submit.bind(this))}>
                                <div >
                                    <h1 className={classes.title}>Print Results</h1>
                                </div>
                                <Button type="submit" className={classes.btn}>Print</Button>
                                <br />
                            </form>
                        </div>
                    </Grid>
                 </Grid> }

            </div>
        );
    }
}

                                



const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ }, dispatch);
}

const formData = {
    form: "CreateAccountForm" //unique identifier for this form 
}

TreatmentsDisplay = withRouter(TreatmentsDisplay)
TreatmentsDisplay = reduxForm(formData)(TreatmentsDisplay)
TreatmentsDisplay = withStyles(resultStylesheet)(TreatmentsDisplay)
TreatmentsDisplay = connect(null, mapDispatchToProps)(TreatmentsDisplay)
export default TreatmentsDisplay