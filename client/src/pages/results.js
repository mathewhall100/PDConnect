import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import BookmarkIcon from '@material-ui/icons/Bookmark'
import PaymentIcon from '@material-ui/icons/Payment'
import PrintIcon from '@material-ui/icons/Print'
import SendIcon from '@material-ui/icons/Send'
import ShareIcon from '@material-ui/icons/Share'

import ResultTabsWithBadge from '../components/commons/resultTabsWithBadge'
import ResultPrintButton from '../components/commons/resultPrintBtn'
import ResultMainSubTitle from '../components/commons/resultMainSubTitle'
import { resultStylesheet, PRIMARY_COLOR, SECONDARY_COLOR } from '../styles';


class Results extends Component {

    state = {
        tabSelected: 0,
        value: 0,
        treatmentResults: [],
        trialResults: [],
        redirect: false,
    }

    componentDidMount() {
        window.scroll(0,0)
        const locn = window.location.href
        const item = locn.substr(locn.lastIndexOf(':') + 1)
        let tab
        switch (item) {
            case "treatments":
                tab = 0
                break;
            case "trials":
                tab = 1
                break;
            case "focusgroups":
                tab = 2
                break;
            default: 
                tab = 0
        }
        this.setState({tabSelected: tab})
    }

    handleMoreInfo(type, item) {
        console.log(type, " ", item)
        const redirectAddress = `${type}:${item}`
        this.props.history.push(redirectAddress)
    }

    handleChange = (event, value) => {
        this.setState({ value });
      };

    handleChangeIndex = index => {
        this.setState({ value: index });
      };

    handleTabClick = (tab) => {
        console.log("tab: ", tab)
        this.setState({tabSelected: tab})
    }


    render() {

        const { treatmentResults, trialResults, handleSubmit, userCreds, classes } = this.props
        const { tabSelected } = this.state

        const RenderTreatments= () => {
            return (
                <div className={classes.resultContainer}>

                    <h1 className={classes.title}>Treatments to discuss with your doctor</h1>
                    <div>
                        {treatmentResults.map((treatment, index) => {
                            return (
                                <div key={index} className={classes.resultBox}>
                                    <Grid container spacing={8}>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <div className={classes.resultTextBox}>
                                                <div className={classes.resultTitle}>
                                                    {treatment.medication_name}
                                                </div>
                                                <div className={classes.resultText}>
                                                    {treatment.summary}
                                                </div>
                                            </div>
                                            <div style={{margin: "10px 20px 20px 20px"}}>
                                                <Button type="button" className={classes.button} onClick={() => this.handleMoreInfo("treatment", treatment.key)}>Find Out More</Button>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <iframe title={index} width="240" height="180" style={{marginTop: "26px", marginLeft: "20px"}}
                                                src={treatment.mediaLnk1}>
                                            </iframe>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={2}>
                                        <br />
                                            <Button className={classes.resultActionBtn} style={{marginTop: "0px", fontWeight: "bold"}}><BookmarkIcon style={{color: PRIMARY_COLOR}} /> &nbsp;&nbsp;Bookmark</Button><br />
                                            <Button className={classes.resultActionBtn} style={{fontWeight: "bold"}}><PaymentIcon style={{color: PRIMARY_COLOR}} /> &nbsp;&nbsp;Am I covered?</Button><br />
                                            <Button className={classes.resultActionBtn} style={{fontWeight: "bold"}}><PrintIcon style={{color: PRIMARY_COLOR}} /> &nbsp;&nbsp;Print</Button><br />
                                            <Button className={classes.resultActionBtn} style={{fontWeight: "bold"}}><SendIcon style={{color: PRIMARY_COLOR}} /> &nbsp;&nbsp;Email</Button><br />
                                            <Button className={classes.resultActionBtn} style={{marginBottom: "20px", fontWeight: "bold"}}><ShareIcon style={{color: PRIMARY_COLOR}} /> &nbsp;&nbsp;Share </Button><br />

                                        </Grid>
                                    </Grid>
                                </div>
                            )
                        }) }
                    </div>
                    <br />
                </div>
            )
        }


        const RenderTrials= () => {
            return (
                <div className={classes.resultContainer}>
                    <h1 className={classes.title}>Clinical Trials you might volunteer for</h1>
                    <div>
                        {trialResults.map((trial, index) => {
                            return (
                                <div key={index} className={classes.resultBox}>
                                    <Grid container spacing={8}>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <div className={classes.resultTextBox}>
                                                <div className={classes.resultTitle}>
                                                    {trial.trial_name}
                                                </div>
                                                <div className={classes.resultText}>
                                                    {trial.summary}
                                                </div>
                                            </div>
                                            <div style={{margin: "10px 20px 20px 20px"}}>
                                                <Button type="button" className={classes.button} onClick={() => this.handleMoreInfo("trial", trial.key)}>Find Out More</Button>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <iframe width="240" height="180" style={{marginTop: "26px", marginLeft: "20px"}}
                                                src={trial.mediaLnk1}>
                                            </iframe>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={2}>
                                        <br />
                                            <Button className={classes.resultActionBtn} style={{marginTop: "0px", fontWeight: "bold"}}><BookmarkIcon style={{color: PRIMARY_COLOR}} /> &nbsp;&nbsp;Bookmark</Button><br />
                                            <Button className={classes.resultActionBtn} style={{fontWeight: "bold"}}><PaymentIcon style={{color: PRIMARY_COLOR}} /> &nbsp;&nbsp;Contact trial</Button><br />
                                            <Button className={classes.resultActionBtn} style={{fontWeight: "bold"}}><PrintIcon style={{color: PRIMARY_COLOR}} /> &nbsp;&nbsp;Print</Button><br />
                                            <Button className={classes.resultActionBtn} style={{fontWeight: "bold"}}><SendIcon style={{color: PRIMARY_COLOR}} /> &nbsp;&nbsp;Email</Button><br />
                                            <Button className={classes.resultActionBtn} style={{marginBottom: "20px", fontWeight: "bold"}}><ShareIcon style={{color: PRIMARY_COLOR}} /> &nbsp;&nbsp;Share </Button><br />

                                        </Grid>
                                    </Grid>
                                </div>
                            )
                        })}
                    </div>
                    <br />
                </div>
            )
        }

        const RenderFocusGroups= () => {
            return (
                <div className={classes.resultContainer}>
                    <ResultPrintButton /><br />
                    <h1 className={classes.title}>Focus Groups you might participate in</h1>
                    <ResultMainSubTitle text={`There are no focus groups suitable for you at present.`} />`
                    <br />
                </div>
            )
        }

        return (
            <div className={classes.root}>

                <Link to="/services">
                    <Button type="button" className={classes.resultBackButton} style={{position: "relative", top: "27px"}} >
                        BACK
                    </Button>
                </Link>

                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={12}>

                    <ResultTabsWithBadge
                        tabs={[
                            {text: "TREATMENTS", badgeContent: treatmentResults.length},
                            {text: "TRIALS", badgeContent: trialResults.length},
                            {text: "FOCUS GROUPS", badgeContent: 0},
                        ]}
                        tabStart={tabSelected}
                        handleTabClick={this.handleTabClick}
                    />
                    {tabSelected === 0 && <RenderTreatments /> }
                    {tabSelected === 1 && <RenderTrials /> }
                    {tabSelected === 2 && <RenderFocusGroups /> }
                    </Grid>

                </Grid>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({  }, dispatch);
}

const mapStateToProps = (state) => {
    console.log("State : ", state);
    return {
        treatmentResults: state.results.treatment_result,
        trialResults: state.results.trial_result,
        userCreds: state.creds
    }
  };


Results = withRouter(Results)
Results = withStyles(resultStylesheet)(Results)
Results = connect(mapStateToProps, mapDispatchToProps)(Results)
export default Results
