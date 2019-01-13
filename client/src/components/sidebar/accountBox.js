import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { sideBarStyles }  from './sideBarStyles'
import SideBoxTextRight from './sideBoxTextRight'
import Hr from "../commons/Hr"

class AccountBox extends Component {
  render() {

    const { classes } = this.props


    return (
        <React.Fragment>

            <h3 className={classes.sideBoxHeader}>My Account</h3>

            <SideBoxTextRight>
                <h5 className={classes.sideBoxText}>Bronze member</h5> 
                <h5 className={classes.sideBoxText}>You have 100 connect points</h5> 
       
                <Hr full={true}/>

                <div className={classes.sideBoxLinkSeparater}>
                    <a  className={classes.sideBoxLink} href='/services'>View account</a>
                </div>
                <div className={classes.sideBoxLinkSeparater}>
                    <a  className={classes.sideBoxLink} href='/services'>Earn points</a>
                </div>
            </SideBoxTextRight>
        
        </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
    console.log("state ", state)
    return {
        creds: state.creds,
    }
}


AccountBox = withStyles(sideBarStyles)(AccountBox)
AccountBox = connect(mapStateToProps, null)(AccountBox)
export default AccountBox
