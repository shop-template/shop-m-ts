import { createRouter, createWebHashHistory } from 'vue-router'
import demoRouters from './demo'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...demoRouters],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

export default router
