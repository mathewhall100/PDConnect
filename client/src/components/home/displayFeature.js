import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
    mobileImg : {
        display : 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            textAlign: 'center',
            margin: 'auto',
            minHeight: '250px',
            alignItems: 'middle',
            padding : '40px 0 40px 0',
        },
    },
    treatmentImg: {
        maxWidth: '90%',
        textAlign : 'right',
    },
    aboutImgContainer: {
        textAlign: 'right',
        [theme.breakpoints.down('sm')]: {
            display : 'none',
        },
    },
})

    class DisplayFeature extends PureComponent  {
        render() {
            const { classes, img, altText, title, text} = this.props
            return (
                <Grid container spacing={24} >

                    <Grid item xs={1}></Grid>

                    <Grid item md={5} xs={12} className={classes.mobileImg}>
                        <img src={img} alt={altText} className={classes.treatmentImg} />
                    </Grid>

                    <Grid item md={5} xs={12}>
                        <h3 style={{paddingLeft: "20px"}}>{title}</h3>
                        <div style={{paddingLeft: "20px", paddingTop: "20px"}}>{text}</div>
                    </Grid>

                    <Grid item md={5} xs={12} className={classes.aboutImgContainer}>
                        <img src={img} alt={altText} className={classes.treatmentImg} />
                    </Grid>

                    <Grid item xs={1}></Grid>

                </Grid>
            )
        }
    }

DisplayFeature = withStyles(styles)(DisplayFeature)
export default DisplayFeature