import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DoneIcon from '@material-ui/icons/Done';

const styles = theme => ({
    
    colorBar: {},
    colorChecked: {},
    iOSSwitchBase: {
        '&$iOSChecked': {
            color: theme.palette.common.white,
            '& + $iOSBar': {
                backgroundColor: '#52d869',
            },
        },
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
            easing: theme.transitions.easing.sharp,
        }),
    },
    iOSChecked: {
        transform: 'translateX(15px)',
        '& + $iOSBar': {
            opacity: 1,
            border: 'none',
        },
    },
    iOSBar: {
        borderRadius: 13,
        width: 42,
        height: 26,
        marginTop: -13,
        marginLeft: -21,
        border: 'solid 1px',
        borderColor: theme.palette.grey[400],
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    iOSIcon: {
        width: 24,
        height: 24,
    },
    iOSIconChecked: {
        boxShadow: theme.shadows[1],
    },
});

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
                            classes={{
                                switchBase: field.classes.iOSSwitchBase,
                                bar: field.classes.iOSBar,
                                icon: field.classes.iOSIcon,
                                iconChecked: field.classes.iOSIconChecked,
                                checked: field.classes.iOSChecked,
                            }}
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
            <Field name={this.props.name} label={this.props.label} classes={this.props.classes} component={this.renderSwitch}>
            </Field>

        )
    }
};
FormRadio.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FormRadio);

