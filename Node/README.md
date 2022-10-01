## Node

- Node 是对 ES 标准的一个实现，也是一个 JS 引擎
- 可以使代码在服务器端执行
- 仅对 ES 标准进行了实现，不包含 DOM,BOM
- Node 中可以使用所有的内建对象
  String Number Boolean Math Date RegExp Function Object Array
  **不包括 BOM DOM**
  但是可以使用 console setTimeout setInterval

### 进程和线程

- 进程是一个一个的工作计划(工厂中的车间)
- 线程是计算机最小的运算单位，负责干活(工厂中的工人)
- 传统的服务器都是多线程，每进来一个请求就创建一个线程去处理请求
- Node 的服务器都是单线程，处理请求是单线程，但是在后台拥有一个 I/O 线程池(I/O[input/output]操作指的是对磁盘的读写操作)

### require

- 1.引入核心模块
  const path = require("path")
- 2.引入文件模块
  const hello1 = require("./hello.js")

### module

- 1.module.exports == exports
  但是 module.exports 可以使用 module.export.x = 3 | module.export = { x = 2 }
  exports 只能使用 exports.x = 3
  <B>区别在于栈、堆</B>
- 2.每一个 js 文件是一个模块，此模块在 index 主文件被引用时处于一个函数当中，可以通过**argument.callee**查看此函数
  ```
  function (exports, require, module, __filename, __dirname) {   }
  ```

### CommonJS 规范（理论）

- 1.Node Packet Manager
  - package.json 描述文件
  - bin 可执行二进制文件
  - js js 代码
  - doc 文档
  - test 单元测试

### NPM 的命令

- npm -v 查看 npm 的版本
- npm version 查看所有模块的版本
- npm search 包名(math) 搜索包
- npm install(i) 下载当前项目依赖的包
- npm install(i) 包名 安装包
- npm install(i) 包名 -g 全局安装包(一般是工具包)
- npm install(i) 包名 --save 安装包并添加到依赖中
- npm remove(r) 包名 删除包

### File System

- 1.引入 const fs = require('fs')
- 2.同步：
  - fd = fs.openSync("./hello.txt","w")
  - fs.writeSync(fd,"aabbcc")
  - fs.closeSync();
- 3.异步：
	```
	fs.open("./hello2.txt","w",function(err,fd){
	if(!err){
		fd.write(fd,"hello world", 2, function(){
			fd.close();
			})
		}
	})
	```
### Buffer存储二进制的字节（Byte)
-	以二进制存储（8个bite），展示在列表中为16进制,ASCII 范围 -128 ~ +127,此处表示无符号整数为 0 ~ 255
-	ASCII ((American Standard Code for Information Interchange): 美国信息交换标准代码）
-	展示在控制台、页面是10进制显示
-	let buf1 = Buffer.from(str) 来自于
-	let buf2 = new Buffer(10) **超过十个后不显示，不具备扩容功能**
-	buf2[0] = 1 buf2[1] = "x"
-	let buf3 = Buffer.alloc(10) 分配内存并清理
-	let buf4 = Buffer.allocUnsafe(10) 分配内存不清理(性能更高)