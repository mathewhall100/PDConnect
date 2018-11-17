import React, { Component } from 'react';
import { Field } from 'redux-form';

import TextField from '@material-ui/core/TextField'
import DoneIcon from '@material-ui/icons/Done';


class FormTextPassword extends Component {  

    renderTextField(field) {
    const {meta: {touched, pristine, error}} = field;
        return (
            <div>
                <span>
                    <TextField
                        label={field.label}
                            {...field.input}    
                        margin="normal"
                        variant="outlined"
                        style={{width: `${field.width}`}}
                        type="password"
                        autoComplete="current-password"
                    />
                </span>

                <span style={{fontSize: "13px", color: "green", position: "relative", top: "30px", left: "10px"}}> 
                        {!pristine && !error ? <DoneIcon /> : ''}
                </span>

                <div style={{fontSize: "13px", color: "red"}}> 
                        {touched ? error : ''}
                </div>

                
            </div>
        )
    };

    render () {

        return (

            <Field 
                name={this.props.name}
                label={this.props.label}
                width={this.props.width ? this.props.width : "250"}
                component={this.renderTextField}
                
            />

        )
    }
}

export default FormTextPassword;