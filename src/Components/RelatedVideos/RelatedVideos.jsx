import React from "react";
import "./RelatedVideos.css";

const RelatedVideos = (props) => {
    return(
        <div className="rel-vid">
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