import React, { Component } from 'react';
import { Field } from 'redux-form';

import TextField from '@material-ui/core/TextField'
import DoneIcon from '@material-ui/icons/Done';

class FormText extends Component {  

    renderTextField(field) {
        console.log("text field : ", field);
        const {width, meta: {touched, error}} = field;
        return (
            <div>
                <span>
                    <TextField
                        label={field.label}
                        {...field.input}    
                        margin="normal"
                        variant="outlined"
                        multiline={field.mutliline === true ? true : false}
                        style={{width: `${width}`}}
                    />
                </span>
                    <span style={{fontSize: "13px", color: "red", position: "relative", top: "30px", left: "10px"}}> 
                        {touched ? error : ''}
                    </span>
                    <span style={{fontSize: "13px", color: "green", position: "relative", top: "30px", left: "10px"}}> 
                        {touched && !error ? <DoneIcon /> : ''}
                    </span>
            </div>
        )
    };

    render () {

        return (

            <Field 
                name={this.props.name}
                label={this.props.label}
                multiline={this.props.multiline}
                width={this.props.width ? this.props.width : "400px"}
                component={this.renderTextField}
                autoComplete="off"
            />

        )
    }
}

export default FormText;