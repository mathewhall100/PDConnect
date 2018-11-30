import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { userStylesheet } from '../../styles';
import ClearIcon from '@material-ui/icons/Clear'

function rand() {
    return Math.round(Math.random() * 5) - 3;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

class SimpleModal extends React.Component {
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
                        <label style={{ float: 'right' }}><ClearIcon style={{ color: 'red', cursor: 'pointer' }} onClick={this.handleClose} /></label>
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

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(userStylesheet)(SimpleModal);

export default SimpleModalWrapped;