import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import HomepageSubtitle from './homepageSubtitle'
import DisplayFeature from './displayFeature'
import dbsImg from '../../images/dbs.png';

//const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = (theme) => ({
    responsivePadding : {
        [theme.breakpoints.down('md')]: {
            padding : '0 30px 0 20px',
        }
    }
})

class  Feature extends Component {

    render() {

        const { classes } = this.props

        return (
            <div className={classes.responsivePadding}>
                <HomepageSubtitle text="Featured Treatment" />
                <br />
                <br />
                <DisplayFeature 
                    img={dbsImg} 
                    altText="deep brain surgery" 
                    title="Deep Brain Stimulation" 
                    text="Deep brain Stimulation (DBS) is a surgical procedure where electrodes are inserted into the area of the brain affected by Parkinons disease and which controls movement. These eletrodes send electrical signals into the brain to supress the abnormal nerve signals that give rise to Parkinson symptoms. DBS is an effective treatment for patients with disabling tremor, uncontrolled wearing off spells and medication-induced dyskinesia. Learn more inside." 
                />
            </div>
        )
    }
}

Feature = withStyles(styles)(Feature)
export default Feature