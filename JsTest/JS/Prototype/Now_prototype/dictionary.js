let dictionary = {};
// let dictionary = Object.create(null);


dictionary.apple = "apple";
// dictionary.__proto__ = "test";

console.log(Object.getOwnPropertySymbols(dictionary));


for (const key in dictionary) {
    if (Object.hasOwnProperty.call(dictionary, key)) {
        const element = dictionary[key];
        console.log(element);
    }
}