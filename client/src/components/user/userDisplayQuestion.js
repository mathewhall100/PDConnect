import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid'
import DisplayQuestionText from '../commons/displayQuestionText'
import DisplayQuestionButtonSet from '../commons/displayQuestionButtonSet'
import DisplayQuestionButton from '../commons/displayQuestionButton';


class UserDisplayQuestion extends PureComponent  {

    handleSelect = (index, choice, key) => {
        this.props.handleSelect(index, choice, key)
    }

    render() {
        const { type } = this.props

        const GetButtons = () => {
            if (type === "set") {
                return <DisplayQuestionButtonSet {...this.props}/>
            } else if (type === "single") {
                return <DisplayQuestionButton {...this.props}/>
            } else return null
        }

        const GetSplitLg = () => {
            if (type === "set") {return 6} else {return 8}
        }

        const GetSplitMdL = () => {
            if (type === "set") {return 12} else {return 8}
        }
        
        const GetSplitMdR = () => {
            if (type === "set") {return 12} else {return 4}
        }
        const GetSplitSmL = () => {
            if (type === "set") {return 6} else {return 9}
        }
        
        const GetSplitSmR = () => {
            if (type === "set") {return 6} else {return 3}
        }
        const GetSplitXsL = () => {
            if (type === "set") {return 12} else {return 9}
        }
        
        const GetSplitXsR = () => {
            if (type === "set") {return 12} else {return 3}
        }


        return (

            <Grid container spacing={24}>
                <Grid item xs={GetSplitXsL()} sm={GetSplitSmL()} md={GetSplitMdL()} lg={GetSplitLg()}>
                    <DisplayQuestionText {...this.props} />
                </Grid>
                <Grid item xs={GetSplitXsR()} sm={GetSplitSmR()} md={GetSplitMdR()} lg={12-GetSplitLg()}>
                    {GetButtons()}
                </Grid>
            </Grid> 
        )
        
    }
}


export default UserDisplayQuestion