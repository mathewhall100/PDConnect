import React, { Component } from 'react';
import { reset, reduxForm } from 'redux-form';

import Grid from '@material-ui/core/Grid'
import FormText from '../components/forms/FormText'


 class PriorTreatment extends Component {

    submit(values) {
        console.log("submit: ", values)
    }

    render() {

        const { handleSubmit } = this.props

        return (
            <div style={{padding: "20px"}}>
                <h1>Tell us about your current Parkinson's disease treatments.</h1>

                <form autoComplete="off" onSubmit={handleSubmit(this.submit.bind(this))}>

                    <Grid container spacing={24} >
                        <Grid item xs={12}>
                            <FormText
                                name="lastName"
                                label="Lastname"
                            />
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
