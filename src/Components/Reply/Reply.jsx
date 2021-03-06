import React, { useState, useEffect } from "react";

const Reply = (props) => {

    const [reply, setReply] = useState("");
    const [commentId, setCommentId] = useState("");

    useEffect (() => {saveCommentId()}, []);

    const saveCommentId = () => {
        setCommentId(props.commentId);
    }

    const handleChange = (event) => {
        setReply(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleReply(reply, commentId);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Reply to Comment
                <input type="text" onChange={handleChange}></input>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Reply;