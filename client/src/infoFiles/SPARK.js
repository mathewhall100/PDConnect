import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { reset, reduxForm } from 'redux-form';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';    
import patientImg from '../img/trials_spark1.PNG'


const styles = theme => ({
    root: {

    },
    textTitle: {
        textAlign: "center",
        paddingTop: "20px"
    },
    TextStyle: {
        marginTop: '40px',
        marginBottom: '40px'
    },
    text: {
        fontSize: "20px",
        lineHeight: "32px",
        textAlign: "justify", 
        padding: "20px"
    },
    Btn: {
        width: "150px",
        height: "30px",
        backgroundColor: "white",
        border: "2px solid grey",
        borderRadius: "10px",
        fontSize: "14px"
    },

});


class InfoSPARK extends Component {
    state = {
        redirect: false
    }

    render() {

        const { classes } = this.props
        const { redirect } = this.state
        if (redirect) {
            return (
                <Redirect to={`/result`} />
            )
        }
        return (
            <div>
                <span style={{
                    marginRight: '50px', textAlign: 'center', position: "fixed", top: "10%", left: "5%",
                }}>
                    <Button variant='contained' color='secondary' className={classes.Btn} onClick={() => this.setState({ redirect: true })} className={classes.button}>
                        Back to result
                    </Button>
                </span>
                <div className={classes.textTitle} style={{paddingBottom: "20px"}}>
                    <h1>The SPARK Study</h1>
                </div>

                <div>
                    <h3 className={classes.textTitle}>Description</h3>
                    <p className={classes.text}>The SPARK study is for people who have been recently diagnosed with Parkinson disease and are looking to take a proactive step in their care. The study is designed to evaluate a potential new drug treatment for Parkinson disease which may slow or reduce disease progression from its earliest stages. Some participants in the trial will recieve the study drug and others will recieve a placebo. The trial is blinded, which means that participants and doctors do not know whether any one participant is receiving the study drug or a placebo. This allows for comparison btween the two groups without bias. </p>
                </div> 

                <hr />

                <div>
                <h3 className={classes.textTitle}>What is involved?</h3>
                <br />
                <div style={{width: "560px", margin: "0 auto"}}>
                        <img src={patientImg} width="550" />
                        
                    </div>
                </div>
                <br />
                <br />
                <hr />

                <div>
                    <h3 className={classes.textTitle}>Am I eligable?</h3>
                    <div className={classes.text}>
                        <p>You may be eligable to participate in the SPARK trial if: </p>
                        <ul>
                            <li>You are between 40 and 80 years of age</li> 
                            <li>Have been diagnosed with parkinson disease in the last three years</li> 
                            <li>Have not received levodopa or any other Parkinson disease medication in the last 12 weeks.</li>
                        </ul>
                    </div>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Why should I participate?</h3>
                    <div className={classes.text}>
                    <p> Study participants will receive: </p>
                        <ul>
                            <li>The study drug (new potential treatment) or a placebo at no cost. Currently, any benefit from receiving the study drug is unknown but your participation in the study will increase the growing body of knowedge about Parkinson disease.</li> 
                            <li>Study related care and consultation with a study doctor.</li> 
                            <li>Study office visits and health assessments.</li>
                            <li>Travel costs and re-imbursement of any other costs incurred related to the study.</li>
                        </ul> 
                    </div>    
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Who is running the study?</h3>
                    <p className={classes.text}>The study is being sponsored by the pharmaceutical company Biogen. </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Should I discuss this trial with my doctor?</h3>
                    <p className={classes.text}>If you have an interest in participating in this this clinical trial, by all means talk to the doctor who normally looks fater you for Parkinson disease. Your doctor can refer you to participate in the trial, and if you do participate they will certainly need to know. There are also dedicated study physicians who you can contact directly to discuss participating in this trial and they can help with more specific questions about the trial such as what is involved, the benefits and the risks.   </p>
                </div>

                <hr />

                <hr />

                <div>
                    <h3 className={classes.textTitle}>More information</h3>
                    <p className={classes.text}>More information on the SPARK trial as well as how to contact a trial physician can be found on the trial website, www.thesparkstudy.com. </p>
                </div>
            </div>
        )
    }
}

InfoSPARK = withStyles(styles)(InfoSPARK)
export default InfoSPARK