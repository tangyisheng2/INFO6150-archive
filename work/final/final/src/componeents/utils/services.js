export function fetchComments() {
    const postId = 1;
    const endPointUrl = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    })
        .catch(() => Promise.reject('networkError'))
        .then(() =>
            fetch(endPointUrl, {
                method: 'GET',
            })
        )
        .catch(() => Promise.reject('networkError'))
        .then((response) => {
            if (response.ok) {
                const result = response.json();
                console.log(result);
                return result;
                // return response.json();
            }
            return Promise.reject('serviceError');
        });
}

export function postComments(commentObj) {
    const endPointUrl = `https://httpbin.org/post`;
    const postBody = JSON.stringify(commentObj);
    return fetch(endPointUrl, {
        method: 'POST',
        body: postBody,
    })
        .catch(() => Promise.reject('networkError'))
        .then((response) => {
            if (response.ok) {
                const result = response.json();
                return result;
            }
            return Promise.reject('serviceError');
        });
}
