console.log("入口文件")


import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)
import router from "./router.js"


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"


import App from './App.vue'



Vue.use(MintUI)

var vm = new Vue({
    el:"#app",
    // 直接渲染app组件
    render:c=>c(App),
    router,

})