import React, { Component } from 'react'
import { PRIMARY_COLOR } from '../../themes.js'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'

const styles = (theme) => ({

    tabBarHorizontal: {
        position: "relative",
        top: "-10px",
        fontSize: "16px",
        fontWeight: "bold",
        [theme.breakpoints.down('md')]: {
            fontSize: "13px"
        },       
        [theme.breakpoints.down('sm')]: {
            display: "none",
        },
    },
    tabBarDropdown: {
        fontSize: "16px",
        fontWeight: "bold",
        display: "none",
        [theme.breakpoints.down('sm')]: {
            display: "block"
        },
    },
    tabButtonLeft: {
        padding: "12px 34px 12px 20px",
        borderTop: "2px solid lightgrey",
        borderLeft: "2px solid lightgrey",
        borderRight: "2px solid lightgrey",
        borderBottom: "none",
        borderRadius: "5px 5px 0 0",
        backgroundColor: "white",
        [theme.breakpoints.down('md')]: {
            padding: "13px 12px 12px 15px"
        },
        '&:hover': {
            cursor: "pointer",
            color: PRIMARY_COLOR
        }
    },
    tabButtonSelected: {
        padding: "12px 34px 12px 20px",
        borderTop: "2px solid lightgrey",
        borderLeft: "2px solid lightgrey",
        borderRight: "2px solid lightgrey",
        borderBottom: "2px solid #F8F8F8",
        borderRadius: "5px 5px 0 0",
        backgroundColor: "#F8F8F8",
        color: PRIMARY_COLOR,
        [theme.breakpoints.down('md')]: {
            padding: "13px 12px 12px 16px"
        },
        '&:hover': {
            cursor: "pointer"
        }
    },
    tabButtonVertical: {
        padding: "12px 34px 12px 20px",
        border: "2px solid lightGrey",
        '&:hover': {
            cursor: "pointer",
            backgroundColor: "#F8F8F8",
            color: PRIMARY_COLOR,
        }
    },
    tabButtonVerticalSelected: {
        padding: "12px 34px 12px 20px",
        backgroundColor: "#F8F8F8",
        color: PRIMARY_COLOR,
        border: "2px solid lightGrey",

        '&:hover': {
            cursor: "pointer",
        }
    },
    menuBtnContainer: {
        width: "100px",
        position: "relative",
        top: "-3px"
    },
    menuBtn: {
        border: "none",
        backgroundColor: "#FFF",
        outline: "none !important",
        '&:hover': {
            cursor: "pointer",
        },
    },
    menuIcon: {
        color: PRIMARY_COLOR,
        fontSize: '48px'
    },
    dropDownContainer: {
        // position: "absolute",
        width: "75%",
        zIndex: 1,
        backgroundColor: "#fff"
    }
})


class ResultTabs extends Component  {

    state = {
        tabSelected: 0,
        showDropdown: false
    }

    handleTabClick = (tab) => {
        this.props.handleTabClick(tab)
        this.setState({tabSelected: tab})
    }

    toggleMenu = () => {
        this.setState({showDropdown: !this.state.showDropdown})
    }


    render() {
        const { classes, tabs} = this.props 
        const { tabSelected, showDropdown } = this.state 

        return (
            <React.Fragment>
                <span className={classes.tabBarHorizontal}>
                    {tabs.map((tab, index) =>  {
                        return (
                            <span key={index} className={tabSelected === index ? classes.tabButtonSelected : classes.tabButtonLeft} style={{borderLeft: index === 0 ? "2px !important" : "1px"}} onClick={() => this.handleTabClick(index)}>{tab}</span>
                        )
                    }) }
                </span>

                <span className={classes.tabBarDropdown}>
                    <span className={classes.menuBtnContainer}>
                        <button className={classes.menuBtn} onClick={() => this.toggleMenu()}><MenuIcon className={classes.menuIcon} /></button>
                    </span>
                    { showDropdown && <div className={classes.dropDownContainer}>
                        {tabs.map((tab, index) =>  {
                            return (
                                <div key={index} className={tabSelected === index ? classes.tabButtonVerticalSelected : classes.tabButtonVertical} style={{borderRadius: index === 0 ? "5px 5px 0 0" : "none", borderBottom: index === tabs.length ? "2px" : "1px"}} onClick={() => this.handleTabClick(index)}>{tab}
                                </div>
                            )
                        }) }
                    </div> }
                </span>
            </React.Fragment>
        )
    }
}


ResultTabs = withStyles(styles)(ResultTabs)
export default ResultTabs

