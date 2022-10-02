fetch('user.json')
    .then(response => response.json())
    .then(user => {
        console.log(`https://tenapi.cn/bilibili/?uid=${user[1].name}`);
        return fetch(`https://tenapi.cn/bilibili/?uid=${user[1].name}`);
    })
    // https://tenapi.cn/bilibili/?uid=335445934
    .then(response => response.json())
    // 获取json数据并转换为JS对象
    .then(bibiUser => new Promise((resolve, reject) => {


        console.log("bibiUser:" + bibiUser.data.name);
        let img = document.getElementById("img");
        // console.log(bibiUser.data.code);
        let width = img.getAttribute("id");
        console.log("wid：", width);
        img.setAttribute("style", "color:red");
        console.log(bibiUser.data.avatar);

        img.setAttribute("src", bibiUser.data.avatar);
        console.log("img.src:", img.src);


        let span = document.getElementById("span");
        let text = bibiUser.data.name;
        span.innerText = text;
        // img.className = "promise-avatar-exple";
        // document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(bibiUser);
        }, 1000);
    })).then(bibiUser => console.log(bibiUser.data.name));