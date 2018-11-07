import React, { Component } from 'react';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { reset, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';


import { submitPreviousTreatment } from '../actions/PreviousTreatmentAction'


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
    entryBox: {
        marginTop: "60px",
        marginLeft: "10px",
        marginRight: "10px",
        marginBottom: "40px",
        border: "1px solid grey",
        borderRadius: "10px",
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
    iconBtn: {
        marginLeft: "-20px",
        '&:hover': {
            backgroundColor: "white",
        },
    },
    iconHover: {
        fontSize: "56px",
        '&:hover': {
            color: "darkblue",
        },
      },
    nextBtn: {
        width: "350px",
        height: "70px",
        marginTop: "60px",
        marginLeft: "45px",
        backgroundColor: "white",
        border: "2px solid grey",
        borderRadius: "20px",
        fontSize: "18px"
    },
});



 class TestComponent extends Component {

    state = {
        displayBox: null,
        medIndex: 1,
        redirect: false,
        redirectAddress : 'response',
    }


    submit(values) {
        console.log("submitPrevious: ", values)

        // this.props.submitPreviousTreatment(previousTreatment)  //reducer

        this.setState({
            redirectAddress: '/response',
            redirect: true
        })

    }

    handleClearForm() {
        this.props.reset()
    }

    handleAddMedication() {
        console.log("add medication: ", this.state.medIndex)
    }

    handleBack = () => {
        this.setState({
            redirect: true,
            redirectAddress: '/current_treatment'
        })
    }
    render() {

        const { handleSubmit, pristine, submitting, classes } = this.props
        const { redirect, displayBox, medIndex, redirectAddress } = this.state

        if (redirect) { 
            const url = `${redirectAddress}`;
            console.log("redirect to .. " + url);
            return<Redirect to={url} />;
        }


        class MedEntryBox extends Component {
            render() {
                return (
        
                    <div>

                    </div>
        
                )
            }
        }

        const AddIcon= () => {

            return (
                <Grid container spacing={24}>
                    
                </Grid> 
            )
        }


        return (
            <div>

                <div >


                 <div className={classes.textBox}>
                    <h1>Previous Treatments</h1>
                </div>

                    <h3>Are there any Parkinson medications that you took in the past but no longer take now?</h3>
                    <br />
                    <br />
                    <span>
                        <Button variant='contained' className={classes.Btn} onClick={() => this.setState({displayBox: true})}>Yes</Button>
                    </span>
                    <span>
                        <Button variant='contained' className={classes.Btn} onClick={() => this.setState({redirect: true})}>No</Button>
                    </span>
                </div>

                <div>
                    <h3 >OK, tell us about the medications you have taken in the past for your Parkinsons disease.</h3>

                    <form autoComplete="off" onSubmit={handleSubmit(this.submit.bind(this))}>
                    </form>

                </div> 

                <div >
                    <Button variant='contained' color='secondary' className={classes.Btn} onClick={() => { this.handleBack() }} className={classes.button}>
                        Back
                    </Button>
                </div>

            </div>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitPreviousTreatment }, dispatch);
}

const formData = {
    form: 'PreviousTreatmentForm', //unique identifier for this form 
    //validate,      
}

TestComponent = reduxForm(formData)(TestComponent)
TestComponent = withRouter(TestComponent)
TestComponent = withStyles(styles)(TestComponent)
TestComponent = connect(null, mapDispatchToProps)(TestComponent)
export default TestComponent
