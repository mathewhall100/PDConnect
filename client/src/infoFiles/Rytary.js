import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { reset, reduxForm } from 'redux-form';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';    
import patientImg from '../img/patient_rytary.PNG'


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


class InfoRytary extends Component {
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
                    <h1>Rytary</h1>
                </div>

                 <div style={{width: "490px", border: "1px solid grey", padding: "20px", margin: "0 auto"}}>
                    <iframe width="480" height="350" 
                        src="https://www.youtube.com/embed/uPjnpKth40o">
                    </iframe>
                </div>

                <div>
                    <h3 className={classes.textTitle}>Description</h3>
                    <p className={classes.text}>Rytary is an extended release form of carbidopa-levodopa. While carbidopa-levodopa preparations such as sinemet are the most commonly prescibed drug for Parkinson disease, they release their drug into the body very quickly after being taken and this can lead to a need for frequent dosing and early wear 'off' of medication effects. Extended release form (rytary) is designed to release carbidopa-levodopa slowly and over a longer period of time after being taken so that the effects of the drug last longer, up to 4-5 hours, before declining. This maintains levopdopa concentrations longer in the body giving better control over Parkinson symptoms, specifically less 'off" time and more 'on'  time without troublesome dyskinesia.  It also results in fewer overall tablets being needed each day. </p>
                </div> 

                <hr />

                <div>
                <h3 className={classes.textTitle}>How Is It taken?</h3>
                    <p className={classes.text}> Rytary is a tablet that you swallow or capsules that can be broken and the drug sprinkled on soft foods if swallowing is a problem.</p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Who Benefits Most?</h3>
                    <p className={classes.text}>Rytary is licensed for use all stages of Parkinson disease but is of most benefit to those patients experiencing motor fluctuations and/or early wear off of medication effects during the day. Patients needing to take medications very frequently, every one to two hours for example, to control symptoms then Rytary may be an better treatment.  </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Patient Experiences</h3>
                    <br />
                    <div style={{width: "490px", border: "1px solid grey", padding: "20px", margin: "0 auto"}}>
                        <img src={patientImg} width="480" height="350" />
                        {/* <iframe width="480" height="350"
                            src="https://www.youtube.com/embed/">
                        </iframe> */}
                    </div>

                    <br />
                    <br />       
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Unwanted Effects</h3>
                    <p className={classes.text}>Possible unwanted effects of taking Rytary include daytime drowsiness, hallucinations and increased urges. Along with other carbidopa-levodopa preparations, Rytary ccan cause dyskinesias (uncontrolled movements) and dizziness or lightheadedness on standing up.     </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>What To Ask Your Doctor</h3>
                    <p className={classes.text}>If you experience fluctuating motor symptoms and/or early waearing off of medication effects or are taking your Parkison medications very frequently to control symptoms then Rytary may be appropriate for you and it is worth disciussing this with your doctor.    </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Clinical Evidence Summary</h3>
                    <p className={classes.text}>In a clinical study of patients with early Parkinson disease, Rytary was shown to significantly improve movement and the ability to perfom activities during the day. A different study in advanced Parkinson disease, patients taking Rytary experienced significantly less 'of' time and more 'on' time without troublesome dyskinesia. </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>More information</h3>
                    <p className={classes.text}>Rytary is made by Impax laboratories. more information can be found on their website: rytary.com</p>
                </div>
            </div>
        )
    }
}

InfoRytary = withStyles(styles)(InfoRytary)
export default InfoRytary