import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { submitCredsInfo } from '../../actions/CredsActions';
import { updateStepperCount } from '../../actions/index.js'
import userAPI from "../../utils/userAPI.js"
import CreateAccountForm from '../forms/CreateAccountForm';
import UserNavButton from '../buttons/userNavButton'
import UserSectionHead from '../texts/userSectionHead';

class CreateAccount extends Component {

    state = {
        redirectAddress: '/services'
    }

    componentDidMount() {
        window.scroll(0, 0)
        this.props.updateStepperCount()
    }

    submit(values) {
        console.log("values : ", values);
        this.props.submitCredsInfo(values)

        // save profile in database 'pdconnectdb' in user_info & user_data collections 
        userAPI.createUser({ 
            date_registered: new Date(),
            email: values.email,
            password: values.password,
            age: this.props.userAbout.age,
            sex: this.props.userAbout.sex,
            race: this.props.userAbout.race,
            year_diagnosis: this.props.userAbout.yearDiagnosed,
            year_treatment: this.props.userAbout.yearTreatment,
            family: this.props.userFamily,
            meds: this.props.userMeds,
            surgeries: this.props.userSurgery,
            adl: this.props.userADL,
            motor_symptoms: this.props.userMotorSy,
            non_motor_symptoms: this.props.userNonMotorSy
        })
        .then(res => console.log("res.data: ", res.data))
        .catch(err => {
            console.log(`OOPS! A fatal problem occurred and your request could not be completed`)
            console.log(err)
        })

        // Move on to services page
        this.props.history.push(this.state.redirectAddress)
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <React.Fragment>

                <UserSectionHead text="Enter your e-mail address and a password to create your account." />

                <form autoComplete='off' onSubmit={handleSubmit(this.submit.bind(this))}> 
                    <CreateAccountForm submit={this.submit}/>
                    <UserNavButton type="submit" width="100%" text="CREATE MY ACCOUNT"  />
                </form>
                
            </React.Fragment>
        );
    }
}

function validate (values) {
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
    return bindActionCreators({ updateStepperCount, submitCredsInfo }, dispatch);
}

const mapStateToProps = (state) => {
    console.log("state ", state)
    return {
        userAbout: state.about,
        userADL: state.adl.adl,
        userFamily: state.family.family,
        userMeds: state.meds.meds,
        userSurgery: state.surgery.surgery,
        userMotorSy: state.motorSy.motorSy,
        userNonMotorSy: state.nonMotorSy.nonMotorSy,
        review : state.review,
        accountResponse: state.accountResponse
    }
}

const formData = {
    form: 'userNewAccountForm',
    validate
}

CreateAccount = reduxForm(formData)(CreateAccount)
CreateAccount = withRouter(CreateAccount)
CreateAccount = connect(mapStateToProps, mapDispatchToProps)(CreateAccount)
export default CreateAccount
