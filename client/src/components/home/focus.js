import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import HomepageSubtitle from './homepageSubtitle'
import DisplayFeature from './displayFeature'
import focusGroupImg from '../../images/focus_group.png';

const styles = (theme) => ({
    responsivePadding : {
        [theme.breakpoints.down('md')]: {
            padding : '0 30px 0 20px',
        }
    }
})

class Focus extends Component {

    render() {

        const { classes } = this.props

        return (
            <div className={classes.responsivePadding}>
                <HomepageSubtitle text="Ever thought about Focus Groups?" />
                <br />
                <br />
                 <DisplayFeature 
                    img={focusGroupImg} 
                    altText="Focus group image" 
                    title="Participating in focus groups." 
                    text="Participating in paid focus groups is a good way to have your say about new ideas and products for Parkinson disease and get paid to do it. Many companies pay focus group participants for their time and views on their products, marketing materials and on their latest innovations. Volunteering for focus groups is quick and easy and we'll get you connected!" 
                />
            </div>
        )
    }
}

Focus = withStyles(styles)(Focus)
export default Focus