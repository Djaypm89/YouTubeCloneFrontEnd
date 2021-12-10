import "ReplyList.css";

const ReplyList = (props) => {
    return(
        props.displayedComments.map(comments => {
            return (
                comments.replies.map(reply => {
                    return(
                        <h4 className="reply">
                            {reply.replyBody}
                        </h4>
                    );
                })
            );
        })
    );
}

export default ReplyList;