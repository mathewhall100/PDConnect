import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormText from '../forms/FormText';
import { connect } from 'react-redux';
import { submitUserAccount } from '../../actions/UserAccountAction';

import {resultStylesheet } from '../../styles';

class EmailBox extends Component  {

    submit = (values) =>  {
        console.log(values)
        console.log("Submitted values: ", values);
        console.log("Result props : ", this.props.results);
        let treatmentHTMLList = '';
        let treatmentList = '';
        for(let i = 0; i < this.props.results.treatment_result.length; i++){
            treatmentHTMLList += `<li>${this.props.results.treatment_result[i].medication_name} - ${this.props.results.treatment_result[i].summary}</li>`
            treatmentList += `${this.props.results.treatment_result[i].medication_name} - ${this.props.results.treatment_result[i].summary} \n`
        }
        let trialHTMLList = '';
        let trialList = '';
        for (let i = 0; i < this.props.results.trial_result.length; i++) {
            trialHTMLList += `<li>${this.props.results.trial_result[i].trial_name} - ${this.props.results.trial_result[i].summary}</li>`
            trialList += `${this.props.results.trial_result[i].trial_name} - ${this.props.results.trial_result[i].summary} \n`
        }

        let divHTML;
        divHTML = `
            <h1>This is the recommended list of treatments for you to talk to your physician.</h1>
            <ul>
                <li><h2>Treatments </h2></li>
                ${treatmentHTMLList}
            </ul>
            <br />
            <ul>
                <li><h2>Clinical Trials</h2></li>
                ${trialHTMLList}
            </ul>

            <p> Thank you so much for using our application. </p>
            <p> Sincerely,</p>
            <p> PD Connect</p>
        `;
        let divText;
        divText = `
            This is the recommended list of treatments for you to talk to your physician:
            ${treatmentList} \n
            ${trialList} \n
            Thank you for using our application. \n
            Sincerely, \n
            PD Connect
        `
        console.log(divHTML);
        let objEmail = {
            subject: "PD Connect recommended this list of treatments for you. ",
            name: `${values.email}`,
            email: `${values.email}`,
            html : `${divHTML}`,
            text: `${divText}`
        }
        this.handleEmail(objEmail)
    }
    handleEmail = (message) => {
        console.log("submit user account handle Email", message);
        this.props.submitUserAccount(message);
    }
    render() {
        const { classes, handleSubmit } = this.props

        return (
            <div className={classes.emailContainer}>
                <form autoComplete="off" onSubmit={handleSubmit(this.submit.bind(this))}>
                    <div>
                        <h1 className={classes.socMedText} style={{marginBottom: "-3px"}}>Email me this page</h1>
                    </div>
                    <FormText title='email' name='email' label='' placeholder={this.props.email ? this.props.email : "e.g. john.doe@gmail.com"} width="90%"/>
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

const mapStateToProps = (state) => {
    console.log("state ", state)
    return {
        accountResponse: state.accountResponse,
        results : state.results,
    }
}

EmailBox = withStyles(resultStylesheet)(EmailBox)
EmailBox = reduxForm(formData)(EmailBox)
export default connect(mapStateToProps, { submitUserAccount })(EmailBox);