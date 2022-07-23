var pageSize = 5;   // 每页数据条数
var pageNum = 0;    // 总页数
var allData = [];   // 接收到的所有数据
$("#test").css("color", "red");

$(function () {
    $.ajax({
        url: './data.json',
        type: 'get',
        crossDomain: false,
        async: true,
        dataType: "JSON",
        // data: {},
        success: function (testboke) {
            // console.log(testboke);

            allData = testboke.data.records; // key为后端输出的key值
            pageNum = testboke.data.total;
            // console.log(allData);
            toPage(1);
        }
    });
});
// 分页，跳转
function toPage(pno) { // pno：代表第几页，当前页
    // 总行数 10
    var num = allData.length;
    // console.log(num);
    // 总页数 2
    pageNum = num / pageSize;
    // console.log(pageNum);
    pageNum = pageNum > parseInt(pageNum) ? parseInt(pageNum) + 1 : parseInt(pageNum);
    // 开始行
    var startRow = (pno - 1) * pageSize;
    // console.log(startRow);
    // 结束行
    var endRow = pno * pageSize - 1;
    // console.log(endRow);
    // 最后一页的结束行判断
    endRow = (endRow > num) ? num - 1 : endRow;
    // 拼接标题
    var htmlTbody = "";
    // 列表
    for (var i = startRow; i <= endRow; i++) {
        // 拼接列表的html语句

        htmlTbody += `<tr> <td><input type="checkbox" class="labelOne"  /></td><td>${allData[i].id}</td><td>${allData[i].userName}</td><td>${allData[i].userSex}</td>
        <td>${allData[i].usertel}</td><td>${allData[i].checkIn}</td><td>${allData[i].email}</td>
                   <td> <button class="btn btn-primary btn-sm" id="notiondelete${i}">提醒</button>
            <button class="btn btn-success btn-sm" id="delete${i}">删除</button></td></tr>`;
    }
    var htmlTfoot = "";
    // 页脚
    htmlTfoot += '<tr class="footer"><th colspan="8" id="footer"><div>'
        + '当前第 ' + pno + ' 页/共 ' + pageNum + ' 页  每页显示 ' + pageSize + ' 条记录，';
    // 判断是否为第一页，是则首页与上一页无点击事件
    if (pno == 1) {
        htmlTfoot += '首页 上一页 ';
    } else {
        htmlTfoot += '<a href="#" id="index">首页 </a>'
            + '<a href="#" id="pre">上一页 </a>';
    }
    // 判断是否为最后一页，是则下一页与尾页无点击事件
    if (pno == pageNum) {
        htmlTfoot += '下一页 尾页';
    } else {
        htmlTfoot += '<a href="#" id="next">下一页 </a>'
            + '<a href="#" id ="last">尾页</a></div></th></tr>';
    }
    // tbody
    $("#tbody").html(htmlTbody);
    // tfoot
    $("#tfoot").html(htmlTfoot);

    $("#pre").click(function () {
        toPage(pno - 1);
    });
    $("#next").click(function () {
        toPage(pno + 1);
    });
    $("#index").click(function () {
        toPage(1);
    });
    $("#last").click(function () {
        toPage(pageNum);
    });
}
// 全选、反选
$("#selectAll").click(function () {
    $("#tbody input:checkbox").each(function () {
        this.checked = !this.checked;
    });
});

