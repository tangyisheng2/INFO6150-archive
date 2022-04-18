export function fetchComments() {
    const postId = 1;
    const endPointUrl = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    return new Promise((resolve) => {
        setTimeout(resolve, 200);
    })
        .then(() =>
            fetch(endPointUrl, {
                method: 'GET',
            })
        )
        .catch(() => Promise.reject('networkError'))
        .then((response) => {
            if (response.ok) {
                // const result = response.json();
                // console.log(response.json());
                // return response.json();
                // console.log(result)
                return response.json()
            }
            return Promise.reject('serviceError');
        });
}