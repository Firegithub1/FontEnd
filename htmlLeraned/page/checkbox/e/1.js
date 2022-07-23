var box = $(".box");
var addBtn = $("button");
let afterThing = `<span class="media red">ffafafa</span>`;
box.append(afterThing);
console.log("fja");
var appendHtml = "<input type=\"text\" name=\"\" class=\"red\" value=\"追加的input\">";
addBtn.on("click", function() {
	box.append(appendHtml);

});
// afterThing += "<div>this is span test<span class='red'>if span<strong>strong</strong></span></div>";
// $(function () {
//     $("#records").append(afterThing);
// })

// var inputEle = $(".box input");
// // 直接这样绑定在input上面 就会出现追加input的点击事件失效

// inputEle.on("click",function(){
// alert("niahao");
// });


// 绑定在追加在元苏的父级上面 就可以解决 追加input的点击事件失效
// $(".box").on("click", "input", function () {
//     alert("niahao");
// })

// $(".box").addClass("red");
// $(".box").addClass("red");
// $("#exist").addClass("red");

// $("#exist").css("color","blue");
