import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

import { userStylesheet } from '../styles';
import { submitCredsInfo } from '../actions/CredsActions';
import FormText from '../components/forms/FormText';
import FormPassword from '../components/forms/FormTextPassword';

class SignIn extends Component {

    state = {
        redirectAddress: '/services'
    }

    componentDidMount() {
        window.scroll(0, 0)

    }

    submit(values) {
        console.log("values : ", values);
        this.props.submitCredsInfo(values)
        this.props.history.push(this.state.redirectAddress)
    }

    render() {

        const { handleSubmit, classes } = this.props

        return (

            <div className={classes.root}>

                <div style={{marginTop: "75px", maxWidth: "600px", margin: "75px auto"}}>

                <h3 className={classes.stepperPageName} style={{fontFamily: "muli"}}>Sign In To Your Account </h3>

                    <div>
                        <form autoComplete='off' onSubmit={handleSubmit(this.submit.bind(this))}>
                            <br />
                            <label style={{fontWeight: "bold", position: "relative", top: "15px", fontSize: "18px"}}>E-mail</label>
                            <FormText title='email' name='email' label='' placeholder="e.g. john.doe@gmail.com" width="80%"/>
                            <br />
                            <label style={{fontWeight: "bold", position: "relative", top: "15px", fontSize: "18px"}}>Password</label>
                            <FormPassword title='password' name='password' label='' width="60%" />
                            <br />
                            <br />
                            <Button type="submit" type="variant" className={classes.userNavButtonRight} >SUBMIT</Button>
                        </form>

                    </div>

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
    return errors
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitCredsInfo }, dispatch);
}

const mapStateToProps = (state) => {
    console.log("state ", state)
    return {
        accountResponse: state.accountResponse
    }
}

const formData = {
    form: 'SignInForm',
    validate
}

SignIn = reduxForm(formData)(SignIn)
SignIn = withRouter(SignIn)
SignIn = withStyles(userStylesheet)(SignIn)
SignIn = connect(mapStateToProps, mapDispatchToProps)(SignIn)
export default SignIn