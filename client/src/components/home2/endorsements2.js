import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { home2Stylesheet } from '../../styles';
import Avatar from '@material-ui/core/Avatar';
import physician1Img from '../../images/avatar/physician1.png';
import physician2Img from '../../images/avatar/physician2.png';
import patient1Img from '../../images/avatar/patient1.png';
import patient2Img from '../../images/avatar/patient2.png';
class Endorse extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.homepageFixedWidthContent}>
                <Grid container >
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10} className={classes.homepageHeader}>
                        <Grid container>
                            <Grid item xs={12}>
                                <div className={classes.HeroTitle}>
                                    Endorsements
                                </div>
                            </Grid>

                            <Grid item lg={3} md={3} xs={12} className={classes.avatarContainer}>
                                <Avatar alt='User1' src={physician1Img} className={classes.bigAvatar} />
                                <h2>Gilbert	Reese</h2>
                                <Grid item xs={10}>
                                    <p>Neurologist</p>
                                    <p>A great way to learn about the new treatments out there from the mouth of patient! </p>
                                </Grid>
                            </Grid>
                            <Grid item lg={3} md={3} xs={12} className={classes.avatarContainer}>
                                <Avatar alt='User1' src={physician2Img} className={classes.bigAvatar} />
                                <h2>Shaun Perez</h2>
                                <Grid item xs={10}>
                                    <p>Pharmaceutical Rep</p>
                                    <p>Platform to promote and introduce new treatments to the world, what not to like? </p>
                                </Grid>
                            </Grid>
                            <Grid item lg={3} md={3} xs={12} className={classes.avatarContainer}>
                                <Avatar alt='User1' src={patient1Img} className={classes.bigAvatar} />
                                <h2>Daryl Reid</h2>
                                <Grid item xs={10}>
                                    <p>Parkinsons Patient</p>
                                    <p>Pin point my Parkinsons symptoms and recommened me treatments that I never tried before.</p>
                                </Grid>
                            </Grid>
                            <Grid item lg={3} md={3} xs={12} className={classes.avatarContainer}>
                                <Avatar alt='User1' src={patient2Img} className={classes.bigAvatar} />
                                <h2>Johnnie	Watson</h2>
                                <Grid item xs={10}>
                                    <p>Parkinsons Patient's Relatives</p>
                                    <p>This is a great application to help my aunt finds the latest treatments information! </p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </div>
        )
    }
}
Endorse = withStyles(home2Stylesheet)(Endorse)
export default Endorse;