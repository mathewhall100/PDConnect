
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    mediaPosn: {
        margin: "10px 20px 20px 0",
        textAlign: "center",
        [theme.breakpoints.down('md')]: {
            margin: "60px 20px 0 0",
            textAlign: "center"
        },
        [theme.breakpoints.down('sm')]: {
            margin: "0 20px",
            textAlign: "center"
        }
    }
})
   
class ResultDisplayMedia extends Component  {

    state = {
        screenWidth: 1600
    }

    componentDidMount() {
        window.addEventListener("resize", this.mediaResize)
        this.mediaResize()
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.mediaResize)
    }

    mediaResize = () => {
        this.setState({screenWidth: window.innerWidth})
    }

    getWidth = (maxW) => {
        let screenWidth = this.state.screenWidth
        if (screenWidth > 1285) {return maxW}
        else if (screenWidth > 960) {return maxW*0.75}
        else if (screenWidth > 526) {return maxW}
        else  {return maxW*0.75}
    }

    getHeight = (maxH) => {
        let screenWidth = this.state.screenWidth
        console.log(screenWidth, " ", maxH)
        if (screenWidth > 1285) {return maxH}
        else if (screenWidth > 960) {return maxH*0.75}
        else if (screenWidth > 526) {return maxH}
        else  {return maxH*0.75}
    }

    render() {
        const { mediaType, mediaLink, width, height, classes } = this.props

        const DisplayVideo = () =>  <iframe src={mediaLink} width={this.getWidth(width)} height={this.getHeight(height)} frameBorder="1" allowFullScreen={true} title="media video" ></iframe> 
        const DisplayImage = () =>  <img src={mediaLink} width={this.getWidth(width)} height={this.getHeight(height)} alt="media"></img> 
        const DisplayDefault = () => <div >Sorry there is no media to display.</div>
            
        return (
            <div className={classes.mediaPosn}>
                {mediaType === "video" ? <DisplayVideo mediaLink={mediaLink}/> : mediaType === "image" ? <DisplayImage mediaLink={mediaLink}/> : <DisplayDefault /> }
            </div>
        )
    }
}

ResultDisplayMedia = withStyles(styles)(ResultDisplayMedia)
export default ResultDisplayMedia