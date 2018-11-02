import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { reset, reduxForm } from 'redux-form';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';    


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


class InfoDuodopa extends Component {
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
                    <h1>Duopa Therapy</h1>
                </div>

                 <div style={{width: "490px", border: "1px solid grey", padding: "20px", margin: "0 auto"}}>
                    <iframe width="480" height="350" 
                        src="https://www.youtube.com/embed/GaCiXlXwBp8">
                    </iframe>
                </div>

                <div>
                    <h3 className={classes.textTitle}>Description</h3>
                    <p className={classes.text}>Duopa is the same type of medication as sinemet (carbidopa/levodopa) but instead of being taken as a pill, duopa is a liquid gel that is delivered directly into the intestine via a tube placed through the stomach wall. This allows duopa to be delivered continuosly to the body using an external pump. Advantages include better absoprtion, more even delivery of drug over time and reduction in 'off' times..  </p>
                </div> 

                <hr />

                <div>
                <h3 className={classes.textTitle}>How Is It Done?</h3>
                    <p className={classes.text}> Duopa therapy requires a short surgical procedure to make a small hole ion the abdominal wall (a stoma) through which a thin tube is passed into the intestine (a PEG-J tube). An external pump loaded with Duopa gel cartridges is connected to the tube and is worn by the patient at their side. The pump weighs about 3 lbs and requires daily cartridge changes. The pump is programmed to continously deliver Duopa to the intestine at doses tailored to individual needs and symptoms. For example it is common to deliver a higher dose in the mornings to quickly achieve an ideal 'on state' then taper to a lower dose for the rest of the day. </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Who Benefits Most?</h3>
                    <p className={classes.text}>Duopa therapy is approved for patients with advanced Parkinson disease who respond well to levodopa. You may be a good candidate for Duopa if your motor symptoms fluctuate during the day with 3 or more  hours of 'off' time per day and you have tried but failed to control these symptoms with other oral Parkinson disease medications. Duopa is not a cure, but does offer any patients better, more even control over their motor symptoms. </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Patient Experiences</h3>
                    <br />
                    <div style={{width: "490px", border: "1px solid grey", padding: "20px", margin: "0 auto"}}>
                        <iframe width="480" height="350"
                            src="https://www.youtube.com/embed/FnhEQdzmX3s">
                        </iframe>
                    </div>

                    <br />
                    <br />       
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Unwanted Effects</h3>
                    <p className={classes.text}>Similar to other carbidopa/levodopa preparations (e.g. sinemet) duopa can cause nausea, dizziness and feeling faint on standing (orthostatic hypotension), dyskinesia especially at higher doses, dry mouth, constipation and hallucinations. In addition, although placing such tubes directly into the stomach is a low risk surgical procedure, it can cause infection and pain around the tube insertion site and rarely infection in the abdomen.    </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>What To Ask Your Doctor</h3>
                    <p className={classes.text}>In general Duopa is only appropriate for patients with advanced Parkinson disease and and poorly controlled motor symptoms depite oral medication. Discuss with your doctor whether you fit this patient description and in particular whether it would be better to try to improve your symptoms with further oral medication before considering Duopa. To be considered for Duopa therapy a full assessment by a movement disoder specialist is required and your doctor can refer you for this if necessary.  </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Clinical Evidence Summary</h3>
                    <p className={classes.text}>Many patients experince reduction in 'off' time and reduction in motor fluctuation on Duopa therapy.   </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>More information</h3>
                    <p className={classes.text}>Duopa is made by xyz pharmaceutical and more information can be found on their website: xyzpharma.com</p>
                </div>
            </div>
        )
    }
}

InfoDuodopa = withStyles(styles)(InfoDuodopa)
export default InfoDuodopa