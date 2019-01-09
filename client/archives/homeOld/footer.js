import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { home2Stylesheet } from '../../styles';
import Grid from '@material-ui/core/Grid';
import Logo from '../../images/PDC_logo_square.png'
class Footer extends Component {
    render(){
        const { classes, theme } = this.props;

        return(
            <footer className={classes.footerContainer}>
                <Grid container>
                    <Grid xs={12}>
                        <a href="/"><img src={Logo} className={classes.footerLogo} alt='PD Connect' /></a>
                    </Grid>
                </Grid>
                <div>
                    © 2018 PD Connect ds. All Rights Reserved.
                </div>
            </footer>
        )
    }
}


Footer = withStyles(home2Stylesheet, { withTheme: true })(Footer)
export default Footer;