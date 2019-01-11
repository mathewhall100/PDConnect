import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

import { authStyles } from './authStyles';
import { submitCredsInfo, 
         submitUserAbout, 
         submitUserFamily, 
         submitUserLife, 
         submitUserMeds, 
         submitUserSurgery, 
         submitUserMotorSy, 
         submitUserNonMotorSy } from '../../actions/index.js';
import FormText from '../../components/forms/FormText';
import FormPassword from '../../components/forms/FormTextPassword';
import loginAPI from '../../utils/loginAPI';
 

class SignIn extends Component {

    state = {
        redirectAddress: '/services',
        noUser: false
    }

    componentDidMount() {
        window.scroll(0, 0)
    }

    submit(values) {
        console.log("values : ", values);
        
        // search for user
        loginAPI.findByLogin({
            email: values.email,
            password: values.password}
            )
            .then(result => {
                const user = result.data
                if (user.length > 0) {
                    console.log("User found: ", user)
                    this.loadStore(user[0])
                    this.props.history.push(this.state.redirectAddress)
                } else {
                    console.log("User not found")
                    this.setState({noUser: true})
                }
            })
            .catch(err => {
                console.log("OOPS! Fatal error occurred and your request could not be completed")
                console.log(err)
            }) 
    }

    loadStore(user) {
        console.log("load store: ", user)
        this.props.submitCredsInfo({
            email: user.email,
            password: user.password
        })
        this.props.submitUserAbout({
            age: user.age,
            sex: user.sex,
            race: user.race,
            yearDiagnosed: user.year_diagnosis,
            yearTreatment: user.year_treatment
        })
        this.props.submitUserFamily(user.user_data_ref.data[0].family)
        this.props.submitUserMeds(user.user_data_ref.data[0].meds)
        this.props.submitUserSurgery(user.user_data_ref.data[0].surgeries)
        this.props.submitUserLife(user.user_data_ref.data[0].adl)
        this.props.submitUserMotorSy(user.user_data_ref.data[0].motor_symptoms)
        this.props.submitUserNonMotorSy(user.user_data_ref.data[0].non_motor_symptoms)
    }

    render() {

        const { handleSubmit, classes } = this.props
        const { noUser } = this.state

        return (
            <div className={classes.root}>

                <div className={classes.container}>

                <h3 className={classes.title}>Sign In To Your Account </h3>

                    <form autoComplete='off' onSubmit={handleSubmit(this.submit.bind(this))}>
                        <br />
                        <label className={classes.label}>E-mail</label>
                        <br />
                        <FormText title='email' name='email' label='' placeholder="e.g. john.doe@gmail.com" width="80%"/>
                        <br />
                        <label className={classes.label}>Password</label>
                        <br />
                        <FormPassword title='password' name='password' label='' width="60%" />
                        <br />
                        <br />
                        <Button type="submit" className={classes.submitBtn} >SUBMIT</Button>
                    </form>

                    <span className={classes.errorTxt}>{ noUser && <span>Incorrect email or password.</span>} </span>
                    <span ><a className={classes.messageTxt} href='/'>Forgotten password?</a></span>
                    
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
        errors.email = '*Invalid email'
    }
    if (!values.password) {
        errors.password = '*Required'
    }
    if (values.password && values.password.length < 8) {
        errors.password = '*Minimum 8 characters long.'
    }
    return errors
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        submitCredsInfo,
        submitUserAbout,
        submitUserFamily,
        submitUserLife, 
        submitUserMeds, 
        submitUserSurgery, 
        submitUserMotorSy, 
        submitUserNonMotorSy 
    
    }, dispatch);
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
SignIn = withStyles(authStyles)(SignIn)
SignIn = connect(mapStateToProps, mapDispatchToProps)(SignIn)
export default SignIn