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


class InfoDBS extends Component {
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
                    <h1>Deep Brain Stimulation</h1>
                </div>

                 <div style={{width: "490px", border: "1px solid grey", padding: "20px", margin: "0 auto"}}>
                    <iframe width="480" height="350" 
                        src="https://www.youtube.com/embed/2wvj7XJrQW4">
                    </iframe>
                </div>

                <div>
                    <h3 className={classes.textTitle}>Description</h3>
                    <p className={classes.text}>Deep brain Stimulation (DBS) is a surgical procedure where electrodes are inserted into the area of the brain affected by Parkinons's disease and which controls movement. These eletrodes send  electrical signals into the brain to supress the abnormal nerve signals that give rise to Parkinson's symptoms. DBS is an effective treatment for patients with disabling tremor, uncontrolled wearing off spells and medication-induced dyskinesia. While DBS is not a cure, many patients see considerable improvement in their motor symptoms and are able to reduce the amount of Parkinon's medication they need to take. These benefits of DBS last at least five years. </p>
                </div> 

                <hr />

                <div>
                <h3 className={classes.textTitle}>How Is It Done?</h3>
                    <p className={classes.text}>  DBS surgery is performed by neurosurgeons and is only offered at specialist centers. Before and during surgery magnetic resonance imaging and direct recording of brain cell activity are used to locate the optimal site in the brain for electrode insertion.  A small batttery powered impulse generator is also placed under the skin of the chest or abdomen from where it delivers the electrical impulses to the electrodes. A hand held controller switches the impulse generator on or off allowing the patient to activate and de-activate the deep brain stimulation as needed for symptom supression..</p>
                </div>

                <hr />

                <div>
                <h3 className={classes.textTitle}>Who Benefits Most ?</h3>
                    <p className={classes.text}>Currently evidence supports DBS surgey for those patients with diagnosed Parkinson's for four or more years and who have disabling tremor, wearing off spells that are difficult to control with medications alone and for those with medication-induced dyskinesias. It is also suitable for patinets with advanced Parkinson's disease, but not those with significant memory or cognitice impairment. Improvenment in symptoms from DBS varies frpom person to person and it cannot be predicted in advance how much any one patient will benefit. </p>
                </div>

                <hr />

                  <div>
                    <h3 className={classes.textTitle}>Patient Experiences</h3>
                    <br />
                    <div style={{width: "490px", border: "1px solid grey", padding: "20px", margin: "0 auto"}}>
                        <iframe width="480" height="350"
                            src="https://www.youtube.com/embed/7-NKUbsT6Y0">
                        </iframe>
                    </div>

                    <br />
                    <br />
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Side Effects</h3>
                    <p className={classes.text}>As with any operation there are risks. In the case of DBS there is around a 3% chance (per side of the brain operated) of infection, bleeding and seizures. ognitive decline is also seen in a small number of patients following DBS.   </p>
                </div>

                <hr />
                <div>
                    <h3 className={classes.textTitle}>What To Ask Your Doctor</h3>
                    <p className={classes.text}>DBS is not offered to all patients and is currently only recommended for patients with poorly cntrolled motor symptoms despite that cannot be controlled by medications. Check with your doctor that you have been diagnosed with Parkinson's for more than four years and whether your symptoms can be improved with medications before considering DBS. Deciding an individual patients suitability for DBS usually requires specialist assessment and, if necessary, your doctor can refer you to a movement disorder specialist for this.   </p>
                </div>

                <hr />

                <div>
                <h3 className={classes.textTitle}>Clinical Evidence Summary</h3>
                    <p className={classes.text}>Since introduction in 1997 to treat Parkinson's tremor, successive clnical trials have shown benefit of DBS to broader groups  of Parkinson patients until in 2016 DBS surgery was approved for patients in the earlier stages of disease but who still had uncontrolled symptoms.  </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>More information</h3>
                    <p className={classes.text}>Apomorphine is made by xyz pharmaceutical and more information can be found on their website: xyzpharma.com</p>
                </div>
            </div>
        )
    }
}

InfoDBS = withStyles(styles)(InfoDBS)
export default InfoDBS