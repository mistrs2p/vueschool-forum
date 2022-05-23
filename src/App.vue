<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
// import PageHome from '@/components/PageHome.vue'
const name = 'mahdi'
export default {
  name: 'App',
  components: {
    // PageHome
  }
}
</script>

<style>
@import url('@/assets/css/style.css');
/* when importing stylesheet from node-module for css sass or scss */
/* @import url('~bootstrap/css/bootstrap.css') */
</style>
