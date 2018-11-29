import React, { Component } from 'react';
import { Field } from 'redux-form'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel';

class FormCheckbox extends Component {

    renderCheckbox = ({input, label}) => {
        console.log("here");
        return (

            <FormControlLabel
                control={
                    <Checkbox
                        checked={input.value ? true : false}
                        onChange={input.onChange}
                        value={input.value ? true : false}
                    />
                    }
                    label={label}
            />
        )
    }

    render() {
        return (

            <Field name={this.props.name} label={this.props.label} component={Checkbox} />

        )
    }
}


export default FormCheckbox;