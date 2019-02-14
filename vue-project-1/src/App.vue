<template>
<div class="app-container">
    <!-- 顶部header -->
    <!-- 中间路由 -->
    <!-- 底部tabbar -->


    <mt-header fixed title="仁和安信"></mt-header>
    <h1>填充内容</h1>


   <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
</div>


</template>

<script>
export default {};
</script>

<style>
.app-container {
  /* 因为 mt-header 是 40px */
  padding-top: 40px;
}
</style>


