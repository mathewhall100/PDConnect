import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { reset, reduxForm } from 'redux-form';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';    
import patientImg from '../img/patient_northera.PNG'


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


class InfoDroxidopa extends Component {



    render() {

        const { classes } = this.props

        return (
            <div>

                <div className={classes.textTitle} style={{paddingBottom: "20px"}}>
                    <h1>Droxidopa</h1>
                </div>

                 <div style={{width: "490px", border: "1px solid grey", padding: "20px", margin: "0 auto"}}>
                    <iframe width="480" height="350" 
                        src="https://www.youtube.com/embed/tpvxz6wbjVY">
                    </iframe>
                </div>

                <div>
                    <h3 className={classes.textTitle}>Description</h3>
                    <p className={classes.text}>Feeling suddenly dizzy, lightheaded or feeling you might faint (black out) when standing up affects around 1 in 5 patients with Parkinson disease. It is caused by a sudden drop in blood pressure when changing position which is in turn due to the damage to the nervous system caused by the Parkibnson disease and is called neurogenec orthostatic hypotension.  Droxidopa (also known as Northera) is a FDA approved medication for treating neurogenic orthostatic hypotension in Parkinson disease and related conditions. </p>
                </div> 

                <hr />

                <div>
                <h3 className={classes.textTitle}>How Is It taken?</h3>
                    <p className={classes.text}> Droxidopa is a tablet that is usually taken three times a day. Initially patinest are started on a low dose but this is increased until an improvement in symptoms is achieved or a maximum dose is reached. Patienst taking droxidopa also need their blood pressure checking regularly to ensure it does not get to high.  </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Who Benefits Most ?</h3>
                    <p className={classes.text}>Droxidopa treats patienst with dizziness, lightheadedness or feeling they may faint (black out) when changing position and standing up where this is thought to be caused by their Parkinson disease. It does not treat any of the motor symptoms of Parkinson disease.  </p>
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
                    <p className={classes.text}>Most common unwanted effects are headache, nausea and hypertension when lying down(supine hypertension).      </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>What To Ask Your Doctor</h3>
                    <p className={classes.text}>If you experince symptoms of dizziness, lightheadedness or feeling faint on standing talk to your doctor about whether these are due to your Parkinson's diseas or whether you need investigation for another cause. If these symptoms are thought to be caused by your Parkinson's then discuss with your doctor whether Droxidopa may be a suitable drug for you. If Droxidopa is being considered you will need to discuss monitoring of your blood pressure to ensure it does not become too high. </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Clinical Evidence Summary</h3>
                    <p className={classes.text}>Clinical trials have shown Droxidopa to be effective in short term treatment of patients with symptomatic neurogenic orthostatic hypotension with reduction in symptoms and less impact of symptoms of daily life. The longer term usefulness of Droxidopa is not yet established, however. </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>More information</h3>
                    <p className={classes.text}>Droxidopa (Northera) is made by Lunbeck. More information can be found on their website: www.northera.com</p>
                </div>
            </div>
        )
    }
}

InfoDroxidopa = withStyles(styles)(InfoDroxidopa)
export default InfoDroxidopa