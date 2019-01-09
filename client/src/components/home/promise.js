import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import HomepageSubtitle from './homepageSubtitle'
import noSellIcon from '../../images/avatar/no-coin.png'
import secureIcon from '../../images/avatar/secure.png'
import treatmentInfoIcon from '../../images/avatar/healtcare2.png'
import { PRIMARY_COLOR, PRIMARY_COLOR_HOVER, SECONDARY_COLOR } from '../../themes'

const styles = (theme) => ({    
    
    promiseCube : {
        minHeight : '250px',
        padding : '20px 20px 20px 20px',
        [theme.breakpoints.down('md')]: {
            margin : '15px',
            minHeight: '190px',
        },
    },
    promiseTitle: {
        fontSize: '23px',
        margin: 'auto',
        paddingTop :'15px',
        textAlign: 'center',
        color: 'white',
    },
    promiseIconContainer : {
        textAlign : 'center',
    },
    promiseIcon : {
        maxWidth : '50px',
        maxHeight: '50px',
        margin: '20px',
    },
    promiseDescription : {
        color : 'white',
        fontSize : '16px',
        textAlign : 'center',
        maxWidth: '70%',
        margin: 'auto',
    },
    wow : {
        background: PRIMARY_COLOR_HOVER,

        height : '350px',
        margin: '20px 0 20px 0',
        '&:hover': {
            height: '350px',
            background: SECONDARY_COLOR,
            color : `${PRIMARY_COLOR} !important`,
        },
        [theme.breakpoints.down('md')]: {
            margin: '15px',
            minHeight: '200px',

        },
    }
})

class Promises extends Component {

    render() {
        const { classes } = this.props

        const RenderPromise = props => 

                <Grid  xs={12} item md={4} lg={4} className={classes.promiseCube}>
                    <div className={classes.wow} style={{ transition: 'all .7s ease'}}>
                        <div className={classes.promiseTitle}>{props.title}</div>
                        <div className={classes.promiseIconContainer}>
                            <img className={classes.promiseIcon} src={props.icon} alt={props.altTxt} />
                        </div>
                        <div className={classes.promiseDescription}>{props.text}</div>
                    </div>
                </Grid>

        const promises = [
            {title: "Your data is secure", icon: secureIcon, altTxt: "secure data", text: "We treat security very seriously and any personal health information you give us is stored in accordance with data protection law, the Health Information Portability and Accountability Act (HIPAA) and on secure servers." },
            {title: "Your data is private", icon: noSellIcon, altTxt: "we do not sell data", text: "We take your data privacy very seriously and we will never share or sell your data to any third party without asking you first."},
            {title: "Our information is up to date", icon: treatmentInfoIcon, altTxt: "secure data", text: "Our website aims to provide you with the latest and most up-to-date information about Parkinson treatments, clinical trials and other knowledge areas and we will make every effort to ensure the information we provide to you is accurate and regularly audited and updated."}
        ]

        return (
            <React.Fragment>
                <HomepageSubtitle text="Our promise"  color="#FFF"/> 
                <br />
                <Grid container spacing={24} className={classes.promiseRowContainer} >
                    { promises.map((promise, idx) => <RenderPromise key={idx} title={promise.title} icon={promise.icon} altTxt={promise.altTxt} text={promise.text} /> )}
                </Grid>
            </React.Fragment>
        )
    }
}
Promises = withStyles(styles)(Promises)
export default Promises;