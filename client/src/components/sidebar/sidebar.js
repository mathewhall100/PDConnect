import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import SocMedIcons from '../../components/commons/socMedIcons'
import Bookmarks from './bookmarks'
import AccountBox from './accountBox'
import ProfileBox from './profileBox'
import { sideBarStyles }  from './sideBarStyles'

class Sidebar extends (Component) {

    render () {

        const { classes } = this.props

        return (

            <div className={classes.sidebarContainer}>

                <div className={classes.sideBox}>
                    <SocMedIcons title="Share: "/>
                </div>
                
                <div className={classes.sideBox}>
                    <Bookmarks />
                </div>

                <div className={classes.sideBox}>
                   <AccountBox />
                </div>

                <div className={classes.sideBox}>
                   <ProfileBox />
                </div>

            </div>

        );
    }
}

const mapStateToProps = (state) => {
    console.log("state ", state)
    return {
        creds: state.creds,
    }
}


Sidebar = withStyles(sideBarStyles)(Sidebar)
Sidebar = connect(mapStateToProps, null)(Sidebar)
export default Sidebar