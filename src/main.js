import { createApp } from 'vue'
import App from './App.vue'
import AppDate from '@/components/AppDate'
import router from '@/rotuer'

const forumApp = createApp(App)

// add a global component
// forumApp.component('component-name', {})

// add a global plugin
// forumApp.use(plugin-name)
forumApp.use(router)
forumApp.component('AppDate', AppDate)
forumApp.mount('#app')
