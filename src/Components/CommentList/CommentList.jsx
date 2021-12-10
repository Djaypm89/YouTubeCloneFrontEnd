import React from "react";
import Reply from "../Reply/Reply";
import ReplyList from "../ReplyList/ReplyList";
import "./CommentList.css";

const CommentList = (props) => {

    const handleVote = (event) => {
        props.handleVote(event.target.id, event.target.value);
    }

    return (
        <div className="comment-cont">
            {props.displayedComments.map((comments) => {
                return (
                    <h3 key={comments._id}>
                        {comments.commentBody}

                        <button 
                            name="like" 
                            id={comments._id} 
                            value={comments.likes} 
                            onClick={handleVote}>
                                {comments.likes} Like
                        </button>
                        <button 
                            name="dislike" 
                            id={comments._id}
                            value={comments.dislikes} 
                            onClick={handleVote}>
                                {comments.dislikes} Dislike
                        </button>
                        <Reply 
                            commentId={comments._id} 
                            handleReply={props.handleReply} 
                        />
                        <ReplyList 
                            displayedComments={props.displayedComments}
                        />
                    </h3>
                );
            })}
        </div>
    ); 

        
} 

export default CommentList;




