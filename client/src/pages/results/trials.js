import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import ResultNav from '../../components/navs/resultNavigation'
import ResultTitle from '../../components/commons/resultTitle'
import ResultInfo from '../../components/commons/resultInfo'
import ResultDisplayMedia from '../../components/commons/resultDisplayMedia'
import ResultInfoBullets from '../../components/commons/resultInfoBullets'
import ResultSplitCol from '../../components/commons/resultSplitCol'
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

    switchTab = tab => {
        this.setState({tabSelected: tab})
    }


    render() {

        const { classes } = this.props
        const { trial, tabSelected } = this.state

        const RenderOverview = () => {
            return (
                <React.Fragment>
                    <ResultSplitCol>
                        <ResultInfo subtitle="Summary" text={trial.summary}/>
                        <React.Fragment>
                            <br />
                            <ResultDisplayMedia mediaType="video" mediaLink={trial.mediaLnk1} width={340} height={255}/>    
                        </React.Fragment>
                    </ResultSplitCol>
                    <br />
                    <ResultInfo subtitle="Description" text={trial.description} />
                    <ResultInfo subtitle="Organiser" text={trial.organiser} />
                    <ResultSplitCol>
                        <ResultInfo subtitle="What is involved?" text={trial.involved} />
                        <React.Fragment>
                            <ResultInfo subtitle="Study protocol." />
                            <br />
                            {trial.involvedBullets.map((bullet, index) => { return (<ResultInfoBullets key={index} bullet={bullet} />) }) }      
                        </React.Fragment>
                    </ResultSplitCol>
                </React.Fragment>
            )
        }

        const RenderRecruit = () => {
            return (
                <React.Fragment>
                    <ResultSplitCol>
                        <React.Fragment>
                            <ResultInfo subtitle="Recruitment" text={trial.recruitment} />
                            <ResultInfo subtitle="Who can volunteer?" text={trial.eligable} />
                            {trial.eligableBullets.map((bullet, index) => { return (<ResultInfoBullets key={index} bullet={bullet} />) }) } 
                        </React.Fragment>
                        <React.Fragment>
                            <ResultInfo subtitle="Where is this trial taking place?" text={trial.location} />
                            <ResultInfo subtitle="Other study centers" />
                            <br />
                            {trial.locationBullets.map((bullet, index) => { return (<ResultInfoBullets key={index} bullet={bullet} />) }) }  
                        </React.Fragment>
                    </ResultSplitCol>
                </React.Fragment>
            )
        }

        const RenderBenefits = () => {
            return (
                <React.Fragment>
                    <ResultSplitCol>
                            <ResultInfo subtitle="What are the benefits of participating?"  text={trial.benefits}/>
                        <React.Fragment>
                            <ResultInfo subtitle="Specific benefits" />
                            <br />
                            {trial.benefitsBullets.map((bullet, idx) => { return (<ResultInfoBullets key={idx} bullet={bullet} />) }) }      
                        </React.Fragment>
                    </ResultSplitCol>
                </React.Fragment>
            )
        }

        const RenderContact = () => {
            return (
                <React.Fragment>
                    <ResultSplitCol>
                        <ResultInfo subtitle="How can I volunteer?" text={trial.organiser}/>
                        <ResultInfo subtitle="Contact details" text={trial.more}/>
                    </ResultSplitCol>
                </React.Fragment>
            )
        }


        // TrialDisplay component return
        return (
            <div className={classes.resultRoot}> 
            <br />
            <br />
                <Grid container spacing={24}>
                
                    {trial && <Grid item xs={12} sm={12} md={8}>

                    <ResultNav   
                            tabs={[
                                {text: "TRIAL", badgeContent: null},
                                {text: "OVERVIEW", badgeContent: null},
                                {text: "RECRUITMENT", badgeContent: null}, 
                                {text: "BENEFITS", badgeContent: null}, 
                                {text: "CONTACT", badgeContent: null}, 
                            ]} 
                            tabClicked={this.switchTab} 
                        /> 

                        <ResultBackButton targetUrl="/results:trials" />

                        <div className={classes.resultContainer}>
<                           ResultTitle text={trial.name} />
                            {tabSelected === 0 && <RenderOverview /> }
                            {tabSelected === 1 && <RenderRecruit /> }
                            {tabSelected === 2 && <RenderBenefits /> }
                            {tabSelected === 3 && <RenderContact /> }
                        </div>

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