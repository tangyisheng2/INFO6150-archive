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

  useEffect(
    () => {
      fetchPostsList()
      .then( loadedPosts => {
        setPosts(loadedPosts);
      })
      .catch( error => {
        // STUDENTS: Show an error to the user here
        // Remember not to show the error that is returned
        // But instead show a message BASED on that error
      });
    },
    [setPosts]
  );


  // Students: You will need to add to/modify this file
  // The data structures shown are not the only way to do it
  // but are a valid suggestion
  return (
    <>
    <div className="status">{ /* Fill In */}</div>
    { !posts && <div>Replace with spinner</div> }
    { posts && (
      <ul className="posts">
        { posts.map( post => {
          return (
            <li key={`post-${post.id}`}>
              <div>replace with post HTML and ability to set activePostId</div>
              { (activePostId === post.id) && <Comments
                  postId={ post.id }
                  comments={ commentsForPostId[post.id] }
                  saveComments={ comments => saveCommentsForPostId(post.id, comments) }
                  setError={setError}
                />
              }
            </li>
          );
        }) }
      </ul>
    ) }
    </>
  );
}

export default Posts;
