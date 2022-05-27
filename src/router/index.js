import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView'
import ThreadShow from '@/pages/ThreadShow'
import NotFound from '@/pages/NotFound'
import Forum from '@/pages/Forum'
import Category from '@/pages/Category'

import dataSource from '@/data.json'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true,
    beforeEnter: (to, from, next) => {
      // next never call in beforeEnter
      console.log(to.path.substring(1), from, next)
      // check if thread exist
      const threadExist = dataSource.threads.find(t => t.id === to.params.id)
      // if (!threadExist) return next({ name: 'NotFound', params: { pathMatch: to.path.split('/').splice(1) } })
      // OR
      if (!threadExist) {
        return next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          // preserve existing query and hash
          query: to.query,
          hash: to.hash
        })
      } else return next()
    }
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category,
    props: true
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: Forum,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
