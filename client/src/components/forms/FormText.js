import React, { Component } from 'react';
import { Field } from 'redux-form';

import TextField from '@material-ui/core/TextField'
import DoneIcon from '@material-ui/icons/Done';


class FormText extends Component {  

    renderTextField(field) {
        console.log("text field : ", field);
        const {width, placeholder, meta: {touched, pristine, error}} = field;
        return (
            <div>
                <span>
                    <TextField
                        label={field.label}
                        {...field.input}    
                        margin="normal"
                        variant="outlined"
                        multiline={false}
                        style={{fontSize: "50px", width: `${width}`}}
                        placeholder={`${placeholder}`}
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
                multiline={this.props.multiline}
                width={this.props.width ? this.props.width : "400px"}
                placeholder={this.props.placeholder ? this.props.placeholder : null}
                component={this.renderTextField}
                autoComplete="off"
            />

        )
    }
}

export default FormText;