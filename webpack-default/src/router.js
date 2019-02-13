
import VueRouter from 'vue-router'

import account from "./main/account.vue"
import goodslist from "./main/goodslist.vue"


var router = new VueRouter({
    routes:[
        {path:'/account',component:account},
        {path:'/goodslist',component:goodslist},
    ]
})

// 把路由对象暴露出去
export default router