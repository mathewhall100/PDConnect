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


import { activity_level } from '../constants';
//import { submitUserFamily} from '../actions/UserFamilyAction'


const styles = theme => ({
    root: {
        paddingTop: "20px",
    },
    componentBox: {
        maxWidth: "800px",
        height: "auto",
        margin: "20px auto",
        border: "1px solid lightgrey",
        padding: "30px 30px 30px 30px"
    },
    titleStyle: {
        textAlign: "center",
        lineHeight: "40px"
    },
    textStyle: {
        marginTop: '40px',
        marginBottom: '40px'
    },
    subtitleStyle: {
        lineHeight: "30px"
    },
    questionText: {
        fontSize: "20px",
    },
    treeContainer: {
        width: "100%",
        height: "500px",
        position: "relative",
    },
    questionBtn: {
        float: "right",
        width: "110px",
        height: "30px",
        marginTop: "5px",
        marginLeft: "25px",
        backgroundColor: "white",
        border: "2px solid grey",
        borderRadius: "5px",
        fontSize: "14px",
        '&:hover': {
            backgroundColor: "lightgrey",
        },
    },
    hr: {
        height: "1px", 
        color:  "lightgrey",
        opacity: 0.5
    },
    labelText: {
        fontSize: "18px"
    },
    inputLabel: {
        fontSize: "18px",
        color: "black"
    },
    helpIcon: {
        Top: "10px",
        paddingBottom: 0,
        marginBottom: 0,
        '&:hover': {
            backgroundColor: "white",
        },
    },
    doneIcon: {
        fontSize: "32px",
        fontWeight: "bold",
        position: "relative",
        top: "-10px"
    },
    helpButton: {
        paddingTop: "15px",
    },
    iconHover: {
        fontSize: "28px",
        '&:hover': {
            color: "darkblue",
        },
    },
    selectLabel: {
        fontSize: "20px",
        fontWeight: "bold"
    },
    errorText: {
        fontSize: "15px", 
        color: "red", 
        position: "relative", 
        left: "-45px", 
        top: "32px"
    },
    treeBtn: {
        width: "150px",
        height: "60px",
        backgroundColor: "white",
        border: "2px solid grey",
        borderRadius: "10px",
        fontSize: "15px",
        position: "absolute",
        '&:hover': {
            backgroundColor: "lightgrey",
        },
    },
    basicBtn: {
        width: "150px",
        height: "30px",
        marginRight: "25px",
        backgroundColor: "white",
        border: "2px solid grey",
        borderRadius: "10px",
        fontSize: "14px",
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
});



 class UserFamily extends Component {

    state = {
        familyResult: [],
        redirect: false,
        redirectAddress : 'test',
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
            redirectAddress: '/'
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
                    <h1 className={classes.titleStyle}>{props.title}</h1>
                    <br />
                    <hr className={classes.hr} />
                    <br />

                </div>
            )
        }

        const SubTitle = (props) => {
            return (
                <div>
                    <h3 className={classes.subtitleStyle}>{props.subtitle}</h3>
                    <br />
                    <hr className={classes.hr}/>
                    <br />
                </div>
            )
        }

        const BottomNav = (props) => {
            return (
                <div>
                    <br />
                    <hr />
                    <br />
                    <Button type="button" color="primary" className={classes.basicBtn} onClick={() => this.handleSubmit()}>NEXT</Button>
                    <Button type="button" color="primary" className={classes.basicBtn} onClick={() => this.handleClearForm()}>CLEAR</Button>  
                    <br />
                </div> 
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
            <section className={classes.root}>
                <div className={classes.componentBox}>
                    
                    <TopTitle title="Tell us about any relatives you may have with Parkinson disease?" />

                    <SubTitle subtitle="Select the boxes on the family tree below to indicate family members diagnosed with Parkinson disease. When you are done, or if noone in your family has ever been diagnosed with Parkinson disease, click NEXT to go to the next question." />

                    <div className={classes.treeContainer}>

                        <TreeButton relative="grandparent" top="25px" left={spacingH} color={familyResult.indexOf("grandparent") >=0 ? "lightgreen" : "white"}/>
                        <TreeButton relative="parent" top={spacingV+25}left={spacingH} color={familyResult.indexOf("parent") >=0 ? "lightgreen" : "white"}/>
                        <TreeButton relative="YOU" top={spacingV*2+25} left={spacingH} color="green" bold="bold"/>
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
            </section>

        );
    }
}


// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ submitUserFamily }, dispatch);
// }


UserFamily = withRouter(UserFamily)
UserFamily = withStyles(styles)(UserFamily)
// UserFamily = connect(null, mapDispatchToProps)(UserFamily)
export default UserFamily