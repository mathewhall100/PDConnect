import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import { PRIMARY_COLOR } from '../../themes.js'


const styles = (theme) => ({
    
    tabBarHorizontal: {
        position: "relative",
        top: "-10px",
        fontSize: "16px",
        fontWeight: "bold",
        [theme.breakpoints.down('md')]: {
            fontSize: "13px"
        }
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
            padding: "13px 20px 13px 13px"
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
            padding: "13px  20px 13px 14px"
        },
        '&:hover': {
            cursor: "pointer"
        }
    },
    badge: {
        position: "relative",
        top: "-10px",
        left: "17px"
    }
})


class ResultTabs extends Component  {

    handleTabClick = (tab) => {
        this.props.tabClick(tab)
    }
    
    render() {
        const { classes, tabs, tabSelected} = this.props 

        return (
            <React.Fragment>
                <span className={classes.tabBarHorizontal}>
                    {tabs.map((tab, index) =>  {
                        return (

                            <span key={index} 
                                className={tabSelected === index ? classes.tabButtonSelected : classes.tabButtonLeft} 
                                style={{borderLeft: index === 0 ? "2px !important" : "1px"}} 
                                onClick={() => this.handleTabClick(index)}
                            >
                                {tab.text}

                                {tab.badgeContent && 
                                    <Badge className={classes.badge} badgeContent={tab.badgeContent} color="primary"> 
                                        <span> </span>
                                    </Badge> 
                                }
                            </span>
                        )
                    }) }
                </span>
            </React.Fragment>
        )
    }
}


ResultTabs = withStyles(styles)(ResultTabs)
export default ResultTabs