import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { home2Stylesheet } from '../../styles';
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
            <div className={classes.homepageContainer} style={{ background: '#2F5597', minHeight : '800px'}}>

                <Grid container>
                    <Grid item md={1} lg={1} xs={1}></Grid>
                    <Grid item md={10} lg={10} xs={10} >
                        <div className={classes.HeroWhiteTitle}>
                            Features
                        </div>
                        <Grid container className={classes.promiseRowContainer}>
                            <Grid item md={4} lg={4} xs={12} className={classes.promiseCube}>
                                <div className={classes.wow} style={{ transition: 'all .7s ease'}}>
                                    <div className={classes.promiseTitle}>Secure Application</div>
                                    <div className={classes.promiseIconContainer}>
                                        <img className={classes.promiseIcon} src={secureIcon} alt="secure data" />
                                    </div>
                                    <div className={classes.promiseDescription}>Your personal information is safely secured with us with our SSL that linked between a web server and browser. </div>
                                </div>
                            </Grid>
                            <Grid item md={4} lg={4} xs={12} className={classes.promiseCube}>
                                <div className={classes.wow} style={{ transition: 'all .7s ease' }}>
                                    <div className={classes.promiseTitle}>No Data Selling</div>
                                    <div className={classes.promiseIconContainer}>
                                        <img className={classes.promiseIcon} src={noSellIcon} alt="we do not sell data" />
                                    </div>
                                    <div className={classes.promiseDescription}>We do not share or worse, sell your personal information for any reason.</div>
                                </div>
                            </Grid>
                            <Grid item md={4} lg={4} xs={12} className={classes.promiseCube}>
                                <div className={classes.wow} style={{ transition: 'all .7s ease' }}>
                                    <div className={classes.promiseTitle}>Treatment Information</div>
                                    <div className={classes.promiseIconContainer}>
                                        <img className={classes.promiseIcon} src={treatmentInfoIcon} alt="secure data" />
                                    </div>
                                    <div className={classes.promiseDescription}>Providing you the easy to read and understand treatment information with as detailed as possible.</div>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.promiseRowContainer}>
                            <Grid item md={4} lg={4} xs={12} className={classes.promiseCube}>
                                <div className={classes.wow} style={{ transition: 'all .7s ease' }}>
                                    <div className={classes.promiseTitle}>Up-to-date Treatment</div>
                                    <div className={classes.promiseIconContainer}>
                                        <img className={classes.promiseIcon} src={checkIcon} alt="up to date treatment" />
                                    </div>
                                    <div className={classes.promiseDescription}>Constant updating the list of treatment for Parkinsons disease.</div>
                                </div>
                            </Grid>
                            <Grid item md={4} lg={4} xs={12} className={classes.promiseCube}>
                                <div className={classes.wow} style={{ transition: 'all .7s ease' }}>
                                    <div className={classes.promiseTitle}>Reminder</div>
                                    <div className={classes.promiseIconContainer}>
                                        <img className={classes.promiseIcon} src={reminderIcon} alt="Reminder " />
                                    </div>
                                    <div className={classes.promiseDescription}>We want you to get the most out of this application, therefore, we will remind you to update your Parkinsons symptoms and side effects after a duration.</div>
                                </div>
                            </Grid>
                            <Grid item md={4} lg={4} xs={12} className={classes.promiseCube}>
                                <div className={classes.wow} style={{ transition: 'all .7s ease' }}>
                                    <div className={classes.promiseTitle}>Mobile Notification</div>
                                    <div className={classes.promiseIconContainer}>
                                        <img className={classes.promiseIcon} src={notificationIcon} alt="Push Notification" />
                                    </div>
                                    <div className={classes.promiseDescription}>Notify you when a suitable treatment or clinical trial can be apply to you.</div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </div>

        )
    }
}
Promises = withStyles(home2Stylesheet)(Promises)
export default Promises;