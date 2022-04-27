export function fetchComments() {
    const endPointUrl = `https://info6150.tangyisheng2.com/comment`;
    return new Promise((resolve) => {
        setTimeout(resolve, 500);
    })
        .then(() =>
            fetch(endPointUrl, {
                method: 'GET',
            })
        )
        .catch(() => Promise.reject('networkError'))
        .then((response) => {
            if (response.ok) {
                const result = response.json();
                return result;
                // return response.json();
            }
            return Promise.reject('serviceError');
        });
}

export function postComments(commentObj) {
    const endPointUrl = `https://info6150.tangyisheng2.com/comment`;
    const postBody = JSON.stringify(commentObj);
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    return fetch(endPointUrl, {
        method: 'POST',
        body: postBody,
        headers: myHeaders,
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
