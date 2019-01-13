import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles'
import { sideBarStyles } from './sideBarStyles'
import SideBoxTextRight from './sideBoxTextRight'
import Hr from "../commons/Hr"


class ProfileBox extends Component {
  render() {

        const { classes } = this.props

    return (
        <React.Fragment>

             <h3 className={classes.sideBoxHeader}>My profile</h3>

                 <SideBoxTextRight>
                    <h5 className={classes.sideBoxText}>Your profile is 70% complete</h5>
                    <h5 className={classes.sideBoxText}>Next update due: Dec 2018</h5>

                    <Hr full={true}/>

                    <div className={classes.sideBoxLinkSeparater}>
                        <a className={classes.sideBoxLink} href='/servcies'>View profile</a>
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


ProfileBox = withStyles(sideBarStyles)(ProfileBox)
ProfileBox = connect(mapStateToProps, null)(ProfileBox)
export default ProfileBox