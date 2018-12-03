import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { home2Stylesheet } from '../../styles';
import dbsImg from '../../images/dbs.png';
import rytaryImg from '../../images/rytary.jpg';
import focusGroupImg from '../../images/focusgroup.jpg';

//const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


class  Feature extends Component {


    render() {
        const { classes } = this.props;

        return (

            <div style={{ background: '#EEE'}}>

                <div className={classes.homepageContainer} >
                    <br />
                    <br />

                    <div className={classes.homeSubTitle}>
                        Featured Treatment
                    </div>
                    <br />
                    <br />
                    <Grid container spacing={24} >

                        <Grid item xs={1}></Grid>

                        <Grid item md={5} xs={12} className={classes.mobileImg}>
                            <img src={dbsImg} alt='deep brain surgery' className={classes.treatmentImg} />
                        </Grid>

                        <Grid item md={5} xs={12}>
                            <h3 style={{paddingLeft: "20px"}}>Deep Brain Stimulation</h3>
                            <div style={{paddingLeft: "20px", paddingTop: "20px"}}>
                            Deep brain Stimulation (DBS) is a surgical procedure where electrodes are inserted into the area of the brain affected by Parkinons disease and which controls movement. These eletrodes send electrical signals into the brain to supress the abnormal nerve signals that give rise to Parkinson symptoms. DBS is an effective treatment for patients with disabling tremor, uncontrolled wearing off spells and medication-induced dyskinesia. Learn more inside.
                            </div>
                            {/* <div className={classes.buttonContainer} style={{paddingLeft: "20px"}}>
                                <Button variant='outlined' className={classes.homepageButton}>Learn More</Button>
                            </div> */}
                        </Grid>

                        <Grid item md={5} xs={12} className={classes.aboutImgContainer}>
                            <img src={dbsImg} alt='deep brain surgery' className={classes.treatmentImg} />
                        </Grid>


                        <Grid item xs={1}></Grid>

                    </Grid>

                     <br /><br />
                </div>
                <br />
            </div>
        );
    }
}
Feature = withStyles(home2Stylesheet, { withTheme: true })(Feature)
export default Feature;