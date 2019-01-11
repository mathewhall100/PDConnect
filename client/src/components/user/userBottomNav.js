import React, { Component } from 'react';
import { withRouter, } from 'react-router-dom';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import {submitReview } from '../../actions/index.js'
import UserNavButton from '../buttons/userNavButton'

const styles = () => ({
    navFloatRight: {
        float: "right",
    },
    link: {
        textDecoration: "none !important"
    }
})

class BottomNav extends Component  {
    
    state = {
        skipBtn: false
    }

    componentDidMount() {
        if (window.location.pathname === '/user/user_account') {this.setState({skipBtn: true}) }
    }

    handleRedirect = () => {
        if (this.props.review.redirect) {
            this.props.submitReview(false);
            this.props.history.push('/user/user_review');
        } else {
            this.props.history.push(this.props.stepper.prevPage)
        }
    }


    render() {

        const { classes, review : { redirect }} = this.props;
        const { skipBtn } = this.state

        const SecondButton = () => 
            <span className={classes.navFloatRight}>
                <Link to={"/services"} className={classes.link}>
                        <UserNavButton type="button" width="100%" text="SKIP FOR NOW" handleBtn={this.handleRedirect}/>
                </Link>
            </span>

        return (
            <React.Fragment>

                <br /><hr className={classes.hr} /><br />

                { !redirect && <UserNavButton type="button" width="20%" text="BACK" handleBtn={this.handleRedirect} /> }

                { skipBtn && <SecondButton /> }

            </React.Fragment>
        )
    }
}


function mapStatsToProps(state) {
    console.log(state);
    return {
        stepper: state.stepper,
        review :state.review,
    }
}

BottomNav = withStyles(styles)(BottomNav);
BottomNav = withRouter(BottomNav)
export default connect(mapStatsToProps, {submitReview})(BottomNav);