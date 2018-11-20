import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { home2Stylesheet } from '../../styles';
class Start extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.homepageContainer}>
                <Grid container className={classes.startContainer} >
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10} className={classes.homepageHeader}>
                        <div className={classes.HeroTitle}>
                            Our Goal
                        </div>
                        <div className={classes.description}>
                            Connect patients with Parkinson Disease to &nbsp;
                                <span className="rotating">
                                latest treatments,
                                clinicial trials,
                                focus groups,
                                current knowledge
                                </span> <br/><br />
                            We want to improve quality of life of Parkinsons disease patient find the most individualized treatments
                            based on the picture of your Parkinsons symptoms and details.
                            We strive to build a platform for pharmeceutical companies and research facilities
                            to promote the latest treatments and clinical trials, so you can talk to your neurologist about the potential
                            treatments or clinical trials you might have missing out.
                        </div>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    {/* <DoneIcon className={classes.checkIcon} /><span className={classes.heroList}>up-to-date treatments</span><br />
                    <DoneIcon className={classes.checkIcon} /><span className={classes.heroList}>patient first dedication</span><br />
                    <DoneIcon className={classes.checkIcon} /><span className={classes.heroList}>various clinical trials</span><br />
                    <DoneIcon className={classes.checkIcon} /><span className={classes.heroList}>focus groups recommendation</span>
                    <Grid container spacing={24}>
                        <Grid item xs={6}>
                            <Button variant='contained' color='primary' style={{ display: 'block', textAlign: 'right' }}>Find Out How</Button>
                        </Grid>

                    </Grid>
                    */}
                </Grid>
            </div>
        )
    }
}
Start = withStyles(home2Stylesheet)(Start)
export default Start;