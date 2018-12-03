import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { home2Stylesheet } from '../../styles';
class Start extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.homepageContainer}>
                <Grid container >

                    <Grid item xs={1}></Grid>

                    <Grid item xs={10}>
                        <br />
                        <br />
                        <div className={classes.homeSubTitle}>
                            Our Aim
                        </div>
                        <br />
                        <div className={classes.description} style={{textAlign: "justify"}}>
                           PD Connect offers a personalised portal for patients with Parkinson disease, their relatives and carers, connecting them to current and new treatments, clinical trials and focus groups as well as up to date knowledge and developments in the field. Our aim is to provide individualised information and resources to empower patients with Parkinson disease to a healthier life. 
                        </div>
                        <br />
                        <br />
                        <br />
                    </Grid>

                    <Grid item xs={1}></Grid>

                </Grid>
            </div>
        )
    }
}
Start = withStyles(home2Stylesheet)(Start)
export default Start;