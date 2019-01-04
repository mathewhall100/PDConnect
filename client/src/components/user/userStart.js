import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Modal from '../commons/modal';
import { userStylesheet, PRIMARY_COLOR } from '../../styles';
import { updateStepperCount } from '../../actions/index.js'
import PrivacyPolicy from '../commons/privacyPolicy'


class UserStart extends Component {

    state = {
        redirectAddress: '/user/user_about'
    }

    componentDidMount() {
        window.scroll(0, 0)
        this.props.updateStepperCount()
    }

    handleGo() {
        this.props.history.push(this.state.redirectAddress)
    }

    handleBack() {
        this.props.history.push('/')
    }

    handleModalOpen = (title, text) => {
        console.log(title);
         this.setState({
             modalTitle : title,
             modalText : text,
             modalOpen: true
        });
     };


    render() {

        const { classes } = this.props

        return (
            <div className={classes.componentBox} style={{marginTop: "75px"}}>
                <span  style={{fontWeight: "bold", fontSize: "23px"}}>First, however, we need to know a bit about you, how Parkinson disease affects you, and about your treatment.</span>
                <br />
                <br />
                <p>This is important as it allows us so to tailor the information and services we provide specifically to you and to be of most relevance to you.</p>

                <br />

                <div style={{border: "2px solid", borderColor: PRIMARY_COLOR, borderRadius: "4px", backgroundColor: "#eeeeee", padding: "20px", textAlign: "justify"}}>
                    <p className={classes.stepperSubtitle} style={{fontWeight: "bold", textAlign: "center"}}>Important message!</p>
                    <p>This site is intended for use by patients with Parkinson disease, their family and carers and the following pages will guide you through telling us about yourself, about how Parkinson disease affects you and about your treatment.
                        <span style={{fontWeight: "bold"}}> We take your privacy very seriously and will not sell or share any information about you without asking you first. </span>
                        <span style={{position: "relative", top: "10px"}}><br />
                            Read our
                            <Modal buttonLabel="Data Privacy Policy" modalTitle={<span>Privacy Policy<hr /></span>} modalContent={<PrivacyPolicy />} />
                        </span>
                    </p>
                </div>

                <br />
                <br />

                <div style={{textAlign: "center"}}>
                    <Button type="button" className={classes.startPageButton} style={{width: "50%"}} onClick={() => this.handleGo()}>Ok, Let's go</Button>
                    <br /><br />
                </div>

            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateStepperCount }, dispatch);
}


UserStart = withRouter(UserStart)
UserStart = withStyles(userStylesheet)(UserStart)
UserStart = connect(null, mapDispatchToProps)(UserStart)
export default UserStart