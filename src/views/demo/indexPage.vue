<template>
  <div class="page-head">shop-m 个人移动端项目模板</div>
  <van-cell-group>
    <van-cell v-for="item in cellList" :key="item.to" v-bind="item" />
  </van-cell-group>
</template>

<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router'
import demoRouters from '../../router/demo'

const demoArrayList = demoRouters[1].children as RouteRecordRaw[]

const cellList = demoArrayList.map((item) => {
  return {
    title: item?.meta?.title as string,
    to: `${demoRouters[1].path}/${item.path}`,
    isLink: true,
  }
})
</script>

<style lang="less" scoped>
@import './../../styles/demo.less';
</style>
