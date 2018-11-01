import React, { Component } from 'react';
import { Field } from 'redux-form';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import DoneIcon from '@material-ui/icons/Done';


class FormSelect extends Component {  

    renderSelect(field) {
        const {input, label, width, labelWidth, meta: { pristine, touched, error }, children, ...custom} = field
        return (

            <div> 
                <span>
                    <div style={{ fontSize: "13px", color: "red", position: "relative", top: "20px", left: "10px" }}>
                        {touched ? error : ''}
                    </div>
                    <FormControl variant="outlined"  style={{width: `${width}`}}>
                        <InputLabel>
                            {label}
                        </InputLabel>
                    
                        <Select
                            {...input}
                            onSelect={(event, index, value) => input.onChange(value)}
                            children={children}
                            {...custom}
                            input={
                                <OutlinedInput
                                    labelWidth={labelWidth}
                                    name="age"
                                    id="select"
                                />
                            }
                        >
                        </Select>
        
                    </FormControl> 
                </span>
                <span style={{ fontSize: "13px", color: "green", position: "relative", top: "20px", left: "10px" }}>
                    {!pristine ? <DoneIcon /> : ''}
                </span>
                
                
            </div>
        )
        
    };


    render () {

        return (

            <Field 
                name={this.props.name} 
                component={this.renderSelect} 
                label={this.props.label}
                width={this.props.width ? this.props.width : "250px"}
                labelWidth={this.props.labelWidth}
            >
                {this.props.items.map(item => 
                   <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>
                )}
            </Field>

        )
    }
};

export default FormSelect;