import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Hero from '../../components/home/hero';
import Mission from '../../components/home/mission';
import Feature from '../../components/home/feature';
import Focus from '../../components/home/focus';
import Promise from '../../components/home/promise';
import Endorsement from '../../components/home/endorsements';
import Contact from '../../components/home/contact';
import { homeStyles } from './homeStyles';

class Home extends Component {

    render() {
    
    const { classes } = this.props

    const BACKGROUND_GRADIENT_A = 'linear-gradient(rgba(255,255,255,0) 10%, rgba(240,240,240,1))'
    const BACKGROUND_COLOR_A = '#FFF'
    const BACKGROUND_COLOR_B = '#EEE'
    const BACKGROUND_COLOR_C = '#2F5597'

        return (              
            <React.Fragment>
                <div style={{ background: BACKGROUND_GRADIENT_A}}>
                    <div className={classes.homepageContainer}>
                        <Hero/>
                    </div>
                </div>
                <div style={{ background: BACKGROUND_COLOR_A}} >
                    <div className={classes.homepageContainer}>
                        <Mission/>  
                    </div>
                </div>
                <div style={{ background: BACKGROUND_COLOR_C}}>
                     <div className={classes.homepageContainer} >
                        <Promise/>
                    </div>
                </div>
                <div style={{ background: BACKGROUND_COLOR_B}}>
                    <div className={classes.homepageContainer}>
                        <Feature/>
                    </div>
                </div>
                <div style={{ background: BACKGROUND_COLOR_A}}>
                    <div className={classes.homepageContainer} >
                        <Focus/>
                    </div>
                </div>
                <div style={{backgroundColor: BACKGROUND_COLOR_B}}>
                    <div className={classes.homepageContainer}>
                        <Endorsement/>
                    </div>
                </div>
                <div style={{ background: BACKGROUND_COLOR_A}} >
                    <div className={classes.homepageContainer}>
                        <Contact/>
                    </div>
                </div>
            </React.Fragment>    
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

Home = withStyles(homeStyles)(Home)
export default Home;