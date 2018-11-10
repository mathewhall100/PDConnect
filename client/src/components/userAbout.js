import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { reset, reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import FormLabel from '@material-ui/core/FormLabel';
import TextBox from './forms/FormText';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import HelpIcon from '@material-ui/icons/Help';
import DoneIcon from '@material-ui/icons/Done';


import { age, sex, raceEthnicity, years, activity_level } from '../constants';
//import { submitUserAbout } from '../actions/UserAboutAction'


const styles = theme => ({
    root: {
        paddingTop: "20px",
    },
    componentBox: {
        maxWidth: "800px",
        height: "auto",
        margin: "20px auto",
        border: "1px solid lightgrey",
        padding: "30px 30px 30px 30px"
    },
    textCenter: {
        textAlign: "center"
    },
    titleStyle: {
        textAlign: "center",
        lineHeight: "40px"
    },
    hr: {
        height: "1px", 
        color:  "lightgrey",
        opacity: 0.5
    },
    labelText: {
        fontSize: "18px"
    },
    inputLabel: {
        fontSize: "18px",
        color: "black"
    },
    iconBtn: {
        marginTop: "-7px",
        '&:hover': {
            backgroundColor: "white",
        },
    },
    iconHover: {
        fontSize: "28px",
        '&:hover': {
            color: "darkblue",
        },
    },
    selectLabel: {
        fontSize: "20px",
        fontWeight: "bold"
    },
    doneIcon: {
        fontSize: "14px", 
        color: "green", 
        position: "relative", 
        top: "20px", 
        left: "10px"
    },
    errorText: {
        fontSize: "15px", 
        color: "red", 
        position: "relative", 
        left: "-45px", 
        top: "32px"
    },
    basicBtn: {
        width: "150px",
        height: "30px",
        marginRight: "60px",
        backgroundColor: "white",
        border: "2px solid grey",
        borderRadius: "10px",
        fontSize: "14px",
        '&:hover': {
            backgroundColor: "lightgrey",
        },
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 40,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },

});



 class UserAbout extends Component {

    state = {
        open : false,
        modalTitle : '',
        modalDescription : '',
        redirect: false,
        redirectAddress : 'test',
    }  
    

    componentWillMount() {
        this.handleInitialize();
    }


    handleInitialize() {
        const initData = this.props.userInfo
        console.log("in handle init, init data is : ", initData);
        this.props.initialize(initData);
    }

    submit(values) {
        console.log("props : ", this.props);
        console.log("values : " , values);

        //this.props.submitUserAbout(values)

        this.setState({
            redirect : true,
            redirectAddress : '/test'
        })
    }

    handleClearForm() {
        console.log("clear form")
        this.props.reset()
    }

    handleBack = () => {
        this.setState({
            redirect: true,
            redirectAddress: '/'
        })
    }

    handleInfoClick = (info) => {
        console.log(info)
    }

    getModalStyle = () => {
        const top = 50;
        const left = 50;
    
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    handleOpen = (modalItem) => { 
        console.log(modalItem);
         this.setState({ 
             open: true, 
             modalTitle : modalItem.modal,
             modalDescription : modalItem.modal
        });
     };

     handleClose = () => {
         this.setState({ open: false });
     };


    render() {

        const { handleSubmit, pristine, submitting, classes } = this.props
        const { redirect, redirectAddress } = this.state


        if (redirect) { 
            const url = `${redirectAddress}`;
            console.log("redirect to .. " + url);
            return<Redirect to={url} />;
        }

        const TopTitle = (props) => {
            return (
                <div>
                    <h1 className={classes.titleStyle}>{props.title}</h1>
                    <br />
                    <hr className={classes.hr} />
                    <br />
                    <br />

                </div>
            )
        }

        const RenderSelect = (field) => {

            const {input, label, width, modal, labelWidth, meta: { pristine, touched, error }, children, ...custom} = field

            return (
    
                <div> 

                    <span>
                        <FormControl variant="outlined"  style={{width: `${width}`}}>  
                            <InputLabel className={classes.inputLabel}>
                                {label}
                            </InputLabel>    
                            <Select
                                {...input}
                                onSelect={(event, index, value) => input.onChange(value)}
                                children={children}
                                {...custom}
                                input={
                                    <OutlinedInput
                                        className={classes.selectLabel}
                                        labelWidth={labelWidth}
                                        name=' '
                                        id="outlined"
                                    />
                                }
                            >
                            </Select>
                        </FormControl> 
                    </span>

                    { (pristine || error) && <Button className={classes.iconBtn} onClick={() => this.handleOpen({modal})}>
                        <HelpIcon color="primary" className={classes.iconHover}/>
                    </Button> }

                    <span className={classes.doneIcon}>
                        {!pristine && !error ? <DoneIcon /> : ''}
                    </span>
                    
                    <span className={classes.errorText}>
                            {touched ? error : ''}
                    </span>
                
                </div>
            )
        };

        const BottomNav= (props) => {
            return (
                <div>
                    <br />
                    <br />
                    <hr className={classes.hr} />
                    <br />
                    <Button type="submit" color="primary" className={classes.basicBtn}>NEXT</Button>
                    <Button type="button" color="primary" className={classes.basicBtn} onClick={() => this.handleClearForm()}>CLEAR</Button>  
                    <br />
                </div> 
            )
        }


        return (
            <section className={classes.root}>
                <div className={classes.componentBox}>
                    
                    <TopTitle title="Let's get started! Tell us a bit about you."/>

                    <form autoComplete='off' onSubmit={handleSubmit(this.submit.bind(this))}>
                        <br />

                                <Field 
                                        name="age"
                                        component={RenderSelect} 
                                        label="Your age"
                                        width={"150px"}
                                        labelWidth={75}
                                        modal={1}
                                    >
                                        {age.map(item => 
                                        <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>
                                        )}
                                </Field>

                                <br /><br />

                                 <Field 
                                        name="sex"
                                        component={RenderSelect} 
                                        label="Your sex"
                                        width={"150px"}
                                        labelWidth={75}
                                        modal={2}
                                    >
                                        {sex.map(item => 
                                        <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>
                                        )}
                                </Field>

                                <br /><br />
                           
                                <Field 
                                        name="race"
                                        component={RenderSelect} 
                                        label="Your race/ethnicity"
                                        width={"320px"}
                                        labelWidth={150}
                                        modal={3}
                                    >
                                        {raceEthnicity.map(item => 
                                        <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>
                                        )}
                                </Field>

                                <br />

                                <h4 className={classes.labelText}>When were you first diagnosed with Parkinson disease?</h4>
                                <Field 
                                        name="yearDiagnosed"
                                        component={RenderSelect} 
                                        label="Year"
                                        width={"150px"}
                                        labelWidth={40}
                                        modal={4}
                                    >
                                        {years.map(item => 
                                        <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>
                                        )}
                                </Field>

                                <br />

                                <h4 className={classes.labelText}>When did you start treatment for Parkinson Disease?</h4>
                                <Field 
                                        name="yearTreatment"
                                        component={RenderSelect} 
                                        label="Year"
                                        width={"150px"}
                                        labelWidth={40}
                                        modal={5}
                                    >
                                        {years.map(item => 
                                        <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>
                                        )}
                                </Field> 
                       
                       <BottomNav />

                    </form>

                </div>

                <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <div style={this.getModalStyle()}  className={classes.paper}>
                            <Typography variant="h6" id="modal-title">
                                {this.state.modalTitle}
                            </Typography>
                            <hr />
                            <Typography variant="subtitle1" id="simple-modal-description">
                                {this.state.modalDescription}
                            </Typography>
                        </div>
                </Modal>

            </section>

        );
    }
}

function validate(values) {
    const errors = {}
    if (!values.age) {
        errors.age = '*required'
    }
    if (!values.sex) {
        errors.sex = '*required'
    } 
    if (!values.race) {
        errors.race = '*required'
    }
    if(!values.yearDiagnosed) {
        errors.yearDiagnosed = '*required'
    }
    if(!values.yearTreatment) {
        errors.yearTreatment = '*required'
    }
    if (values.yearTreatment < values.yearDiagnosed) {
        errors.yearTreatment = '*start of treatment must be after date of diagnosis'
    }
    return errors
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ submitUserAbout }, dispatch);
// }

const formData = {
    form: 'userAboutForm', //unique identifier for this form 
    validate,      
}

UserAbout = reduxForm(formData)(UserAbout)
UserAbout = withRouter(UserAbout)
UserAbout = withStyles(styles)(UserAbout)
// UserAbout = connect(null, mapDispatchToProps)(UserAbout)
export default UserAbout
