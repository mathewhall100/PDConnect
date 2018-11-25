import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { updateStepperCount } from '../actions/Stepper';
import { userStylesheet } from '../styles';
import BottomNav from '../components/commons/userBottomNav'
import FormCheckbox from './forms/FormCheckbox'

const styles = theme => ({
    container: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2,
    },
    resetContainer: {
        padding: theme.spacing.unit * 3,
    },
});

class VerticalLinearStepper extends React.Component {
    state = {
        activeStep: 0,
        redirectAddress: '/user/user_account'
    };
    componentDidMount() {
        this.props.updateStepperCount();
    }


    render() {
        const { classes, onPage, stepper } = this.props;
        const { stepperCount, pageImg, totalSteps, pageName, title, subtitle} = stepper;
        console.log("stepper props : ", this.props);
        const { activeStep } = this.state;
        
        const ExtraText = () => {
            console.log("stepperCount: ", stepperCount)
            if (stepperCount < 8) {
                return null
            } else if (stepperCount === 8) {
                return (
                    <div style={{marginRight: "10px"}}> 
                        <span className={classes.stepperTitle}>Your profile will be secure and we will not sell or share any information within it without your express permission.</span>
                        <br />
                        <br />
                        <span className={classes.stepperTitle}>
                            Please read our 
                            <span className={classes.profileTermsButton}>Terms & Conditions</span> 
                            as well as our 
                            <span className={classes.profileTermsButton}>Data Privacy Policy</span>
                        </span>
                        <br />
                        <br />
                        <hr className={classes.hr} style={{marginRight: 0}}/>
                        <table>
                            <tbody>
                                <tr>
                                    <td><FormCheckbox name="policyCheck" label="Check" /></td>
                                    <td className={classes.stepperTitle}>I understand that the data I have entered will be used to provide me with individualised services and I have read this site's Terms & Conditions and Data Privacy Policy."</td>
                                </tr>

                            </tbody>
                        </table>
                        <hr className={classes.hr} style={{marginRight: 0}}/>
                    </div>
                )
            } else return null
            
        }
        
        const StepperHead = () =>  {
            console.log("stepperCount: ", stepperCount)
            if (!isNaN(stepperCount) ) {
                return (
                    <h2 className={classes.stepperCounter}>Step {stepperCount} of {totalSteps}</h2>
                ) 
            } else {
                return (
                    <h2 className={classes.stepperCounter}>{stepperCount}</h2>
                )
            }
        }


        return (
            onPage!== 'Unknown step' ?
                <div>

                    <Grid container spacing={24} className={classes.stepperContainer} >
                        <Grid item xs={12} >
                            {stepperCount && <StepperHead /> }
                            <h3 className={classes.stepperPageName}>{pageName}</h3>
                        </Grid>
                        <Grid item xs={12}>
                            <img src={pageImg} alt={pageName} />
                        </Grid>
                        <Grid item xs={12}>
                            <h2 className={classes.stepperTitle}>{title}</h2>
                            
                        </Grid>
                        <Grid item xs={12}>
                            <span className={classes.stepperTitle}>{subtitle}</span>
                            <ExtraText />
                        </Grid>
                    </Grid>

                    {( stepperCount < 8 || isNaN(stepperCount) ) && <BottomNav />  }

                </div>
            :
            null
        );
    }
}

function mapStatsToProps(state) {
    console.log(state);
    return {
        stepper: state.stepper,
    }
}

VerticalLinearStepper.propTypes = {
    classes: PropTypes.object,
};

const formData = {
    form: 'policyCheckbox', //unique identifier for this form
}

VerticalLinearStepper = reduxForm(formData)(VerticalLinearStepper)
VerticalLinearStepper = withStyles(userStylesheet)(VerticalLinearStepper);
VerticalLinearStepper = withRouter(VerticalLinearStepper)
export default connect(mapStatsToProps, { updateStepperCount })(VerticalLinearStepper);