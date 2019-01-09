import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HomepageSubtitle from './homepageSubtitle'
import Avatar from '@material-ui/core/Avatar';
import physician1Img from '../../images/avatar/physician1.png';
import physician2Img from '../../images/avatar/physician2.png';
import patient1Img from '../../images/avatar/patient1.png';
import patient2Img from '../../images/avatar/patient2.png';

const styles = () => ({
    bigAvatar: {
        width: '100px',
        height: '100px',
    },
    avatarContainer: {
        textAlign: '-webkit-center',
    },
    nameStyle: {
        margin: "10px",
        fontSize: "22px",
        fontWeight: "bold"
    },
    roleStyle: {
        margin: "10px",
        fontSize: "18px",
        fontWeight: "bold"
    },

})


class Endorse extends Component {

    render() {
        const { classes } = this.props;

        const RenderEndorse = props => 
            <Grid item  xs={12} md={3} lg={3}>
                <div className={classes.avatarContainer}>
                    <Avatar className={classes.bigAvatar} alt={props.altTxt} src={props.src} />
                    <h2 className={classes.nameStyle}>{props.name}</h2>
                    <p className={classes.roleStyle}>{props.role}</p>
                    <p>{props.text} </p>
                </div>
            </Grid>

            const endorsements = [
                { altTxt: "neurologist endorsement", src: physician1Img, name: "Dr. G. Reese MD", role: "Neurologist", text: "'A great way to keep patients in the loop in our fast moving field of medicine.'"},
                { altTxt: "patient endorsement", src: physician2Img, name: "Sarah James", role: "Parkinson Patient", text: "'The app made me aware of more than one treatment suitable for me and, which after discussion with my doctor, I am now taking.'" },
                { altTxt: "patient endorsement", src: patient1Img, name: "Daryl Reid", role: "Parkinson Patient", text: "'I have been paid for two focus groups so far and I know the app is constantly on the lookout for more that I can participate in.'" },
                {altTxt: "carer endorsement", src: patient2Img, name: "Johnnie Watson", role: "Carer", text: "'This app has really helped my aunt and I learn about her Parkinson disease and have more meaningful discussions with her doctors.'" }
            ]

        return (
            <Grid container spacing={24}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10} >
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <HomepageSubtitle text="Endorsements" />
                            <br />
                        </Grid>

                        {endorsements.map((endorse, idx) => <RenderEndorse key={idx} altTxt={endorse.altTxt} src={endorse.src} name={endorse.name} role={endorse.role} text={endorse.text} /> )}

                    </Grid>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        )
    }
}
Endorse = withStyles(styles)(Endorse)
export default Endorse