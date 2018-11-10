import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import mailerAPI from '../utils/mailerAPI';
import { withStyles } from '@material-ui/core/styles';

class TestComponent extends Component {
    state=({
        name : 'sk',
        email : 'sk@sk.com'

    })
    sendMail= () => {
        mailerAPI.sendMail({
            subject: "testing email",
            name: `${this.state.name}`,
            email: `${this.state.email}`,
            message:
                `test`
        })
    }
    render(){
        const { classes } = this.props;
        return(
            <div>
                <Button 
                    className={classes.loginBtn} 
                    onClick={() => {this.sendMail()}}
                >
                    Send email
                </Button>
            </div>
        )
    }
}

export default TestComponent;