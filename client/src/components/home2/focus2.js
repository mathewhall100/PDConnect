import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { home2Stylesheet } from '../../styles';
import dbsImg from '../../images/dbs.png';
import rytaryImg from '../../images/rytary.jpg';
import focusGroupImg from '../../images/focus_group.png';

//const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


class Connects extends Component {


    render() {
        const { classes } = this.props;

        return (

            <div style={{ background: '#FFF'}}>

                <div className={classes.homepageContainer} >
                    <br />
                    <br />

                    <div className={classes.homeSubTitle} > 
                        Ever thought about Focus Groups?
                    </div>
                    <br />
                    <br />
                    <Grid container spacing={24}>

                        <Grid item xs={1}></Grid>

                        <Grid item md={5} xs={12} className={classes.mobileImg}>
                            <img src={focusGroupImg} alt='deep brain surgery' className={classes.treatmentImg} />
                        </Grid>

                        <Grid item md={5} xs={12} >
                        <h3 style={{paddingLeft: "20px"}}>Participating in focus groups.</h3>
                            <div style={{paddingLeft: "20px", paddingTop: "20px"}}>
                                Participating in paid focus groups is a good way to have your say about new ideas and products for Parkinson disease and get paid to do it. Many companies pay focus group participants for their time and views on their products, marketing materials and on their latest innovations. Voluteering for focus groups is quick and easy and we'll get you connected!
                            </div>
                            {/* <Grid item xs={12} className={classes.buttonContainer}>
                                <Button variant='outlined' className={classes.homepageButton}>Find the closest focus group</Button>
                             </Grid> */}
                        </Grid>

                        <Grid item md={5} xs={12} className={classes.aboutImgContainer}>
                            <img src={focusGroupImg} alt='deep brain surgery' className={classes.treatmentImg} />
                        </Grid>

                        <Grid item xs={1}></Grid>

                    </Grid>
                            
                </div>
            </div>
        );
    }
}

Connects = withStyles(home2Stylesheet, { withTheme: true })(Connects)
export default Connects;