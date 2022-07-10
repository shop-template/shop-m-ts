import { createRouter, createWebHashHistory } from 'vue-router'
import userRouter from './user'
import demoRouters from './demo'
import permission from './permission'

const HomePage = () => import('../views/home/HomePage.vue')
const ListPage = () => import('../views/list/ListPage.vue')
const ShoppingCartPage = () => import('../views/ShoppingCart/ShoppingCartPage.vue')
const LoginPage = () => import('../views/common/LoginPage.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...demoRouters,
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        requiresAuth: false,
        title: '首页',
      },
    },
    {
      path: '/list',
      name: 'list',
      component: ListPage,
      meta: {
        requiresAuth: false,
        title: '列表',
      },
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: ShoppingCartPage,
      meta: {
        requiresAuth: true,
        title: '购物车',
      },
    },
    ...userRouter,
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: {
        requiresAuth: false,
        title: '登录',
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

permission(router)

export default router
