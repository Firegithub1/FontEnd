let grade = [1,2,3,4,5,6];

let grade2 = grade.concat();
grade2.push({'num':6});

// FIXME:Array.concat  是深拷贝,不影响

console.log("grade:", grade);
console.log("********");

console.log("grade2:", grade2);
console.log("****************");

// FIXME:Array.slice  是深拷贝,不影响

let grade3 = grade.slice();
grade3.push({male:3,female:3});


console.log(grade);
console.log("********");

console.log(grade3);
console.log("****************");