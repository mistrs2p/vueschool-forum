import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/components/PageHome'
const routes = [
  {
    path: '/',
    component: PageHome
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const forumApp = createApp(App)

// add a global component
// forumApp.component('component-name', {})

// add a global plugin
// forumApp.use(plugin-name)
forumApp.use(router)
forumApp.mount('#app')
