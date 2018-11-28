
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';

import ResultTabsWithBadge from '../components/commons/resultTabsWithBadge'
import ResultPrintButton from '../components/commons/resultPrintBtn'
import ResultMainSubTitle from '../components/commons/resultMainSubTitle'
import EmailBox from '../components/commons/emailBox'
import AccountBox from '../components/commons/accountBox'
import SocMedBox from '../components/commons/socMedBox'
import { resultStylesheet } from '../styles';


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
                    <ResultPrintButton /><br />
                    <h1 className={classes.title}>Treatments to discuss with your doctor</h1>
                    <div>
                        {treatmentResults.map((treatment, index) => {
                            return (
                                <div key={index} className={classes.resultBox}>
                                    <Grid container spacing={8}>
                                        <Grid item xs={12} sm={12} md={7}>
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
                                        <Grid item xs={12} sm={12} md={5}>
                                            <iframe title={index} width="240" height="180" style={{marginTop: "26px", marginLeft: "20px"}}
                                                src={treatment.mediaLnk1}>
                                            </iframe>
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
                    <ResultPrintButton /><br />
                    <h1 className={classes.title}>Clinical Trials you might volunteer for</h1>
                    <div>
                        {trialResults.map((trial, index) => {
                            return (
                                <div key={index} className={classes.resultBox}>
                                    <Grid container spacing={8}>
                                        <Grid item xs={12} sm={12} md={7}>
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
                                        <Grid item xs={12} sm={12} md={5}>
                                            <iframe width="240" height="180" style={{marginTop: "26px", marginLeft: "20px"}}
                                                src={trial.mediaLnk1}>
                                            </iframe>
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
                    <Grid item xs={12} sm={12} md={8}>

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

                    <Grid item xs={12} sm={12} md={4}>
                        <br />

                        <SocMedBox title="Share page"/>
                        
                        <EmailBox email={userCreds.email}/>

                        {/* {!userCreds.email && !userCreds.password ? <AccountBox /> : null } */}

                        

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
