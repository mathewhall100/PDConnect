import React, {Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Logo from '../images/PDC_logo_square.png';
import Button from '@material-ui/core/Button';
import { stylesheet } from '../styles.js';

class AppBar extends Component {
    state = {
        redirect: false,
        redirectUrl: '',
    }
    handleSignIn= (url) => {
        this.setState({
            redirect : true,
            redirectUrl: url,
        })
    }
    render () {
        const { classes } = this.props;
        const { redirect, redirectUrl } = this.state;
        if(redirect) {
            let url = `${redirectUrl}`;
            return(
                <Redirect to ={url} />
            )
        }
        return(
            <nav>
                <div className={classes.topNavContainer}>
                    <div className={classes.topNav}>

                        <a href="/"><img src={Logo} className={classes.topNavLogo} alt='PD Connect' /></a>

                        <Button className={classes.topBarBtn} style={{ float: "right", marginTop: "30px" }} onClick={() => { this.handleSignIn('/user/account') }} variant="outlined">
                            My account
                        </Button>

                        <Button className={classes.topBarBtn} style={{float: "right", marginTop: "30px"}} onClick={()=>{this.handleSignIn()}} variant="outlined">Register</Button>

                    </div>
                </div>
            </nav>
        )
    }
}

AppBar = withStyles(stylesheet)(AppBar);
export default  AppBar
