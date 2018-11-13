import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Hero from '../components/home/hero';
import Promise from '../components/home/promise';
import Connects from '../components/home/connect';
import Endorsement from '../components/home/endorsement';
import About from '../components/home/about';
import Button from '@material-ui/core/Button';
import background1 from '../images/andy-kelly-402111-unsplash.jpg';
import { stylesheet } from '../styles';

const styles = theme => ({
    root: {

    },
    textBox: {
        textAlign: "center"
    },
    startBtn: {
        width: "400px",
        height: "70px",
        backgroundColor: "white",
        border: "4px solid grey",
        borderRadius: "30px",
        fontSize: "40px"
    },
    loginBtn: {
        width: "150px",
        height: "30px",
        backgroundColor: "white",
        border: "2px solid grey",
        borderRadius: "10px",
        fontSize: "14px"
    },
    fadeIn : {
        transition: 'opacity 1s',
        opacity: '1',
    }
});

const subTitleArray= ["find out about Parkinson disease treatments individualised for you",
        "discover Parkinson disease clinical trials you can participate in", 
        "take away new knowledge about your condition to share with your doctor" ]

class Home extends Component {
    
    state = {
        redirect: false,
        subtitle: ""
    }

    componentDidMount() {
        this.rotateText()
    }

    DirectToIntroInfo(){
        console.log("redirect to intro info...")
        this.setState({
            redirect : true
        })
        
    } 
    
    rotateText() {
        let x=0
        for (let i=0; i<500; i++) {
            setTimeout(() => {
                this.setState({subtitle: subTitleArray[x]}) 
                x++
                if (x == 3) {x = 0}
            }, i*3000 );
        }
    } 


    render() {
        const { classes } = this.props;
        const { redirect, subtitle } = this.state;

        if (redirect) { 
            const url = `/intro_choice`;
            console.log("redirect to .. " + url);
            return<Redirect to={url} />;
        }

        return (
            <React.Fragment>
                <Hero />
                <Connects />
                <Promise />
                <Endorsement />
                <About />
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
Home = withStyles(stylesheet)(Home)
export default Home;