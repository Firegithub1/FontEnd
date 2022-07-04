/*
 * @Author: YiFreerFiY
 * @Date: 2022-05-17 13:42:46
 * @Description:
 *
 */
let company = {
    sales: [{ name: 'John', salary: 1000, }, { name: 'Alice', salary: 1600, }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

function sumSalaries(deparment) {
    if (Array.isArray(deparment)) {
        return deparment.reduce((pre, current) => pre + current.salary, 0);
    } else {
        let sum = 0;
        for (const subdep of Object.values(deparment)) {
            sum += sumSalaries(subdep);
        }
        return sum;
    }

}

console.log(sumSalaries(company));