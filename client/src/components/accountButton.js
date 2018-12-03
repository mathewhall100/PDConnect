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
        open : false,
        redirect : false,
        redirectUrl : '',
        mouseOverButton: false,
        mouseOverMenu: false,
    };

    handleClick = event => {
        this.setState({
            open: true,
            anchorEl: event.currentTarget
        });
    };

    handleClose = () => {
        this.setState({ anchorEl: null,
            mouseOverButton: false,
            mouseOverMenu: false });
    };
    handleRedirect = (url) => {
        this.setState({
            anchorEl: null,
        }, () => {
            this.props.history.push(url);
        })
    }
    enterButton = () => {
        this.setState({ mouseOverButton: true });
    }
    leaveButton = () => {
        // Set a timeout so that the menu doesn't close before the user has time to
        // move their mouse over it
        setTimeout(() => {
            this.setState({ mouseOverButton: false });
        }, 333);
    }
    enterMenu = () => {
        this.setState({ mouseOverMenu: true });
    }
    leaveMenu = () => {
        setTimeout(() => {
            this.setState({ mouseOverMenu: false });
        }, 333);
    }

    handleLogout() {
        console.log("logging out...");
    }

    render() {
        const { anchorEl, redirect, redirectUrl } = this.state;
        const { classes } = this.props;
        //const open = Boolean(anchorEl);
        const open = this.state.mouseOverButton || this.state.mouseOverMenu;

        return (
            <React.Fragment>
                <Button
                    className={classes.topBarBtn} style={{ float: "right", marginTop: "30px" }}
                    aria-owns={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    onMouseEnter={this.enterButton}
                    onMouseLeave={this.leaveButton}
                    onMouseOver ={this.handleClick}

                >
                    <AccountIcon style={{ fontSize: "24px", color: PRIMARY_COLOR }} /> &nbsp;&nbsp;MY ACCOUNT
                </Button>
                <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}
                    MenuListProps={{
                        onMouseEnter: this.enterMenu,
                        onMouseLeave: this.leaveMenu,
                    }}
                    TransitionComponent={Fade}
                >
                    <MenuItem disable="true" style={{width:"110px", color: "black", fontSize: "14px", fontWeight: "bold"}} onClick={()=> this.handleRedirect('/profile')}><AccountIcon style={{ fontSize: "24px", color: PRIMARY_COLOR }} /> &nbsp;&nbsp;MY ACCOUNT</MenuItem> <hr style={{margin: 0, padding: 0}}/>
                    <MenuItem style={{width:"110px", color: "black", fontSize: "14px", fontWeight: "bold"}} onClick={()=> this.handleRedirect('/profile')}>VIEW</MenuItem>
                    <MenuItem style={{width:"110px", color: "black", fontSize: "14px", fontWeight: "bold"}} onClick={()=> this.handleRedirect('/setting')}>SETTINGS</MenuItem>

                    <MenuItem style={{width:"110px", color: "black", fontSize: "14px", fontWeight: "bold"}} onClick={() => this.handleLogout()}>LOGOUT</MenuItem>
                </Menu>
            </React.Fragment>
        );
    }
}

FadeMenu = withRouter(FadeMenu)
FadeMenu = withStyles(home2Stylesheet)(FadeMenu)
export default FadeMenu;