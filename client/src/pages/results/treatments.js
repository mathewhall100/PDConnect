import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import ResultNav from '../../components/navs/resultNavigation'
import ResultTitle from '../../components/commons/resultTitle'
import ResultInfo from '../../components/commons/resultInfo'
import ResultDisplayMedia from '../../components/commons/resultDisplayMedia'
import ResultInfoSubScript from '../../components/commons/resultInfoSubScript'
import ResultInfoBullets from '../../components/commons/resultInfoBullets'
import ResultSplitCol from '../../components/commons/resultSplitCol'
import ResultBackButton from '../../components/buttons/resultBackButton'
import { resultStyles } from './resultStyles';
import { treatmentsInfo } from '../../infoFiles/treatmentsInfo'
import apomorphineGraph from '../../images/apomorphineMedia1.PNG' //replace


class TreatmentDisplay extends Component {
 
        state = {
            tabSelected: 0,
        }

    componentDidMount() {
        window.scroll(0,0)
        const locn = window.location.href
        const item = locn.substr(locn.lastIndexOf(':') + 1)
        const treatment = treatmentsInfo.filter(t => t.key === item)[0]
        this.setState({treatment: treatment})
    }

    switchTab = (tab) => {
        this.setState({tabSelected: tab})
    }


    render() {

        const { classes } = this.props
        const { treatment, tabSelected } = this.state

        const RenderOverview = () => 
            <React.Fragment>
                <ResultSplitCol>
                    <ResultInfo subtitle="Summary" text={treatment.summary}/>
                    <React.Fragment>
                        <br />
                        <ResultDisplayMedia mediaType="video" mediaLink={treatment.mediaLnk1} width={340} height={255} /> 
                    </React.Fragment>
                </ResultSplitCol>
                <ResultInfo subtitle="Description" text={treatment.description} />
                <ResultInfo subtitle="Who benefits from this medication?" text={treatment.benefits} />
                <ResultInfo subtitle="How is it taken?" text={treatment.administration}/>
            </React.Fragment>

        const RenderPatientExp = () => 
            <React.Fragment>
                <ResultSplitCol>
                    <ResultInfo subtitle="Patient Stories" text={treatment.patient} />
                    <React.Fragment>
                        <br />
                        {treatment.mediaLnk2 ? 
                            treatment.mediaLnk2.map((lnk, idx) => { return ( <ResultDisplayMedia key={idx } mediaType="video" mediaLink={lnk} width={340} height={255} /> ) })
                            :
                            null }
                    </React.Fragment>
                </ResultSplitCol>
            </React.Fragment>

        const RenderEvidence= () => 
            <React.Fragment>
                {treatment.evidence ? 
                    treatment.evidence.map((ev, index) => {
                        return (    
                            <ResultSplitCol>
                                <React.Fragment>
                                    <ResultInfo subtitle={ev.name} text={ev.text} />
                                    <ResultInfoSubScript text={`Sourced from ${ev.source}`} />
                                </React.Fragment>
                                <React.Fragment>
                                    <br />
                                    <ResultDisplayMedia mediaType="image" mediaLink={apomorphineGraph} width={340} height={255}   />                             
                                </React.Fragment>
                            </ResultSplitCol>
                        ) 
                    })
                :
                null }
            </React.Fragment>

        const RenderRisks = () => 
            <React.Fragment>
                <ResultSplitCol>
                    <ResultInfo subtitle="Common problems" text={treatment.riskText}/>
                    <React.Fragment>
                        <ResultInfo subtitle="List of side effects" />
                        <br />
                        {treatment.riskBullets.map((bullet, index) => { return (<ResultInfoBullets key={index} bullet={bullet} />) }) }                            
                    </React.Fragment>
                </ResultSplitCol>
            </React.Fragment>

        const RenderMore = () => 
            <React.Fragment>
                <ResultSplitCol>
                    <ResultInfo subtitle="More Information" text={treatment.more}/>
                    <div></div>
                </ResultSplitCol>
            </React.Fragment>


        // TreatmentDisplay component return
        return (
            <div className={classes.resultRoot}> 
                <br />
                <br />
                <Grid container spacing={24}>
                
                    {treatment && <Grid item xs={12} sm={12} md={8}>
                   
                        <ResultNav   
                            tabs={[
                                {text: "OVERVIEW", badgeContent: null},
                                {text: "PATIENT STORIES", badgeContent: null},
                                {text: "EVIDENCE", badgeContent: null}, 
                                {text: "RISKS", badgeContent: null}, 
                                {text: "MORE", badgeContent: null}, 
                            ]} 
                            tabClicked={this.switchTab} 
                        /> 

                        <ResultBackButton targetUrl="/results:treatments" />

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