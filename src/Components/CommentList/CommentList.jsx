// mongoose returns comments in array 
// map over comment array to place each comment in its own div tag 
// 

import React from "react";

const CommentList = (props) => {
    return (
        <div>
            {props.displayedComments.map((comments) => {
                return (
                    <h3>
                        {comments.commentBody}
                    </h3>
                );
            })}
        </div>
    );
} 

export default CommentList;