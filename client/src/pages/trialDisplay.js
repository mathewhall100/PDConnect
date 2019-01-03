import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import ResultTabs from '../components/commons/resultTabs'
import ResultTitle from '../components/commons/resultTitle'
import ResultInfoSubTitle from '../components/commons/resultInfoSubTitle'
import ResultDisplayVideo from '../components/commons/resultDisplayVideo'
import ResultInfoText from '../components/commons/resultInfoText'
import ResultInfoBullets from '../components/commons/resultInfoBullets'
import { resultStylesheet } from '../styles';
import { trialsInfo } from '../infoFiles/trialsInfo'


class TrialDisplay extends Component {

    state = {
        tabSelected: 0,
        value: 0,
    }

    componentDidMount() {
        window.scroll(0,0)
        const locn = window.location.href
        const item = locn.substr(locn.lastIndexOf(':') + 1)
        const trial = trialsInfo.filter(t => t.key === item)[0]
        console.log(trial)
        this.setState({trial: trial})
    }

    handleChange = (event, value) => {
        this.setState({ value });
      };
    
    handleChangeIndex = index => {
        this.setState({ value: index });
      };

    handleTabClick = (tab) => {
        this.setState({tabSelected: tab})
    }

    render() {

        const { handleSubmit, classes } = this.props
        const { trial, tabSelected } = this.state

        const RenderOverview = () => {
            return (
                <div className={classes.resultContainer}>
                    <ResultTitle text={trial.name} />
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={12} md={6}>

                            <br />
                            <ResultInfoSubTitle text="Summary" />
                            <ResultInfoText text={trial.summary} />

                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <br />
                            <ResultDisplayVideo mediaLnk={trial.mediaLnk1} />
                        </Grid>
                    </Grid>
                    <br />
                    <ResultInfoSubTitle text="Description" />
                    <ResultInfoText text={trial.description} />
                    <ResultInfoSubTitle text="Organiser" />
                    <ResultInfoText text={trial.organiser} />
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={12} md={6}>
                            <br />
                            <ResultInfoSubTitle text="What is involved?" />
                            <ResultInfoText text={trial.involved} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <br />
                            <ResultInfoSubTitle text="Study protocol." />
                            <br />
                            {trial.involvedBullets.map((bullet, index) => {
                                return (
                                    <ResultInfoBullets key={index} bullet={bullet} />
                                )
                            }) }      
                        </Grid>
                    </Grid>
                </div>
            )
        }

        const RenderRecruit = () => {

            return (
                <div className={classes.resultContainer}>
                    <ResultTitle text={trial.name} />
                    <br />
                    <ResultInfoSubTitle text="Recruitment" />
                    <ResultInfoText text={trial.recruitment} />
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={12} md={6}>
                            <br />
                            <ResultInfoSubTitle text="Who can volunteer?" />
                            <ResultInfoText text={trial.eligable} />
                            {trial.eligableBullets.map((bullet, index) => {
                                return (
                                    <ResultInfoBullets key={index} bullet={bullet} />
                                )
                            }) } 
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <br />
                            <ResultInfoSubTitle text="Where is this trial taking place?" />
                            <ResultInfoText text={trial.location} />
                            <ResultInfoSubTitle text="Other study centers" />
                            <br />
                            {trial.locationBullets.map((bullet, index) => {
                                return (
                                    <ResultInfoBullets key={index} bullet={bullet} />
                                )
                            }) }  
                        </Grid>
                    </Grid>
                </div>
            )
        }

        const RenderBenefits = () => {

            return (
                <div className={classes.resultContainer}>
                    <ResultTitle text={trial.name} />
                    <Grid container spacing={24}> 
                        <Grid item xs={12} sm={12} md={6}>
                            <br />
                            <ResultInfoSubTitle text="What are the benefits of participating?" />
                            <ResultInfoText text={trial.benefits} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <br />
                            <ResultInfoSubTitle text="Specific benefits" />
                            <br />
                            <br />
                            {trial.benefitsBullets.map((bullet, index) => {
                                return (
                                    <ResultInfoBullets key={index} bullet={bullet} />
                                )
                            }) }      
                        </Grid>
                    </Grid>
                </div>
            )
        }

        const RenderContact = () => {

            return (
                <div className={classes.resultContainer}>
                    <ResultTitle text={trial.name} />
                    <Grid container spacing={24}> 
                        <Grid item xs={12} sm={12} md={6}>
                            <br />
                            <ResultInfoSubTitle text="How can I volunteer for this truial?" />
                            <ResultInfoText text={trial.organiser} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <br />
                            <ResultInfoSubTitle text="Contact details" />
                            <ResultInfoText text={trial.more} />
                        </Grid>
                    </Grid>
                </div>
            )
        }

        return (
            <div className={classes.root}> 
            <br />
            <br />
            

                <Grid container spacing={24}>
                
                    {trial && <Grid item xs={12} sm={12} md={8}>

                        <ResultTabs tabs={["TRIAL OVERVIEW", "RECRUITMENT", "BENEFITS", "CONTACT"]}
                         handleTabClick={this.handleTabClick} />

                         <Link to="/results:trials">
                            <Button type="button" className={classes.resultBackButton} style={{position: "relative", top: "-20px"}} >
                                BACK
                            </Button>
                        </Link>

                        {tabSelected === 0 && <RenderOverview /> }
                        {tabSelected === 1 && <RenderRecruit /> }
                        {tabSelected === 2 && <RenderBenefits /> }
                        {tabSelected === 3 && <RenderContact /> }

                    </Grid> }

                    <Grid item xs={12} sm={12} md={4}>
                        
                    </Grid>
                 </Grid> 
            </div>
        );
    }
}


TrialDisplay = withStyles(resultStylesheet)(TrialDisplay)
export default TrialDisplay