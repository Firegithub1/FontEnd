var name = '南玖'
function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  },
  this.foo2 = () => console.log(this.name),
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  },
  this.foo4 = function () {
    return () => {
      console.log(this.name)
    }
  }
}
var person1 = new Person('nan')
var person2 = new Person('jiu')

person2.foo4().call(person1)
person1.foo1() // 'nan'
person1.foo1.call(person2) // 'jiu'
person1.foo1.bind(person2)() // 'jiu'


person1.foo2() // 'nan'
person1.foo2.call(person2) // 'nan'

person1.foo3()() // '南玖'
person1.foo3.call(person2)() // '南玖'
person1.foo3().call(person2) // 'jiu'

person1.foo4()() // 'nan'
person1.foo4.call(person2)() // 'jiu'
person1.foo4().call(person2) // 'nan'

// 作者：南玖
// 链接：https://juejin.cn/post/7069943937577779214
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。