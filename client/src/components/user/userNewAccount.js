import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

import { userStylesheet } from '../../styles';
import { submitUserAccount } from '../../actions/UserAccountAction';
import { updateStepperCount } from '../../actions/index.js'
import FormText from '../forms/FormText';
import FormPassword from '../forms/FormTextPassword';

class UserNewAccount extends Component {

    state = {
        redirectAddress: '/services'
    }

    componentDidMount() {
        window.scroll(0, 0)
        this.props.updateStepperCount()
    }

    submit(values) {
        console.log("values : ", values);
        this.props.submitUserAccount(values)
        this.props.history.push(this.state.redirectAddress)
    }

    render() {

        const { handleSubmit, classes } = this.props

        return (
            <div className={classes.componentBox} style={{marginTop: "75px"}}>

            <p className={classes.sectionTitle}>Enter your e-mail address and a password to set up your account. </p>

                <div>
                    <form autoComplete='off' onSubmit={handleSubmit(this.submit.bind(this))}>
                        <br />
                        <label style={{fontWeight: "bold", position: "relative", top: "15px", fontSize: "18px"}}>E-mail</label>
                        <FormText title='email' name='email' label='' placeholder="e.g. john.doe@gmail.com"/>
                        <br />
                        <label style={{fontWeight: "bold", position: "relative", top: "15px", fontSize: "18px"}}>Password</label>
                        <FormPassword title='password' name='password' label='' placeholder="8 or more characters"/>
                        <br />
                        <label style={{fontWeight: "bold", position: "relative", top: "15px", fontSize: "18px"}}>Re-enter password</label>
                        <FormPassword title='password' name='confirmPassword' label='' placeholder="passwords must match"/>

                        <br />
                        <Button type="submit" type="variant" className={classes.userNavButtonRight} >SET UP MY ACCOUNT</Button>

                    </form>

                </div>

            </div>

        );
    }
}

function validate(values) {
    const errors = {}
    if (!values.email) {
        errors.email = '*required'
    } else if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = '*Invalid email address'
    }
    if (!values.password) {
        errors.password = '*Required'
    }
    if (values.password && values.password.length < 8) {
        errors.password = '*Minimum 8 charcters long.'
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = '*Required'
    }
    if (values.confirmPassword && values.confirmPassword.length < 8) {
        errors.confirmPassword = ' '
    }
    if(values.confirmPassword && values.confirmPassword.length > 8 && values.password !== values.confirmPassword){
        errors.confirmPassword = '*Passwords must match.'
    }
    
    return errors
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateStepperCount, submitUserAccount }, dispatch);
}

const mapStateToProps = (state) => {
    console.log("state ", state)
    return {
        accountResponse: state.accountResponse
    }
}

const formData = {
    form: 'userNewAccountForm',
    validate
}

UserNewAccount = reduxForm(formData)(UserNewAccount)
UserNewAccount = withRouter(UserNewAccount)
UserNewAccount = withStyles(userStylesheet)(UserNewAccount)
UserNewAccount = connect(mapStateToProps, mapDispatchToProps)(UserNewAccount)
export default UserNewAccount