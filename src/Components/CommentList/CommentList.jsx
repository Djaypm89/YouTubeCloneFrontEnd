import React from "react";
import Reply from "../Reply/Reply";
import ReplyList from "../ReplyList/ReplyList";
import "./CommentList.css";

const CommentList = (props) => {

    return (
        <div className="comment-cont">
            {props.displayedComments.map((comments) => {
                return (
                    <h3 key={comments._id}>
                        {comments.commentBody}
                        <button>Like</button>
                        <Reply commentId={comments._id} handleReply={props.handleReply} />
                        <ReplyList displayedComments={props.displayedComments}/>
                    </h3>
                );
            })}
        </div>
    ); 

        
} 

export default CommentList;




