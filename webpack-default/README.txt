该文档为webpack默认标准配置


创建方式：
npm init -y

创建src 源代码目录
创建dist 项目打包后的代码存放路径

src
下面新建 index.html 为项目首页
main.js  为项目入口文件

尝试打包：
安装webpack包   -D, --save-dev
npm install --save-dev webpack
npm install --save-dev webpack-cli
webpack .\src\main.js 会默认在dist目录下创建一个main.js文件

自动打包webpack-dev-server 
npm install --save-dev webpack-dev-server
配置文件：
https://www.webpackjs.com/guides/asset-management/
webpack.config.js






