import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Logo from '../images/PDC_logo_square.png';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { stylesheet } from '../styles.js';

class AppBar extends Component {
    handleSignIn= () => {

    }
    render () {
        const { classes } = this.props;
        return(
            <nav>
                <div className={classes.topNavContainer}>
                    <div className={classes.topNav}>

                        <a href="/"><img src={Logo} className={classes.topNavLogo} alt='PD Connect' /></a>

                        <Button className={classes.topBarBtn} style={{float: "right", marginTop: "30px"}} onClick={()=>{this.handleSignIn()}} variant="outlined">My account</Button>

                        <Button className={classes.topBarBtn} style={{float: "right", marginTop: "30px"}} onClick={()=>{this.handleSignIn()}} variant="outlined">Register</Button>

                    </div>
                </div>


                {/* <Grid container  className={classes.topNav}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5} className={classes.leftTopNav}>
                        <a href="/"><img src={Logo} className={classes.topNavLogo} alt='PD Connect' /></a>
                    </Grid>
                    <Grid item xs={5} className={classes.rightTopNav}>
                        <Button className={classes.topBarBtn} onClick={()=>{this.handleSignIn()}} variant="outlined">My Account</Button>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid> */}
                { /*
                <div className="nav-fostrap">
                    <ul>
                        <li><a href="/">Connect</a></li>
                        <li><a href="/">Our Promises</a></li>
                        <li><a href="/">Endorsements</a></li>
                        <li><a href="/">Featured Treatments</a></li>
                        <li className='li-right'><a href="">Sign In</a></li>

                    </ul>
                </div>
                <div className="nav-bg-fostrap">
                    <div className="navbar-fostrap"> <span></span> <span></span> <span></span> </div>
                    <a href="" className="title-mobile">PD Connect</a>
                </div>
                */}
            </nav>
        )
    }
}

AppBar = withStyles(stylesheet)(AppBar);
export default  AppBar
