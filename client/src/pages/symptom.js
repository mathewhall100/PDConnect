import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { symptoms } from '../constants';
import DoneIcon from '@material-ui/icons/Done';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit,
    },
});

 class Symptom extends Component {
    state= {
        unused_symptoms_pool : symptoms,
        used_symptoms_pool : []
    }
     moveToUsedPool = (name) => {
         console.log("here");
         let used_symptoms_pool = this.state.used_symptoms_pool;
         let unused_symptoms_pool = this.state.unused_symptoms_pool;
        console.log("used and unused : ", used_symptoms_pool, unused_symptoms_pool);
        _.forEach(unused_symptoms_pool, function(unused) {
            if(unused.name === name){
                used_symptoms_pool.push(name);
                _.pull(unused_symptoms_pool, name)
                console.log(unused_symptoms_pool);
            }
        })
         console.log("used and unused : ", used_symptoms_pool, unused_symptoms_pool);
         this.setState({
             used_symptoms_pool : used_symptoms_pool,
             unused_symptoms_pool : unused_symptoms_pool,
         })
     }
    render() {
        const { classes } = this.props;
        const unused_symptoms_pool = this.state.unused_symptoms_pool.map((i, index) => {
            return (<Chip key={i.name} label={i.name} clickable deleteIcon={<DoneIcon />} onClick={()=> this.moveToUsedPool(`${i.name}`)} className={classes.chip} />);
        })
        return (
            <Grid container spacing={24}>
                <h3>Pick the problems that you experience</h3>
                <Grid container spacing={24}>
                    {unused_symptoms_pool}
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
export default connect(mapStatsToProps, { })(Symptom);
