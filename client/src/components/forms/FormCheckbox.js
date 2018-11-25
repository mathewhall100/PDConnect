import React, { Component } from 'react';
import { Field } from 'redux-form'
import Checkbox from '@material-ui/core/Checkbox'

class FormCheckbox extends Component {

    renderCheckbox = ({input, label}) => {
        return (
            <Checkbox
            label="check"
            checked={input.value ? true : false}
            onCheck={input.onChange}
            />
        )
    }

    render() {
        return (

            <Field name={this.props.name}  component={this.renderCheckbox} label="check"/>

        )
    }
}


export default FormCheckbox;