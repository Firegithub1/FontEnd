/*
 * @Author: YiFreerFiY
 * @Date: 2022-04-16 10:06:45
 * @Description:
 *
 */
var items = [1, 2, 3, 4, 5, 6];
var results = [];
var running = 0;
var limit = 2;

function async(arg, callback) {
    console.log('参数为 ' + arg + ' , 1秒后返回结果');
    setTimeout(function() { callback(arg * 2); }, 1000);
}

function final(value) {
    console.log('完成: ' + value);
}

function launcher() {
    while (running < limit && items.length > 0) {
        var item = items.shift();
        console.log("unEnter:" + item);
        async(item, function(result) {

            results.push(result);

            console.log("pushResult:" + results);
            console.log("running:" + running);
            running--;
            console.log("running:" + running);
            if (items.length > 0) {
                launcher();
            } else if (running == 0) {
                final(results);
            }
        });

        console.log("outAsyncRunning:", running);
        running++;
    }
}

launcher();