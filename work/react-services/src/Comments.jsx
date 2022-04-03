import { useEffect } from 'react';
import { fetchCommentsForPostId } from './services';
import './spinner.css';

function Comments({ postId, comments, saveComments, setError }) {
    // STUDENTS: Because `comments` comes from parent
    // we need a useEffect() here to call saveComments
    // and loading state is implied by comments being falsy
    const isLoading = !comments;

    useEffect(() => {



        fetchCommentsForPostId(postId)
            .then((fetchedComments) => {
                console.log(fetchedComments);
                saveComments(fetchedComments);
                // console.dir("fetchedComments: " + fetchedComments);
                // console.dir("comments:" + comments);
            })
            .catch((error) => {
                // Error handling using error state, shown in div.status
                if (error === 'networkError') {
                    setError('Oops, got network errors, try again');
                } else if (error === 'serviceError') {
                    setError('Oops, service is down, come back later');
                }
            });
    }, [postId]);

    return (
        <>
            {isLoading && <div className="gg-spinner"></div>}
            {!isLoading && (
                <div className={'comment-' + postId}>
                    <p className='comment-prompt'>Comments:</p>
                    <ul className="comment-list">
                        {comments.map((entry) => {
                            return (
                                <li className='comment'>
                                    <span className="comment-author">
                                        {entry.name}{' '}
                                    </span>
                                    <span className="comment-email">
                                        ({entry.email}):{' '}
                                    </span>
                                    <span className="comment-body">
                                        {entry.body}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </>
    );
}

export default Comments;
