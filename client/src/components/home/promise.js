import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { stylesheet } from '../../styles';

class Promises extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Grid container spacing={24} className={classes.promise}>
                <div style={{
                    backgroundColor: 'rgba(164, 164, 164, 0.2)'}}>
                <hr />
                    <h2 className={classes.homepageHeader}>Our Promise To You</h2>
                <hr />
                <List className={classes.promiseList}>
                    <ListItem className={classes.promiseListItem}>
                        <h3 className={classes.promiseSecondHeader}>Your personal info is safe with us, we do not sell your data. </h3>
                        <div className={classes.promiseDescription}>
                            Test test test 
                        </div>
                    </ListItem>
                    <ListItem className={classes.promiseListItem}>
                        <h3 className={classes.promiseSecondHeader}>We bring you easily understandable treatment information</h3>
                        <div className={classes.promiseDescription}>
                            Test test test
                        </div>
                    </ListItem>
                    <ListItem className={classes.promiseListItem}>
                        <h3 className={classes.promiseSecondHeader}>Another Promise we intend to keep</h3>
                        <div className={classes.promiseDescription}>
                            Test test test
                        </div>
                    </ListItem>
                </List>
                </div>
            </Grid>
        )
    }
}
Promises = withStyles(stylesheet)(Promises)
export default Promises;