import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { authStyles } from './authStyles';

class NotFound extends Component {
    render() {

        const { classes } = this.props
        return (
            <div className={classes.root}>

                <div className={classes.container}>

                    <h1>Woops!</h1>
                    <br />
                    <br />
                    <h1>Page not found.</h1>
                    <br />
                    <hr />
                    <br />
                    <h5>You may need to sign in to view this page or if you think you are seeing this message in error, contact the site administrator.</h5>
                    <br />
                    <hr />
                    <br/>

                </div>
            </div>
        );
    }
}

NotFound = withStyles(authStyles)(NotFound)
export default NotFound