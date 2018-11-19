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
import { submitUserFamily, updateStepperCount} from '../../actions/index.js'
import BottomNav from '../commons/userBottomNav'
import TopTitle from '../commons/userTopTitle'
import SubTitle from '../commons/userSubTitle'


 class UserFamily extends Component {

    state = {
        familyResult: [],
        redirect: false,
        redirectAddress : '/user/user_meds',
    }  

    componentDidMount() {
        window.scroll(0,0)
        this.props.updateStepperCount()
        const index=this.props.userFamily
        console.log("userFamily: ", index)
        if (index) {
            this.setState({familyResult: index})
        }
    }

    handleTreeBtnClicked = (rel) => {
        console.log("treebuttonClicked : ",  rel)
        if (this.state.familyResult.indexOf(rel) < 0 && rel !== "YOU") {
            let tempArray = this.state.familyResult
            tempArray.push(rel)
            this.setState({familyResult: tempArray})
        }
    }

    handleNext = () => {
        const { familyResult } = this.state
        console.log("submit - familyResult:, ", familyResult)
        if (familyResult.length > 0) {
            this.props.submitUserFamily( {
                family: familyResult,
            })
        } 
        this.setState({redirect: true})
    }
    
    handleClearForm() {
        console.log("clear form")
        this.setState({familyResult: []})
    }

    handleBack = () => {
        this.setState({
            redirectAddress: '/user/user_life'}, () => this.setState({redirect: true}) )
    }


    render() {

        const { handleSubmit, pristine, submitting, classes } = this.props
        const { redirect, redirectAddress, familyResult } = this.state
        const SELECTED_BUTTON_COLOR = "lightgreen"
        const spacingH = 90
        const spacingV = 100

        if (redirect) { 
            const url = `${redirectAddress}`;
            console.log("redirect to .. " + url);
            return<Redirect to={url} />;
        }

        const TreeButton = (props) => {
            return (
                <Button type="button" className={classes.treeBtn} style={{top: props.top, left: props.left, backgroundColor: props.color, fontWeight: props.bold}} onClick={() => this.handleTreeBtnClicked(props.relative)}>{props.relative}</Button>
            )
        }
        
        const TreeLink = (props) => {
            return (
                <div className={props.class} style={{top: props.top, left: props.left, height: props.height, }}>
                </div>
            )
        }

        return (
            <div className={classes.componentBox} >
                
                <div className={classes.treeContainer}>

                    <TreeButton relative="grandparent" top="25px" left={spacingH} color={familyResult.indexOf("grandparent") >=0 ? SELECTED_BUTTON_COLOR : "white"}/>
                    <TreeButton relative="parent" top={spacingV+25} left={spacingH} color={familyResult.indexOf("parent") >=0 ? SELECTED_BUTTON_COLOR : "white"}/>
                    <TreeButton relative="YOU" top={spacingV*2+25} left={spacingH} color={QUESTION_BUTTON_ACTIVE_PRIMARY_COLOR} bold="bold"/>
                    <TreeButton relative="child" top={spacingV*3+25} left={spacingH} color={familyResult.indexOf("child") >=0 ? SELECTED_BUTTON_COLOR : "white"} />
                    <TreeButton relative="grandchild" top={spacingV*4+25} left={spacingH} color={familyResult.indexOf("grandchild") >=0 ? SELECTED_BUTTON_COLOR : "white"} />
                    <TreeButton relative="brother / sister" top={spacingV*2+25} left={spacingH*4} color={familyResult.indexOf("brother / sister") >=0 ? SELECTED_BUTTON_COLOR : "white"} />
                    <TreeButton relative="uncle / aunt" top={spacingV+25} left={spacingH*4} color={familyResult.indexOf("uncle / aunt") >=0 ? SELECTED_BUTTON_COLOR : "white"} />
                    <TreeButton relative="niece / nephew" top={spacingV*3+25} left={spacingH*4} color={familyResult.indexOf("niece / nephew") >=0 ? SELECTED_BUTTON_COLOR : "white"} />

                    <TreeLink class={classes.treeLinkHorizontal} top={spacingV+25+25} left={spacingH+150} height="5px"/>
                    <TreeLink class={classes.treeLinkHorizontal} top={spacingV*2+25+25} left={spacingH+150} height="5px"/>
                    <TreeLink class={classes.treeLinkVertical} top={25} left={spacingH+75} height="400px"/>
                    <TreeLink class={classes.treeLinkVertical} top={spacingV*2+25+25} left={spacingH*4+75} height="100px"/>
                    </div>

                <BottomNav handleNext={this.handleNext} handleBack={this.handleBack}/>

            </div>

        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitUserFamily, updateStepperCount }, dispatch);
}

const mapStateToProps = (state) => {
    console.log("state: ", state)
    return {
        userFamily: state.family.family
    }
}


UserFamily = withRouter(UserFamily)
UserFamily = withStyles(userStylesheet)(UserFamily)
UserFamily = connect(mapStateToProps, mapDispatchToProps)(UserFamily)
export default UserFamily