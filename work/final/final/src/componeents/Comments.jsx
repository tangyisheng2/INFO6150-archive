import { useEffect } from 'react';
import {
    fetchComments,
    fetchCommentsForPostId,
    postComments,
} from './utils/services';
import '../css/css.gg/gg-spinner.css';
import '../css/comments.css';
import { useState } from 'react';

function Comments({
    comments,
    setComments,
    commentsErrorMessage: errorMsg,
    setcommentsErrorMessage: setErrorMsg,
}) {
    const isLoading = !comments['default'];

    const [commentForum, setCommentForum] = useState({});
    function updateCommentForum(field, value) {
        setCommentForum({
            ...commentForum,
            [field]: value,
        });
        console.log(commentForum);
    }

    useEffect(() => {
        fetchComments()
            .then((fetchedComments) => {
                // console.log('fetched comments');
                // console.log(fetchedComments);
                setComments({
                    default: fetchedComments,
                });
                // console.dir("fetchedComments: " + fetchedComments);
                // console.dir("comments:" + comments);
            })
            .catch((error) => {
                // Error handling using error state, shown in div.status
                if (error === 'networkError') {
                    setErrorMsg('Oops, got network errors, try again');
                } else if (error === 'serviceError') {
                    setErrorMsg('Oops, service is down, come back later');
                }
            });
    }, [isLoading]);

    return (
        <div className="main">
            <div className="error-msg">{errorMsg}</div>
            {isLoading && <div className="gg-spinner"></div>}
            {!isLoading && (
                <>
                    <form className="comment-forms">
                        <label>
                            Names:
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={(e) =>
                                    updateCommentForum('name', e.target.value)
                                }
                                className="comment-forms__name"
                            />
                        </label>
                        <label>
                            Comment:
                            <input
                                type="text"
                                id="comment"
                                name="comment"
                                onChange={(e) =>
                                    updateCommentForum(
                                        'body',
                                        e.target.value
                                    )
                                }
                                className="comment-forms__comment"
                            />
                        </label>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                // console.log(commentForum);
                                // const ret = ;
                                const ret = postComments(commentForum);
                                setComments(ret)
                                console.log(ret)
                            }}
                        >
                            Submit
                        </button>
                    </form>
                    <div className="comments">
                        <ul className="comments__list">
                            {Object.keys(comments).map((key) =>
                                comments[key].map((entry) => {
                                    return (
                                        <li key={entry.id} className="comment">
                                            <span className="comment__name">
                                                {entry.name}
                                            </span>
                                            :{' '}
                                            <span className="comment__body">
                                                {entry.body}
                                            </span>
                                        </li>
                                    );
                                })
                            )}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}

export default Comments;
