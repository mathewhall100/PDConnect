import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { userStylesheet } from '../../styles';
import { submitUserAccount } from '../../actions/UserAccountAction';
import { updateStepperCount } from '../../actions/index.js'
import FormText from '../forms/FormText';
import FormPassword from '../forms/FormTextPassword';

class UserNewAccount extends Component {

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
        this.props.updateStepperCount()
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
                <div>
                    <form autoComplete='off' onSubmit={handleSubmit(this.submit.bind(this))}>
                        <br />
                        <label>E-mail : </label><br/>

                        <FormText title='email' name='email' label='e-mail address' />
                        <FormPassword title='password' name='password' label='password' />
                        <FormPassword title='confirmPassword' name='confirmPassword' label='confirm password' />

                        <BottomNav />

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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateStepperCount }, dispatch);
}

const mapStateToProps = (state) => {
    console.log("state ", state)
    return {
        accountResponse: state.accountResponse
    }
}

const formData = {
    form: 'userNewAccountForm', //unique identifier for this form
    validate,
}

UserNewAccount = reduxForm(formData)(UserNewAccount)
UserNewAccount = withRouter(UserNewAccount)
UserNewAccount = withStyles(userStylesheet)(UserNewAccount)
UserNewAccount = connect(mapStateToProps, mapDispatchToProps)(UserNewAccount)
export default UserNewAccount