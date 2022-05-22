import { createApp } from 'vue'
import App from './App.vue'

const forumApp = createApp(App)

// add a global component
// forumApp.component('component-name', {})

// add a global plugin
// forumApp.use(plugin-name)

forumApp.mount('#app')
