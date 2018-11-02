import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    AppBar : {
        backgroundColor: '#2D404b',
        height: '80px',
        position: 'relative',
        color: 'white',
        marginTop: '- 22px'
    },
    AppTitle: {
        paddingTop: '20px',
        textAlign: 'left',
        paddingLeft: '20px',
        marginTop : '0',
        '&$visited': {
            textDecoration: 'none',
        },
    }
});

class AppBar extends Component {
    render () {
        const { classes } = this.props
        return(
            <div className={classes.AppBar}>
                <h1 className={classes.AppTitle}><a href='/' style={{ textDecoration: 'none', color: 'white' }} >PD Navigator</a></h1>
            </div>
        )
    }
}

AppBar = withStyles(styles)(AppBar)
export default  AppBar
