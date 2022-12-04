window.onload = function() {
	// 定时器，每隔 1 秒执行 1 次
	setInterval(() => {
		var time = Date.parse(new Date("2021-06-1 00:00"));
		console.log(time);
		let timestamp = (new Date() - time) / 1000 / 60 / 60 / 24; //天
		let TT = Number.parseInt(timestamp);
		console.log(TT, "天");

		let HH = ((new Date() - time) / 1000 / 60 / 60) % 24; //小时
		HH = Number.parseInt(HH);
		console.log(HH, "小时");

		let MM = ((new Date() - time) / 1000 / 60) % 60; //分钟 
		MM = Number.parseInt(MM);

		console.log(MM, "分钟");
		let SS = ((new Date() - time) / 1000) % 60; //秒
		SS = Number.parseInt(SS);
		console.log(SS, "秒");

		document.querySelector('#TT').innerHTML = padZero(TT);
		document.querySelector('#HH').innerHTML = padZero(HH);
		document.querySelector('#MM').innerHTML = padZero(MM);
		document.querySelector('#SS').innerHTML = padZero(SS);


	}, 1000)
}

// 补零函数
function padZero(n) {
	return n > 9 ? n : '0' + n
}
