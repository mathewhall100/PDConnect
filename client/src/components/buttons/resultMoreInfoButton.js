import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { PRIMARY_COLOR } from '../../themes.js'

const styles = () => ({
    buttonStyle: {
        width: "190px",
        height: "30px",
        margin: "10px 20px 20px 20px",
        paddingTop: '6px',
        border: "2px solid grey",
        borderRadius: "10px",
        fontSize: "14px",
        fontWeight: "bold",
        backgroundColor: "lightgrey",
        color: PRIMARY_COLOR,
        '&:hover': {
            backgroundColor: PRIMARY_COLOR,
            fontWeight: "bold",
            color: "white"
        }
    }
})

class resultMoreInfoButton extends PureComponent  {

    handleMoreInfo = (type, item) => {
        this.props.handleMoreInfo(type, item)
    }

    render() {
        const { classes, type, item} = this.props
        return (
            <Button type="button" className={classes.buttonStyle} onClick={() => this.handleMoreInfo(type, item)}>Find Out More</Button>
        )
    }
}

resultMoreInfoButton = withStyles(styles)(resultMoreInfoButton)
export default resultMoreInfoButton