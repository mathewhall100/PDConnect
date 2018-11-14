import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { stylesheet } from '../../styles';
import DoneIcon from '@material-ui/icons/Done';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import physician1Img  from '../../images/avatar/physician1.png';
import physician2Img from '../../images/avatar/physician2.png';
import patient1Img from '../../images/avatar/patient1.png';
import patient2Img from '../../images/avatar/patient2.png';
class Endorse extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Grid container spacing={24} className={classes.homepageFixedWidthContent}>
                <Grid item xs={12}>
                    <h2 className={classes.homepageHeader}>Endorsements</h2>
                    <hr />
                </Grid>
                
                <Grid item xs={3} className={classes.avatarContainer}>
                    <Avatar alt='User1' src={physician1Img} className={classes.bigAvatar} />
                    <h2>Gilbert	Reese</h2>
                    <p>Neurologist</p>
                    <p>A great way to learn about the new treatments out there from the mouth of patient! </p>
                </Grid>
                <Grid item xs={3} className={classes.avatarContainer}>
                    <Avatar alt='User1' src={physician2Img} className={classes.bigAvatar} />
                    <h2>Shaun Perez</h2>
                    <p>Pharmaceutical Rep</p>
                    <p>Platform to promote and introduce new treatments to the world, what not to like? </p>
                </Grid>
                <Grid item xs={3} className={classes.avatarContainer}>
                    <Avatar alt='User1' src={patient1Img} className={classes.bigAvatar} />
                    <h2>Daryl Reid</h2>
                    <p>Parkinsons Patient</p>
                    <p>Pin point my Parkinsons symptoms and recommened me treatments that I never tried before.</p>
                </Grid>
                <Grid item xs={3} className={classes.avatarContainer}>
                    <Avatar alt='User1' src={patient2Img} className={classes.bigAvatar} />
                    <h2>Johnnie	Watson</h2>
                    <p>Parkinsons Patient's Relatives</p>
                    <p>This is a great application to help my aunt finds the latest treatments information! </p>
                </Grid>
            </Grid>
        )
    }
}
Endorse = withStyles(stylesheet)(Endorse)
export default Endorse;