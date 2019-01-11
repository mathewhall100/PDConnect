import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormText from './FormText'
import FormPassword from './FormTextPassword'

const styles= () => ({
    label: {
        fontWeight: "bold", 
        position: "relative", 
        top: "15px", 
        fontSize: "18px"
    }
})

class CreateAccountForm extends PureComponent { 

    submit(values) {
        this.props.submit(values)
    }
    
        render () { 

            const { classes } = this.props

            return (
                <React.Fragment>
                        <br />
                        <label className={classes.label}>E-mail</label>
                        <br />
                        <FormText title='email' name='email' label='' placeholder="e.g. john.doe@gmail.com"/>
                        <br />
                        <label className={classes.label}>Password</label>
                        <br />
                        <FormPassword title='password' name='password' label='' placeholder="8 or more characters"/>
                        <br />
                        <label className={classes.label}>Re-enter password</label>
                        < br />
                        <FormPassword title='password' name='confirmPassword' label='' placeholder="passwords must match"/>
                        <br /><br /><br />
                </React.Fragment>
            )
        }

       
}

CreateAccountForm = withStyles(styles)(CreateAccountForm)
export default CreateAccountForm;