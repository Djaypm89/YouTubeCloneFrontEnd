import React from "react";
import axios from "axios";
import { Component } from 'react';


class App extends Component {
    constructor (props){
        super(props);

    }


componentDidMount() {
    this.getVideos();
}

async getVideos() {
    try{
      let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=funnycatvideo&key=AIzaSyAqVUDwxJvO3FAr4YY49EUZiyIflyfiWWg");
    //   let response = await axios.get("localhost: 3001");
      console.log(response)

    }catch (error) {
      console.log("API request error");
    }
  } 



  render() {
      return (
        <div>
          Hello World
        </div>
      )};

}




export default App;