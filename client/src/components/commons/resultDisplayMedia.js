
import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    mediaPosn: {
        margin: "10px 20px 20px 0"
    }
})
   
class ResultDisplayMedia extends PureComponent  {

    render() {
        const { mediaType, mediaLink, width, height, classes } = this.props

        const DisplayVideo = () =>  <iframe src={mediaLink} width={width} height={height} frameBorder="1" allowFullScreen={true} title="media video" ></iframe> 
        const DisplayImage = () =>  <img src={mediaLink} width={width} height={height} alt="media"></img> 
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