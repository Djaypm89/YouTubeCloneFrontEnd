import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchNavBar/SearchBar";
import apiKey from "./ApiKey";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import RelatedVideos from "./Components/RelatedVideos/RelatedVideos";
import Comment from "./Components/Comment/Comment";
// import { CorsRequest } from "cors";

const App = (props) => {
  const [searchCriteria, setSearchCriteria] = useState("");
  const [mainVideo, setMainVideo] = useState([]);
  const [relatedVideos, setRelatedVideo] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {getVideos()}, [searchCriteria])
  useEffect(() => {getRelatedVideos()},[mainVideo]);
  useEffect(() => {postComment()},[comment]);

  const handleSubmit = (criteria) => {
    setSearchCriteria(criteria);
  }

  const handleComment = (userComment) => {
    console.log("Comment Successs!");
    setComment(userComment);
  }

  const getVideos = async () => {

    try{
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchCriteria}&key=${apiKey}`);
      setMainVideo(response.data.items[0].id) 
    }catch (error) {
      console.log("API request error");
    }
  }
  
  const getRelatedVideos = async () => {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${mainVideo.videoId}&type=video&key=${apiKey}`);
      console.log(response.data.items);
      setRelatedVideo(response.data.items);
    } catch (error) {
      console.log("Related Videos Error!");
    }
  }

  const postComment = async () => {
      try {
          let response = await axios.post('http://localhost:5000/api/comments', { videoId: mainVideo.videoId, commentBody: comment });
          console.log(response);
      } catch (error) {
          console.log("Comment Error!");
      }
  }

  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      <VideoPlayer video={mainVideo} />
      <RelatedVideos relatedVideos={relatedVideos} />
      <Comment handleComment={handleComment}/>
    </div>
  );
 
}

export default App;

//https://www.googleapis.com/youtube/v3/search?q={SEARCH QUERY HERE}&key={API KEY HERE} 
