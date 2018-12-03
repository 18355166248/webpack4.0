### webpack4.0配置学习  

````
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack --watch",
    "start": "webpack-dev-server --open --config webpack.dev.js --mode development",
    "server": "node server.js",
    "build": "webpack --config webpack.prod.js --mode production",
    "stats": "webpack seven$ webpack --profile --json > stats.json",
    "analyz": "NODE_ENV=production npm_config_report=true npm run build"
````

#### watch  使用观察模式
#### start  开启本地服务器 用webpack.dev.js启动  模式选择为development(开发模式)
#### server 用后端服务器启动项目
#### build  打包项目 用webpack.prod.js启动 模式选择为production(生产模式)
#### statas 在本地生成stats.json可以用 webpack-chart 生成数据交互饼图 也可以用 webpack-bundle-analyzer生成树状图
#### analyz 启动webpack-bundle-analyzer生成树状图


### 总结笔记

- #### 管理资源
1. 加载CSS: style-loader css-loader
2. 加载图片, 字体: file-loader
3. 加载CSV, TSV和 XML: csv-loader xml-loader
- #### 管理输出
1. 解决index.html标题, 引入js,favicon等多种更新问题: html-webpack-plugin
2. 清理 ./dist文件夹: clean-webpack-plugin
3. Manifest: 可以知道文件经过处理后的名称和处理前的名称
- #### 开发
1. 追踪错误和警告在源代码中的原始位置: source map
2. 使用观察者模式: webpack --watch 
3. 提供简单的web服务器: webpack-dev-server
4. 模块热替换,无需进行完全刷新(Hot Module Replacement 或 HMR)
5. 把webpack处理后的文件传递给一个服务器: webpack-dev-middleware
- #### 生产
1. 抽离出开发和生产环境下的通用代码: wabpack-merge
- #### 懒加载
- #### shimming 全局变量
1. 设置全局变量 比如 jquery的 $ 和 lodash 的 _ 
https://www.webpackjs.com/guides/shimming/
2. 如果只是想要模块中的一个方法的话 也可以 join: ['lodash', 'join']
这样就可以直接使用lodash中的join方法了
- #### 构建性能
1. 使用 include 字段仅将 loader 模块应用在实际需要用其转换的位置中

#### 遇到的问题:
##### 热更新(HMR)不能和[chunkhash]同时使用。
````
output: {
  //filename: '[name].bundle.js',
  filename: '[name].[chunkhash].js',
  path: path.resolve(__dirname, 'dist')
}
解决方法：
1： 如果是开发环境，将配置文件中的chunkhash 替换为hash
2：如果是生产环境，不要使用参数 --hot
````