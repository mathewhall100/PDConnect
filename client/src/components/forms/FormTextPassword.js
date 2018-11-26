import React, { Component } from 'react';
import { Field } from 'redux-form';

import TextField from '@material-ui/core/TextField'
import DoneIcon from '@material-ui/icons/Done';


class FormTextPassword extends Component {  

    renderTextField(field) {
        const {width, placeholder, meta: {touched, pristine, error}} = field;
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
                        placeholder={`${placeholder}`}
                        autoComplete="current-password"
                    />
                </span>

                 {touched && <span style={{fontSize: "14px", color: "red", position: "relative", top: "30px", left: "12px"}}> 
                    {touched ? error : ''}
                 </span> }

                <span style={{fontSize: "13px", color: "green", position: "relative", top: "18px", left: "10px"}}> 
                    {!pristine && !error ? <DoneIcon style={{fontSize: "48px"}} /> : ''}
                </span>

                
            </div>
        )
    };

    render () {

        return (

            <Field 
                name={this.props.name}
                label={this.props.label}
                width={this.props.width ? this.props.width : "300px"}
                placeholder={this.props.placeholder ? this.props.placeholder : null}
                component={this.renderTextField}
                
            />

        )
    }
}

export default FormTextPassword;