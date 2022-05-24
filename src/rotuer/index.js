import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/components/PageHome'
import PageThreadShow from '@/components/PageThreadShow'
import PageNotFound from '@/components/PageNotFound'

import dataSource from '@/data.json'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
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
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
