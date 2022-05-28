<template>
<TheNavbar />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
// import PageHome from '@/components/PageHome.vue'

const name = 'mahdi'
export default {
  name: 'App',
  components: {
    TheNavbar
  }
}
</script>

<style>
@import url('@/assets/css/style.css');
/* when importing stylesheet from node-module for css sass or scss */
/* @import url('~bootstrap/css/bootstrap.css') */
</style>
