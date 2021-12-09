import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchNavBar/SearchBar";
import apiKey from "./ApiKey";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import RelatedVideos from "./Components/RelatedVideos/RelatedVideos";
import Comment from "./Components/Comment/Comment";
import CommentList from "./Components/CommentList/CommentList";


const App = (props) => {
  const [searchCriteria, setSearchCriteria] = useState("");
  const [mainVideo, setMainVideo] = useState([]);
  const [relatedVideos, setRelatedVideo] = useState([]);
  const [comment, setComment] = useState("");
  const [displayedComments, setDisplayedComments] = useState([]);

  useEffect(() => {getVideos()}, [searchCriteria]);
  useEffect(() => {getRelatedVideos()},[mainVideo]);
  useEffect(() => {postComment()},[comment]);
  useEffect(() => {getRelatedComments()},[mainVideo]);

  const handleSubmit = (criteria) => {
    setSearchCriteria(criteria);
  }

  const handleComment = (userComment) => {
    setComment(userComment);
  }

  const getVideos = async () => {

    try{
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchCriteria}&key=${apiKey}`);
      setMainVideo(response.data.items[0].id) 
    }catch (error) {
      console.log("Couldn't Receive Videos from Youtube API!");
    }
  }
  
  const getRelatedVideos = async () => {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${mainVideo.videoId}&type=video&key=${apiKey}`);
      setRelatedVideo(response.data.items);
    } catch (error) {
      console.log("Couldn't Receive Related Videos!");
    }
  }

  const postComment = async () => {
      try {
          let response = await axios.post('http://localhost:5000/api/comments', { videoId: mainVideo.videoId, commentBody: comment });
      } catch (error) {
          console.log("Couldn't POST Comment to Database!");
      }
  }

  const getRelatedComments = async () => {
      try {
          let response = await axios.get(`http://localhost:5000/api/comments/${mainVideo.videoId}`);
          setDisplayedComments(response.data);
      } catch (error) {
          console.log("Couldn't Load Comments from Database!");
      }
  }

  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      <VideoPlayer video={mainVideo} />
      <RelatedVideos relatedVideos={relatedVideos} />
      <Comment handleComment={handleComment}/>
      <CommentList displayedComments={displayedComments}/>
    </div>
  );
 
}

export default App;

//https://www.googleapis.com/youtube/v3/search?q={SEARCH QUERY HERE}&key={API KEY HERE} 
