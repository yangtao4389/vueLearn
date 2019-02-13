console.log("ok")

// 引入css
import './css/index.css';

// 引入图片 也可以直接放在css样式中


// 引入bootstrap样式实现字体，通过直接引用node_modules里面的文件，可以直接省略node_modules这一层目录，直接写包的目录
import "bootstrap/dist/css/bootstrap.css"


// es6新语法 用来实现类  这些webpack不能处理，所以需要借助第三方loader
// 通过Babel 来实现
// var Person = require("babel!./Person.js").default;
// new Person();
class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name.toUpperCase();
    }
}



var p1 = new Person("yang")
console.log(p1.name)

class Pserson2{
    static info={name:'aaa',age:20}
}

console.log(Pserson2.info)


// 使用vue
import Vue from 'vue'  // 在webpack中直接这样导入，vue的功能是不完整的，仅仅为runtime-only格式，非直接script引用的完整版本
// import Vue from '../node_modules/vue/dist/vue.js'  // 这样可以，但是不推荐
// 直接在webpack.config.js中配置
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from "./router.js"
import login from "./login.vue"
var vm = new Vue({
    el:"#app",
    data:{
        msg:"123"
    },
    router: router,
    // 两种方式都可以
    // 1
    components:{
        login
    },
    // 2.该渲染的会直接覆盖所有内容，感觉不好用
    // render:function(createElements){
    //     return createElements(login)
    // },
    // 上述等价于：
    // render:c => c(login)



})