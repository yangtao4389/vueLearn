// 项目的入口

// 这种导入不行
// import Vue from 'vue'
import Vue from "../node_modules/vue/dist/vue.js"

var vm = new Vue({
    el:"#app",
    data:{
        msg:"123"
    }
})