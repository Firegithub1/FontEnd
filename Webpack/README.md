## Webpack
### 安装webpack
- npm init -y
- npm webpack webpack-cli --save (-dev)

### 配置webpack.config.js
- 1.引入path
- 2.Common.js设置module
    - 1.设置mode
    - 2.设置entry入口文件(path(__dirname,"src","index.js))
    - 2.设置output导出文件(path,filename)  //自动生成dist文件夹
- 3.设置package.json
    - 1.script中设置"build"模式：值为:"webpack"
- 4.npm run build

### 引入HtmlWebpackPlugin(自动导出html模板文件)
- 1.安装html-webpack-plugin
- 2.webpack.config.js
    - 1.引入此插件 const ...
    - 2.配置Plugins:
        ```
        [new HtmlWebpackPlugins({
            template:path.join(__dirname,"src","index.html"),
            filename:"index.html" //自动生成
        });]
        ```

### 更新自动打包编译webpack-dev-server
- 1.安装webpack-dev-server
- 2.webpack.config.js
    - 1.配置devServer:
        ```
        {
            port:8000,  //展示在localhost:8000 ，不会生成真正的dist文件,存储于内存
            static:path.join(__dirname,"dist") //资源来自于
        }
        ```
- 3.package.json设置script的"dev":"webpack-dev-server"

### ES6转化为ES5
- 1.安装babel
    npm i @babel/core @babel/preset-env babel-loader --save
- 2.配置.babelrc文件（json格式）
    "preset":["@babel/preset-env"]
- 3.webpack.config.js配置babel规则
    ```
        modules:{
            rules:[{
                test:/\.js$/，  //校验所有js文件
                loader:["babel-loader"]  //安装时配置
                include:path(__dirname,"src"),
                exclude:/node_modules/  //第三方库已经转化了

            }]
        }
    ```
