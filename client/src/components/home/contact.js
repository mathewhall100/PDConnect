import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import HomepageButton from './homepageButton'
import HomepageSubtitle from './homepageSubtitle'

const styles = () => ({
    subscribeBox: {
        display: 'grid',
        maxWidth: "400px",
        margin: "0 auto -20px auto"
    },
})


class Contact extends Component {
    state = {
        email: '',
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
     
        return (
            <React.Fragment>
                <Grid container spacing={24}>
                    <Grid item md={1} lg={1} xs={1}></Grid>
                    <Grid item md={10} lg={10} xs={10} >
                        <HomepageSubtitle text="Subscribe to our newsletter" />
                        <div className={classes.subscribeBox}>
                            <br />
                            <TextField
                                id="outlined-e-mail"
                                label="Email address"
                                className={classes.textField}
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                                margin="normal"
                                variant="outlined"
                            />
                            <br />
                            <HomepageButton type="submit" text="SUBMIT" />
                        </div>
                    </Grid>
                    <Grid item md={1} lg={1} xs={1}></Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

Contact = withStyles(styles)(Contact)
export default Contact