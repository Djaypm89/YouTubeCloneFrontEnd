import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchNavBar/SearchBar";
import apiKey from "./ApiKey";


const App = (props) => {
    const [searchCriteria, setSearchCriteria] = useState("");

    useEffect(() => {getVideos()}, [searchCriteria]) 

 

 const handleSubmit = (criteria) => {
    setSearchCriteria(criteria);
}



// console.log above

const getVideos = async () => {

    try{
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchCriteria}&key=${apiKey}`);
    //   let response = await axios.get("localhost: 3001");
      console.log(response)

    }catch (error) {
      console.log("API request error");
    }
  } 



  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
    </div>
  );
 

}




export default App;


//https://www.googleapis.com/youtube/v3/search?q={SEARCH QUERY HERE}&key={API KEY HERE} 



// class App extends Component {
//     constructor (props){
//         super(props);
//         this.state = {
//             searchCriteria: ""
//         }

//     }


// componentDidMount() {
//     this.getVideos();
// }

// handleSubmit = (criteria) => {
//     this.setState({searchCriteria: criteria});
// }

// // console.log above

// async getVideos() {

//     try{
//       let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q={SEARCH QUERY HERE}&key={API KEY HERE} ");
//     //   let response = await axios.get("localhost: 3001");
//       console.log(response)

//     }catch (error) {
//       console.log("API request error");
//     }
//   } 



//   render() {
//       return (
//         <div>
//           <SearchBar handleSubmit={this.handleSubmit} />
//         </div>
//       )};

// }