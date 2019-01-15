import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import Badge from '@material-ui/core/Badge'
import { PRIMARY_COLOR } from '../../themes.js'


const styles = () => ({

    tabBarDropdown: {
        fontSize: "16px",
        fontWeight: "bold",
    },
    dropDownContainer: {
        position: "absolute",
        width: "50%",
        zIndex: 1,
        backgroundColor: "#fff",
        borderBottom: '2px solid lightGrey',
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
    badge: {
        position: "relative",
        top: "-10px",
        left: "17px"
    },
    menuBtn: {
        width: "100px",
        border: "2px solid",
        borderColor: PRIMARY_COLOR,
        borderRadius: "4px",
        marginBottom: "5px",
        padding: "0 2px",
        backgroundColor: "#FFF",
        outline: "none !important",
        '&:hover': {
            cursor: "pointer",
        },
    },
    menuIcon: {
        color: PRIMARY_COLOR,
        fontSize: '34px'
    }
})


class ResultDropdown extends Component  {

    state = {
        showDropdown: false
    }

    handleTabClick = (tab) => {
        this.setState({showDropdown: false})
        this.props.tabClick(tab)
    }

    toggleMenu = () => {
        this.setState({showDropdown: !this.state.showDropdown})
    }
    
    render() {
        const { classes, tabs, tabSelected} = this.props 
        const { showDropdown } = this.state

        return (
            <React.Fragment>
                <span className={classes.tabBarDropdown}>

                    <button className={classes.menuBtn} onClick={() => this.toggleMenu()}><MenuIcon className={classes.menuIcon} /></button>

                    { showDropdown && 
                        <div className={classes.dropDownContainer}>
                            {tabs.map((tab, index) =>  {
                                return (
                                    
                                    <div key={index} className={tabSelected === index ? classes.tabButtonVerticalSelected : classes.tabButtonVertical} style={{borderRadius: index === 0 ? "5px 5px 0 0" : "none", borderBottom: index === tabs.length ? "2px" : "1px"}} onClick={() => this.handleTabClick(index)}>

                                        {tab.text}

                                        { tab.badgeContent && 
                                            <Badge className={classes.badge} badgeContent={tab.badgeContent} color="primary"> 
                                                <span> </span>
                                            </Badge> 
                                        }
                                    </div>
                                )
                            }) }
                        </div>
                    }
                </span>
            </React.Fragment>
        )
    }
}


ResultDropdown = withStyles(styles)(ResultDropdown)
export default ResultDropdown