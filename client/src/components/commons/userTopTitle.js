import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


import {userStylesheet } from '../../styles';


    class TopTitle extends Component  {
        render() {
            const { classes, title } = this.props
            return (
                <div>
                    <h1 className={classes.title}>{title}</h1>
                    <hr className={classes.hr} />
                </div>
            )
        }
    }

TopTitle = withStyles(userStylesheet)(TopTitle)
export default TopTitle