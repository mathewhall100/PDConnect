import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { symptoms } from '../constants';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import InfoIcon from '@material-ui/icons/Info';
import Chip from '@material-ui/core/Chip';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { submitSymptoms } from '../actions/SymptomsAction';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    
    chip: {
        margin: theme.spacing.unit,
        fontSize : '22px',
        padding: '15px'
    },
    button: {
        margin: theme.spacing.unit,
        width: "150px",
        height: "30px", 
        border: "2px solid grey",
        borderRadius: "10px",
        fontSize: "14px"
    },
    Btn: {
        width: "150px",
        height: "30px", 
        border: "2px solid grey",
        borderRadius: "10px",
        fontSize: "14px"
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

 class Symptom extends Component {
    state= {
        unused_symptoms_pool : symptoms,
        used_symptoms_pool : [],
        open : false,
        modalTitle : '',
        modalDescription : '',
    }

     handleOpen = (modalItem) => { 
        console.log(modalItem);
         this.setState({ 
             open: true, 
             modalTitle : modalItem.short_name,
             modalDescription : modalItem.description
        });
     };

     handleClose = () => {
         this.setState({ open: false });
     };


    handleDelete = () => {
        alert('You clicked the delete icon.'); // eslint-disable-line no-alert
    }
    moveToUsedPool = (name) => {
        console.log("here");
        let toSplice = Infinity;
        let used_symptoms_pool = this.state.used_symptoms_pool;
        let unused_symptoms_pool = this.state.unused_symptoms_pool;
        console.log("used and unused : ", used_symptoms_pool, unused_symptoms_pool);
        if(unused_symptoms_pool.length > 0){
            _.forEach(unused_symptoms_pool, function (unused, index) {
                console.log("unused : ", unused);
                if (unused.name === name) {
                    used_symptoms_pool.push(unused);
                    toSplice = index;
                }
            })
            unused_symptoms_pool.splice(toSplice, 1);
        }
        
         console.log("used and unused : ", used_symptoms_pool, unused_symptoms_pool);
         this.setState({
             used_symptoms_pool : used_symptoms_pool,
             unused_symptoms_pool : unused_symptoms_pool,
         })
    }
     moveToUnusedPool = (name) => {
         console.log("here");
         let toSplice = Infinity;
         let used_symptoms_pool = this.state.used_symptoms_pool;
         let unused_symptoms_pool = this.state.unused_symptoms_pool;
         console.log("used and unused : ", used_symptoms_pool, unused_symptoms_pool);
         if(used_symptoms_pool.length > 0){
             _.forEach(used_symptoms_pool, function (used, index) {
                 if (used.name === name) {
                     unused_symptoms_pool.push(used);
                     toSplice = index;
                     console.log("tosplice : ", toSplice);
                 }
             })

             used_symptoms_pool.splice(toSplice, 1);
             console.log("after splice : ", unused_symptoms_pool);
         }
         
         console.log("used and unused : ", used_symptoms_pool, unused_symptoms_pool);
         this.setState({
             used_symptoms_pool: used_symptoms_pool,
             unused_symptoms_pool: unused_symptoms_pool,
         })
     }
     renderMessage = () => {
         if(this.state.used_symptoms_pool.length > 0){
             return(
                 <Grid item xs={12}>
                     <h3>You have selected : </h3>
                 </Grid>
             )
         }
     }
     submitSymptom = () => {
        let used_symptoms_pool = this.state.used_symptoms_pool;
        this.props.submitSymptoms(used_symptoms_pool);
        this.setState({
            redirect : true,
            redirectAddress : 'result'
        })
     }

     handleBack = () => {
         this.setState({
             redirect: true,
             redirectAddress: '/response'
         })
     }
    render() {
        const { classes } = this.props;
        const { redirect, redirectAddress } = this.state;
        const unused_symptoms_pool = this.state.unused_symptoms_pool.map((i, index) => {
            return (<Chip key={i.name} label={i.name} clickable deleteIcon={<InfoIcon />} onDelete={() => this.handleOpen(i)} onClick={()=> this.moveToUsedPool(`${i.name}`)} className={classes.chip} />);
        })
        const used_symptoms_pool = this.state.used_symptoms_pool.map((i, index) => {
            return (<Chip key={i.name} label={i.name} color="primary" clickable onDelete={() => this.moveToUnusedPool(`${i.name}`)} onClick={() => this.moveToUnusedPool(`${i.name}`)} className={classes.chip} />);
        })
        if(redirect){
            return(
                <Redirect to={`${redirectAddress}`} />
            )
        }
        return (
            <div>             
                <div className={classes.textBox} style={{ marginTop: "60px" }}>
                    <h1>Which of the Parkinson symptoms are you most bothered by? (You may pick more than one)</h1>    
                </div>
                
                <Grid container >
                    {this.renderMessage()}
                    <Grid item xs={12}>
                        {used_symptoms_pool}
                    </Grid>
                    <Grid item xs={12}>
                        <h3>These are some most common symptoms that Parkinson patient suffer from.</h3>
                    </Grid>
                    <Grid item xs={12}>
                        {unused_symptoms_pool}
                    </Grid>
                    <Grid item xs={6}>
                        <span style={{ marginRight: '50px' }}>
                            <Button variant='contained' color='secondary' className={classes.Btn} onClick={() => { this.handleBack() }} className={classes.button}>
                                Back
                            </Button>
                        </span>
                    </Grid>
                    <Grid item xs={6}>
                        <span style={{ marginRight: '50px' }}>
                        <Button type="submit" variant="outlined" className={classes.button} onClick={()=> this.submitSymptom()}>
                            See Results
                        </Button>
                        </span>
                    </Grid>
                </Grid>
                <div >
                    
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <div style={getModalStyle()}  className={classes.paper}>
                            <Typography variant="h6" id="modal-title">
                                {this.state.modalTitle}
                            </Typography>
                            <hr />
                            <Typography variant="subtitle1" id="simple-modal-description">
                                {this.state.modalDescription}
                            </Typography>
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}
function mapStatsToProps(state) {
    return (state);
}
Symptom.propTypes = {
    classes: PropTypes.object.isRequired,
};
Symptom = withStyles(styles)(Symptom);
Symptom = withRouter(Symptom);
export default connect(mapStatsToProps, { submitSymptoms })(Symptom);
