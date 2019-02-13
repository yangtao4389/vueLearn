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
配置好后，直接用webpack命令进行打包

现在利用webpack-dev-server 实现实时打包

去package.json  输入指令：
                           浏览器打开   端口      根目录           热更新
 "dev":"webpack-dev-server --open --port 3000 --contentBase src  --hot "

直接输入
npm run dev

能运行，发现不成功，去index.html修改script的引用，但不建议。
用html-webpack-plugin 这个插件来帮助实现，他会自动将main.js注入到index.html里面
https://www.webpackjs.com/guides/output-management/
npm install --save-dev html-webpack-plugin
然后去webpack.config.js 配置plugins

再运行 npm run dev
现在就ok了。。

启动热更新的打包，代码变化，会直接在刷新浏览器

再配置解析css样式，图片等
https://www.webpackjs.com/guides/asset-management/#%E5%8A%A0%E8%BD%BD-css
npm install --save-dev style-loader css-loader
修改webpack.config.js 加上module
+   module: {
+     rules: [
+       {
+         test: /\.css$/,
+         use: [
+           'style-loader',
+           'css-loader'
+         ]
+       }
+     ]
+   }
再在main.js引入css
import './css/index.css';



加载图片
https://www.webpackjs.com/guides/asset-management/#%E5%8A%A0%E8%BD%BD%E5%9B%BE%E7%89%87
npm install --save-dev file-loader
在webpack.config.js中的module中的rule中配置
+       {
+         test: /\.(png|svg|jpg|gif)$/,
+         use: [
+           'file-loader'
+         ]
+       }
然后在css中去引入图片，或者js中
 background: url("../images/狗狗.png");


使用bootstrap 验证字体
npm install --save-dev bootstrap@3.3.7
在webpack.config.js中的module中的rule中配置
+       {
+         test: /\.(woff|woff2|eot|ttf|otf)$/,
+         use: [
+           'file-loader'
+         ]
+       }
在index.html中实现
 <!-- 使用字体样式 去main.js中引入 -->
    <span class="glyphicon glyphicon-search" aria-hidden="true">字体样式</span>


使用es6新语法
main.js中配置：

// es6新语法 用来实现类  这些webpack不能处理，所以需要借助第三方loader
// 通过Babel 来实现
所有loader：https://webpack.js.org/loaders/#transpiling
实现方式：
npm install -D babel-loader@7 babel-core babel-preset-env
npm install --save-dev babel-plugin-transform-runtime babel-preset-stage-0
  // 处理新语法
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        //         高级转低级          低级转通用语法
                        presets: ['babel-preset-env','babel-preset-stage-0'],
                        plugins: ['babel-plugin-transform-runtime']
                      }
                }
            },



结合vue
普通网页版 如何使用vue
直接script标签引入，index.html创建id为app的容器，new Vue得到一个vue实例

webpack使用vue
npm install --save-dev vue 
使用main.js
// 使用vue
import Vue from 'vue'
var vm = new Vue({
    el:"#app",
    data:{
        msg:"123"
    }
})
然后在index.html直接写入 {{msg}}
会报错：
You are using the runtime-only build of Vue where the template compiler is not available
在webpack.config.js中添加：
 resolve:{
        alias:{
            "vue$":"vue/dist/vue.js"
        }
    }



vue结合render
复习网页创建组件的方式
https://cn.vuejs.org/v2/guide/components.html

webpack中使用
首先在src下面建立login.vue的组件
由3部分组成，template  script style
然后在main.js中引入该组件
import login from "./login.vue"
会发现webpack无法解析vue
去安装相关loader

https://webpack.docschina.org/loaders/#%E6%A1%86%E6%9E%B6-frameworks-
vue-loader 依赖于vue-template-compiler
npm install --save-dev vue-loader vue-template-compiler
{
                test:/\.vue$/,
                loader:'vue-loader'
                //这一个loader当然是vue项目必须的加载器啦，不加其他规则的话，
                //简单的这样引入就可以了，vue-loader会把vue单文件直接转成js。
            },

但不行，还需要配置plugin 参考：https://blog.csdn.net/qq_37160067/article/details/80141952
const { VueLoaderPlugin } = require('vue-loader')
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html"),//指定模板文件路径
            filename: "index.html", // 设置生成的内存页面名称
        }),
        new VueLoaderPlugin(),
    ],



webpack  配置 vue-router
npm install --save-dev vue-router 
main.js中输入：
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
使用：
var router = new VueRouter({
    routes:[
        {path:'/account',component:account},
        {path:'/goodslist',component:goodslist},
    ]
})
然后还要注入到vm里面
index.html使用：
    <router-link to="/account">account</router-link>
    <router-link to="/goodslist">goodslist</router-link>

    <router-view></router-view>

最好将router分离出来为router.js
































