import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { reset, reduxForm } from 'redux-form';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';    


const styles = theme => ({
    root: {

    },
    textBox: {
        textAlign: "center"
    },
    TextStyle: {
        marginTop: '40px',
        marginBottom: '40px'
    },
    Btn: {
        width: "150px",
        height: "30px",
        backgroundColor: "white",
        border: "2px solid grey",
        borderRadius: "10px",
        fontSize: "14px"
    },

});


class InfoDuodopa extends Component {



    render() {

        const { classes } = this.props

        return (
            <div>

                <div className={classes.textBox}>
                    <h1>Duodopa</h1>
                </div>

                <div style={{height: "250px", border: "1px solid grey"}}>
                    image or video
                </div>

                <div>
                    <h3>Description</h3>
                </div>

                <div>
                    <h3>Who benefits most?</h3>
                </div>

                <div>
                    <h3>Side effects</h3>
                </div>

                <div>
                    <h3>Clinical trial information</h3>
                </div>

                <div>
                    <h3>More information from manufacturer</h3>
                </div>
            </div>
        )
    }
}

InfoDuodopa = withStyles(styles)(InfoDuodopa)
export default InfoDuodopa