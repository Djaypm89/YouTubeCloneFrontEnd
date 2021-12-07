import React from "react";
import axios from "axios";
import { Component } from 'react';
import SearchBar from "./Components/SearchNavBar/SearchBar";


class App extends Component {
    constructor (props){
        super(props);
        this.state = {
            searchCriteria: ""
        }

    }


componentDidMount() {
    this.getVideos();
}

handleSubmit = (criteria) => {
    this.setState({searchCriteria: criteria});
}

async getVideos() {

    try{
      let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q={SEARCH QUERY HERE}&key={API KEY HERE} ");
    //   let response = await axios.get("localhost: 3001");
      console.log(response)

    }catch (error) {
      console.log("API request error");
    }
  } 



  render() {
      return (
        <div>
          <SearchBar handleSubmit={this.handleSubmit} />
        </div>
      )};

}




export default App;


//https://www.googleapis.com/youtube/v3/search?q={SEARCH QUERY HERE}&key={API KEY HERE} 