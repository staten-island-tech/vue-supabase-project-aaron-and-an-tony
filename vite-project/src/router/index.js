import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Stereograms from '@/views/stereograms.vue'
import Protected from '@/views/Protected.vue'
import { userSessionStore } from '../stores/userSession.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/stereograms',
      name: 'stereograms',
      component: Stereograms,
      meta: {
        needsAuth: true
      }
    },
    {
      path: '/protected',
      name: 'protected',
      component: Protected,
      meta: {
        needsAuth: true 
      }
    },
  ]
})
router.beforeEach((to, from, next) => {
  const userSession = userSessionStore()
// THIS CHECKS FOR AUTHENTICATION TO PREVENT ACCESSING LOG IN REQUIRED PAGES
  if (to.meta.needsAuth) {
    if (userSession.session) {
      return next()
    } else {
      return next('/')
    }
  }

  return next()
})
export default router
