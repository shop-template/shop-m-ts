const UserPage = () => import('../views/user/UserPage.vue')
const UserInfoPage = () => import('../views/user/UserInfoPage.vue')

export default [
  {
    path: '/user',
    name: 'user',
    component: UserPage,
    meta: {
      requiresAuth: false,
      title: '我的',
    },
  },
  {
    path: '/userInfo',
    name: 'userInfo',
    component: UserInfoPage,
    meta: {
      requiresAuth: true,
      title: '个人信息',
    },
  },
]
