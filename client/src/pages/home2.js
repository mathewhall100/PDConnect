import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Hero2 from '../components/home2/hero2';
import Start2 from '../components/home2/start2';
import About2 from '../components/home2/about2';
import Promise2 from '../components/home2/promise2';
import Endorsement2 from '../components/home2/endorsements2';
import Connect2 from '../components/home2/connect2';


import Button from '@material-ui/core/Button';
import background1 from '../images/andy-kelly-402111-unsplash.jpg';
import { home2Stylesheet } from '../styles';

class Home extends Component {

    state = {
        redirect: false,
        subtitle: ""
    }

    render() {
        const { classes } = this.props;
        const { redirect, subtitle } = this.state;

        return (
            <React.Fragment>
                <Hero2/>
                <Start2/>
                <About2/>
                <Promise2/>
                <Endorsement2 />
                <Connect2 />
            </React.Fragment>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    console.log("state in homepage : ", state);
    return state;
};

Home = connect(mapStateToProps)(Home)
Home = withStyles(home2Stylesheet)(Home)
export default Home;