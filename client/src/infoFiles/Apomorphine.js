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
        fontSize: "14px",
        
    },

});


class InfoApomorphine extends Component {
    state={
        redirect : false
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
                    marginRight: '50px', textAlign: 'center', position: "fixed", top: "10%", left: "5%", }}>
                    <Button variant='contained' color='secondary' className={classes.Btn} onClick={() => this.setState({redirect: true})} className={classes.button}>
                        Back to result
                    </Button>
                </span>
                <div className={classes.textTitle} style={{paddingBottom: "20px"}}>
                    <h1>Apomorphine</h1>
                </div>

                 <div style={{width: "490px", border: "1px solid grey", padding: "20px", margin: "0 auto"}}>
                    <iframe width="480" height="350" 
                        src="https://www.youtube.com/embed/4RTAAkA9cG8">
                    </iframe>
                </div>

                <div>
                    <h3 className={classes.textTitle}>Description</h3>
                    <p className={classes.text}>Apomorphine (also known as Apokyn) is used to treat 'off' episodes when patients with Parkinson disease (PD) have difficulty moving, walking or talking normally.  Apomorphine helps with both 'off' periods that occur as other medications wear off or that occur at random. It does not prevent 'off' periods but does help reduce symptoms when they occur. Apomorphine is a class of drug called a dopamine agonist and works by mimicking the action of dopamine in the brain, the natural substance that is lacking in patients with PD.</p>
                </div>

                <hr />

                <div>
                <h3 className={classes.textTitle}>How Is It Given?</h3>
                    <p className={classes.text}>Apomorphine is given as an injection just under the skin (subcutaneously) using a special injector pen. It can be used as needed according to your doctors instructions and you can inject yourself or have a friend or relative perform the injections if this is difficult for you. In some cases it can be given continuously via and infusion pump. </p>
                </div>

                <hr />

                <div>
                <h3 className={classes.textTitle}>Who Benefits Most ?</h3>
                    <p className={classes.text}>Patients with early or sudden unpredictable 'off' symptoms that occur depsite taking other Parkinson's medications. Usually doctors will try to control 'off' symptoms by using other medicactions first but if this is not possible or the other drugs are no longer working, then apomorphine may be a helpful treatment. </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Patient Experiences</h3>
                    <br />
                    <div style={{width: "490px", border: "1px solid grey", padding: "20px", margin: "0 auto"}}>
                        <iframe width="480" height="350"
                            src="https://www.youtube.com/embed/AYmk9mKjiTA">
                        </iframe>
                    </div>

                    <br />
                    <br />
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Unwanted Effects</h3>
                    <p className={classes.text}>Apomorphine often causes nausea and sickness, particularly at the start of treatment. To prevent this, it is often given together with another medication to reduce the chance of developing sickness while of apomorphine. Less often, apomorphine can cause diarrhea, headaches or dizziness on standing up.  Skin soreness and nodules may occur from repeat injections.</p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>What To Ask Your Doctor</h3>
                    <p className={classes.text}>Apomorphine is not a treatment appropriate for all Parkinson's patients but if you are having regular or sudden, unpredictable wear off symptoms not controlld by other medications, then it might be right for you. Discuss with your doctor whether apomorphine is appropriate for you and particularly whether changes to your other Parkinson's medications should be tried first to improve symptoms before considering apomorphine. Also discuss with your doctor the side effects oF apomorphone and how easy it will be for you to inject yourself or have a caregiver or family member do it for you.</p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Clinical Evidence Summary</h3>
                    <p className={classes.text}>Since apomorphine was introduced for parkinson's disease in 2005, a number of clinical trials have been carried out investigating the effect of apomorphine on patients with uncontrolled mwaering 'off' symptoms. These trials have shown a positive benefit in symptom control in those patienst taking apomorphine in addition to other Parkinson's medications. A summary of the most recent trials can be seen at xyz.apomorphine.com.</p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>More Information</h3>
                    <p className={classes.text}>Apomorphine is made by xyz pharmaceutical and more information can be found on their website: xyzpharma.com</p>
                </div>
            </div>
        )
    }
}

InfoApomorphine = withStyles(styles)(InfoApomorphine)
export default InfoApomorphine