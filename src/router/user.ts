const UserPage = () => import('../views/user/UserPage.vue')

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
]
