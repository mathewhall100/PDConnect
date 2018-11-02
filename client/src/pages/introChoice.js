import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { submitUserChoice } from '../actions/index'

const styles = theme => ({
    root: {

    },
    textBox: {
        textAlign: "center"
    },
    Btn: {
        width: "65%",
        minHeight: "100px",
        backgroundColor: "white",
        border: "4px solid grey",
        borderRadius: "30px",
        fontSize: "24px",
        lineHeight: "34px" 
    },

});


class IntroChoice extends Component {
    state = {
        redirect: false,
        subtitle: ""
    }

    componentDidMount() {
       
    }

    handleNav(choice){
        console.log("redirect to user info: ", choice)
        switch (choice) {
            case 1: 
            this.props.submitUserChoice({choice: "treatments"})
                break ;
            case 2: 
            this.props.submitUserChoice({choice: "trials"})
                break ;
            case 3: 
            this.props.submitUserChoice({choice: "both"})
                break ;
            default:
            this.props.submitUserChoice({choice: "both"})
        }
        this.setState({
            redirect : true
        })
        
    } 
    
    render() {
        const { classes } = this.props;
        const { redirect, subtitle } = this.state;

        if (redirect) { 
            const url = `/user_info`;
            console.log("redirect to .. " + url);
            return<Redirect to={url} />;
        }

        return (
            <React.Fragment>
                <div className={classes.textBox}> 

                    <div style={{marginTop: "80px"}}> 
                        <h2>What are you most interested in?</h2>
                    </div>

                
                    <div style={{marginTop: "50px"}}>
                        <Button variant='contained' className={classes.Btn} onClick={() => this.handleNav(1)}>
                            Up-to-date treatments for Parkinson
                        </Button>
                    </div>

                    <div style={{marginTop: "50px"}}>
                        <Button variant='contained' className={classes.Btn} onClick={() => this.handleNav(2)}>
                            Clinical trials for Parkinson 
                        </Button>
                    </div>

                    <div style={{marginTop: "50px"}}>
                        <Button variant='contained' className={classes.Btn} onClick={() => this.handleNav(3)}>
                             OR Both
                        </Button>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitUserChoice }, dispatch);
}

IntroChoice = withRouter(IntroChoice)
IntroChoice = withStyles(styles)(IntroChoice)
IntroChoice = connect(null, mapDispatchToProps)(IntroChoice)
export default IntroChoice