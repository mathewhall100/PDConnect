import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import Grid from '@material-ui/core/Grid';
import { autoPlay } from 'react-swipeable-views-utils';
import { stylesheet } from '../../styles';
import dbsImg from '../../images/dbs.png';
import rytaryImg from '../../images/rytary.jpg';
import focusGroupImg from '../../images/focusgroup.jpg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


class Connects extends Component {
    

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.homepageFixedWidthContent}>
                <Grid item xs={12}>
                    <h2 className={classes.homepageHeader}>Featured Treatments</h2>
                    <hr />
                </Grid>
                <Grid container spacing={24} className={classes.aboutContainer}>
                    <Grid item xs={8} className={classes.aboutContent}>
                        <h3>Deep Brain Stimulation</h3>
                        <span>
                            This neurosurgical procedure involves implantation of medical device (brain pacemaker) that sends electrical impulses 
                            via implanted electrodes to brain nuclei to treat movement disorders. 
                        </span>
                        <Grid item xs={12} className={classes.buttonContainer}>
                            <Button variant='outlined' className={classes.aboutButton}>Learn More</Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} className={classes.aboutImgContainer}>
                        <img src={dbsImg} alt='deep brain surgery' className={classes.treatmentImg} />
                    </Grid>
                </Grid>
                <br />
                < hr/>
                <Grid container spacing={24} className={classes.aboutContainer}>
                    <Grid item xs={4} className={classes.aboutImgContainer}>
                        <img src={rytaryImg} alt='Rytary Medication' className={classes.treatmentImg} />
                    </Grid>
                    <Grid item xs={8} className={classes.aboutContent}>
                        <h3>Rytary</h3>
                        <span>
                            RYTARY is an extended-release treatment for Parkinsons Disease, it involves carbidopa and levodopa capsule approved by US Food and Drug Administration (FDA) in 2015. 
                            The combination is the most common used therapies for treating Parkinson disease symptoms. <br /> <br />
                            It is suitable for early, moderate, and advanced Parkinsons disease.
                        </span>
                        <Grid item xs={12} className={classes.buttonContainer}>
                            <Button variant='outlined' className={classes.aboutButton}>Learn more about RYTARY</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <br />
                <hr />
                <Grid container spacing={24} className={classes.aboutContainer}>
                    <Grid item xs={8} className={classes.aboutContent}>
                        <h3>Focus Group</h3>
                        <span>
                            Find the study relates to you, research found that focus group creates an accepting environment that puts participants at ease
                            that allow them to thoughtfully answer questions in their own words and add meaning to their answers.

                        </span>
                        <Grid item xs={12} className={classes.buttonContainer}>
                            <Button variant='outlined' className={classes.aboutButton}>Find the closest focus group</Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} className={classes.aboutImgContainer}>
                        <img src={focusGroupImg} alt='deep brain surgery' className={classes.treatmentImg} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}
Connects = withStyles(stylesheet, { withTheme: true })(Connects)
export default Connects;