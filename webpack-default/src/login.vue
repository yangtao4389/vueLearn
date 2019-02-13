<template>
<div>
 <h1>这是登录组件--{{msg}}</h1>
    <router-link to="/account">account</router-link>
    <router-link to="/goodslist">goodslist</router-link>

    <router-view></router-view>
</div>
   
</template>

<script>
export default {
  data() {
    return {
      msg: "123"
    };
  },
  methods: {
    show() {
      console.log("login.vue里面的show方法");
    }
  }
};
</script>


<style scoped>
  div{
    color: red;
  }
</style>


