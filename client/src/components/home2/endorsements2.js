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
            <div>
                <br />
                <br />
                <div style={{backgroundColor: "#EEE"}}>
                <br />
    >
                    <div className={classes.homepageFixedWidthContent}>
                        <Grid container >
                            <Grid item xs={1}></Grid>
                            <Grid item xs={10} className={classes.homepageHeader}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <div className={classes.homeSubTitle}>
                                            Endorsements
                                        </div>
                                        <br />
                                    </Grid>

                                    <Grid item lg={3} md={3} xs={12} className={classes.avatarContainer}>
                                        <Avatar alt='User1' src={physician1Img} className={classes.bigAvatar} />
                                        <h2 style={{padding: "10px"}}>Dr. G. Reese MD</h2>
                                        <Grid item xs={10}>
                                            <p>Neurologist</p>
                                            <p>A great way to keep patients in the loop in our fast moving field of medicine. </p>
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={3} md={3} xs={12} className={classes.avatarContainer}>
                                        <Avatar alt='User1' src={physician2Img} className={classes.bigAvatar} />
                                        <h2 style={{padding: "10px"}}>Sarah James</h2>
                                        <Grid item xs={10}>
                                            <p>Parkinson patient</p>
                                            <p>The app made me aware of more than one treatment suitable for me and, which after discussion with my doctor, i am now taking. </p>
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={3} md={3} xs={12} className={classes.avatarContainer}>
                                        <Avatar alt='User1' src={patient1Img} className={classes.bigAvatar} />
                                        <h2 style={{padding: "10px"}}>Daryl Reid</h2>
                                        <Grid item xs={10}>
                                            <p>Parkinson Patient</p>
                                            <p>I have been paid for two focus groups so far and I know the app is constantly on the lookout for more that I can participate in.</p>
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={3} md={3} xs={12} className={classes.avatarContainer}>
                                        <Avatar alt='User1' src={patient2Img} className={classes.bigAvatar} />
                                        <h2 style={{padding: "10px"}}>Johnnie	Watson</h2>
                                        <Grid item xs={10}>
                                            <p>Relative</p>
                                            <p>This app has really helped my aunt and I learn about her Parkinson disease and have more meaningful discussions with her doctors.  </p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>
                    </div>
                    <br />
                </div>
            </div>
        )
    }
}
Endorse = withStyles(home2Stylesheet)(Endorse)
export default Endorse;