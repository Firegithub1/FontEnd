let result = [
    { subject: 'math', score: 10 },
    { subject: 'chinese', score: 20 },
    { subject: 'science', score: 30 },
];

let sum = result.reduce((pre, cur) => pre + cur.score, 0)

console.log(sum);