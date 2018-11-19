import React, { Component } from 'react';
import { reset, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormText from '../forms/FormText';

import {resultStylesheet } from '../../styles';

class EmailBox extends Component  {

    submit = (values) =>  {
        console.log(values)
    }

    render() {
        const { classes, handleSubmit } = this.props

        return (
            <div className={classes.emailContainer}>
                <form autoComplete="off" onSubmit={handleSubmit(this.submit.bind(this))}>
                    <div >
                        <h1 className={classes.title} style={{marginRight: "30px"}}>Email me this page</h1>
                    </div>
                   <FormText
                        name="email"
                        label="Email (john.doe@you.com"
                        width="90%"
                    /> 
                     <br />
                    <Button type="submit" className={classes.button}>Send</Button>
                    <br /> 
                </form> 
            </div>
        )
    }
}

function validate(values) {
    const errors = {}
    if (!values.email) {
        errors.email = '*valid email required'
    }
    return errors
}  

const formData = {
    form: "CreateEmailForm", //unique identifier for this form 
    validate
}

EmailBox = withStyles(resultStylesheet)(EmailBox)
EmailBox = reduxForm(formData)(EmailBox)
export default EmailBox