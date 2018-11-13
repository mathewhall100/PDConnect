import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { stylesheet } from '../../styles';
import DoneIcon from '@material-ui/icons/Done';
import image from '../../images/rawpixel-600792-unsplash.jpg'
import image2 from '../../images/jess-watters-701054-unsplash.jpg'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Parallax } from 'react-scroll-parallax';

class Hero extends Component {
    
    render(){
        const { classes } = this.props;
        return(
            <div>
                <div className={classes.parallax}></div>
            
                <Grid container spacing={24} className={classes.hero}>
                    <Card className={classes.card}>
                        
                        <div className={classes.content}>
                            
                            <span className={classes.heroTitle}>
                                Individualized Parkinsons Treatments <br/>
                                To Discuss With Your Neurologist <br />
                                <DoneIcon /><span className={classes.heroList}>up-to-date treatments</span><br />
                                <DoneIcon /><span className={classes.heroList}>patient first dedication</span><br />
                                <DoneIcon /><span className={classes.heroList}>various clinical trials</span><br />
                                <DoneIcon /><span className={classes.heroList}>focus groups recommendation</span>
                                <Button variant='contained' color='primary' style={{display : 'block' , textAlign: 'right'}}>Find Out How</Button>
                            </span>
                            
                        </div>
                    </Card>
                        
                </Grid> 
                
            </div>
        )
    }
} 
Hero = withStyles(stylesheet)(Hero)
export default Hero;