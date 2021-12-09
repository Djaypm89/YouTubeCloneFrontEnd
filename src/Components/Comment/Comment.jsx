import React, { useState } from "react";
import "./Comment.css";

const Comment = (props) => {
    const [comment, setComment] = useState("");
    
    const onChange = (event) => {
        console.log(event.target.value);
        setComment(event.target.value);
    }

    const handleComment = (event) => {
        event.preventDefault();
        props.handleComment(comment);
    }

    return (
        <div className="comment">
            <form onSubmit={handleComment}>
                <input type="text" onChange={onChange}/>
                <button type="submit">Submit</button>               
            </form>
        </div>
    );
} 

export default Comment;