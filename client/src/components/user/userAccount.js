import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { userStylesheet } from '../../styles';
import { submitCredsInfo } from '../../actions/CredsActions';
import FormText from '../forms/FormText';
import FormPassword from '../forms/FormTextPassword';

class UserAccount extends Component {

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
        window.scroll(0,0)

    }

    handleInitialize() {
        const initData = this.props.userAccount
        console.log("in handle init, init data is : ", initData);
        this.props.initialize(initData);
    }

    submit(values) {
        console.log("values : ", values);
        this.props.submitCredsInfo(values)
        this.setState({
            redirect: true,
            redirectAddress: '/user/user_start'
        })
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
                        <Button type="submit" variant='outlined' className={classes.nextButton} >Create</Button>
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
                        {/* <Field
                            name="email"
                            component={this.renderTextField}
                            label="E-mail Address"
                        /><br /> */}

                        <FormText title='email' name='email' label='e-mail address' />
                        <label>Password : </label><br />
                        <FormPassword title='password' name='password' label='password' />
                        <label>Confirm Password : </label><br />
                        <FormPassword title='confirmPassword' name='confirmPassword' label='confirm password' />
                        {/*<label>Password : </label><br/>
                        <Field
                            name="password"
                            component={this.renderTextField}
                            label="Password"
                        /><br/>
                        <label>Confirm Password : </label><br />
                        <Field
                            name="confirmPassword"
                            component={this.renderTextField}
                            label="Confirm Password"
                        />*/}
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

UserAccount = reduxForm(formData)(UserAccount)
UserAccount = withRouter(UserAccount)
UserAccount = withStyles(userStylesheet)(UserAccount)
UserAccount = connect(mapStateToProps, { submitCredsInfo})(UserAccount)
export default UserAccount
