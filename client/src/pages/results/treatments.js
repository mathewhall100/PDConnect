import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import ResultTabs from '../../components/tabs/resultTabs'
import ResultTitle from '../../components/commons/resultTitle'
import ResultInfo from '../../components/commons/resultInfo'
import ResultDisplayMedia from '../../components/commons/resultDisplayMedia'
import ResultInfoSubScript from '../../components/commons/resultInfoSubScript'
import ResultInfoBullets from '../../components/commons/resultInfoBullets'
import ResultBackButton from '../../components/buttons/resultBackButton'
import { resultStyles } from './resultStyles';
import { treatmentsInfo } from '../../infoFiles/treatmentsInfo'
import apomorphineGraph from '../../images/apomorphineMedia1.PNG' //replace


class TreatmentDisplay extends Component {
 
        state = {
            tabSelected: 0,
            screenWidth: false,
        }

    componentDidMount() {
        window.scroll(0,0)
        const locn = window.location.href
        const item = locn.substr(locn.lastIndexOf(':') + 1)
        const treatment = treatmentsInfo.filter(t => t.key === item)[0]
        this.setState({treatment: treatment})

        window.addEventListener("resize", this.mediaResize)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.mediaResize)
    }

    mediaResize = () => {
        this.setState({screenWidth: window.innerWidth})
    }

    handleTabClick = (tab) => {
        this.setState({tabSelected: tab})
    }

    getWidth = () => {
        let screenWidth = this.state.screenWidth
        if (screenWidth > 1285) {return 340}
        else if (screenWidth > 960) {return 250}
        else if (screenWidth > 526) {return 340}
        else  {return 250}
    }

    getHeight = () => {
        let screenWidth = this.state.screenWidth
        if (screenWidth > 1285) {return 255}
        else if (screenWidth > 960) {return (250/340)*255}
        else if (screenWidth > 526) {return 255}
        else  {return (250/340)*255}
    }


    render() {

        const { classes } = this.props
        const { treatment, tabSelected, mediaResize } = this.state

        const RenderOverview = () => 
            <React.Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={6}>
                        <ResultInfo subtitle="Summary" text={treatment.summary}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <br />
                        <ResultDisplayMedia mediaType="video" mediaLink={treatment.mediaLnk1} width={this.getWidth()} height={this.getHeight()} /> 
                    </Grid>
                </Grid>
                <ResultInfo subtitle="Description" text={treatment.description} />
                <ResultInfo subtitle="Who benefits from this medication?" text={treatment.benefits} />
                <ResultInfo subtitle="How is it taken?" text={treatment.administration}/>
            </React.Fragment>

        const RenderPatientExp = () => 
            <React.Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={6}>
                        <ResultInfo subtitle="Patient Stories" text={treatment.patient} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <br />
                        {treatment.mediaLnk2 ? 
                            treatment.mediaLnk2.map((lnk, idx) => { return ( <ResultDisplayMedia key={idx } mediaType="video" mediaLink={lnk} width={this.getWidth()} height={this.getHeight()} /> ) })
                            :
                            null }
                    </Grid>
                </Grid>
            </React.Fragment>

        const RenderEvidence= () => 
            <React.Fragment>
                {treatment.evidence ? 
                    treatment.evidence.map((ev, index) => {
                        return (    
                            <Grid key={index} container spacing={24}> 
                                <Grid item xs={12} sm={12} md={6}>
                                    <ResultInfo subtitle={ev.name} text={ev.text} />
                                    <ResultInfoSubScript text={`Sourced from ${ev.source}`} />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <br />
                                    <ResultDisplayMedia mediaType="image" mediaLink={apomorphineGraph} width={this.getWidth()} height={this.getHeight()}   />                             
                                </Grid>
                            </Grid>
                        ) 
                    })
                :
                null }
            </React.Fragment>

        const RenderRisks = () => 
            <React.Fragment>
                <Grid container spacing={24}> 
                    <Grid item xs={12} sm={12} md={6}>
                        <ResultInfo subtitle="Common problems" text={treatment.riskText}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <ResultInfo subtitle="List of side effects" />
                        <br />
                        {treatment.riskBullets.map((bullet, index) => { return (<ResultInfoBullets key={index} bullet={bullet} />) }) }                            
                    </Grid>
                </Grid>
            </React.Fragment>

        const RenderMore = () => 
            <React.Fragment>
                <Grid container spacing={24}> 
                    <Grid item xs={12} sm={12} md={6}>
                        <ResultInfo subtitle="More Information" text={treatment.more}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>             
                    </Grid>
                </Grid>
            </React.Fragment>


        // TreatmentDisplay component return
        return (
            <div className={classes.resultRoot}> 

                <br />
                <br />

                <Grid container spacing={24}>
                
                    {treatment && <Grid item xs={12} sm={12} md={8}>
                        <ResultTabs tabs={["OVERVIEW", "PATIENT STORIES", "EVIDENCE", "RISKS", "MORE"]} handleTabClick={this.handleTabClick} />   
                            <ResultBackButton targetUrl="/results:treatments"/>
                        <div className={classes.resultContainer}>
                            <ResultTitle text={treatment.name} />
                            {tabSelected === 0 && <RenderOverview /> }
                            {tabSelected === 1 && <RenderPatientExp /> }
                            {tabSelected === 2 && <RenderEvidence /> }
                            {tabSelected === 3 && <RenderRisks /> }
                            {tabSelected === 4 && <RenderMore /> } 
                        </div>

                    </Grid> }

                    <Grid item xs={12} sm={12} md={4}></Grid>
                    
                 </Grid> 
            </div>
        )
    }
}


TreatmentDisplay = withStyles(resultStyles)(TreatmentDisplay)
export default TreatmentDisplay