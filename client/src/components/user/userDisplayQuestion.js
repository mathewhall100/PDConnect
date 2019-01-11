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
        const { type, title, questionText, modalText, modalImages, answer, symptomKey, questionKey, active, index } = this.props

        const GetButtons = () => {
            if (type === "set") {
                return <DisplayQuestionButtonSet answer={answer} symptomKey={symptomKey} index={index} handleSelect={this.handleSelect}/>
            } else if (type === "single") {
                return <DisplayQuestionButton index={index} active={active} questionKey={questionKey} handleSelect={this.handleSelect}/>
            } else return null
        }

        const GetSplit = () => {
            if (type === "set") {return 6} else {return 7}
        }


        return (

            <Grid container spacing={24}>
                <Grid item xs={12} sm={12} md={12} lg={GetSplit()}>
                    <DisplayQuestionText title={title} questionText={questionText} modalText={modalText} modalImages={modalImages} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12-GetSplit()}>
                    {GetButtons()}
                </Grid>
            </Grid> 
        )
        
    }
}


export default UserDisplayQuestion