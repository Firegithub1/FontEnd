fetch('user.json')
    .then(function (response) {
        console.log(response);
        return response.text();
        // return response.json();
    })
    .then(function (text) {
        text = JSON.parse(text)
        console.log(text);
        console.log(text.name);
    });