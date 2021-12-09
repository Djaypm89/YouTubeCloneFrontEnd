//IMPORTS:
import React, { useEffect, useState } from "react";
import axios from "axios";
import apiKey from "./ApiKey";

//COMPONENT IMPORTS:
import SearchBar from "./Components/SearchNavBar/SearchBar";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import RelatedVideos from "./Components/RelatedVideos/RelatedVideos";
import Comment from "./Components/Comment/Comment";
import CommentList from "./Components/CommentList/CommentList";


const App = (props) => {

  //STATE:
  const [searchCriteria, setSearchCriteria] = useState("");
  const [mainVideo, setMainVideo] = useState(null);
  const [relatedVideos, setRelatedVideo] = useState([]);
  const [comment, setComment] = useState("");
  const [displayedComments, setDisplayedComments] = useState([]);
  const [reply, setReply] = useState("");
  const [commentId, setCommentId] = useState("");

  //USE EFFECT:
  useEffect(() => {getVideos()}, [searchCriteria]);
  useEffect(() => {getRelatedVideos()},[mainVideo]);
  useEffect(() => {postComment()},[comment]);
  useEffect(() => {getRelatedComments()},[mainVideo]);
  useEffect(() => {postReply()}, [reply]);

  const handleSubmit = (criteria) => {
    setSearchCriteria(criteria);
  }

  const handleComment = (userComment) => {
    setComment(userComment);
  }

  const handleReply = (userReply, commentId) => {
    setReply(userReply);
    setCommentId(commentId);
  }

  //API CALLS///////////////////////////////////////////

  //GETS VIDEOS FROM YOUTUBE API:
  const getVideos = async () => {

    try{
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchCriteria}&key=${apiKey}&part=snippet&type=video`);
      setMainVideo(response.data.items[0]) 
    }catch (error) {
      console.log("Couldn't Receive Videos from Youtube API!");
    }
  }
  
  //GETS RELATED VIDEOS WITH SELECTED VIDEO ID:
  const getRelatedVideos = async () => {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${mainVideo.id.videoId}&type=video&key=${apiKey}`);
      setRelatedVideo(response.data.items);
    } catch (error) {
      console.log("Couldn't Receive Related Videos!");
    }
  }

  //SAVES COMMENT TO DATABASE:
  const postComment = async () => {
      try {
          let response = await axios.post('http://localhost:5000/api/comments', { videoId: mainVideo.id.videoId, commentBody: comment });
      } catch (error) {
          console.log("Couldn't POST Comment to Database!");
      }
  }

  //SAVES REPLY INTO DATABASE:
  const postReply = async () => {
    try {
      let response = await axios.post(`http://localhost:5000/api/comments/${commentId}/replies`, { replyBody: reply });
    } catch (error) {
      console.log("Couldn't POST Reply to Database!");
    }
  }

  //GETS COMMENTS AND REPLIES FOR SELECTED VIDEO:
  const getRelatedComments = async () => {
      try {
          let response = await axios.get(`http://localhost:5000/api/comments/${mainVideo.id.videoId}`);
          setDisplayedComments(response.data);
      } catch (error) {
          console.log("Couldn't Load Comments from Database!");
      }
  }
  //API CALL END//////////////////////////////////////////////////

  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      {mainVideo && <VideoPlayer video={mainVideo} />}
      <RelatedVideos relatedVideos={relatedVideos} />
      <Comment handleComment={handleComment} />
      <CommentList displayedComments={displayedComments} handleReply={handleReply}/>
    </div>
  );
 
}

export default App;

//https://www.googleapis.com/youtube/v3/search?q={SEARCH QUERY HERE}&key={API KEY HERE} 
