import React, { PureComponent } from 'react';
import { Field } from 'redux-form';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DoneIcon from '@material-ui/icons/Done';
import { formStylesheet } from './formStyles'


class FormTextPassword extends PureComponent {  

    renderTextField = (field) => {

        const { placeholder, meta: {touched, pristine, error} } = field
        const { classes } = this.props
        
        return (
            <React.Fragment>
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

                 {touched && <span className={classes.textFieldError}> 
                    {touched ? error : ''}
                 </span> }

                <span className={classes.textFieldSuccess}> 
                    {!pristine && !error ? <DoneIcon className={classes.doneIconStyle} /> : ''}
                </span>
            </React.Fragment>
        )
    };

    render () {

        const { name, label, width, placeholder } = this.props
        
        return (
            <Field 
                name={name}
                label={label}
                width={width ? width : "300px"}
                placeholder={placeholder ? placeholder : ''}
                component={this.renderTextField}
            />
        )
    }

}

FormTextPassword = withStyles(formStylesheet)(FormTextPassword)
export default FormTextPassword;