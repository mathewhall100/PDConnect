import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { home2Stylesheet } from '../../styles';
import dbsImg from '../../images/dbs.png';
import rytaryImg from '../../images/rytary.jpg';
import focusGroupImg from '../../images/focusgroup.jpg';

//const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


class Connects extends Component {


    render() {
        const { classes } = this.props;

        return (
            <div className={classes.homepageContainer} style={{ background: '#EEEEEE'}}>
                <Grid container className={classes.aboutContainer} >
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10} className={classes.homepageHeader}>
                        <div className={classes.HeroTitle}>
                            Featured Treatments
                        </div>
                        <div className={classes.aboutContentContainer}>
                            <Grid container className={classes.aboutItemContainer}>
                                <Grid item md={7} xs={12}>
                                    <h3>Deep Brain Stimulation</h3>
                                    <span>
                                        This neurosurgical procedure involves implantation of medical device (brain pacemaker) that sends electrical impulses
                                        via implanted electrodes to brain nuclei to treat movement disorders.
                                    </span>
                                    <div className={classes.buttonContainer}>
                                        <Button variant='outlined' className={classes.homepageButton}>Learn More</Button>
                                    </div>
                                </Grid>
                                <Grid item xs={2}></Grid>
                                <Grid item md={3} xs={12} className={classes.aboutImgContainer}>
                                    <img src={dbsImg} alt='deep brain surgery' className={classes.treatmentImg} />
                                </Grid>
                            </Grid>
                            <Grid container className={classes.aboutItemContainer}>
                                <Grid item md={7} xs={12}>
                                    <h3>Rytary</h3>
                                    <span>
                                        RYTARY is an extended-release treatment for Parkinsons Disease, it involves carbidopa and levodopa capsule approved by US Food and Drug Administration (FDA) in 2015.
                                        The combination is the most common used therapies for treating Parkinson disease symptoms. <br /> <br />
                                        It is suitable for early, moderate, and advanced Parkinsons disease.
                                        </span>
                                    <div className={classes.buttonContainer}>
                                        <Button variant='outlined' className={classes.homepageButton}>Learn more about RYTARY</Button>
                                    </div>
                                </Grid>
                                <Grid item xs={2}></Grid>
                                <Grid item md={3} xs={12} className={classes.aboutImgContainer}>
                                    <img src={rytaryImg} alt='Rytary Medication' className={classes.treatmentImg} />
                                </Grid>
                            </Grid>
                            <Grid container className={classes.aboutItemContainer}>
                                <Grid item md={7} xs={12}>
                                    <h3>Focus Group</h3>
                                    <span>
                                        Find the study relates to you, research found that focus group creates an accepting environment that puts participants at ease
                                        that allow them to thoughtfully answer questions in their own words and add meaning to their answers.

                                    </span>
                                    <Grid item xs={12} className={classes.buttonContainer}>
                                        <Button variant='outlined' className={classes.homepageButton}>Find the closest focus group</Button>
                                    </Grid>
                                </Grid>
                                <Grid item xs={2}></Grid>
                                <Grid item md={3} xs={12} className={classes.aboutImgContainer}>
                                    <img src={focusGroupImg} alt='deep brain surgery' className={classes.treatmentImg} />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>

            </div>
        );
    }
}
Connects = withStyles(home2Stylesheet, { withTheme: true })(Connects)
export default Connects;