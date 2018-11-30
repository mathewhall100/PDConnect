import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountIcon from '@material-ui/icons/AccountCircle'
import Fade from '@material-ui/core/Fade';
import { home2Stylesheet, PRIMARY_COLOR } from '../styles.js';

class FadeMenu extends React.Component {
    state = {
        anchorEl: null,
        redirect : false,
        redirectUrl : '',
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    handleRedirect = (url) => {
        this.setState({
            anchorEl: null,
        }, () => {
            this.props.history.push(url);
        })
    }
    handleLogout() {
        console.log("logging out...");
    }

    render() {
        const { anchorEl, redirect, redirectUrl } = this.state;
        const { classes } = this.props;
        const open = Boolean(anchorEl);


        return (
            <React.Fragment>
                <Button
                    className={classes.topBarBtn} style={{ float: "right", marginTop: "30px" }}
                    aria-owns={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <AccountIcon style={{ fontSize: "24px", color: PRIMARY_COLOR }} /> Account
                </Button>
                <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={()=> this.handleRedirect('/profile')}>Profile</MenuItem>
                    <MenuItem onClick={()=> this.handleRedirect('/setting')}>Settings</MenuItem>
                    <MenuItem onClick={() => this.handleLogout()}>Logout</MenuItem>
                </Menu>
            </React.Fragment>
        );
    }
}

FadeMenu = withRouter(FadeMenu)
FadeMenu = withStyles(home2Stylesheet)(FadeMenu)
export default FadeMenu;