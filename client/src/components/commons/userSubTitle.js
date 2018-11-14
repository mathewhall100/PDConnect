import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


import {userStylesheet } from '../../styles';


    class SubTitle extends Component  {
        render() {
            const { classes, subtitle } = this.props
            return (
                <div>
                    <h1 className={classes.subtitle}>{subtitle}</h1>
                    <hr className={classes.hr} />
                </div>
            )
        }
    }

SubTitle = withStyles(userStylesheet)(SubTitle)
export default SubTitle