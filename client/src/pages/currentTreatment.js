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

import { submitCurrentTreatment } from '../actions/CurrentTreatmentAction'


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


 class CurrentTreatment extends Component {

    state = {
        displayBox: null,
        medIndex: 1,
        redirect: false,
        redirectAddress : '',
    }

    submit(values) {
        console.log("submitCurrent: ", values)

        let currentTreatment = [];

        currentTreatment[0] = {name: values.one}
        currentTreatment[1] = {name: values.two}
        currentTreatment[2] = {name: values.three}
        currentTreatment[3] = {name: values.four}
        currentTreatment[4] = {name: values.five}
        currentTreatment[5] = {name: values.six}
        currentTreatment[6] = {name: values.seven}
        currentTreatment[7] = {name: values.eight}
        currentTreatment[8] = {name: values.nine}
        currentTreatment[9] = {name: values.ten}
        currentTreatment[10] = {name: values.eleven}
        currentTreatment[11] = {name: values.twelve}

        console.log(currentTreatment)

        this.props.submitCurrentTreatment(currentTreatment)

        this.setState({
            redirect : true,
            redirectAddress: 'previous_treatment'
        })

    }

    handleClearForm() {
        this.setState({medIndex: 1})
        this.props.reset()
    }

    handleAddMedication() {
        console.log("add medication: ", this.state.medIndex)
        this.setState({medIndex: this.state.medIndex + 1})
    }
    handleBack = () => {
        this.setState({
            redirect: true,
            redirectAddress: '/user_info'
        })
    }

    render() {

        const { handleSubmit, pristine, submitting, classes } = this.props
        const { redirect, displayBox, medIndex, redirectAddress } = this.state

        const medList = [
            { value: "Sinemet (carbidopa/levodopa)", text: "Sinemet (carbidopa/levodopa)" },
            { value: "Sinemet CR (carbidopa/levodopa)", text: "Sinemet CR (carbidopa/levodopa)" },
            { value: "Parcopa (carbidopa/levodopa)", text: "Parcopa (carbidopa/levodopa)" },
            { value: "Rytary (carbidopa/levodopa)", text: "Rytary (carbidopa/levodopa)" },
            { value: "Duopa (carbidopa/levodopa)", text: "Duopa (carbidopa/levodopa)" },
            { value: "Mirapex (pramipexole)", text: "Mirapex (pramipexole)" },
            { value: "Mirapex ER (pramipexole)", text: "Mirapex ER (pramipexole)" },
            { value: "Requip (ropinirole)", text: "Requip (ropinirole)" },
            { value: "Requip XL (ropinirole)", text: "Requip XL (ropinirole)" },
            { value: "Symmetrel (amantadine)", text: "Symmetrel (amantadine)"},
            { value: "Gocovri  (amantadine)", text: "Gocovri  (amantadine)" },
            { value: "Neupro (rotigotine)", text: "Neupro (rotigotine)" },
            { value: "Apokyn(Apomorphine)", text: "Apokyn(Apomorphine)" },
            { value: "Cogentin (benztropine)", text: "Cogentin (benztropine)" },
            { value: "Zelapar (selegiline)", text: "Zelapar (selegiline)" },
            { value: "Azilect (rasagiline)", text: "Azilect (rasagiline)" },
            { value: "Aricept (donepezil)", text: "Aricept (donepezil)" },
            { value: "Exelon (rivastigmine)", text: "Exelon (rivastigmine)" },
            { value: "Razadyne (galantamine)", text: "Razadyne (galantamine)" },
            { value: "Namenda (Memantine)", text: "Namenda (Memantine)" },
            { value: "Comtan (entacopone)", text: "Comtan (entacopone)" },
            { value: "Stalevo (carbidopa/levodopa/entacapone)", text: "Stalevo (carbidopa/levodopa/entacapone)" }
        ]

         if (redirect) { 
            const url = `${redirectAddress}`;
            console.log("redirect to .. " + url);
            return<Redirect to={url} />;
        }
        

        class MedEntryBox extends Component {
            render() {
                return (
        
                    <div style={{marginTop: "40px"}}>
                        <Grid container spacing={24} >
                            <Grid item xs={3}>
                                <div style={{ position: "relative", top: "18px", fontSize: "20px", }}>
                                    Medication {this.props.index}
                                </div>
                            </Grid>
                            <Grid item xs={9}>
                                <FormSelect
                                    name={this.props.name}
                                    label="Medication Name"
                                    width="90%"
                                    labelWidth={126}
                                    items={medList}
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
                        <Button className={classes.iconBtn} onClick={() => this.setState({medIndex: this.state.medIndex + 1})}>
                            <AddCircle color="primary" className={classes.iconHover}/>
                        </Button>
                        <span>Add medication</span>
                    </Grid>
                </Grid> 
            )
        }


        return (
            <div>

                <div className={classes.textBox} style={{marginTop: "50px"}}>

                 <div className={classes.textBox} >
                    <h1>Current Treatments</h1>
                </div>

                    <h3 className={classes.textStyle} style={{marginTop: "40px"}}>Are you currently on Parkinson medication?</h3>
                    <br />
                    <br />
                    <span style={{marginRight: "50px"}}>
                            <Button variant='contained' className={classes.Btn} onClick={() => this.setState({displayBox: true})}>Yes</Button>
                    </span>
                    <span>
                        <Button variant='contained' className={classes.Btn} onClick={() =>  this.setState({redirect : true})}>No</Button>
                    </span>
                </div>

                { displayBox && <div className={classes.entryBox}>

                    <h3 className={classes.textStyle} style={{marginTop: "20px"}}>Tell us about the medications you currently take for your Parkinson disease.</h3>

                    <form autoComplete="off" onSubmit={handleSubmit(this.submit.bind(this))}>
                        
                        { medIndex > 0 && <MedEntryBox index={1} name="one"/> }
                        { medIndex > 1 && <MedEntryBox index={2} name="two"/> }
                        { medIndex > 2 && <MedEntryBox index={3} name="three"/> }
                        { medIndex > 3 && <MedEntryBox index={4} name="four"/> }
                        { medIndex > 4 && <MedEntryBox index={5} name="five"/> }
                        { medIndex > 5 && <MedEntryBox index={6} name="six"/> }
                        { medIndex > 6 && <MedEntryBox index={7} name="seven"/> }
                        { medIndex > 7 && <MedEntryBox index={8} name="eight"/> }
                        { medIndex > 8 && <MedEntryBox index={9} name="nine"/> }
                        { medIndex > 9 && <MedEntryBox index={10} name="ten"/> }
                        { medIndex > 10 && <MedEntryBox index={11} name="eleven"/> }
                        { medIndex > 11 && <MedEntryBox index={12} name="twelve"/> }

                        <AddIcon />

                        <br />
                        <br />

                        <div className={classes.textBox}>
                            <span style={{marginRight: "50px"}}><Button type="submit" variant='contained' className={classes.Btn} disabled={submitting || pristine} >Submit</Button></span>
                            <span><Button variant='contained' className={classes.Btn} onClick={() => this.handleClearForm()}>Clear Form</Button></span>
                        </div>
                    </form>
                   
                </div> }
                <div>
                    <Grid xs={12} item style={{ marginTop: '50px', textAlign: 'center' }}>
                        <span style={{ marginRight: '50px'}}>
                            <Button variant='contained' color='secondary' className={classes.Btn} onClick={() => { this.handleBack() }} className={classes.button}>
                                Back
                            </Button>
                        </span>
                    </Grid>
                </div>

            </div>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitCurrentTreatment }, dispatch);
}

const formData = {
    form: 'CurrentTreatmentForm', //unique identifier for this form 
    //validate,      
}

CurrentTreatment = reduxForm(formData)(CurrentTreatment)
CurrentTreatment = withRouter(CurrentTreatment)
CurrentTreatment = withStyles(styles)(CurrentTreatment)
CurrentTreatment = connect(null, mapDispatchToProps)(CurrentTreatment)
export default CurrentTreatment