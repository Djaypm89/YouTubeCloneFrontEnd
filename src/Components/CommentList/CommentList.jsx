// mongoose returns comments in array 
// map over comment array to place each comment in its own div tag 
// 

import React from "react";
import Reply from "../Reply/Reply";
import "./CommentList.css";

const CommentList = (props) => {

        return (
            <div className="comment-cont">
                {props.displayedComments.map((comments) => {
                    return (
                        <h3 key={comments._id}>
                            {comments.commentBody}
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




