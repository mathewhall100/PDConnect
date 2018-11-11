import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { stylesheet } from '../../styles';

class Footer extends Component {
    render(){
        const { classes, theme } = this.props;

        return(
            <footer className={classes.footerContainer}>
                <div class="container">
                    © 2018 PD Connect. All Rights Reserved. 
                </div>
            </footer>
        )
    }
}


Footer = withStyles(stylesheet, { withTheme: true })(Footer)
export default Footer;