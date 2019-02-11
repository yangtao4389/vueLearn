// 项目的入口

// 导入jquery 下面这种语法是es6导入的语法
// 由于es6太高级，这一行代码浏览器不会解析
import $ from 'jquery'


$(function(){
    $('li:odd').css('backgroundColor','red')
    $('li:even').css('backgroundColor',function(){
        return "#"+"D97634"
    })
})