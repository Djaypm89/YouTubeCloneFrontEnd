import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchNavBar/SearchBar";
import apiKey from "./ApiKey";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";


const App = (props) => {
    const [searchCriteria, setSearchCriteria] = useState("");
    const [saveSearch, setSaveSearch] = useState([])
    useEffect(() => {getVideos()}, [searchCriteria]) 

 

 const handleSubmit = (criteria) => {
    setSearchCriteria(criteria);
}



// console.log above

const getVideos = async () => {

    try{
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchCriteria}&key=${apiKey}`);
    //   let response = await axios.get("localhost: 3001");
      console.log(response.data.items[0].id.videoId)
      setSaveSearch(response.data.items[0].id) 
    }catch (error) {
      console.log("API request error");
    }
  } 



  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      <VideoPlayer video={saveSearch} />
    </div>
  );
 

}




export default App;


//https://www.googleapis.com/youtube/v3/search?q={SEARCH QUERY HERE}&key={API KEY HERE} 
