import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { home2Stylesheet } from '../../styles';

class Footer extends Component {
    render() {
        const { classes } = this.props;

        return (
            <footer className={classes.footerContainer}>
                <div className="container">
                    © 2017-2018 PD Connect. All Rights Reserved.
                </div>
            </footer>
        )
    }
}


Footer = withStyles(home2Stylesheet, { withTheme: true })(Footer)
export default Footer;