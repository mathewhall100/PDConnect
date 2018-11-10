import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startCase } from 'lodash';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal';
import HelpIcon from '@material-ui/icons/Help';
import DoneIcon from '@material-ui/icons/Done';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';


import { activity_level } from '../constants';
import { relative } from 'upath';
//import { submitUserMeds} from '../actions/UserAboutLifeAction'


const styles = theme => ({
    root: {
        paddingTop: "20px",
    },
    componentBox: {
        maxWidth: "800px",
        height: "auto",
        margin: "20px auto",
        border: "1px solid lightgrey",
        padding: "30px 30px 30px 30px"
    },
    titleStyle: {
        textAlign: "center",
        lineHeight: "40px"
    },
    textStyle: {
        marginTop: '40px',
        marginBottom: '40px'
    },
    subtitleStyle: {
        lineHeight: "30px"
    },
    medText: {
        fontSize: "20px",
        position: "relative",
        top: "10px"
    },
    medGeneric: {
        fontSize: "18px", 
        fontWeight: "bold"
    }, 
    medTrade: {
        paddingLeft: "10px",
        lineHeight: "30px",
        fontSize: "18px"
    },
    medSelectBtn: {
        width: "440px",
        height: "30px",
        backgroundColor: "white",
        border: "2px solid grey",
        borderRadius: "5px",
        fontSize: "16px",
        '&:hover': {
            backgroundColor: "lightgrey",
        },
    },
    medSelectBtn2: {
        float: "right",
        width: "50px",
        height: "60px",
        // marginLeft: "25px",
        backgroundColor: "white",
        border: "4px solid grey",
        borderRadius: "50%",
        position: "relative",
        top: "-15px",
        // fontSize: "14px",
         '&:hover': {
             backgroundColor: "white",
         },
    },
    hr: {
        height: "1px", 
        color:  "lightgrey",
        opacity: 0.5
    },
    labelText: {
        fontSize: "18px"
    },
    inputLabel: {
        fontSize: "18px",
        color: "black"
    },
    iconBtn: {
        float: "right",
        marginTop: "-7px",
        '&:hover': {
            backgroundColor: "white",
        },
    },
    iconHover: {
        fontSize: "28px",
        '&:hover': {
            color: "darkblue",
        },
    },
    selectLabel: {
        fontSize: "20px",
        fontWeight: "bold"
    },
    doneIcon: {
        fontSize: "48px", 
        color: "green", 
        padding: 0,
        margin: -6
    },
    doneOutlineIcon: {
        fontSize: "36px",
        color: "#eeeeee",
        '&:hover': {
            color: "green"
        },
    },
    errorText: {
        fontSize: "15px", 
        color: "red", 
        position: "relative", 
        left: "-45px", 
        top: "32px"
    },
    basicBtn: {
        width: "150px",
        height: "30px",
        marginRight: "25px",
        backgroundColor: "white",
        border: "2px solid grey",
        borderRadius: "10px",
        fontSize: "14px",
        '&:hover': {
            backgroundColor: "lightgrey",
        },
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 40,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },

});


 class UserMeds extends Component {

    state = {
        medsArray: [],
        medsSelected: [],
        noMeds: false,
        open : false,
        modalTitle : '',
        modalDescription : '',
        redirect: false,
        redirectAddress : 'test',
    }  

    handleSubmit = () => {
        console.log("submit - meds:, ", this.state.medsArray)

        // this.submitUserMeds(this.state.medsArray)
        // this.setState({
        //     redirect: true
        // })
       
    }

    handleMedSelect = (index, name) => {
        console.log("handlemedselect2 : ", index,)
        let tempArray = this.state.medsSelected
        let tempMeds = this.state.medsArray
        tempArray[index] = !tempArray[index]
        tempMeds.push(name)
        this.setState({
            noMeds: false,
            medsSelected: tempArray, 
            medsArray: tempMeds
        })
    }

    handleNoMedSelect = () => {
        console.log('NoMedsSelected')
        this.setState({
            noMeds: true,
            medsSelected: [],
            medsArray: []}) 
    }

    handleClearForm() {
        console.log("clear form")
        this.setState({
            noMeds: false,
            medsSelected: [],
            medsArray: []
        })
    }

    handleBack = () => {
        this.setState({
            redirect: true,
            redirectAddress: '/'
        })
    }

    handleInfoClick = (info) => {
        console.log(info)
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

    handleOpen = (modalItem) => { 
        console.log(modalItem);
         this.setState({ 
             open: true, 
             modalTitle : modalItem.title,
             modalDescription : modalItem.description
        });
     };

     handleClose = () => {
         this.setState({ open: false });
     };


    render() {

        const { handleSubmit, pristine, submitting, classes } = this.props
        const { redirect, redirectAddress, medsSelected, noMeds } = this.state

        const medGroups = [
            {class: "dopamine agonist", target: "motor symptoms"},
            {class: "carbidopa/levodopa", target: "motor symptoms"},
            {class: "other", target: "motor symptoms"}
        ]

        const meds= [
            {generic: "Ropinirole", trade: ["Requip", "Ralnea", "Adartrel"], class: "dopamine agonist", description: ""},
            {generic: "Pramipixole", trade: ["Mirapex"], class: "dopamine agonist", description: ""},
            {generic: "Rotigotine", trade: ["Neupro"], class: "dopamine agonist", description: ""},

            {generic: "Sinemet", trade: [], class: "carbidopa/levodopa", description: ""},
            {generic: "Sinemet CR",  trade: [], class: "carbidopa/levodopa", description: ""},
            {generic: "Rytary",  trade: [], class: "carbidopa/levodopa", description: ""},
            {generic: "Doupa",  trade: [], class: "carbidopa/levodopa", description: ""},

            {generic: "Amantadine", trade: ["Amantadine"], class: "other", description: ""}
        ]


        if (redirect) { 
            const url = `${redirectAddress}`;
            console.log("redirect to .. " + url);
            return<Redirect to={url} />;
        }

        const TopTitle = (props) => {
            return (
                <div>
                    <h1 className={classes.titleStyle}>{props.title}</h1>
                    <br />
                    <hr className={classes.hr} />
                    <br />

                </div>
            )
        }

        const BottomNav= (props) => {
            return (
                <div>
                    <br />
                    <br />
                    <Button type="submit" color="primary" className={classes.basicBtn} onClick={() => this.handleSubmit()}>NEXT</Button>
                    <Button type="button" color="primary" className={classes.basicBtn} onClick={() => this.handleClearForm()}>CLEAR</Button>  
                    <br />
                </div> 
            )
        }

        return (
            <section className={classes.root}>
                <div className={classes.componentBox}>
                    
                    <TopTitle title="Congratulations, you're half way through! Now tell us about the medications you take for Parkinson Disease. " />

                    <br />
                    <Grid container spacing={24}>
                    <Grid item xs={12} sm={8}>
                        <div className={classes.medGeneric}>I take no medications for Parkinson disease: </div>
                        <br />
                    </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button type="button" className={classes.medSelectBtn2} style={{backgroundColor: noMeds ? "green" : "white"}} onClick={() => this.handleNoMedSelect()}>
                            </Button>
                        </Grid>
                    </Grid>

                    {medGroups.map((group, index) => {

                        return (
                            <div key={index}>

                                <hr className={classes.hr}/>
                                <p><em>{startCase(group.class)} preparations for {group.target}</em></p>
                                <br />

                                {meds.filter(med => med.class === group.class).map((med, index) => {
                                    const medIndex = meds.findIndex(medication => medication.generic == med.generic)

                                   

                                    return (
                                        
                                        <div key={index}>
                                            <Grid container spacing={24}>
                                                <Grid item xs={12} sm={8}>
                                                        <span className={classes.medGeneric}>{med.generic}</span>  
                                                        <Button className={classes.iconBtn} onClick={() => this.handleOpen({title: med.generic, description: med.description}) }>
                                                            <HelpIcon color="primary" className={classes.iconHover}/>
                                                         </Button>
                                                        <br />
                                                        {med.trade.length > 0 && <span className={classes.medTrade}> Examples: 
                                                            {med.trade.map((trade, index) => {
                                                                return (
                                                                    <span className={classes.medTrade}>
                                                                       {trade}
                                                                        {index === med.trade.length-1 ? "" : ", "} 

                                                                    </span> 
                                                                )
                                                             }) }
                                                        </span> }
                                                </Grid>
                                                <Grid item xs={12} sm={4}>
                                                        <Button type="button" className={classes.medSelectBtn2} onClick={() => this.handleMedSelect(medIndex, med.generic)}>
                                                            {medsSelected[medIndex] && <DoneIcon className={classes.doneIcon} /> }
                                                            {!medsSelected[medIndex] && <DoneOutlineIcon className={classes.doneOutlineIcon} /> }
                                                        </Button>
                                                </Grid>
                                            </Grid>
                                            <br />
                                        </div>
                                    )
                                }) }
                            </div>
                        )
                        
                }) }
                    


                <BottomNav />

                </div>

                <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <div style={this.getModalStyle()}  className={classes.paper}>
                            <Typography variant="h6" id="modal-title">
                                {this.state.modalTitle}
                            </Typography>
                            <hr />
                            <Typography variant="subtitle1" id="simple-modal-description">
                                {this.state.modalDescription}
                            </Typography>
                        </div>
                </Modal>

            </section>

        );
    }
}


// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ submitUserMeds }, dispatch);
// }


UserMeds = withRouter(UserMeds)
UserMeds = withStyles(styles)(UserMeds)
// UserMeds = connect(null, mapDispatchToProps)(UserMeds)
export default UserMeds
