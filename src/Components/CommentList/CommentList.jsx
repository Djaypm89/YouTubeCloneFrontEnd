import React from "react";
import Reply from "../Reply/Reply";
import "./CommentList.css";

const CommentList = (props) => {

    const handleLike = (event) => {
        
    }

        return (
            <div className="comment-cont">
                {props.displayedComments.map((comments) => {
                    return (
                        <h3 key={comments._id}>
                            {comments.commentBody}
                            <button onClick={handleLike} value={comments.like}>Like</button>
                            <Reply commentId={comments._id} handleReply={props.handleReply} />
                            {comments.replies.map((reply) => {
                                return (
                                    <h4 className="reply">
                                        {reply.replyBody}
                                    </h4>
                                );
                            })}
                        </h3>
                    );
                })}
            </div>
        ); 
} 

export default CommentList;




