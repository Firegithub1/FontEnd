fetch('user.json')
    .then(Response => Response.json())
    .then(result => {
        console.log(result);
        console.log(result.girlfriend);
    });