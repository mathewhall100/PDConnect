import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

class TreatmentInfo extends Component {
    render() {
        const { treatmentInfo , description } = this.props.treatment_info
        return (
            <Grid container spacing={24}>
                <h3>Treatment Info</h3>
                <Grid item xs={12}>
                    Name : {treatmentInfo ? treatmentInfo : "Name of the medication" }
                </Grid>
                <Grid item xs={12}>
                    Description : {description ? description : "This is a block of description of the medication" }
                </Grid>

            </Grid>
        );
    }
}

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

function mapStatsToProps(state) {
    console.log(state);
    return (state);
}

TreatmentInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

TreatmentInfo = withStyles(styles)(TreatmentInfo);
TreatmentInfo = withRouter(TreatmentInfo);
export default connect(mapStatsToProps)(TreatmentInfo);