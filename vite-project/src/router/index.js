import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Stereograms from '@/views/stereograms.vue'
import AboutView from '@/views/AboutView.vue'
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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
      meta: {
        needsAuth: true
      }
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
