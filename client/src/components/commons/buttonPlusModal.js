import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CancelIcon from '@material-ui/icons/Cancel'
import Button from '@material-ui/core/Button'
import HelpIcon from '@material-ui/icons/Help';
import { PRIMARY_COLOR, HELP_BUTTON_DEFAULT_COLOR, HELP_BUTTON_ACTIVE_COLOR } from '../../themes.js'

const styles = () => ({
    helpButton: {
        position: "relative",
        top: "-6px",
        margin: 0,
        padding: 0,
        backgroundColor: "white",
        '&:hover': {
            backgroundColor: "white"
        },
        '&:focus': {outline: 0}
    },
    profileTermsButton: {
        width: '60px',
        padding: '5px 10px 5px 10px',
        margin: "10px",
        color: 'black',
        backgroundColor: "#EEE",
        fontWeight: "bold",
        fontSize: "14px",
        border: "2px solid grey",
        borderRadius: '3px',
        '&:hover': {
            cursor : 'pointer',
            color: PRIMARY_COLOR,
            backgroundColor: "lightgrey",
            border: "2px solid",
            borderColor: PRIMARY_COLOR,
            fontWeight: "bold",
        }
    },
    helpIcon : {
        fontSize: "28px",
        color: HELP_BUTTON_DEFAULT_COLOR,
        '&:hover': {
            color: HELP_BUTTON_ACTIVE_COLOR,
            backgroundColor: 'initial !important',
        },
    },
    label: {
        float: "right"
    },    
    cancelIcon: {
        color: 'red', 
        cursor: 'pointer', 
        fontSize: "35px", 
        position: "relative", 
        top: "-18px", 
        left: "18px"
    }
})


class BtnPlusModal extends Component {

    state = {
        open: false,
    };

    componentDidMount() {
        if (this.props.btnType === "none")  {this.handleOpen()}
    }

    handleOpen = () => { this.setState({ open: true}) }

    handleClose = () => { this.setState({ open: false }) }

    getTitleStyle = () => {
        return {
            fontSize: "22px",
            fontWeight: "bold",
            color: this.props.modalWarning ? "red" : "grey"
        }
    }

    render() {
        const { classes, btnType, buttonLabel, modalTitle, modalText, modalImages} = this.props;

        const SelectButton = () => {
            switch (btnType) {
                case "help":
                    return <Button className={classes.helpButton} onClick={this.handleOpen}> <HelpIcon className={classes.helpIcon}/></Button>
                case "terms": 
                    return <span className={classes.profileTermsButton} onClick={this.handleOpen}>{buttonLabel}</span>
                default: 
                    return null;
            }
        }

        return (
            <React.Fragment>

                <SelectButton />

                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="scroll-dialog-title">

                    <DialogTitle id="scroll-dialog-title">
                        <label className={classes.label}><CancelIcon className={classes.cancelIcon} onClick={this.handleClose} /></label>
                        <span style={this.getTitleStyle()}>{modalTitle}</span>
                        <hr />
                    </DialogTitle>

                    <DialogContent>
                            {modalText}
                            {modalImages ? 
                                modalImages.map((img, idx) => {
                                    return (
                                        <div key={idx}>
                                            <br />
                                            <img src={img} height="200px" alt={`${img} packaging`}/>
                                            <br />
                                        </div>
                                    )
                                }) 
                            : null }
                    </DialogContent>
                    
                </Dialog>

            </React.Fragment>
        );
    }
}

BtnPlusModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

BtnPlusModal = withStyles(styles)(BtnPlusModal);
export default BtnPlusModal;
