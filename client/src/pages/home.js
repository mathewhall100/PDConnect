import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

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
                <div className={classes.textBox}> 

                    <div style={{marginTop: "50px"}}> 
                        <span style={{fontSize: "82px"}}>PD</span>
                        <br />
                        <span style={{fontSize: "82px"}}>Navigator</span>
                    </div>

                        
                    <div style={{marginTop: "50px"}}>

                        <h3 id="hero" className={classes.fadeIn}>
                            <span className="rotating">
                                find out about Parkinson disease treatments individualised for you,
                                discover Parkinson disease clinical trials you can participate in, 
                                take away new knowledge about your condition to share with your doctor
                            </span>
                        </h3>
                    </div>

                    <div style={{marginTop: "80px"}}>
                        <Button variant='contained' className={classes.startBtn} onClick={() => this.DirectToIntroInfo()}>
                            Get Started
                        </Button>
                    </div>

                    <div style={{marginTop: "80px"}}>
                        <Button variant='contained' className={classes.loginBtn} onClick={() => this.DirectToIntroInfo()}>
                            login
                        </Button>
                    </div>

                </div>
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
Home = withStyles(styles)(Home)
export default Home;