import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
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

import ResultTabsWithBadge from '../components/commons/resultTabsWithBadge'
import ResultMainSubTitle from '../components/commons/resultMainSubTitle'
import { resultStylesheet, PRIMARY_COLOR } from '../styles';


class Results extends Component {

    state = {
        tabSelected: 0,
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

    handleTabClick = (tab) => {
        console.log("tab: ", tab)
        this.setState({tabSelected: tab})
    }


    render() {

        const { treatmentResults, trialResults, classes } = this.props
        const { tabSelected } = this.state

        const RenderTitle = props => <h1 className={classes.title}>{props.title}</h1>

        const RenderText = props => 
                <div className={classes.resultTextBox}>
                    <div className={classes.resultTitle}>
                        {props.name}
                    </div>
                    <div className={classes.resultText}>
                        {props.summary}
                    </div>
                </div>

        const ActionMenuButton = props => 
                <span>
                    <Button className={classes.resultActionBtn} >{props.menuItemIcon} &nbsp;&nbsp;{props.menuItemText}</Button><br />
                </span>

        const RenderActionMenuItem = props => <ActionMenuButton {...props} />

        const RenderGenericActionMenuItems = () => 
                <div>
                    <ActionMenuButton style={{marginTop: "0px"}} menuItemIcon={<BookmarkIcon style={{color: PRIMARY_COLOR}} />} menuItemText="Bookmark" />
                    <ActionMenuButton menuItemIcon={<PrintIcon style={{color: PRIMARY_COLOR}} />} menuItemText="Print" />
                    <ActionMenuButton menuItemIcon={<SendIcon style={{color: PRIMARY_COLOR}} />} menuItemText="Email" />
                    <ActionMenuButton style={{marginBottom: "20px"}} menuItemIcon={<ShareIcon style={{color: PRIMARY_COLOR}} />} menuItemText="Share" />
                </div>

        const RenderVideo = props => 
                <iframe width="240" height="180" style={{marginTop: "26px", marginLeft: "20px"}}
                    src={props.mediaLink}>
                </iframe>

        const RenderImage = props => 
                <img width="240" height="180" style={{marginTop: "26px", marginLeft: "20px"}}
                    src={props.mediaLink}>
                </img>

        const RenderHandleMoreInfoButton = props => 
                <div style={{margin: "10px 20px 20px 20px"}}>
                    <Button type="button" className={classes.button} onClick={() => this.handleMoreInfo(props.type, props.item)}>Find Out More</Button>
                </div>

        const RenderPageEntries = props => 
                <div className={classes.resultBox}>
                    <Grid container spacing={8}>
                        <Grid item xs={12} sm={12} md={6}>
                            <RenderText {...props} />
                            <RenderHandleMoreInfoButton {...props} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            {props.mediaType === "video" ? <RenderVideo {...props} /> : <RenderImage {...props}/> }
                        </Grid>
                        <Grid item xs={12} sm={12} md={2}>
                            <br />
                            <RenderActionMenuItem {...props} />
                            <RenderGenericActionMenuItems />
                            <br />
                        </Grid>
                    </Grid>
                </div>


        // component return
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

                        {tabSelected === 0 && <div className={classes.resultContainer}>
                            {treatmentResults.length > 0 ?
                                <span>
                                    <RenderTitle title="Treatments to discuss with your doctor" />
                                    {treatmentResults.map((treatment, index) => {
                                        return (
                                            <RenderPageEntries key={index}
                                                name={treatment.medication_name} 
                                                summary={treatment.summary} 
                                                type="treatment" 
                                                item={treatment.key}
                                                mediaType="video"
                                                mediaLink={treatment.mediaLnk1}
                                                menuItemIcon={<PaymentIcon style={{color: PRIMARY_COLOR}} />} 
                                                menuItemText="Am I covered?"
                                            /> 
                                        )
                                    }) } 
                                </span>
                            : 
                                <span>
                                    <RenderTitle title="We couldn't match your profile with any treatments." />
                                    <br />
                                    <ResultMainSubTitle text="Try updating or adding more information to your profile to help us find suitable treatments for you, or check back soon for new treatments." />
                                </span>
                            }
                        </div> }

                        {tabSelected === 1 && <div className={classes.resultContainer}>
                            {trialResults.length > 0 ?
                                <span>
                                    <RenderTitle title="Clinical Trials to consider volunteering for" />
                                    {trialResults.map((trial, index) => {
                                        return (
                                            <RenderPageEntries key={index}
                                                name={trial.trial_name} 
                                                summary={trial.summary} 
                                                type="trial" 
                                                item={trial.key}
                                                mediaType="video"
                                                mediaLink={trial.mediaLnk1}
                                                menuItemIcon={<ContactMailIcon style={{color: PRIMARY_COLOR}} />} 
                                                menuItemText="Contact trial"
                                            /> 
                                        )
                                    }) }
                                </span>
                            : 
                                <span>
                                    <RenderTitle title="We couldn't match your profile with any clinical trials" />
                                    <br />
                                    <ResultMainSubTitle text="Try updating or adding more information to your profile to help us find suitable clinical trials for you, or check back soon for new trials." />
                                </span>
                                }
                        </div> }

                        {tabSelected === 2 &&  <div className={classes.resultContainer}>
                        {/* {groupResults.length > 0 ?
                                <span>
                                    <RenderTitle title="Focus groups you might participate in" />
                                    {groupResults.map((group, index) => {
                                        return (
                                            <RenderPageEntries key={index}
                                                name={group.group_name} 
                                                summary={group.summary} 
                                                type="group" 
                                                item={group.key}
                                                mediaType="video"
                                                mediaLink={group.mediaLnk1}
                                                menuItemIcon={<ContactIcon style={{color: PRIMARY_COLOR}} />} 
                                                menuItemText="Contact group"
                                            /> 
                                        )
                                    }) }
                                </span>
                            :  */}
                                <span>
                                    <RenderTitle title="We couldn't match your profile with any focus groups." />
                                    <br />
                                    <ResultMainSubTitle text="Try updating or adding more information to your profile to help us find suitable focus groups for you, or check back soon for new focus groups." />
                                </span>

                                {/* } */}
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

Results = withRouter(Results)
Results = withStyles(resultStylesheet)(Results)
Results = connect(mapStateToProps)(Results)
export default Results
