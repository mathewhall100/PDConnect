import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { submitSideEffects } from '../actions/SideEffectAction'
import { withStyles } from '@material-ui/core/styles';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Switch from '../components/forms/FormSwitch';
import Select from '../components/forms/FormSelect';
import { withRouter, Redirect } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { side_effects } from '../constants';
import _ from 'lodash';

const arrSideEffects = populateSideEffectObj(side_effects);

function populateSideEffectObj (items) {
        let arrSideEffect = [];
        for (let i = 0; i <= items.length - 1; i++) {
            let objSideEffect = {};
            objSideEffect.value = items[i];
            objSideEffect.label = items[i];
            objSideEffect.text = items[i];
            arrSideEffect.push(objSideEffect);
        }
        return arrSideEffect;
    }

class SideEffect extends Component {
    state={
        numSideEffect : 0,
        selectInput: [<Grid item xs={12}><Select name={`side-effect0`} value={`side-effect0`} label={`side effect0`} items={arrSideEffects} /></Grid>],
        redirect : false
    }
    submit(values) {
        console.log("props : ", this.props);
        console.log("values : ", values);
        this.props.submitSideEffects(values)
        this.setState({
            redirect : true
        })
    }

    addNewSelectLine(classes) {
        let currNumSideEffect = this.state.numSideEffect+1;

        const selectInput = this.state.selectInput.concat(<Grid item xs={12}><Select name={`side-effect${currNumSideEffect}`} value={`side-effect${currNumSideEffect}`} label={`side effect${currNumSideEffect}`} items={arrSideEffects} /></Grid>)
        this.setState({
            numSideEffect : currNumSideEffect +1,
            selectInput : selectInput
        })
        
    }
    
    render() {
        const { handleSubmit, classes, pristine, submitting } = this.props;
        const { redirect } = this.state;
        const selectInput = this.state.selectInput.map(( i, index) => {
            return (i);
        })

        if( redirect ) {
            console.log("proceed to redirect..");
            return(
                <Redirect to='/symptom' />
            )
        }
        return (
            <div>
                <Grid item xs={12}>
                    <h3>Tell us about how these medications help you or any side effects they caused </h3>
                </Grid>
                
                <form autoComplete='off' onSubmit={handleSubmit(this.submit.bind(this))}>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Switch name='benefitFromSinemet' label='Do you receive positive benefits from Sinemet?' value={this.props.sideEffect.benefitFromSinemet} />
                        </Grid>
                        {selectInput}
                        <Grid item xs={12}>
                            <Button variant="fab" mini color="secondary" aria-label="Add" onClick={()=>this.addNewSelectLine(classes)} className={classes.button}>
                                <AddIcon />
                            </Button>
                            Add a new side effect
                        </Grid>
                        <Grid xs={12} item>
                            <Button type="submit" className={styles.Button} disabled={pristine || submitting}>
                                Next
                            </Button>
                        </Grid>
                    </Grid>
                    
                </form>
                

            </div>
        );
    }
}




const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
    actionButton : {
        marginRight: 20,
    }

});
const formData = {
    form: 'side_effect_form', //unique identifier for this form 
    validate,
}

function validate(values) {
    const errors = {};
    return errors;
}
function mapStatsToProps(state) {
    console.log(state);
    return {
        currentTreatments: state.currentTreatments,
        previousTreatments: state.previousTreatments,
        user: state.user,
        userChoice: state.userChoice,
        symptom: state.symptom,
        sideEffect: state.sideEffect,
    }
}

SideEffect.propTypes = {
    classes: PropTypes.object.isRequired,
};

SideEffect = reduxForm(formData)(SideEffect);
SideEffect = withStyles(styles)(SideEffect);
SideEffect = withRouter(SideEffect);
export default connect(mapStatsToProps, { submitSideEffects })(SideEffect);
