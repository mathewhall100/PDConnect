import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { PRIMARY_COLOR } from '../../themes.js'

const styles = () => ({
    buttonStyle : { 
        color: 'white',
        backgroundColor: PRIMARY_COLOR,
        border: "2px solid #000080",
        borderRadius: "6px",
        fontWeight: "bold",
        fontSize: "14px",
        outline: "none !important",
        '&:hover': {
            backgroundColor: "lightgrey",
            color: PRIMARY_COLOR,
        },
        '&:disabled' : {
            color : "grey",
            backgroundColor : 'lightgrey',
            borderColor : 'grey',
        }
    },
})

class UserNavButton extends PureComponent  {

    handleBtn() {
        this.props.handleBtn()
    }

    render() {
        const { classes, type, width, text } = this.props
        return (
            <Button 
                type={type} 
                className={classes.buttonStyle} 
                style={{width: width}} 
                onClick={() => { type !== "submit" ? this.handleBtn() : null } }
            >
                {text}
            </Button>
        )
    }
}

UserNavButton = withStyles(styles)(UserNavButton)
export default UserNavButton