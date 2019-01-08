import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CancelIcon from '@material-ui/icons/Cancel'

import { userStylesheet } from '../../styles';


class SimpleModal extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        console.log("here");
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, buttonLabel, modalTitle, modalContent } = this.props;

        return (
            <span>
                <span className={classes.profileTermsButton} onClick={this.handleOpen}>{buttonLabel}</span>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="scroll-dialog-title"
                >
                    <DialogTitle id="scroll-dialog-title">
                        <label style={{ float: 'right' }}><CancelIcon style={{ color: 'red', cursor: 'pointer', fontSize: "35px", position: "relative", top: "-18px", left: "18px"}} onClick={this.handleClose} /></label>
                        <h6>{modalTitle}</h6>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {modalContent}
                        </DialogContentText>
                    </DialogContent>
                </Dialog>

            </span>
        );
    }
}

SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

const SimpleModalWrapped = withStyles(userStylesheet)(SimpleModal);

export default SimpleModalWrapped;

