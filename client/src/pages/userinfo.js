import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { reduxForm } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import { submitUserInfo } from '../actions/UserInfoAction'
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';

class UserInfo extends Component {
    componentDidMount() {
        
    }
    submit(values){

    }
    
    render() {
        const { handleSubmit, classes } = this.props;
        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                    <h1>User Info</h1>
                </Grid>
                <Grid item xs={12}>
                    <form autoComplete='off' onSubmit={handleSubmit(this.submit.bind(this))}>
                        <TextField
                            id="filled-name"
                            label="Name"
                            className={classes.textField}
                            value={this.props.user.age}
                            onChange={this.handleChange('age')}
                            margin="normal"
                            variant="filled"
                        />
                    </form>
                </Grid>


                

            </Grid>
        );
    }
}

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
});
const formData = {
    form: 'user_info_form', //unique identifier for this form 
    validate,
}

function validate(values) {
    //console.log("Error values: ", values) 
    const errors = {};
    return errors;
}
function mapStatsToProps(state) {
    console.log(state);
    return (state);
}

UserInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

UserInfo = connect(mapStatsToProps, { submitUserInfo })(UserInfo);
UserInfo = reduxForm(formData)(UserInfo);
UserInfo = withStyles(styles)(UserInfo);
export default UserInfo;