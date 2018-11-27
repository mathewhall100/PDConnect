import React, { Component } from 'react';
import { Field } from 'redux-form'
import Checkbox from '@material-ui/core/Checkbox'

class FormCheckbox extends Component {

    renderCheckbox = ({input, label}) => {
        console.log(input);
        console.log("Label : ", label);
        return (
            <Checkbox

            label={label}
            checked={input.value ? true : false}
            onCheck={input.onChange}
            />
        )
    }

    render() {
        console.log("Props in form checkbox : ", this.props);
        return (

            <Field name={this.props.name} label={this.props.label} component={Checkbox} />

        )
    }
}


export default FormCheckbox;