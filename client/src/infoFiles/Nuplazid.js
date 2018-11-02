import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { reset, reduxForm } from 'redux-form';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';    
import patientImg from '../img/patient_nuplazid.PNG'


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


class InfoNuplazid extends Component {
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
                    <h1>Nuplazid</h1>
                </div>

                 <div style={{width: "490px", border: "1px solid grey", padding: "20px", margin: "0 auto"}}>
                    <iframe width="480" height="350" 
                        src="https://www.youtube.com/embed/ZDbxEZP2qDY">
                    </iframe>
                </div>

                <div>
                    <h3 className={classes.textTitle}>Description</h3>
                    <p className={classes.text}>Nuplazid (also known as pimavaserin) is an FDA approved treatment for hallucinations and delusions associated with Parkinson disease.  </p>
                </div> 

                <hr />

                <div>
                <h3 className={classes.textTitle}>How Is It taken?</h3>
                    <p className={classes.text}> Nuplazid is a once a day tablet. It does not work immediatekly, usually taking 4-6 weeks to reach full effect of reducing hallucinations and delusions. </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Who Benefits Most ?</h3>
                    <p className={classes.text}>Hallucinations an delusions are a common symptom of advanced Parkinson disease and can be distressing. If you are troubled by hallucinations or delusions, or your caregiver sees this as troubling you, then Nuplazid may help reduce these symptoms to a tolerable level.   </p>
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
                    <p className={classes.text}>Nuplazid hs been linkd to an increase in death for patients with psychosis realted to cognitive impairment (dementia) and should be avoided in patints with dementia-related psychosis unrelated Parkinson's hallucinations and delusions. Nuplazid may also increase the risk of certain heart rhythm chnages, limb swelling and confusion.  </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>What To Ask Your Doctor</h3>
                    <p className={classes.text}>If you experience fluctuating motor symptoms and/or early waering off of medication effects or are taking your parkison's medications very frequently to control symptoms then discuss Nuplazid may be appropriate for you and it is worth discissing this with your doctor.    </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Clinical Evidence Summary</h3>
                    <p className={classes.text}>In a clinical trial the majority of patients taking Nuplazid experienced fewer and/or less severe hallucinations and delusions. After 6 weeks a proportion of patinets no longer had these symptoms at all. each patient responds differently, however, and some also did not respond at all to Nuplazid. </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>More information</h3>
                    <p className={classes.text}>Nuplazid is made by XYZ laboratories. More information can be found on their website: Nuplazid.com</p>
                </div>
            </div>
        )
    }
}

InfoNuplazid = withStyles(styles)(InfoNuplazid)
export default InfoNuplazid