import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import ResultTabs from '../../components/tabs/resultTabs'
import ResultTitle from '../../components/commons/resultTitle'
import ResultInfo from '../../components/commons/resultInfo'
import ResultDisplayMedia from '../../components/commons/resultDisplayMedia'
import ResultInfoBullets from '../../components/commons/resultInfoBullets'
import ResultBackButton from '../../components/buttons/resultBackButton'
import { resultStyles } from './resultStyles';
import { trialsInfo } from '../../infoFiles/trialsInfo'


class TrialDisplay extends Component {

    state = {
        tabSelected: 0,
    }

    componentDidMount() {
        window.scroll(0,0)
        const locn = window.location.href
        const item = locn.substr(locn.lastIndexOf(':') + 1)
        const trial = trialsInfo.filter(t => t.key === item)[0]
        console.log(trial)
        this.setState({trial: trial})
    }

    handleTabClick = tab => {
        this.setState({tabSelected: tab})
    }

    render() {

        const { classes } = this.props
        const { trial, tabSelected } = this.state

        const RenderOverview = () => {
            return (
                <div className={classes.resultContainer}>
                    <ResultTitle text={trial.name} />
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={12} md={6}>
                            <ResultInfo subtitle="Summary" text={trial.summary}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <br />
                            <ResultDisplayMedia mediaType="video" mediaLink={trial.mediaLnk1} width={340} height={255}/>    
                        </Grid>
                    </Grid>
                    <br />
                    <ResultInfo subtitle="Description" text={trial.description} />
                    <ResultInfo subtitle="Organiser" text={trial.organiser} />
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={12} md={6}>
                            <ResultInfo subtitle="What is involved?" text={trial.involved} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <ResultInfo subtitle="Study protocol." />
                            <br />
                            {trial.involvedBullets.map((bullet, index) => { return (<ResultInfoBullets key={index} bullet={bullet} />) }) }      
                        </Grid>
                    </Grid>
                </div>
            )
        }

        const RenderRecruit = () => {
            return (
                <div className={classes.resultContainer}>
                    <ResultTitle text={trial.name} />
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={12} md={6}>
                            <ResultInfo subtitle="Recruitment" text={trial.recruitment} />
                            <ResultInfo subtitle="Who can volunteer?" text={trial.eligable} />
                            {trial.eligableBullets.map((bullet, index) => { return (<ResultInfoBullets key={index} bullet={bullet} />) }) } 
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <ResultInfo subtitle="Where is this trial taking place?" text={trial.location} />
                            <ResultInfo subtitle="Other study centers" />
                            <br />
                            {trial.locationBullets.map((bullet, index) => { return (<ResultInfoBullets key={index} bullet={bullet} />) }) }  
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
                            <ResultInfo subtitle="What are the benefits of participating?"  text={trial.benefits}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <ResultInfo subtitle="Specific benefits" />
                            <br />
                            {trial.benefitsBullets.map((bullet, idx) => { return (<ResultInfoBullets key={idx} bullet={bullet} />) }) }      
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
                            <ResultInfo subtitle="How can I volunteer?" text={trial.organiser}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <ResultInfo subtitle="Contact details" text={trial.more}/>
                        </Grid>
                    </Grid>
                </div>
            )
        }


        // TrialDisplay component return
        return (
            <div className={classes.resultRoot}> 
            <br />
            <br />
                <Grid container spacing={24}>
                
                    {trial && <Grid item xs={12} sm={12} md={8}>

                        <ResultTabs tabs={["TRIAL OVERVIEW", "RECRUITMENT", "BENEFITS", "CONTACT"]}
                         handleTabClick={this.handleTabClick} />

                        <ResultBackButton targetUrl="/results:trials" />

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


TrialDisplay = withStyles(resultStyles)(TrialDisplay)
export default TrialDisplay