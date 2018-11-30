import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Modal from '../components/commons/modal';
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
    handleAgreement = (e) => {
        e.preventDefault();
        console.log("here");
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
                        <br />
                        <br />
                            <form>
                            <span className={classes.stepperSubtitle}>
                                Please read our
                                <Modal buttonLabel="Terms & Conditions" modalTitle='PD Connect Terms and Conditions' modalContent='content heeeere' />
                                {/*<span className={classes.profileTermsButton}>Terms & Conditions</span> */}
                                and
                                <Modal buttonLabel="Data Privacy Policy" modalTitle='PD Connect Data Privacy Policy' modalContent='content heeeere' />
                                {/*<span className={classes.profileTermsButton}>Data Privacy Policy</span> */}
                            </span>
                            <br />
                            <br />
                            <hr className={classes.hr} style={{marginRight: 0}}/>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label style={{ display: 'flex' }} onClick={(e) => { this.handleAgreement(e) }}>
                                                <FormCheckbox   name="policyCheck"
                                                                label={`this doesn't work`}


                                                />
                                                <span style={{ cursor: 'pointer' }}>I understand that the data I have entered will be used to provide me with individualised services and I have read this site's Terms & Conditions and Data Privacy Policy.</span>
                                            </label>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            </form>
                        <hr className={classes.hr} style={{marginRight: 0}}/>
                    </div>
                )
            } else if (stepperCount === "Finally...") {
                return (
                    <div className={classes.listItems} style={{marginTop: "-15px", marginBottom: "-15px"}} >
                        <ul style={{marginLeft: "20px"}}>
                            <li>Save your profile between visits</li>
                            <li>Hear first about new treatments and clinical trials matched to you</li>
                            <li>Submit your details to participate in focus groups</li>
                            <li>Earn reward points for greater involvement</li>
                            <li>Easily keep you profile up to date</li>
                        </ul>
                    </div>
                )
            } else if (stepperCount=== "Hello!") {
                return (
                    <div className={classes.listItems} >
                        <ul style={{marginLeft: "20px", marginTop: "-15px", marginBottom: "-15px"}}>
                            <li>Knowledge of new and established treatments that may benefit you</li>
                            <li>Clinical trials in Parkinson disease looking to recruit volunteers</li>
                            <li>Focus groups that pay you for participating</li>
                            <li>Latest Parkinson disease news and information</li>
                            <li>More</li>
                        </ul>
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
                <div className={classes.stepperContainer}>

                    <Grid container spacing={24}  >
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
                            <span className={classes.stepperSubtitle}>{subtitle}</span>
                            <ExtraText />
                        </Grid>
                    </Grid>

                    {( (stepperCount < 8 || isNaN(stepperCount)) && stepperCount !== "Hello!") && <BottomNav />  }

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