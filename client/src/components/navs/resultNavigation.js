import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import ResultTabs from './resultTabs'
import ResultDropdown from './resultDropdown'

const styles = (theme) => ({

    tabBarHorizontal: {   
        display: "block",    
        [theme.breakpoints.down('sm')]: {
            display: "none",
        },
    },
    tabBarDropdown: {
        display: "none",
        [theme.breakpoints.down('sm')]: {
            display: "block"
        },
    },
})


class ResultNav extends Component  {

    state = {
        tabSelected: 0,
    }

    tabClick = (tab) => {
        this.props.tabClicked(tab)
        this.setState({tabSelected: tab})
    }

    render() {
        const { classes, tabs} = this.props
        const { tabSelected } = this.state 

        return (
            <React.Fragment>
                <div  className={classes.tabBarHorizontal}>
                    <ResultTabs tabs={tabs} tabSelected={tabSelected} tabClick={this.tabClick}/>
                </div>
                <div className={classes.tabBarDropdown}>    
                     <ResultDropdown  tabs={tabs} tabSelected={tabSelected} tabClick={this.tabClick}/>
                </div>
            </React.Fragment>
        )
    }
}


ResultNav = withStyles(styles)(ResultNav)
export default ResultNav

