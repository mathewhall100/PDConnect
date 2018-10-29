import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

class Home extends Component {
    state = {
        redirect : false
    }
    componentDidMount() {
    }

    DirectToUserInfo(){
        console.log("redirect to user info...")
        this.setState({
            redirect : true
        })
        
    }

    render() {
        const { classes } = this.props;
        const { redirect } = this.state;
        if (redirect) { 
            const url = `/user_info`;
            console.log("redirect to .. " + url);
            return<Redirect to={url} />;
        }
        return (
            <React.Fragment>
                <div>
                    <h1>Homepage</h1>
                    <Button variant='contained' color='primary' className={classes.button} onClick={() => this.DirectToUserInfo()}>
                        Get Started
                    </Button>
                </div>
            </React.Fragment>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    console.log("state in homepage : ", state);
    return state;
};

Home = connect(mapStateToProps)(Home)
Home = withStyles(styles)(Home)
export default Home;