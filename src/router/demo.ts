import { RouteRecordRaw } from 'vue-router'

const demoList = () => import('../views/demo/indexPage.vue')
const demoLayout = () => import('../views/demo/demoLayout.vue')
const tabbar = () => import('../views/demo/tabbar.vue')

export default [
  {
    path: '/demoList',
    name: 'demoList',
    component: demoList,
    meta: {
      requiresAuth: false,
      title: 'shop-m 项目演示',
    },
  },
  {
    path: '/demo',
    name: 'demoLayout',
    redirect: '/demo/tabbar',
    component: demoLayout,
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: 'tabbar',
        name: 'tabbar',
        component: tabbar,
        meta: {
          requiresAuth: false,
          title: 'tabbar 使用演示',
        },
      },
    ],
  },
] as RouteRecordRaw[]
