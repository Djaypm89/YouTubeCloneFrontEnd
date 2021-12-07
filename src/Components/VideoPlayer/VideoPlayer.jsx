import React from 'react'
const VideoPlayer = (props) => {
    return(
        <iframe 
            id="ytplayer" 
            type="text/html" 
            width="640" 
            height="360"
            title={props.video.videoId}
            src={`https://www.youtube.com/embed/${props.video.videoId}?autoplay=1&origin=http://example.com`}
            frameborder="0" />)
}

// use iframe
export default VideoPlayer;