import React from "react";

const RelatedVideos = (props) => {
    console.log("From Related:");
    console.log(props.relatedVideos);
    return(
        <div>
            {props.relatedVideos.map((videos) => {
                return (
                    <iframe 
                            key={videos.id.videoId}
                            id="ytplayer" 
                            type="text/html" 
                            width="100" 
                            height="100"
                            title= ""
                            src={`https://www.youtube.com/embed/${videos.id.videoId}`}
                            frameborder="0" 
                        />);
            })}
        </div>)
}

export default RelatedVideos;