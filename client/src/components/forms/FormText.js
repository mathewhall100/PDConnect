import React, { Component } from 'react';
import { Field } from 'redux-form';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import DoneIcon from '@material-ui/icons/Done';
import { formStylesheet } from './formStyles'

class FormText extends Component {  

    renderTextField = (field) => {

        const {width, placeholder, meta: {touched, pristine, error}} = field
        const { classes } = this.props

        return (
            <React.Fragment>
                    <TextField
                        label={field.label}
                        {...field.input}    
                        margin="normal"
                        variant="outlined"
                        multiline={false}
                        style={{fontSize: "50px", width: `${width}`}}
                        placeholder={`${placeholder}`}
                    />

                {touched && <span className={classes.textFieldError}> 
                    {error ? error : ''}
                 </span> }

                <span className={classes.textFieldSuccess}> 
                    {!pristine && !error ? <DoneIcon className={classes.doneIconStyle} /> : ''}
                </span>
            </React.Fragment>
        )
    };

    render () {

        const { name, label, multiline, width, placeholder } = this.props

        return (

            <Field 
                name={name}
                label={label}
                multiline={multiline}
                width={width ? width : "400px"}
                placeholder={placeholder ? placeholder : null}
                component={this.renderTextField}
                autoComplete="off"
            />

        )
    }
}

FormText = withStyles(formStylesheet)(FormText)
export default FormText;