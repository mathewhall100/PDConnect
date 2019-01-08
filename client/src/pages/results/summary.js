import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import PaymentIcon from '@material-ui/icons/Payment'
import PrintIcon from '@material-ui/icons/Print'
import SendIcon from '@material-ui/icons/Send'
import ShareIcon from '@material-ui/icons/Share'
import ContactMailIcon from '@material-ui/icons/ContactMail'

import ResultTabsWithBadge from '../../components/tabs/resultTabsWithBadge'
import ResultTitle from '../../components/commons/resultTitle'
import ResultSubTitle from '../../components/commons/resultSubTitle'
import ResultDisplayMedia from '../../components/commons/resultDisplayMedia'
import ResultBackButton from '../../components/buttons/resultBackButton'
import ResultMoreInfoButton from '../../components/buttons/resultMoreInfoButton'
import { resultStyles } from './resultStyles';

class ResultSummary extends Component {

    state = {
        tabSelected: 0,
        treatmentResults: [],
        trialResults: [],
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

    handleTabClick = (tab) => {
        console.log("tab: ", tab)
        this.setState({tabSelected: tab})
    }

    handleMoreInfo = (type, item) => {
        console.log(type, " ", item)
        const redirectAddress = `${type}:${item}`
        this.props.history.push(redirectAddress)
    }


    render() {

        const { treatmentResults, trialResults, classes } = this.props
        const { tabSelected } = this.state

        const RenderActionMenu = (props) => {

            const ActionMenuButton = props => 
                <Button className={classes.actionMenuBtn}>
                    <span className={classes.actionMenuIcon}>{props.menuItemIcon}&nbsp;</span> 
                    <span className={classes.actionMenuText}>&nbsp;{props.menuItemText}</span>
                </Button>

                return (
                    <div className={classes.actionMenuBox}>
                        <ActionMenuButton {...props} /><br />
                        <ActionMenuButton menuItemIcon={<BookmarkIcon />} menuItemText="Bookmark" /><br />
                        <ActionMenuButton menuItemIcon={<PrintIcon />} menuItemText="Print" /><br />
                        <ActionMenuButton menuItemIcon={<SendIcon />} menuItemText="Email" /><br />
                        <ActionMenuButton menuItemIcon={<ShareIcon />} menuItemText="Share" /><br />
                    </div>
                )
        }

        const RenderPageEntries = props => 
                <div className={classes.resultBox}>
                    <Grid container spacing={8}>

                        <Grid item xs={12} sm={12} md={6}>
                            <div className={classes.resultBoxTextBox}> 
                                <div className={classes.resultBoxTitle}>
                                    {props.name}
                                </div>
                                <div className={classes.resultBoxText}>
                                    {props.summary}
                                </div>
                            </div>
                            <ResultMoreInfoButton {...props} handleMoreInfo={this.handleMoreInfo} />
                        </Grid>

                        <Grid item xs={12} sm={12} md={4}>
                            <br/>
                            <ResultDisplayMedia {...props} width={240} height={180}  />    
                        </Grid>
                        <Grid item xs={12} sm={12} md={2}>
                            <br />
                            <RenderActionMenu {...props}/>
                            <br />
                        </Grid>

                    </Grid>
                </div>

        const RenderNoMatches = props => {
            const title =`We were unable to match your profile with any ${props.tabText} .`
            const text=`Try updating or adding more information to your profile to help us find suitable ${props.tabText} for you, or check back soon for new ${props.tabText}.`
            return (
                <React.Fragment>
                    <ResultTitle text={title} />
                    <br />
                    <ResultSubTitle text={text} />
                </React.Fragment>
                )
        }

        // ResultsSummary component return
        return (
            <div className={classes.resultRoot}>
                <br />
                <br />
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={12}> 
                    
                        <ResultTabsWithBadge
                            tabs={[
                                {text: "TREATMENTS", badgeContent: treatmentResults.length},
                                {text: "TRIALS", badgeContent: trialResults.length},
                                {text: "FOCUS GROUPS", badgeContent: 0}, // when present replace with groupResults.length
                            ]}
                            tabStart={tabSelected}
                            handleTabClick={this.handleTabClick}
                        />
                        
                        <ResultBackButton targetUrl="/services" />

                        {tabSelected === 0 && <div className={classes.resultContainer}>
                            {treatmentResults.length > 0 ?
                                <React.Fragment>
                                    <ResultTitle text="Treatments to discuss with your doctor" />
                                    {treatmentResults.map((treatment, index) => {
                                        return (
                                            <RenderPageEntries key={index}
                                                name={treatment.medication_name} 
                                                summary={treatment.summary} 
                                                type="treatment" 
                                                item={treatment.key}
                                                mediaType="video"
                                                mediaLink={treatment.mediaLnk1}
                                                menuItemIcon={<PaymentIcon />} 
                                                menuItemText="Am I covered?"
                                            /> 
                                        )
                                    }) } 
                                </React.Fragment>
                            : <RenderNoMatches tabText="treatments" /> }
                        </div> }

                        {tabSelected === 1 && <div className={classes.resultContainer}>
                            {trialResults.length > 0 ?
                                <React.Fragment>
                                    <ResultTitle text="Clinical Trials to consider volunteering for" />
                                    {trialResults.map((trial, index) => {
                                        return (
                                            <RenderPageEntries key={index}
                                                name={trial.trial_name} 
                                                summary={trial.summary} 
                                                type="trial" 
                                                item={trial.key}
                                                mediaType="video"
                                                mediaLink={trial.mediaLnk1}
                                                menuItemIcon={<ContactMailIcon />} 
                                                menuItemText="Contact trial"
                                            /> 
                                        )
                                    }) }
                                </React.Fragment>
                            : <RenderNoMatches tabText="clinical trials" /> 
                                }
                        </div> }

                        {tabSelected === 2 &&  <div className={classes.resultContainer}>
                        {/* {groupResults.length > 0 ?
                                <React.Fragment>
                                    <ResultTitle text="Focus groups you might participate in" />
                                    {groupResults.map((group, index) => {
                                        return (
                                            <RenderPageEntries key={index}
                                                name={group.group_name} 
                                                summary={group.summary} 
                                                type="group" 
                                                item={group.key}
                                                mediaType="video"
                                                mediaLink={group.mediaLnk1}
                                                menuItemIcon={<ContactIcon />} 
                                                menuItemText="Contact group"
                                            /> 
                                        )
                                    }) }
                                </React.Fragment>
                            : */}
                            <RenderNoMatches tabText="focus groups" /> 

                        </div> }

                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("State : ", state)
    return {
        treatmentResults: state.results.treatment_result,
        trialResults: state.results.trial_result,
        // groupResults: state.results.group_result,
        userCreds: state.creds
    }
  };

ResultSummary = withRouter(ResultSummary)
ResultSummary = withStyles(resultStyles)(ResultSummary)
ResultSummary = connect(mapStateToProps)(ResultSummary)
export default ResultSummary
