import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import ResultsBar from '../components/commons/resultsBar'
import ResultTabs from '../components/commons/resultTabs'
import ResultPrintButton from '../components/commons/resultPrintBtn'
import ResultTitle from '../components/commons/resultTitle'
import ResultInfoSubTitle from '../components/commons/resultInfoSubTitle'
import ResultDisplayVideo from '../components/commons/resultDisplayVideo'
import ResultInfoText from '../components/commons/resultInfoText'
import ResultInfoSubText from '../components/commons/resultInfoSubText'
import ResultInfoBullets from '../components/commons/resultInfoBullets'
import SocMedBox from '../components/commons/socMedBox'
import AccountBox from '../components/commons/accountBox'
import EmailBox from '../components/commons/emailBox'
import { resultStylesheet } from '../styles';
import { treatmentsInfo } from '../infoFiles/treatmentsInfo'
import apomorphineGraph from '../img/apomorphineMedia1.PNG'


class TreatmentDisplay extends Component {

    state = {
        tabSelected: 0,
        value: 0,
    }

    componentDidMount() {
        window.scroll(0,0)
        const locn = window.location.href
        const item = locn.substr(locn.lastIndexOf(':') + 1)
        console.log("item:  ", item)
        const treatment = treatmentsInfo.filter(t => t.key === item)[0]
        console.log(treatment)
        this.setState({treatment: treatment})
    }

    handleChangeIndex = index => {
        this.setState({ value: index });
      };

    handleTabClick = (tab) => {
        this.setState({tabSelected: tab})
    }


    render() {

        const { classes } = this.props
        const { treatment, tabSelected } = this.state

        const RenderOverview = () => {
            return (
                <div className={classes.resultContainer}>
                    <ResultPrintButton /><br />
                    <ResultTitle text={treatment.name} />
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={12} md={6}>
                            <br />
                            <ResultInfoSubTitle text="Summary" />
                            <ResultInfoText text={treatment.summary} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <br />
                            <ResultDisplayVideo mediaLnk={treatment.mediaLnk1} />
                        </Grid>
                    </Grid>
                    <br />
                    <ResultInfoSubTitle text="Description" />
                    <ResultInfoText text={treatment.description} />
                    <br />
                    <ResultInfoSubTitle text="Who benefits from this medication?" />
                    <ResultInfoText text={treatment.benefits} />
                    <br />
                    <ResultInfoSubTitle text="How is it taken?" />
                    <ResultInfoText text={treatment.administration} />
                </div>
            )
        }

        const RenderPatientExp= () => {
            return (
                <div className={classes.resultContainer}>
                    <ResultPrintButton /><br />
                    <ResultTitle text={treatment.name} />
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={12} md={6}>
                            <br />
                            <ResultInfoSubTitle text="Patient Stories" />
                            <ResultInfoText text={treatment.patient} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <br />
                            {treatment.mediaLnk2 ? 
                                treatment.mediaLnk2.map((lnk, index) => {
                                    return (
                                        <span>
                                            <ResultDisplayVideo mediaLnk={lnk} />
                                            <br />
                                            <br />
                                        </span>
                                    ) 
                                })
                                :
                                null }
                        </Grid>
                    </Grid>
                </div>
            )
        }

        const RenderEvidence= () => {
            return (
                <div className={classes.resultContainer}>
                    <ResultPrintButton /><br />
                    <ResultTitle text={treatment.name} />
                    {treatment.evidence ? 
                        treatment.evidence.map((ev, index) => {
                            return (    
                                <Grid key={index} container spacing={24}> 
                                    <Grid item xs={12} sm={12} md={6}>
                                        <br />
                                        <ResultInfoSubTitle text={ev.name} />
                                        <ResultInfoText text={ev.text} />
                                        <ResultInfoSubText text={`Sourced from ${ev.source}`} />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <br />
                                        <img src={apomorphineGraph} width="340" height="255" className={classes.mediaBox} />
                                        <br />
                                        <br />                             
                                    </Grid>
                                </Grid>
                            ) 
                        })
                    :
                    null }
                </div>
            )
        }

        const RenderRisks = () => {
            return (
                <div className={classes.resultContainer}>
                    <ResultPrintButton /><br />
                    <ResultTitle text={treatment.name} />
                    <Grid container spacing={24}> 
                        <Grid item xs={12} sm={12} md={6}>
                            <br />
                            <ResultInfoSubTitle text="Common problems" />
                            <ResultInfoText text={treatment.riskText} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                        <br />
                            <ResultInfoSubTitle text="List of side effects" />
                            <br />
                            {treatment.riskBullets.map((bullet, index) => {
                                return (
                                    <ResultInfoBullets key={index} bullet={bullet} />
                                )
                            }) }                            
                        </Grid>
                    </Grid>
                </div>
            )
        }

        const RenderMore = () => {
            return (
                <div className={classes.resultContainer}>
                    <ResultPrintButton /><br />
                    <ResultTitle text={treatment.name} />
                    <Grid container spacing={24}> 
                        <Grid item xs={12} sm={12} md={6}>
                            <br />
                            <ResultInfoSubTitle text="More Information" />
                            <br />
                            <ResultInfoText text={treatment.more} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>             
                        </Grid>
                    </Grid>
                </div>
            )
        }


        return (
            <div className={classes.root}> 

                <ResultsBar redirectAddress = "/results" />

                <Grid container spacing={24}>
                
                    {treatment && <Grid item xs={12} sm={12} md={8}>
                
                        <ResultTabs tabs={["OVERVIEW", "PATIENT STORIES", "EVIDENCE", "RISKS", "MORE"]} handleTabClick={this.handleTabClick} />   
                        {tabSelected === 0 && <RenderOverview /> }
                        {tabSelected === 1 && <RenderPatientExp /> }
                        {tabSelected === 2 && <RenderEvidence /> }
                        {tabSelected === 3 && <RenderRisks /> }
                        {tabSelected === 4 && <RenderMore /> } 

                    </Grid> }

                    <Grid item xs={12} sm={12} md={4}>
                        <br />

                        <EmailBox />
                        
                        <AccountBox />

                        <SocMedBox />

                    </Grid>
                 </Grid> 
            </div>
        );
    }
}


TreatmentDisplay = withStyles(resultStylesheet)(TreatmentDisplay)
export default TreatmentDisplay