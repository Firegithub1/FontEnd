/*
 * @Author: YiFreerFiY
 * @Date: 2022-05-14 10:43:10
 * @Description: 
 * 
 */
let student = {
    name: "Alice",
    age: 18,
    sex: "female",
    'grade': "senior",
    '1': "test"
};

console.log(student);

console.log("**************");
let stringifyStu = JSON.stringify(student);

console.log(stringifyStu);