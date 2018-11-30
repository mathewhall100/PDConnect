import React, {Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Logo from '../images/PDC_logo_square.png';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home'
import AccountIcon from '@material-ui/icons/AccountCircle'
import DescriptionIcon from '@material-ui/icons/Description'
import AddIcon from '@material-ui/icons/Add'
import HelpIcon from '@material-ui/icons/Help'
import DashboardIcon from '@material-ui/icons/Dashboard'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { home2Stylesheet, PRIMARY_COLOR } from '../styles.js';
import AccountButton from '../components/accountButton';
class AppBar extends Component {

    handleNav = (redirectAddress) => {
        this.props.history.push(redirectAddress)
    }


    render () {
        const { classes, userCreds } = this.props;

        const RenderAccountButtons = () => {
            return (

                  userCreds.email && userCreds.password ?

                <span>

                    <AccountButton />

                    <Button type="button" className={classes.topBarBtn}  style={{ float: "right", marginTop: "30px" }} onClick={() => { this.handleNav('/profile') }} >
                        <DescriptionIcon style={{fontSize: "24px", color: PRIMARY_COLOR}}/> &nbsp;&nbsp;Profile
                    </Button>

                    <Button type="button" className={classes.topBarBtn} style={{ float: "right", marginTop: "30px" }} onClick={() => { this.handleNav('/services') }} >
                        <DashboardIcon style={{fontSize: "24px", fontSize: "26px", color: PRIMARY_COLOR}}/> &nbsp;&nbsp;Services
                    </Button>

                    <Button type="button" className={classes.topBarBtn} style={{ float: "right", marginTop: "30px" }} onClick={() => { this.handleNav('/services') }} >
                        <HomeIcon style={{fontSize: "24px", color: PRIMARY_COLOR}}/> &nbsp;&nbsp;Home
                    </Button>

                </span>

                 :

                <span>

                    <Button type="button" className={classes.topBarBtn} style={{ float: "right", marginTop: "30px" }} onClick={() => { this.handleNav('/signin') }} >
                         <AccountIcon style={{fontSize: "24px", color: PRIMARY_COLOR}}/> &nbsp;&nbsp;Sign in
                    </Button>

                    <Button type="button" className={classes.topBarBtn} style={{ float: "right", marginTop: "30px" }} onClick={() => { this.handleSignIn('/faq') }} >
                        <HelpIcon style={{fontSize: "24px", color: PRIMARY_COLOR}}/> &nbsp;&nbsp;FAQ
                    </Button>

                </span>

            )
        }

        return(
            <nav>
                <div className={classes.topNavContainer}>
                    <div className={classes.topNav}>

                        <a href="/"><img src={Logo} className={classes.topNavLogo} alt='PD Connect' /></a>

                        <RenderAccountButtons />

                    </div>
                </div>
            </nav>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userCreds: state.creds
    }
  };

AppBar = withRouter(AppBar)
AppBar = withStyles(home2Stylesheet)(AppBar)
AppBar = connect(mapStateToProps)(AppBar)
export default  AppBar
