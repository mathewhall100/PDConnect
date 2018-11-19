import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {resultStylesheet } from '../../styles';

class ResultTabs extends Component  {

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
                        <span className={tabSelected === index ? classes.tabButtonSelected : classes.tabButtonLeft} onClick={() => this.handleTabClick(index)}>{tab}</span>
                    )
                }) }
            </span>
        )
    }
}


ResultTabs = withStyles(resultStylesheet)(ResultTabs)
export default ResultTabs