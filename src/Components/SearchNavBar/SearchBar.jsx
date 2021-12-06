import React from "react";

const SearchBar = (props) => {
    return (
        <nav>
            <form>
                <input type="text"/>
                <button type="submit">Search</button>               
            </form>
        </nav>
    );
} 

export default SearchBar;
