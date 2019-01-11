import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import { submitUserFamily, updateStepperCount, submitReview} from '../../actions/index.js'
import UserNavButton from '../buttons/userNavButton'
import UserSectionHead from '../texts/userSectionHead';

const styles = () => ({
    treeContainer: {
        width: "800px",
        height: "500px",
        position: "relative",
     },
    treeBtn: {
        width: "150px",
        height: "60px",
        backgroundColor: "white",
        border: "2px solid grey",
        borderRadius: "10px",
        fontSize: "15px",
        fontWeight: "bold",
        position: "absolute",
        '&:hover': {
            backgroundColor: "lightgrey",
        },
     },
    treeLinkHorizontal: {
        width: "120px",
        backgroundColor: "lightgrey",
        position: "absolute",
        zIndex: -100
    },
    treeLinkVertical: {
        width: "5px",
        backgroundColor: "lightgrey",
        position: "absolute",
        zIndex: -100
    },
})


 class UserFamily extends Component {

    state = {
        familyResult: [],
        redirectAddress : '/user/user_meds'
    }

    componentDidMount() {
        window.scroll(0,0)
        this.props.updateStepperCount()
        const index=this.props.userFamily
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
            this.props.submitReview(false)
            this.props.history.push('/user/user_review')
        } else {
            this.props.history.push(this.state.redirectAddress)
        }
    }

    render() {

        const { classes } = this.props
        const { familyResult } = this.state
        const SELECTED_BUTTON_COLOR = "#ffcc66"
        const SPACING_H = 90
        const SPACING_V = 100

        const TreeButton = props => 
            <Button 
                type="button"
                className={classes.treeBtn} 
                style={{
                    top: props.top, 
                    left: props.left,
                    backgroundColor: props.relative === "YOU" ? "#ff9900" : familyResult.indexOf(props.relative) >= 0 ? SELECTED_BUTTON_COLOR : "white" 
            }} 
                onClick={() => this.handleTreeBtnClicked(props.relative)} 
             >
                {props.relative} 
            </Button>

        const TreeLink = props =>  <div className={props.class} style={{top: props.top, left: props.left, height: props.height }} />

        const treeButtons = [
            { relative: "YOU", v: 2, h: 1 },
            { relative: "grandparent", v: 0, h: 1 },
            { relative: "parent", v: 1, h: 1 },
            { relative: "child", v: 3, h: 1 },
            { relative: "grandchild", v: 4, h: 1 },
            { relative: "brother / sister", v: 2, h: 4 },
            { relative: "uncle / aunt", v: 1, h: 4 },
            { relative: "niece / nephew", v: 3, h: 4 }
        ]

        return (
            <React.Fragment>
                
                <UserSectionHead text="Click all that apply" /><br />
                
                <div className={classes.treeContainer}>

                    { treeButtons.map((btn, idx) => <TreeButton key={idx} relative={btn.relative} top={SPACING_V*btn.v+25} left={SPACING_H*btn.h} /> )}

                    <TreeLink class={classes.treeLinkHorizontal} top={SPACING_V+50} left={SPACING_H+150} height="5px"/>
                    <TreeLink class={classes.treeLinkHorizontal} top={SPACING_V*2+50} left={SPACING_H+150} height="5px"/>
                    <TreeLink class={classes.treeLinkVertical} top={25} left={SPACING_H+75} height="400px"/>
                    <TreeLink class={classes.treeLinkVertical} top={SPACING_V*2+50} left={SPACING_H*4+75} height="100px"/>

                    </div>

                    <br /><br />
                    <UserNavButton type="button" width="100%" text="SAVE AND CONTINUE" handleBtn={this.handleNext} />

            </React.Fragment>
        )
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
UserFamily = withStyles(styles)(UserFamily)
UserFamily = connect(mapStateToProps, mapDispatchToProps)(UserFamily)
export default UserFamily