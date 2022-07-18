var today = new Date();
var birthday1 = new Date('December 17, 1995 03:24:00');
var birthday2 = new Date('1995-12-17T03:24:00');
var birthday3 = new Date(2022, 6, 18,10,18,45);
var birthday4 = new Date(2022, 6, 18, 3, 24, 0);

console.log('now', today);
let year = birthday3.getFullYear(); console.log('year', year);
// 月份从0~11
let Month = birthday3.getMonth(); console.log('Month', Month+1);
let Day = birthday3.getDate(); console.log('Day', Day);
let Week =birthday3.getDay(); console.log('Week',Week);
let Hours =birthday3.getHours(); console.log('Hours',Hours);
let Minutes =birthday3.getMinutes(); console.log('Minutes',Minutes);
let Seconds =birthday3.getSeconds(); console.log('Seconds',Seconds);

console.log('yearMonthDayHHMMSS',birthday4);

// 有四种方式初始化日期:

// new Date();
// new Date(value);
// new Date(dateString);
// new Date(year, monthIndex[, day[, hours[, minutes[, seconds[, milliseconds]]]]]);