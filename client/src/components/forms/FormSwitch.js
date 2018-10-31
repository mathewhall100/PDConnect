import React, { Component } from 'react';
import { Field } from 'redux-form';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DoneIcon from '@material-ui/icons/Done';


class FormRadio extends Component {

    renderSwitch(field) {
        console.log("field in form switch render : " , field);
        const { input, meta: { pristine, touched, error }, children } = field
        console.log("Input in form switch : " , input)
        return (
            <div>
                <FormControlLabel
                    control={
                        <Switch
                            checked={ input.value ? true : false}
                            onChange={input.onChange}
                            value={input.value}
                        />
                    }
                    label={`${field.label}`}
                />
            </div>
        )

    };

    render() {
        console.log("props in form switch : " , this.props);
        return (
            <Field name={this.props.name} label={this.props.label} component={this.renderSwitch}>
            </Field>

        )
    }
};

export default FormRadio;

