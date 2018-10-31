import React, { Component } from 'react';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { reset, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import FormText from '../components/forms/FormText'
import FormSelect from '../components/forms/FormSelect'
import FormRadio from '../components/forms/FormRadio'
import { withStyles } from '@material-ui/core/styles';
import AddCircle from '@material-ui/icons/AddCircle';
import Switch from '../components/forms/FormSwitch';

import { submitSideEffects } from '../actions'


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


 class Response extends Component {

    state = {
        displayQuestionBox: false,
        displayBox: null,
        seIndex: 1,
        redirect: false
    }

    submit(values) {
        console.log("submitSideeffects: ", values)

        let sideEffect = [];

        sideEffect[0] = {name: values.one}
        sideEffect[1] = {name: values.two}
        sideEffect[2] = {name: values.three}
        sideEffect[3] = {name: values.four}
        sideEffect[4] = {name: values.five}
        sideEffect[5] = {name: values.six}
        sideEffect[6] = {name: values.seven}
        sideEffect[7] = {name: values.eight}
        sideEffect[8] = {name: values.nine}
        sideEffect[9] = {name: values.ten}
        sideEffect[10] = {name: values.eleven}
        sideEffect[11] = {name: values.twelve}

        console.log(sideEffect)

        this.props.submitSideEffects(sideEffect)

        this.setState({redirect : true})

    }

    handleClearForm() {
        this.setState({seIndex: 1})
        this.props.reset()
    }

    handleAddMedication() {
        console.log("add medication: ", this.state.seIndex)
        this.setState({seIndex: this.state.medIndex + 1})
    }

    handleResponse(response) {
        this.setState({displayQuestionBox: true})
    }


    render() {

        const { handleSubmit, pristine, submitting, classes } = this.props
        const { redirect, displayBox, displayQuestionBox, seIndex } = this.state

        const SEList = [
            {value: "nausea and sickness", text: "nausea and sickness"},
            {value: "dizziness or lightheadedness when standing up", text: "dizziness or lightheadedness when standing up"},
            {value: "unsteadiness or falls", text: "unsteadiness or falls"},
            {value: "dry mouth", text: "dry mouth"},
            {value: "blurred vision", text: "blurred vision"},
            {value: "headaches", text: "headaches"},
         ]

         if (redirect) { 
            const url = `/symptom`;
            console.log("redirect to .. " + url);
            return<Redirect to={url} />;
        }
        

        class SeEntryBox extends Component {
            render() {
                return (
        
                    <div style={{marginTop: "40px"}}>
                        <Grid container spacing={24} >
                            <Grid item xs={3}>
                                <div style={{ position: "relative", top: "18px", fontSize: "20px", }}>
                                    Side Effect {this.props.index}
                                </div>
                            </Grid>
                            <Grid item xs={9}>
                                <FormSelect
                                    name={this.props.name}
                                    label="Side effect"
                                    width="90%"
                                    labelWidth={120}
                                    items={SEList}
                                />
                            </Grid>
                        </Grid> 
                    </div>
        
                )
            }
        }

        const AddIcon= () => {

            return (
                <Grid container spacing={24}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={9}>
                        <Button className={classes.iconBtn} onClick={() => this.setState({seIndex: this.state.seIndex + 1})}>
                            <AddCircle color="primary" className={classes.iconHover}/>
                        </Button>
                        <span>Add side effect</span>
                    </Grid>
                </Grid> 
            )
        }


        return (
            <div>

                <div className={classes.textBox} style={{marginTop: "60px"}}>
                    <h1>Treatment Responses and Side Effects</h1>
                </div>
                
                <div className={classes.textBox} style={{marginTop: "50px"}}>

                    <h3 className={classes.textStyle}>When you take sinemet, does it help with your symptoms (even if only for a short time)?</h3>

                    <div style={{marginTop: "50px"}}>
                        <span style={{marginRight: "50px"}}>
                            <Button variant='contained' className={classes.Btn} onClick={() => this.handleResponse(true)}>Yes</Button>
                        </span>
                        <span>
                            <Button variant='contained' className={classes.Btn} onClick={() =>  this.handleResponse(false)}>No</Button>
                        </span>
                        {/* <Switch name='benefitFromSinemet' label='Do you receive positive benefits from Sinemet?' value={this.props.sideEffect.benefitFromSinemet} /> */}
                    </div>
                </div>

                { displayQuestionBox && <div className={classes.textBox} style={{marginTop: "50px"}}>
                    
                    <h3 className={classes.textStyle} style={{marginTop: "40px"}}>Have you ever experienced any side effects from your Parkinson's disease medications?</h3>

                    <div style={{marginTop: "50px"}}>
                        <span style={{marginRight: "50px"}}>
                            <Button variant='contained' className={classes.Btn} onClick={() => this.setState({displayBox: true})}>Yes</Button>
                        </span>
                        <span>
                            <Button variant='contained' className={classes.Btn} onClick={() =>  this.setState({redirect : true})}>No</Button>
                        </span>
                    </div>
                </div> }
                
                { displayBox && <div className={classes.entryBox}>

                    <h3 className={classes.textStyle} style={{marginTop: "20px"}}>OK, tell us about the side effects you have experienced.</h3>

                    <form autoComplete="off" onSubmit={handleSubmit(this.submit.bind(this))}>
                        
                        { seIndex > 0 && <SeEntryBox index={1} name="one"/> }
                        { seIndex > 1 && <SeEntryBox index={2} name="two"/> }
                        { seIndex > 2 && <SeEntryBox index={3} name="three"/> }
                        { seIndex > 3 && <SeEntryBox index={4} name="four"/> }
                        { seIndex > 4 && <SeEntryBox index={5} name="five"/> }
                        { seIndex > 5 && <SeEntryBox index={6} name="six"/> }
                        { seIndex > 6 && <SeEntryBox index={7} name="seven"/> }
                        { seIndex > 7 && <SeEntryBox index={8} name="eight"/> }
                        { seIndex > 8 && <SeEntryBox index={9} name="nine"/> }
                        { seIndex > 9 && <SeEntryBox index={10} name="ten"/> }
                        { seIndex > 10 && <SeEntryBox index={11} name="eleven"/> }
                        { seIndex > 11 && <SeEntryBox index={12} name="twelve"/> }

                        <AddIcon />

                        <br />
                        <br />

                        <div className={classes.textBox}>
                            <span style={{marginRight: "50px"}}><Button type="submit" variant='contained' className={classes.Btn} disabled={submitting || pristine} >Submit</Button></span>
                            <span><Button variant='contained' className={classes.Btn} onClick={() => this.handleClearForm()}>Clear Form</Button></span>
                        </div>
                    </form>
                   
                </div> }

            </div>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitSideEffects }, dispatch);
}

const formData = {
    form: 'CurrentTreatmentForm', //unique identifier for this form 
    //validate,      
}

Response = reduxForm(formData)(Response)
Response = withRouter(Response)
Response = withStyles(styles)(Response)
Response = connect(null, mapDispatchToProps)(Response)
export default Response