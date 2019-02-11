dist  
    发布版，发布的文件都可以放里面去
src 
    源代码

webpack 使用的是3.6版本的  npm install -g webpack@3.6  使用的是全局安装，这样才可以用webpack命令，总之我是这样的
不过不建议用全局的，用本地的  npm install --save-dev webpack

如果用本地的，则.\node_modules\.bin\webpack  代替下面的全局webpack
手动使用命令：webpack .\src\js\main.js .\dist\buddle.js
或者用配置文件webpack.config.js  则直接输入webpack就可以执行

当我们在控制台直接输入webpack的时候，首先webpack发现我们并没有通过命令的形式指定入口和出口
这时，webpack会向根目录查找：webpack.config.js
webpack会去解析执行这个文件
当解析执行配置文件后，就得到了  入口跟 出口，然后就执行该命令了


使用webpack-dev-server  这个工具，来实现自动打包编译，否则每次更新main.js 就要手动运行webpack
npm i webpack-dev-server -D 把这个工具安装到本地的项目
项目本地安装的webpack-dev-server  所以无法当成脚本命令直接使用，只有那些全局的才可以执行
所以可以通过package.json  里面的scripts脚本来配置运行  "dev":"webpack-dev-server"
这样通过npm run dev  就可以执行该命令

npm run dev 会出错，先删除原先的node_modules包
然后npm i  会自动安装package.json里面的包
然后看一下错误信息


