/*
 * @Author: YiFreerFiY
 * @Date: 2022-03-22 20:25:10
 * @Description:
 *
 */

function getMaxSubSum(arr) {

    let maxNum = 0;

    for (let i = 0; i < arr.length; i++) {
        let temp = 0;
        for (let j = i; j < arr.length; j++) {
            temp += arr[j];
            maxNum = Math.max(maxNum, temp);
        }
    }
    return maxNum;
}
console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));

function getMaxSubSumQuick(arr) {
    let maxNum = 0;
    let temp = 0;
    for (let item of arr) {
        temp += item;
        maxNum = Math.max(temp, maxNum);

        if (temp < 0) temp = 0;

        (temp > 0 ? temp : 0) > maxNum ? maxNum = temp : temp += (item > 0 ? item : 0);
    }
    return maxNum;
}


console.log("Quicker:" + getMaxSubSumQuick([-1, 2, 3, -9, 11]));


function getMaxSubSumUniversal(num) {
    let max = num[0];
    let tempSum = max;

    for (let item of num) {
        tempSum > 0 ? tempSum += item : (tempSum = item > 0 ? item : 0);
        if (max < tempSum) max = tempSum;
    }
    return max;
}


console.log("Quicker:" + getMaxSubSumUniversal([-1, 2, 3, -9, 11]));
//？：运算符
function getMaxSubSumLi(arr) {
    let maxNum = 0;
    let temp = 0;
    for (let item of arr) {
        temp += item;
        maxNum = Math.max(temp, maxNum);
        temp = temp > 0 ? temp : 0;
    }
    return maxNum;
}


console.log("Li:" + getMaxSubSumLi([-1, 2, 3, -9, 11]));
//显示最大子数组中的元素：
//显示最大子数组中的元素：
function getMaxSubSumFaster(source) {
    // 子元素的求和的结果
    let maxSum = 0;
    let tempSum = 0;
    let flag = true
    let start = 0
    let end = 0
        // [8, -1, -2, -3]
    for (let i = 0; i < source.length; i++) {
        if (flag) {
            start = i;
            flag = false;
        }
        tempSum += source[i]

        if (maxSum < tempSum) {
            maxSum = tempSum
            end = i;
        }
        if (tempSum < 0) {
            tempSum = 0;
            flag = true
        }
    }
    console.log('maxis:' + maxSum, '最大和的元素是:' + source.slice(start, end + 1), `${start} ${end}`);
}

console.log("Faster:" + getMaxSubSumFaster([-1, 2, 3, -9, 11]));

console.log("Faster:" + getMaxSubSumFaster([-1, 2, 3, -9]));