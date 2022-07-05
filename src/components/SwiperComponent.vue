<template>
  <swiper
    :modules="modules"
    :loop="list.length > 1"
    :lazy="{ loadPrevNext: true }"
    :pagination="{ clickable: true }"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
  >
    <template v-if="list.length">
      <swiper-slide v-for="item in list" :key="item.id">
        <a class="swiper-link" :href="item.href" target="_blank" rel="noopener noreferrer">
          <img class="swiper-img swiper-lazy" :data-src="item.img" :alt="item.label" />
          <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
        </a>
      </swiper-slide>
    </template>
    <template v-else-if="emptyTips">
      <swiper-slide>
        <van-empty :image-size="emptyImgSize" description="暂无数据" />
      </swiper-slide>
    </template>
  </swiper>
</template>

<script setup lang="ts">
import { Autoplay, Pagination, Lazy } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/lazy'
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

const modules = [Autoplay, Pagination, Lazy]
</script>

<style lang="less" scoped>
.swiper {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.swiper-slide {
  width: 100%;
  height: 100%;

  .swiper-link,
  .swiper-img {
    width: 100%;
    height: 100%;
  }
}
</style>
