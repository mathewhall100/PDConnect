import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal';
import HelpIcon from '@material-ui/icons/Help';
import DoneIcon from '@material-ui/icons/Done';


import { activity_level } from '../../constants';
import {userStylesheet, QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR } from '../../styles';
//import { submitUserFamily} from '../actions/UserFamilyAction'


 class UserFamily extends Component {

    state = {
        familyResult: [],
        redirect: false,
        redirectAddress : '/user/user_meds',
    }  

    handleTreeBtnClicked = (rel) => {
        console.log("treebuttonClicked : ",  rel)
        if (this.state.familyResult.indexOf(rel) < 0 && rel !== "YOU") {
            let tempArray = this.state.familyResult
            tempArray.push(rel)
            this.setState({familyResult: tempArray})
        }
    }

    handleSubmit = () => {
        const { familyResult } = this.state
        console.log("submit - familyResult:, ", familyResult)
        if (familyResult.length > 0) {
            // this.submitUserFamily( {
            //     ADL: this.state.activeBtn.indexOf("1"),
            // })
        } 
        this.setState({redirect: true})
    }
    
    handleClearForm() {
        console.log("clear form")
        this.setState({familyResult: []})
    }

    handleBack = () => {
        this.setState({
            redirect: true,
            redirectAddress: 'user_meds'
        })
    }


    render() {

        const { handleSubmit, pristine, submitting, classes } = this.props
        const { redirect, redirectAddress, familyResult } = this.state
        const spacingH = 90
        const spacingV = 100

        if (redirect) { 
            const url = `${redirectAddress}`;
            console.log("redirect to .. " + url);
            return<Redirect to={url} />;
        }

        const TopTitle = (props) => {
            return (
                <div>
                    <h1 className={classes.title}>{props.title}</h1>
                    <hr className={classes.hr} />
                </div>
            )
        }

        const SubTitle = (props) => {
            return (
                <div>
                    <h3 className={classes.subtitle}>{props.subtitle}</h3>
                    <hr className={classes.hr}/>
                </div>
            )
        }

        const BottomNav= (props) => {
            return (
                <Grid container spacing={24} className={classes.buttonContainer}>
                    <Grid item xs={12}>
                        <hr className={classes.hr} />
                    </Grid>
                    <Grid item xs={3}>
                        <Button type="button" className={classes.backButton} onClick={() => this.handleClearForm()}>CLEAR</Button>  
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3} className={classes.nextButtonContainer}>
                        <Button type="submit" variant='outlined' className={classes.nextButton} onClick={() => this.handleSubmit()} >NEXT</Button>
                    </Grid>
                </Grid>
            )
        }

        const TreeButton = (props) => {
            return (
                <Button type="button" className={classes.treeBtn} style={{top: props.top, left: props.left, backgroundColor: props.color, fontWeight: props.bold}} onClick={() => this.handleTreeBtnClicked(props.relative)}>{props.relative}</Button>
            )
        }
        
        const TreeLink = (props) => {
            console.log(props)
            return (
                <div className={props.class} style={{top: props.top, left: props.left, height: props.height, }}>
                </div>
            )
        }

        return (
            <div className={classes.componentBox} >
                
                <TopTitle title="Tell us about any relatives you may have with Parkinson disease?" />

                <SubTitle subtitle="Select the boxes on the family tree below to indicate family members diagnosed with Parkinson disease. When you are done, or if noone in your family has ever been diagnosed with Parkinson disease, click NEXT to go to the next question." />

                <div className={classes.treeContainer}>

                    <TreeButton relative="grandparent" top="25px" left={spacingH} color={familyResult.indexOf("grandparent") >=0 ? "lightgreen" : "white"}/>
                    <TreeButton relative="parent" top={spacingV+25} left={spacingH} color={familyResult.indexOf("parent") >=0 ? "lightgreen" : "white"}/>
                    <TreeButton relative="YOU" top={spacingV*2+25} left={spacingH} color={QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR} bold="bold"/>
                    <TreeButton relative="child" top={spacingV*3+25} left={spacingH} color={familyResult.indexOf("child") >=0 ? "lightgreen" : "white"} />
                    <TreeButton relative="grandchild" top={spacingV*4+25} left={spacingH} color={familyResult.indexOf("grandchild") >=0 ? "lightgreen" : "white"} />
                    <TreeButton relative="brother / sister" top={spacingV*2+25} left={spacingH*4} color={familyResult.indexOf("brother / sister") >=0 ? "lightgreen" : "white"} />
                    <TreeButton relative="uncle / aunt" top={spacingV+25} left={spacingH*4} color={familyResult.indexOf("uncle / aunt") >=0 ? "lightgreen" : "white"} />
                    <TreeButton relative="niece / nephew" top={spacingV*3+25} left={spacingH*4} color={familyResult.indexOf("niece / nephew") >=0 ? "lightgreen" : "white"} />

                    <TreeLink class={classes.treeLinkHorizontal} top={spacingV+25+25} left={spacingH+150} height="5px"/>
                    <TreeLink class={classes.treeLinkHorizontal} top={spacingV*2+25+25} left={spacingH+150} height="5px"/>
                    <TreeLink class={classes.treeLinkVertical} top={25} left={spacingH+75} height="400px"/>
                    <TreeLink class={classes.treeLinkVertical} top={spacingV*2+25+25} left={spacingH*4+75} height="100px"/>
                    </div>

                <BottomNav />

            </div>

        );
    }
}


// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ submitUserFamily }, dispatch);
// }


UserFamily = withRouter(UserFamily)
UserFamily = withStyles(userStylesheet)(UserFamily)
// UserFamily = connect(null, mapDispatchToProps)(UserFamily)
export default UserFamily