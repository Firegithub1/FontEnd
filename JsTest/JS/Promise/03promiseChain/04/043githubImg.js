fetch('user.json')
    .then(response => response.json())
    .then(user => {
        console.log(`https://api.github.com/users/${user.name}`);
        return fetch(`https://api.github.com/users/${user.name}`);
    })
    // Firegithub1
    .then(response => response.json())
    .then(githubUser => {
        let img = document.createElement("img");
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-exple";
        document.body.append(img);


    })