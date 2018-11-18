import React, { Component } from 'react';
import { Field } from 'redux-form';

import TextField from '@material-ui/core/TextField'
import DoneIcon from '@material-ui/icons/Done';

class FormText extends Component {  

    renderTextField(field) {
        console.log("text field : ", field);
        const {width, meta: {touched, pristine, error}} = field;
        return (
            <div>
                <span>
                    <TextField
                        label={field.label}
                        {...field.input}    
                        margin="normal"
                        variant="outlined"
                        multiline={false}
                        style={{width: `${width}`}}
                    />
                </span>

                
                {touched && <div style={{fontSize: "13px", color: "red", }}> 
                    {touched ? error : ''}
                 </div> }

                <span style={{fontSize: "13px", color: "green", position: "relative", top: "30px", left: "10px"}}> 
                    {!pristine && !error ? <DoneIcon /> : ''}
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