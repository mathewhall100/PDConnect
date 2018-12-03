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
            <div>
                <div className={classes.homepageContainer} style={{ background: '#2F5597', minHeight : '600px', padding: "0 40px 0 40px"}}>
                    <br />
                    <div className={classes.homeSubTitle} style={{color: "white", textAlign: "center", padding: "20px 0 10px 0"}}>
                        Our promise
                    </div> 
                    <br />

                    <Grid container spacing={24} className={classes.promiseRowContainer} >
                        <Grid item md={4} lg={4} xs={12} className={classes.promiseCube}>
                            <div className={classes.wow} style={{ transition: 'all .7s ease'}}>
                                <div className={classes.promiseTitle}>Your data is secure</div>
                                <div className={classes.promiseIconContainer}>
                                    <img className={classes.promiseIcon} src={secureIcon} alt="secure data" />
                                </div>
                                <div className={classes.promiseDescription}>We treat security very seriously and any personal health information you give us is stored in accordance with data protection law, the Health Information Portability and Accountability Act (HIPAA) and on secure servers.</div>
                            </div>
                        </Grid>
                        <Grid item md={4} lg={4} xs={12} className={classes.promiseCube}>
                            <div className={classes.wow} style={{ transition: 'all .7s ease' }}>
                                <div className={classes.promiseTitle}>Your Data is private</div>
                                <div className={classes.promiseIconContainer}>
                                    <img className={classes.promiseIcon} src={noSellIcon} alt="we do not sell data" />
                                </div>
                                <div className={classes.promiseDescription}>We take yoru data privacy very seriously and we will never share or sell your data to any third party without asking you first.</div>
                            </div>
                        </Grid>
                        <Grid item md={4} lg={4} xs={12} className={classes.promiseCube}>
                            <div className={classes.wow} style={{ transition: 'all .7s ease' }}>
                                <div className={classes.promiseTitle}>Our information is up to date</div>
                                <div className={classes.promiseIconContainer}>
                                    <img className={classes.promiseIcon} src={treatmentInfoIcon} alt="secure data" />
                                </div>
                                <div className={classes.promiseDescription}>Our website aims to provide you with the latest and most up-to-date information about Parkinson treatments, clinical trials and other knowledge areas and we will make every effort to ensure the information we provide to you is accurate and regularly audited and updated. </div>
                            </div>
                        </Grid>
                    </Grid>

                    {/* <Grid container spacing={24} className={classes.promiseRowContainer}>
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
                    </Grid> */}

                </div>
                <br />
                <br />
                <br />
            </div>

        )
    }
}
Promises = withStyles(home2Stylesheet)(Promises)
export default Promises;