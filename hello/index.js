// 需要编译器
new Vue({
    template: '<div>{{ hi }}</div>'
  })
  
  // 不需要编译器
  new Vue({
    render (h) {
      return h('div', this.hi)
    }
  })