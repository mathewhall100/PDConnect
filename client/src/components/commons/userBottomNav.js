import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';

// import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import {userStylesheet } from '../../styles';

    class BottomNav extends Component  {

        render() {

            const { classes, stepper : {prevPage, nextPage }} = this.props;

            return (
                <Grid container spacing={24} >
                    <Grid item xs={12}>
                        <hr className={classes.hr} />
                    </Grid>
                    <Grid item xs={3}>
                        <Link to={`${prevPage}`} style={{textDecoration: "none"}}>
                            <Button type="button" variant='outlined' className={classes.userNavButton}>BACK</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={3}>
                        {/* <Link to={`${nextPage}`} style={{textDecoration: "none"}}>
                            <Button type="button" variant='outlined' className={classes.userNavButton}>NEXT</Button>
                        </Link>  */}
                    </Grid>
                </Grid>
            )
         }
    }
function mapStatsToProps(state) {
    console.log(state);
    return {
        stepper: state.stepper,
    }
}

BottomNav = withStyles(userStylesheet)(BottomNav);

export default connect(mapStatsToProps, {})(BottomNav);