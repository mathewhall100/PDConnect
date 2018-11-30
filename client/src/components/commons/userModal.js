import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import ClearIcon from '@material-ui/icons/Clear'
import {userStylesheet } from '../../styles';

class UserModal extends Component  {

    state = {
        modalOpen: true,
        modalWarning: false,
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        this.setState({modalOpen: nextProps.modalOpen})
    }

    getModalStyle = () => {
        const top = 50;
        const left = 50;
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

     handleClose = () => {
         this.setState({ modalOpen: false }, () => {
             console.log('set modal to false')
         });
     };

    render() {

        const { classes, modalTitle, modalText, modalWarning } = this.props
        const { modalOpen } = this.state

        return (
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={modalOpen}
            onClose={this.handleClose}
        >
            <div style={this.getModalStyle()}  className={classes.paper}>
                    <label style={{ float: 'right' }}><ClearIcon style={{ color: 'red', cursor: 'pointer' }} onClick={this.handleClose} /></label>
                <Typography variant="h6" id="modal-title" style={{color: modalWarning ? "red" : "grey"}}>
                    {modalTitle}
                </Typography>
                <hr />
                <Typography variant="subtitle1" id="simple-modal-description">
                    {modalText}
                </Typography>
            </div>
    </Modal>
        )
    }
}

UserModal = withStyles(userStylesheet)(UserModal)
export default UserModal
