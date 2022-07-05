<template>
  <template v-if="list.length">
    <van-swipe class="my-swipe" :autoplay="3000" lazy-render>
      <van-swipe-item v-for="item in list" :key="item.id">
        <a class="swiper-link" :href="item.href" target="_blank" rel="noopener noreferrer">
          <img class="swiper-img" :src="item.img" :alt="item.label" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </template>
  <template v-else-if="emptyTips">
    <van-empty :image-size="emptyImgSize" description="暂无数据" />
  </template>
</template>

<script setup lang="ts">
import type { EmptyProps } from 'vant'

interface ListItemType {
  id: number | string
  img: string
  href: string
  label: string
}

interface Props {
  list: Array<ListItemType>
  emptyTips?: boolean
  emptyImgSize?: EmptyProps['imageSize']
}

const props = withDefaults(defineProps<Props>(), {
  emptyTips: true,
  emptyImgSize: '28vw',
})
</script>

<style lang="less" scoped>
@import './../styles/common.less';
.my-swipe {
  width: 100%;
  height: 100%;
  background-color: #fff;
  --van-swipe-indicator-size: 8px;
  --van-swipe-indicator-inactive-opacity: 0.2;
  --van-swipe-indicator-inactive-background-color: #000;
  .swiper-link,
  .swiper-img {
    width: 100%;
    height: 100%;
  }
}
</style>
