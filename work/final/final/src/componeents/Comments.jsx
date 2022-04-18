import { useEffect } from 'react';
import { fetchComments, fetchCommentsForPostId } from './utils/services';

function Comments({ comments, setComments, commentsErrorMessage:errorMsg, setcommentsErrorMessage: setErrorMsg }) {
    const isLoading = !comments;
    console.log(comments);

    useEffect(() => {
        fetchComments()
            .then((fetchedComments) => {
                console.log('fetched comments')
                console.log(fetchedComments)
                setComments({
                    1: fetchedComments,
                });
                // console.dir("fetchedComments: " + fetchedComments);
                // console.dir("comments:" + comments);
            })
            .catch((error) => {
                // Error handling using error state, shown in div.status
                if (error === 'networkError') {
                    // setError('Oops, got network errors, try again');
                } else if (error === 'serviceError') {
                    // setError('Oops, service is down, come back later');
                }
            });
    }, []);

    return (
        <div className="main">
            <div className="error-msg">{errorMsg}</div>
            <form className="comment-forms">
                <label>
                    Names:
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="comment-forms__name"
                    />
                </label>
                <label>
                    Comment:
                    <input
                        type="text"
                        id="comment"
                        name="comment"
                        className="comment-forms__comment"
                    />
                </label>
                <button>Submit</button>
            </form>
            <div className="comments">
                <ul>
                    {/* {comments.map((entry) => {
                        return (
                            <li key={entry.id} className="comment">
                                {entry.name}: {entry.body}
                            </li>
                        );
                    })} */}
                    {Object.keys(comments).map((key) =>
                        comments[key].map((entry) => {
                            return (
                                <li key={entry.id} className="comment">
                                    {entry.name}: {entry.body}
                                </li>
                            );
                        })
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Comments;
