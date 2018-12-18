import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import { home2Stylesheet } from '../../styles';
class Start extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.homepageContainer}>
                <Grid container >

                    <Grid item xs={1}></Grid>

                    <Grid item xs={10}>
                        <br />
                        <br />
                        {/* <div className={classes.homeSubTitle}>
                            Aim
                        </div> */}
                        <br />
                        <div className={classes.description} style={{textAlign: "justify"}}>
                          <span style={{fontSize: "24px", fontWeight: "bold"}}>Our aim </span>is to connect patients with Parkinson disease, their families and carers, to personalised resources that help them live a healthier, fuller life. First take our short survey to tell us a bit about youself and your parkinson disease, then our PDConnect algorithm will match you to knowledge of current and upcoming treatments for you, clinical trials recruiting patients like you and to focus groups that pay for your veiws and opinions.  
                        </div>
                        <br />
                            <div className={classes.buttonContainer} style={{textAlign: "center"}}>
                                <Button variant='outlined' className={classes.homepageButton} onClick={() => this.handleConnectToday()}>Find out more </Button>
                            </div>
                        <br />
                        <br />
                    </Grid>

                    <Grid item xs={1}></Grid>

                </Grid>
            </div>
        )
    }
}
Start = withStyles(home2Stylesheet)(Start)
export default Start;