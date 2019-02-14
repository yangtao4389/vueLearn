### 首先创建项目
webpack + vue + vue-router
npm i

### 分析首页：
顶部，底部，与中间路由部分

顶部使用mint-ui
具体参考：https://mint-ui.github.io/docs/#/zh-cn2/quickstart


底部参考mui
直接下载的mui-master，找到里面的example使用


改造底部a链接为router-link,并配置to

设置选中高亮：
router.js中：
 routes:[
        // {path:'/home',component:home},
    ],
    linkActiveClass:"mui-active", // 覆盖默认的路由，高亮的类,默认的类为router-link-active



创建路由组件
放在components





















