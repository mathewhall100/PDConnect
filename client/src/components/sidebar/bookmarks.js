import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { sideBarStyles } from './sideBarStyles'
import SideBoxTextRight from './sideBoxTextRight'
import Hr from "../commons/Hr"

class BookmarkBox extends Component {
  render() {

        const { classes } = this.props

    return (
        <React.Fragment>

            <h3 className={classes.sideBoxHeader}>My Bookmarks</h3>
            <Hr full={true}/>

            <SideBoxTextRight>
                <div className={classes.sideBoxLinkSeparater}>
                    <a  className={classes.sideBoxLink} href='/services'>View Bookmarks</a>
                </div>
                <div className={classes.sideBoxLinkSeparater}>
                    <a className={classes.sideBoxLink} href='/services'>Edit Bookmarks</a>
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


BookmarkBox = withStyles(sideBarStyles)(BookmarkBox)
BookmarkBox = connect(mapStateToProps, null)(BookmarkBox)
export default BookmarkBox