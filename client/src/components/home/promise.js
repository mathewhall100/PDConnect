import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { stylesheet } from '../../styles';

class Promises extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div style={{position: "relative", height: "auto"}}>
                <div className={classes.parallaxPromise}></div>
                <Grid className={classes.promiseContainer}>
                    <div className={classes.card}>
                        <div className={classes.content}>
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
                    </div>
                </Grid>
            </div>
            
        )
    }
}
Promises = withStyles(stylesheet)(Promises)
export default Promises;