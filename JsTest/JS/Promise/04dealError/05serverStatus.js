fetch('no-such-user.json')
    .then(response => response.json())
    .then(user => fetch('https://api.github.com/users/${user.name}'))
    .catch(err => console.log(err));

console.log('/***************/');

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new HttpError(response);
            }
        })
}

loadJson('no-such-user.json')
    .catch(err => console.log("reason:",err));