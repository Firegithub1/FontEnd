function loadJson(url) {
    return fetch(url)
        .then(respose => respose.json());
}

function loadGithubUser(name) {
    return loadJson(`https://api.github.com/users/${name}`);
}

function showAvatar(githubUser) {
    return new Promise((resolve, reject) => {
        let img = document.createElement("img");

        img.src = githubUser.avatar_url;

        img.className = "promise-avatar-example";
        document.body.append(img);
        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 1000);
    })
}

loadJson("user.json")
    .then(user => loadGithubUser(user.name))
    .then(githubUser => showAvatar(githubUser))
    .then(githubUser => console.log(githubUser.name));