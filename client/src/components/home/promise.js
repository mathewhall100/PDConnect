import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { stylesheet } from '../../styles';
import noSellIcon from '../../images/avatar/no-coin.png';
import secureIcon from '../../images/avatar/secure.png';
import checkIcon from '../../images/avatar/check.png';
import treatmentInfoIcon from '../../images/avatar/healtcare2.png';
import reminderIcon from '../../images/avatar/reminder.png';
import notificationIcon from '../../images/avatar/pushNotification.png';

class Promises extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div style={{position: "relative", height: "auto"}}>
                <div className={classes.parallaxPromise}></div>
                <Grid item xs={12} className={classes.promiseHeaderContainer}>
                    <h2 className={classes.homepageHeader}>PD Connect Features</h2>
                </Grid>
                <Grid container className={classes.promiseContainer1}>
                    
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3} className={classes.promiseCube}>
                        <div className={classes.promiseTitle}>Secure Web/Mobile Application</div>
                        <div className={classes.promiseIconContainer}>
                        <img className={classes.promiseIcon} src={secureIcon} alt="secure data" />
                        </div>
                        <div className={classes.promiseDescription}>Your personal information is safely secured with us with our SSL that linked between a web server and browser. </div>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3} className={classes.promiseCube}>
                        <div className={classes.promiseTitle}>No Data Selling</div>
                        <div className={classes.promiseIconContainer}>
                            <img className={classes.promiseIcon} src={noSellIcon} alt="we do not sell data" />
                        </div>
                        <div className={classes.promiseDescription}>We do not share or worse, sell your personal information for any reason.</div>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3} className={classes.promiseCube}>
                        <div className={classes.promiseTitle}>Treatment Information</div>
                        <div className={classes.promiseIconContainer}>
                            <img className={classes.promiseIcon} src={treatmentInfoIcon} alt="secure data" />
                        </div>
                        <div className={classes.promiseDescription}>Providing you the easy to read and understand treatment information with as detailed as possible.</div>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                <Grid container className={classes.promiseContainer2}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3} className={classes.promiseCube}>
                        <div className={classes.promiseTitle}>Up-to-date Treatment</div>
                        <div className={classes.promiseIconContainer}>
                            <img className={classes.promiseIcon} src={checkIcon} alt="up to date treatment" />
                        </div>
                        <div className={classes.promiseDescription}>Constant updating the list of treatment for Parkinsons disease.</div>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3} className={classes.promiseCube}>
                        <div className={classes.promiseTitle}>Reminder</div>
                        <div className={classes.promiseIconContainer}>
                            <img className={classes.promiseIcon} src={reminderIcon} alt="Reminder " />
                        </div>
                        <div className={classes.promiseDescription}>We want to get the most out of this application, therefore, we will remind you to update your Parkinsons symptoms and side effects after a duration.</div>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3} className={classes.promiseCube}>
                        <div className={classes.promiseTitle}>Mobile Notification</div>
                        <div className={classes.promiseIconContainer}>
                            <img className={classes.promiseIcon} src={notificationIcon} alt="Push Notification" />
                        </div>
                        <div className={classes.promiseDescription}>Notify you when a suitable treatment or clinical trial can be apply to you.</div>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </div>
            
        )
    }
}
Promises = withStyles(stylesheet)(Promises)
export default Promises;