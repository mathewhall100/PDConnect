import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { updateStepperCount } from '../actions/Stepper';

const styles = theme => ({
    root: {
        width: '90%',
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

function getSteps() {
    return ['You', 'Your Life', 'Your Family', 'Medications', 'Surgery Procedure', 'Symptoms - Motor', 'Symptoms - Non-Motor', 'Results'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return `Tell us about yourselves`;
        case 1:
            return 'Thank you! Now a little bit about your daily routines.';
        case 2:
            return `Please tell us more about your family background`;
        case 3:
            return `Now, your medications?`;
        case 4:
            return `Any surgery procedures`;
        case 5:
            return `Almost there! We need more info about your symptoms`;
        case 6:
            return `We also like to know more about your non-motor symptoms`;
        case 7:
            return `These are some treatments you can talk to your neurologist. `;
        default:
            return 'Unknown step';
    }
}

class VerticalLinearStepper extends React.Component {
    state = {
        activeStep: 0,
    };
    componentDidMount() {
        this.props.updateStepperCount();
    }
    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    render() {
        const { classes, onPage } = this.props;
        console.log("stepper props : ", this.props);
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            onPage!== 'Unknown step' ? 
                <div className={classes.root}>
                    <Stepper activeStep={onPage} orientation="vertical">
                        {steps.map((label, index) => {
                            return (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                    <StepContent>
                                        <Typography>{getStepContent(index)}</Typography>
                                        {/*<div className={classes.actionsContainer}>
                                            <div>
                                                <Button
                                                    disabled={activeStep === 0}
                                                    onClick={this.handleBack}
                                                    className={classes.button}
                                                >
                                                    Back
                                            </Button>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={this.handleNext}
                                                    className={classes.button}
                                                >
                                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                </Button>
                                            </div>
                                        </div>*/}
                                    </StepContent>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} className={classes.resetContainer}>
                            <Typography>All steps completed - you&quot;re finished</Typography>
                            <Button onClick={this.handleReset} className={classes.button}>
                                Reset
                        </Button>
                        </Paper>
                    )}
                </div>
            :
            null
            
        );
    }
}

function mapStatsToProps(state) {
    console.log(state);
    return {
        user: state.user,
        currentTreatments: state.currentTreatments,
        previousTreatments: state.previousTreatments,
        userChoice: state.userChoice,
        symptom: state.symptom,
        sideEffect: state.sideEffect,
    }
}

VerticalLinearStepper.propTypes = {
    classes: PropTypes.object,
};

VerticalLinearStepper = withStyles(styles)(VerticalLinearStepper);

export default connect(mapStatsToProps, { updateStepperCount })(VerticalLinearStepper);