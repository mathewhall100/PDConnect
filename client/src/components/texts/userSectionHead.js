import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';

const style = () => ({ 
    textStyle: {
        fontStyle: "italic",
    },
})

class UserSectionHead extends PureComponent  {
    render() {
        const { classes, text} = this.props
        return (
            <React.Fragment>
                <p className={classes.textStyle}>{text}</p>
            </React.Fragment>
        )
    }
}

UserSectionHead = withStyles(style)(UserSectionHead)
export default UserSectionHead