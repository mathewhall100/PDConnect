import React, { Component } from 'react';
import { reset, reduxForm } from 'redux-form';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import FormText from '../components/forms/FormText'
import FormSelect from '../components/forms/FormSelect'
import FormRadio from '../components/forms/FormRadio'


 class PriorTreatment extends Component {

    submit(values) {
        console.log("submit: ", values)
    }

    handleClearForm() {
        this.props.reset()
    }

    render() {

        const { handleSubmit, pristine, submitting, classes } = this.props

        const selectItems = [
            {value: "", text: "none"},
            {value: "1", text: "one"},
            {value: "2", text: "two"}
        ];

        const radioItems = [
            {value: "1", label: "one"},
            {value: "2", label: "two"}
        ];

        return (
            <div>
                <h1>Tell us about your current Parkinson's disease treatments.</h1>

                <form autoComplete="off" onSubmit={handleSubmit(this.submit.bind(this))}>

                    <Grid container spacing={24} >

                        <Grid item xs={12}>
                            <FormText
                                name="name"
                                label="When did you start treatment for Parkinson disease?"
                                width="90%"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormSelect
                                name="select"
                                label="select"
                                width="90%"
                                labelWidth="45px"
                                items={selectItems}
                            />
                        </Grid>

                        <Grid item xs={12}>
                                <FormRadio 
                                    name="radio" 
                                    items={radioItems}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button type="submit" disabled={submitting || pristine} >Submit</Button>
                                <Button onClick={event => this.handleClearForm()}>Clear</Button>
                            </Grid>
                   
                    </Grid>

                </form>
            </div>
        );
    }
}

const formData = {
    form: 'PriorTreatmentForm', //unique identifier for this form 
    //validate,      
}

PriorTreatment = reduxForm(formData)(PriorTreatment)
export default PriorTreatment
