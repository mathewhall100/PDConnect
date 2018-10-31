import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { symptoms } from '../constants';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { submitSymptoms } from '../actions/SymptomsAction';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

 class Symptom extends Component {
    state= {
        unused_symptoms_pool : symptoms,
        used_symptoms_pool : []
    }
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
                    You have selected : 
                 </Grid>
             )
         }
     }
     submitSymptom = () => {
        let used_symptoms_pool = this.state.used_symptoms_pool;
        this.props.submitSymptoms(used_symptoms_pool);
        this.setState({
            redirect : true
        })
     }
    render() {
        const { classes } = this.props;
        const { redirect } = this.state;
        const unused_symptoms_pool = this.state.unused_symptoms_pool.map((i, index) => {
            return (<Chip key={i.name} label={i.name} clickable deleteIcon={<DoneIcon />} onClick={()=> this.moveToUsedPool(`${i.name}`)} className={classes.chip} />);
        })
        const used_symptoms_pool = this.state.used_symptoms_pool.map((i, index) => {
            return (<Chip key={i.name} label={i.name} clickable onDelete={this.handleDelete} onClick={() => this.moveToUnusedPool(`${i.name}`)} className={classes.chip} />);
        })
        if(redirect){
            return(
                <Redirect to='/result' />
            )
        }
        return (
            <Grid container spacing={24}>
                <h3>Pick the problems that you experience</h3>
                <Grid container spacing={24}>
                    {this.renderMessage()}
                    <Grid item xs={12}>
                        {used_symptoms_pool}
                    </Grid>
                    <Grid item xs={12}>
                        These are some most common symptoms that Parkinsons patient suffer from.
                    </Grid>
                    <Grid item xs={12}>
                        {unused_symptoms_pool}
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="outlined" onClick={()=> this.submitSymptom()} className={styles.Button}>
                            See Results
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
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
