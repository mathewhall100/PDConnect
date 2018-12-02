import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import CancelIcon from '@material-ui/icons/Cancel'
import {userStylesheet } from '../../styles';
import Sinemet from '../../images/medication/sinemet.jpg'
import sinemet_cr from '../../images/medication/sinemet_cr.jpg'
import parcopa from '../../images/medication/parcopa.jpg'

class UserMedsModal extends Component  {

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

        const { classes, modalTitle, modalText, modalImages, modalWarning } = this.props
        const { modalOpen } = this.state

        return (
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={modalOpen}
            onClose={this.handleClose}
        >
            <div style={this.getModalStyle()}  className={classes.paper}>
                    <label style={{ float: 'right' }}><CancelIcon style={{ color: 'red', cursor: 'pointer', fontSize: "35px", position: "relative", top: "-18px", left: "18px"}} onClick={this.handleClose} /> </label>
                <Typography variant="h6" id="modal-title" style={{color: modalWarning ? "red" : "grey"}}>
                    {modalTitle}
                </Typography>
                <hr />
                <Typography variant="subtitle1" id="simple-modal-description">
                {modalImages ? 
                    modalImages.map((img, index) => {
                        return (
                            <div>
                                <br />
                                <img src={img} height="200px" alt={`${img} packaging`}/>
                                <br />
                            </div>
                        )
                    }) 
                    : null 
                }
                </Typography>
            </div>
    </Modal>
        )
    }
}

UserMedsModal = withStyles(userStylesheet)(UserMedsModal)
export default UserMedsModal