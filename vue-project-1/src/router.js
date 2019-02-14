
import VueRouter from 'vue-router'

import HomeContainer from "./components/tabbar/Home.vue"
import member from "./components/tabbar/Memeber.vue"
import cart from "./components/tabbar/Cart.vue"
import search from "./components/tabbar/Search.vue"





var router = new VueRouter({
    routes:[
        {path:'/home',component:HomeContainer},
        {path:'/member',component:member},
        {path:'/cart',component:cart},
        {path:'/search',component:search},
    ],
    linkActiveClass:"mui-active", // 覆盖默认的路由，高亮的类,默认的类为router-link-active
})

// 把路由对象暴露出去
export default router