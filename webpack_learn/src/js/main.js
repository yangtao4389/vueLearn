// 项目的入口

// 导入jquery 下面这种语法是es6导入的语法
// 由于es6太高级，这一行代码浏览器不会解析
import $ from 'jquery'
// const $ = require("jquery")


// css 直接引用
import "../css/index.css"

$(function(){
    // 奇数行样式
    $('li:odd').css('backgroundColor','blue')

    // 偶数行样式
    $('li:even').css('backgroundColor',function(){
        return "#"+"D97634"
    })
})