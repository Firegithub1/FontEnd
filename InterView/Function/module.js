function myModule() {
  const moduleName = "我的自定义模块";
  var name = "sisterAn";
  // 在模块内定义方法(API)
  function getName() {
    console.log(name);
  }
  function modifyName(newName) {
    name = newName;
  }
  // 模块暴露: 向外暴露API
  return {
    getName,
    modifyName,
  };
}
// 测试
const md = myModule();
md.getName(); // 'sisterAn'
md.modifyName("PZ");
md.getName(); // 'PZ'
// 模块实例之间互不影响
const md2 = myModule();
