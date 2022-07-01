import { defineStore } from 'pinia'
import merge from 'lodash.merge'
import type { TabbarProps } from 'vant'
import { layoutTabbarType } from './layoutTabbarType'

export const useLayoutTabbar = defineStore('layoutTabbar', {
  state: () => {
    return {
      show: true, // 可以控制 tabbar 是否显示
      active: 0, // tabbar 当前选中项
      tabbarProps: {
        // tabbar 的 props，https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar#tabbar-props
        fixed: true,
        border: true,
        zIndex: 100,
        route: true,
        placeholder: true,
        safeAreaInsetBottom: true,
      } as TabbarProps,
      tabbar: [
        // tabbaritem 的 props， https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar#tabbaritem-props
        {
          name: 0,
          title: '首页',
          icon: 'home-o',
          dot: false,
          badge: '',
          to: '/',
          replace: true,
        },
        {
          name: 1,
          title: '商品',
          icon: 'gift-o',
          dot: false,
          badge: '',
          to: '/list',
          replace: true,
        },
        {
          name: 2,
          title: '购物车',
          icon: 'cart-o',
          dot: false,
          badge: '',
          to: '/shoppingCart',
          replace: true,
        },
        {
          name: 3,
          title: '我的',
          icon: 'user-o',
          dot: false,
          badge: '',
          to: '/user',
          replace: true,
        },
        {
          name: 4,
          title: '演示',
          icon: 'tv-o',
          dot: false,
          badge: '',
          to: '/demoList',
          replace: true,
        },
      ] as layoutTabbarType.ItemObjectType[],
    }
  },
  getters: {
    tabbarToList(): string[] {
      return this.tabbar.map((x) => x.to)
    },
  },
  actions: {
    /**
     * 设置 tabbar 的单个项
     * @param {Object} object : { index: 设置项的索引值, detail: 设置项的具体内容 }
     */
    setTabBarItem(object: layoutTabbarType.SetTabBarItem): void {
      this.$patch((state) => {
        state.tabbar[object.index] = merge(this.tabbar[object.index], object.detail)
      })
    },
  },
})
