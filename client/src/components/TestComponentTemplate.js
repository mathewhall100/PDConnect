import React, { Component } from 'react';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { reset, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';


// import { submitTestComponentData } from '../actions/TestComponentAction'


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
        fontSize: "14px",
        '&:hover': {
            backgroundColor: "white",
        },
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
        const { redirect, redirectAddress } = this.state

        if (redirect) { 
            const url = `${redirectAddress}`;
            console.log("redirect to .. " + url);
            return<Redirect to={url} />;
        }


        const SubComponent = (props) => {

            return (

                <div>

                </div>

            )
            
        }

        const SubComponent2 = (props) => {

            return (
                <div>
                    
                </div> 
            )
        }


        return (
            <div>

                




            </div>

        );
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ submitTestComponentData }, dispatch);
// }

const formData = {
    form: 'TestComponentForm', //unique identifier for this form 
    //validate,      
}

TestComponent = reduxForm(formData)(TestComponent)
TestComponent = withRouter(TestComponent)
TestComponent = withStyles(styles)(TestComponent)
//TestComponent = connect(null, mapDispatchToProps)(TestComponent)
export default TestComponent
