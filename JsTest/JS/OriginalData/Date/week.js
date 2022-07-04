function getWeekDay(date) {
    let days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    return days[date.getDay()];
}

let date = new Date(2014, 0, 3); // 3 Jan 2014
console.log(getWeekDay(date)); // FR

// 许多天之前是哪个月几号？
console.log(date);

function getDateAgo(date, days) {
    return date.getDate(date.setDate(date.getDate() - days));
}
console.log(getDateAgo(date, 3));

// 某月的最后一天？
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
// 通常，日期从 1 开始，但从技术上讲，我们可以传递任何数字，日期会自动进行调整。因此，当我们传递 0 时，它的意思是“一个月的第一天的前一天”，换句话说：“上个月的最后一天”。

console.log(getLastDayOfMonth(2012, 1)); //3月的前一天

// 今天过去了多少秒？
function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
};
console.log(getSecondsToday());


//格式化相对日期
function formatDate(date) {
    let [hour, minutes, second, year, month, days] = date;
    let nowDate = Date.now();
    let diff = (nowDate - date) % 24 * 60 * 60 * 1000;
    if (diff < ms) {
        return "right now";
    } else if (diff < ms * 60) {
        let n = diff / ms;
        return `${n} sec. ago`;
    } else if (diff < ms * 60 * 60) {

    }
}