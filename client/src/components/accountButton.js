import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AccountIcon from '@material-ui/icons/AccountCircle'
import Fade from '@material-ui/core/Fade'
import { PRIMARY_COLOR } from '../themes.js'

const styles = () => ({
    topBarBtn: {
        color: "black !important", 
        fontWeight: "bold",
        fontSize: "15px",
        backgroundColor: "white !important",
        margin: "30px 0 0 55px",
        border: "2px solid #ffffff",
        padding: 0,
        float: "right", 
        '&:focus': { outline: 'none' },
        '&:hover': {
            borderBottom: "2px solid #BF9000",
        }
    },
    topBarBtnIcon: {
        fontSize: "24px", 
        color: PRIMARY_COLOR
    }, 
    menuItem: {
        width:"125px",
        color: "black", 
        fontSize: "14px", 
        fontWeight: "bold"
    },
    menuItemTop: {
        width:"110px",
        color: "black", 
        backgroundColor: "#FFF",
        fontSize: "14px", 
        fontWeight: "bold",
        '&:focus': { backgroundColor: "#FFF" },
        '&:hover': { backgroundColor: "#FFF" },
    },
    menuHr: {
        margin: 0, 
        padding: 0
    }
})

class FadeMenu extends Component {
    state = {
        anchorEl: null,
        open : false,
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
            mouseOverMenu: false })
    };

    handleRedirect = (url) => {
        this.setState({
            anchorEl: null,
        }, () => {
            this.props.history.push(url)
        })
    }

    enterButton = () => { this.setState({ mouseOverButton: true }) }

    leaveButton = () => {
        // Set a timeout so that the menu doesn't close before the user has time to
        // move their mouse over it
        setTimeout(() => {
            this.setState({ mouseOverButton: false });
        }, 333);
    }

    enterMenu = () => { this.setState({ mouseOverMenu: true }) }

    leaveMenu = () => {
        setTimeout(() => {
            this.setState({ mouseOverMenu: false })
        }, 333);
    }

    handleLogout() { console.log("logging out...") }

    render() {
        const { anchorEl } = this.state
        const { classes } = this.props

        const open = this.state.mouseOverButton || this.state.mouseOverMenu

        return (
            <React.Fragment>
                
                <Button
                    className={classes.topBarBtn} 
                    aria-owns={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    onMouseEnter={this.enterButton}
                    onMouseLeave={this.leaveButton}
                    onMouseOver ={this.handleClick}
                >
                    <AccountIcon className={classes.topBarBtnIcon} /> &nbsp;&nbsp;MY ACCOUNT
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
                    <MenuItem disable="true" className={classes.menuItemTop}  onClick={()=> this.handleRedirect('/profile')}>
                        <AccountIcon className={classes.topBarBtnIcon} /> 
                        &nbsp;&nbsp;MY ACCOUNT
                    </MenuItem> 

                    <hr className={classes.menuHr} />

                    <MenuItem className={classes.menuItem} onClick={()=> this.handleRedirect('/profile')}>VIEW</MenuItem>
                    <MenuItem className={classes.menuItem} onClick={()=> this.handleRedirect('/setting')}>SETTINGS</MenuItem>
                    <MenuItem className={classes.menuItem} onClick={() => this.handleLogout()}>LOGOUT</MenuItem>
                </Menu>

            </React.Fragment>
        );
    }
}

FadeMenu = withRouter(FadeMenu)
FadeMenu = withStyles(styles)(FadeMenu)
export default FadeMenu