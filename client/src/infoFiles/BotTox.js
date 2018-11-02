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
    textTitle: {
        textAlign: "center",
        paddingTop: "20px"
    },
    TextStyle: {
        marginTop: '40px',
        marginBottom: '40px'
    },
    text: {
        fontSize: "20px",
        lineHeight: "32px",
        textAlign: "justify", 
        padding: "20px"
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


class InfoBotTox extends Component {



    render() {

        const { classes } = this.props

        return (
            <div>

                <div className={classes.textTitle} style={{paddingBottom: "20px"}}>
                    <h1>Botulinum Toxin</h1>
                </div>

                 <div style={{width: "490px", border: "1px solid grey", padding: "20px", margin: "0 auto"}}>
                    <iframe width="480" height="350" 
                        src="https://www.youtube.com/embed/">
                    </iframe>
                </div>

                <div>
                    <h3 className={classes.textTitle}>Description</h3>
                    <p className={classes.text}> </p>
                </div> 

                <hr />

                <div>
                <h3 className={classes.textTitle}>How Is It taken?</h3>
                    <p className={classes.text}>  </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Who Benefits Most ?</h3>
                    <p className={classes.text}> </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Patient Experiences</h3>
                    <br />
                    <div style={{width: "490px", border: "1px solid grey", padding: "20px", margin: "0 auto"}}>
                    {/* <img src={patientImg} width="480" height="350" /> */}
                        <iframe width="480" height="350"
                            src="https://www.youtube.com/embed/">
                        </iframe>
                    </div>

                    <br />
                    <br />       
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Unwanted Effects</h3>
                    <p className={classes.text}>Most common unwanted effects are headache, nausea and hypertension when lying down(supine hypertension).      </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>What To Ask Your Doctor</h3>
                    <p className={classes.text}> </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Clinical Evidence Summary</h3>
                    <p className={classes.text}></p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>More information</h3>
                    <p className={classes.text}></p>
                </div>
            </div>
        )
    }
}

InfoBotTox = withStyles(styles)(InfoBotTox)
export default InfoBotTox