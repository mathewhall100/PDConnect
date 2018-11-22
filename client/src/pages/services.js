import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { userStylesheet } from '../styles';
import { submitUserAccount } from '../actions/UserAccountAction';
import FormText from '../components/forms/FormText';
import FormPassword from '../components/forms/FormTextPassword';

class UserServices extends Component {

    state = {
        modalOpen: false,
        modalTitle: '',
        modalDescription: '',
        modalwarning: false,
        redirect: false,
        redirectAddress: '',
    }

    componentWillMount() {
        this.handleInitialize();
    }

    componentDidMount() {
        window.scroll(0, 0)
    }

    handleInitialize() {
        const initData = this.props.userAccount
        console.log("in handle init, init data is : ", initData);
        this.props.initialize(initData);
    }

    submit(values) {
        console.log("values : ", values);
        this.props.submitUserAccount(values)
        this.setState({ redirect: true })
    }

    handleBack = () => {
        this.setState({
            redirectAddress: '/'
        }, () => this.setState({ redirect: true }))
    }

    handleCreateAccount = () => {
        console.log("create account");
    }

    handleModalOpen = (title, text) => {
        console.log(title);
        this.setState({
            modalTitle: title,
            modalText: text,
            modalWarning: false,
            modalOpen: true
        });
    };


    render() {

        const { handleSubmit, classes } = this.props
        const { redirect, redirectAddress, } = this.state


        if (redirect) {
            const url = `${redirectAddress}`;
            console.log("redirect to .. " + url);
            return <Redirect exact to={url} />;
        }

        const BottomNav = (props) => {
            return (
                <Grid container spacing={24} className={classes.buttonContainer}>
                    <Grid item xs={12}>
                        <hr className={classes.hr} />
                    </Grid>
                    <Grid item xs={3}>
                        <Button type="button" variant='outlined' className={classes.nextButton} onClick={() => this.handleBack()}>BACK</Button>
                        {/* <Button type="button" className={classes.backButton} onClick={() => this.handleClearForm()}>CLEAR</Button>   */}
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3} className={classes.nextButtonContainer}>
                        <Button type="submit" variant='outlined' className={classes.nextButton} onClick={() => this.handleCreateAccount()}>Create</Button>
                    </Grid>
                </Grid>
            )
        }


        return (
            <div className={classes.componentBox} >
               
               Individualised for me
               <br /> 
               <br /> 
               1. treatments (4)<br />
               2.clinicakl trials (2)<br /> 
               3. focis groups (0)<br /> 
               4. knowledge articles (4)<br />
               <br /> 
               <br /> 
               5. My account



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
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = '*required'
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = '*required'
    }
    if(values.password !== values.confirmPassword){
        errors.password = 'password provided does not match with each other.'
    }
    return errors
}

const mapStateToProps = (state) => {
    console.log("state ", state)
    return {
        accountResponse: state.accountResponse
    }
}

const formData = {
    form: 'userAccountForm', //unique identifier for this form
    validate,
}

UserServices = reduxForm(formData)(UserServices)
UserServices = withRouter(UserServices)
UserServices = withStyles(userStylesheet)(UserServices)
// UserServices = connect(mapStateToProps, { submitUserServices})(UserServices)
export default UserServices