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

        const GetSplit = () => {
            if (type === "set") {return 6} else {return 8}
        }


        return (

            <Grid container spacing={24}>
                <Grid item xs={12} sm={12} md={12} lg={GetSplit()}>
                    <DisplayQuestionText {...this.props} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12-GetSplit()}>
                    {GetButtons()}
                </Grid>
            </Grid> 
        )
        
    }
}


export default UserDisplayQuestion