import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {resultTabsStylesheet} from './resultTabsStyles';


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
                {tabs.map((tab, idx) =>  {
                    return (
                        <span key={idx} className={tabSelected === idx ? classes.tabButtonSelected : classes.tabButtonLeft} onClick={() => this.handleTabClick(idx)}>{tab}</span>
                    )
                }) }
            </span>
        )
    }
}


ResultTabs = withStyles(resultTabsStylesheet)(ResultTabs)
export default ResultTabs