import React, { Component } from 'react';
import { Field } from 'redux-form';

import FormLabel from '@material-ui/core/FormLabel';
import { FormControlLabel } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import DoneIcon from '@material-ui/icons/Done';


class FormRadio extends Component {  

    renderRadioGroup(field) {
        const {input, meta: { pristine, touched, error }, children} = field
        console.log(field)
        return (
            <div>
                <br />
                <FormLabel component="legend" >{input.name}</FormLabel>
                <RadioGroup
                    {...input}
                    {...children}
                    onChange={(event, value) => input.onChange(value)}
                    style={{ display: 'flex', flexDirection: 'row', width: '100%'}}
                >
                    {children.map(child => 
                        <FormControlLabel 
                            key={child.props.label}
                            value={child.props.value}
                            control={<Radio />} 
                            label={child.props.label} 
                            checked={input.checked}
                        />
                    )}
                </RadioGroup>

            </div> 
        )
        
    };

    render () {

        return (

            <Field name={this.props.name} component={this.renderRadioGroup}>
                {this.props.items.map(item =>  
                    <Radio key={item.value} value={item.value} label={item.label} />
                )}
            </Field>

        )
    }
};

export default FormRadio;

