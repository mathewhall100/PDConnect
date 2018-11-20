import React, { Component } from 'react';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import {resultStylesheet } from '../../styles';

    class ResultsBar extends Component  {

        state = {
            redirect: false
        }

        render() {
            const { classes, redirectAddress } = this.props  
            const { redirect } = this.state
            
            if (redirect) { 
            const url = redirectAddress;
            console.log("redirect to: " + url);
            return<Redirect to={url} />;

        }
            return (
                <div >
                <Button type="button" className={classes.resultBackButton} style={{position: "relative", top: "27px"}} onClick={() => this.setState({redirect: true}) }>BACK</Button>
                </div>
            )
        }
    }

ResultsBar = withRouter(ResultsBar)
ResultsBar = withStyles(resultStylesheet)(ResultsBar)
export default ResultsBar