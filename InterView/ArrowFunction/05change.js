var name = '南玖'
var person = {
    name: 'nanjiu',
    say: function() {
        console.log('say:',this.name)
    },
    say2: () => {
        console.log('say2:',this.name)
    }
}

person.say.call({name:'小明'}) // say: 小明
person.say2.call({name:'小红'}) // say2: 南玖

// 箭头函数的this永远不会变，call、apply、bind也无法改变
// 永远指向它定义时的上层作用域中的this