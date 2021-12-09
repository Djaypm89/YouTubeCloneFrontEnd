import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
    const [searchCriteria, setSearchCriteria] = useState("")

    const handleChange = (event) => {
        setSearchCriteria(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleSubmit(searchCriteria);
    }

    return (
        <nav className="navbar">
            <h1>Youtube Clone</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text"/>
                <button type="submit">Search</button>               
            </form>
        </nav>
    );
} 

export default SearchBar;
