import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {resultStylesheet } from '../../styles';
import Badge from '@material-ui/core/Badge';

class ResultTabsWithBadge extends Component  {

    state = {
        tabSelected: 0
    }

    handleTabClick = (tab) => {
        this.props.handleTabClick(tab)
        this.setState({tabSelected: tab})
    }


    render() {
        const { classes, tabs} = this.props 
        const { tabSelected } = this.state 

        return (
            <span className={classes.tabBar}>
                {tabs.map((tab, index) =>  {
                    return (
                        <span className={tabSelected === index ? classes.tabButtonSelected : classes.tabButtonLeft} onClick={() => this.handleTabClick(index)}>{tab.text}
                            <Badge className={classes.badge} badgeContent={tab.badgeContent} color="primary"> 
                                <span> </span>
                            </Badge> 
                        </span>
                    )
                }) }
            </span>
        )
    }
}


ResultTabsWithBadge = withStyles(resultStylesheet)(ResultTabsWithBadge)
export default ResultTabsWithBadge