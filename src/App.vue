<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="page-box">
    <layout-navbar></layout-navbar>
    <router-view></router-view>
    <layout-tabbar></layout-tabbar>
  </div>
</template>

<style lang="less">
#app {
  font-family: var(--van-base-font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: var(--van-font-size-md);
  color: var(--van-gray-8);
}
.page-box {
  min-height: 100vh;
  background-color: var(--van-gray-2);
}
@import './styles/common.less';
</style>
