import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { userStylesheet } from '../../styles';

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
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <h6>{modalTitle}</h6>
                        <div id="simple-modal-description">
                            {modalContent}
                        </div>
                        <Button className={classes.stepperButton} onClick={this.handleClose}>close</Button>
                    </div>
                </Modal>
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