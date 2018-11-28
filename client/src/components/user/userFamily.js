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
import { submitUserFamily, updateStepperCount, submitReview} from '../../actions/index.js'


 class UserFamily extends Component {

    state = {
        familyResult: [],
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
        let tempArray = this.state.familyResult
        const index= tempArray.indexOf(rel)
        if (tempArray[0] === "none") {tempArray.splice(0,1)}
        if (index < 0 && rel !== "YOU") {tempArray.push(rel)}
            else if (index >= 0) {tempArray.splice(index, 1)}
        this.setState({familyResult: tempArray})
    }

    handleNext = () => {
        const { familyResult } = this.state
        console.log("submit - familyResult:, ", familyResult)
        if (familyResult.length === 0) {familyResult[0] = "none"}
        this.props.submitUserFamily({family: familyResult})
        if (this.props.review.redirect) {
            this.props.submitReview(false);
            this.props.history.push('/user/user_review');
        } else {
            this.props.history.push(this.state.redirectAddress)
        }

    }

    render() {

        const { handleSubmit, pristine, submitting, classes } = this.props
        const { familyResult } = this.state
        const SELECTED_BUTTON_COLOR = "#ffcc66"
        const spacingH = 90
        const spacingV = 100

        const TreeButton = (props) => {
            return (
                <Button type="button" className={classes.treeBtn} style={{top: props.top, left: props.left, backgroundColor: props.color }} onClick={() => this.handleTreeBtnClicked(props.relative)}>{props.relative}</Button>
            )
        }

        const TreeLink = (props) => {
            return (
                <div className={props.class} style={{top: props.top, left: props.left, height: props.height, }}>
                </div>
            )
        }

        return (
            <section>
                <div className={classes.componentBox} >

                    <p className={classes.sectionTitle}>Click all that apply</p>
                    <br />

                    <div className={classes.treeContainer}>

                        <TreeButton relative="grandparent" top="25px" left={spacingH} color={familyResult.indexOf("grandparent") >=0 ? SELECTED_BUTTON_COLOR : "white"}/>
                        <TreeButton relative="parent" top={spacingV+25} left={spacingH} color={familyResult.indexOf("parent") >=0 ? SELECTED_BUTTON_COLOR : "white"}/>
                        <TreeButton relative="YOU" top={spacingV*2+25} left={spacingH} color="#ff9900" />
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

                     <Button type="button" type="variant" className={classes.userNavButtonRight} onClick={() => this.handleNext()}>SAVE AND CONTINUE</Button>

                </div>



            </section>

        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitUserFamily, updateStepperCount, submitReview }, dispatch);
}

const mapStateToProps = (state) => {
    console.log("state: ", state)
    return {
        userFamily: state.family.family,
        review: state.review,
    }
}


UserFamily = withRouter(UserFamily)
UserFamily = withStyles(userStylesheet)(UserFamily)
UserFamily = connect(mapStateToProps, mapDispatchToProps)(UserFamily)
export default UserFamily