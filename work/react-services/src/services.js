export function fetchPostsList() {
  return new Promise( (resolve) => {
    // This inserts a 2 second delay so we can easily see a spinner at work
    setTimeout( resolve, 2000);
  })
  .then(
    () => fetch('https://jsonplaceholder.typicode.com/posts/', {
      method: 'GET',
    })
  )
  .catch( () => Promise.reject('networkError') )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return Promise.reject('serviceError');
  });
}

export function fetchCommentsForPostId(postId) {
  return new Promise( (resolve) => {
    // This inserts a 2 second delay so we can easily see a spinner at work
    setTimeout( resolve, 2000);
  })
  .then(
    () => fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
      method: 'GET',
    })
  )
  .catch( () => Promise.reject('networkError') )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return Promise.reject('serviceError');
  });
}

