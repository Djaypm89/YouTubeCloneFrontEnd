import React from 'react'
const VideoPlayer = (props) => {
    console.log(props.video.id.videoId);
    const videoId = props.video.id.videoId;
    return(
        <div>
            <iframe 
            id="ytplayer" 
            type="text/html" 
            width="640" 
            height="360"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameborder="0" />
            <h3>{props.video.snippet.title}</h3>
            <h4>{props.video.snippet.description}</h4>
        </div>
    );
}

export default VideoPlayer;