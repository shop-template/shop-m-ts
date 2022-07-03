import { defineStore } from 'pinia'
import merge from 'lodash.merge'
import type { NavBarProps } from 'vant'
import { useLayoutTabbar } from './layoutTabbar'
import { getType } from '../utils'
import { layoutTabbarType } from './layoutNavbarType'

export const useLayoutNavbar = defineStore('layoutNavbar', {
  state: () => {
    return {
      show: true, // 可以控制 navbar 是否显示
      navbarProps: {
        // navbar 的 props，https://vant-contrib.gitee.io/vant/#/zh-CN/nav-bar#props
        title: '',
        leftText: '',
        leftArrow: true,
        border: true,
        fixed: true,
        placeholder: true,
        zIndex: 100,
        safeAreaInsetTop: true,
      } as NavBarProps,
      // 配置不显示 navbar 的 route.path
      dontShowList: [] as string[],
    }
  },
  actions: {
    /**
     * 设置导航栏
     * @param {Object} object
     */
    setNavbar(object: layoutTabbarType.setNavbar) {
      this.$patch((state) => {
        state.navbarProps = merge(this.navbarProps, object)
      })
    },
    /**
     * 隐藏navbar
     */
    hideNavbar() {
      this.show = false
    },
    /**
     * 显示navbar
     */
    showNavbar() {
      this.show = true
    },
    /**
     * 为不显示 navbar 的列表中新添项
     * @param {String} path
     */
    dontShowListAdd(path: string) {
      if (getType(path) === 'String') {
        this.$patch((state) => {
          state.dontShowList.push(path)
        })
      }
    },
    /**
     * 为不显示 navbar 的列表中删除项
     * @param {String} path
     */
    dontShowListRemove(path: string) {
      if (getType(path) === 'String') {
        this.$patch((state) => {
          state.dontShowList.splice(
            this.dontShowList.findIndex((x) => x === path),
            1,
          )
        })
      }
    },
    /**
     * 获取某个 path 是否显示 navbar
     * @param {String} path
     * @returns
     */
    getNavbarShow(path: string) {
      const layoutTabbar = useLayoutTabbar()
      const dontShowList = this.dontShowList.concat(layoutTabbar.tabbarToList)
      return !dontShowList.includes(path)
    },
  },
})
