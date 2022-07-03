const demoList = () => import('../views/demo/indexPage.vue')
const demoLayout = () => import('../views/demo/demoLayout.vue')
const tabbar = () => import('../views/demo/tabbar.vue')
const navBar = () => import('../views/demo/navBar.vue')

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
        path: 'navBar',
        name: 'navBar',
        component: navBar,
        meta: {
          requiresAuth: false,
          title: 'navbar 使用演示',
        },
      },
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
]
