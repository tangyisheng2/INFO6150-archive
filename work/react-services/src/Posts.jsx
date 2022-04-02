import { useState, useEffect } from 'react';
import Comments from './Comments';
import { fetchPostsList } from './services';

function Posts() {
    const [posts, setPosts] = useState();
    const [error, setError] = useState('');
    const [activePostId, setActivePostId] = useState();
    const [commentsForPostId, setCommentsForPostId] = useState({});

    function saveCommentsForPostId(postId, comments) {
        // Students:Fill in
    }

    useEffect(() => {
        fetchPostsList()
            .then((loadedPosts) => {
                setPosts(loadedPosts);
            })
            .catch((error) => {
              // Error handling using error state, shown in div.status
                if (error === 'networkError') {
                    setError('Oops, got network errors, try again');
                } else if (error === 'serviceError') {
                    setError('Oops, service is down, come back later');
                }
            });
    }, [setPosts]);

    // Students: You will need to add to/modify this file
    // The data structures shown are not the only way to do it
    // but are a valid suggestion
    console.log(posts)
    return (
        <>
            <div className="status">{error}</div>
            {!posts && <div className="gg-spinner"></div>}
            {posts && (
                <ul className="posts">
                    {posts.map((post) => {
                        return (
                            <li key={`post-${post.id}`}>
                                <div onClick={() => setActivePostId(post.id)}>
                                  {post.title}
                                </div>
                                {activePostId === post.id && (
                                    <Comments
                                        postId={post.id}
                                        comments={commentsForPostId[post.id]}
                                        saveComments={(comments) =>
                                            saveCommentsForPostId(
                                                post.id,
                                                comments
                                            )
                                        }
                                        setError={setError}
                                    />
                                )}
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
}

export default Posts;
