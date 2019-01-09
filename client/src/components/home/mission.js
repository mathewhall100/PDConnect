import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HomepageButton from './homepageButton'

const styles = () => ({
    missionText: {
        fontSize: "22px",
        textAlign: "justify",
    },
    highlightText: {
        fontSize: "26px", 
        fontWeight: "bold"
    },
    buttonPosn: {
        marginTop: "10px", 
        textAlign: "center"
    }
})

class Start extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Grid container spacing={24}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <div className={classes.missionText} >
                        <span className={classes.highlightText}>Our aim </span>is to connect patients with Parkinson disease, their families and carers, to personalised resources that help them live a healthier life. First take our short survey to tell us a bit about youself and your Parkinson disease, then our PDConnect algorithm will match you to knowledge of current and upcoming treatments, clinical trials recruiting patients like you and focus groups that pay for your veiws and opinions.  
                    </div>
                    <br />
                    <div className={classes.buttonPosn} >
                        <HomepageButton type="link" targetUrl="/" text="LEARN MORE" />
                    </div>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        )
    }
}
Start = withStyles(styles)(Start)
export default Start;