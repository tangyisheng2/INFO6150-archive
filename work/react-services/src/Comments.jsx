import { useEffect } from 'react';
import { fetchCommentsForPostId } from './services';
import './spinner.css'

function Comments({ postId, comments, saveComments, setError }) {

  // STUDENTS: Because `comments` comes from parent
  // we need a useEffect() here to call saveComments
  // and loading state is implied by comments being falsy
  const isLoading = !comments;

  return (
    <>
    { isLoading && <div className='gg-spinner'></div> }
    { !isLoading && <div> Replace with comment HTML</div> }
    </>
  );
};

export default Comments;
