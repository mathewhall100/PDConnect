
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { PRIMARY_COLOR } from '../../themes'

const styles = () => ({

    buttonStyle : {
        backgroundColor: "lightgrey",
        fontSize : '18px',
        fontWeight: "bold",
        color: PRIMARY_COLOR,
        border: "2px solid #000080",
        '&:hover': {
            color: 'white',
            backgroundColor: PRIMARY_COLOR
        }
    },
})

class HomepageButton extends PureComponent  {

    render() {
        const { classes, type, text, targetUrl} = this.props

        const LinkButton = () => 
            <Link to={targetUrl} style={{textDecoration: "none"}}>
                <Button type="button" className={classes.buttonStyle}>{text}</Button>
            </Link>
        
        const SubmitButton = () => <Button type="submit" className={classes.buttonStyle}>{text}</Button>

        const RegularButton = () => <Button type="button" className={classes.buttonStyle}>{text}</Button>
        
        return (

             type === "link" ? <LinkButton targetUrl={targetUrl} text={text} /> : type === "submit" ? <SubmitButton text={text}/> : <RegularButton text={text}/> 
            
        )
    }
}

HomepageButton = withStyles(styles)(HomepageButton)
export default HomepageButton
