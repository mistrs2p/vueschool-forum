<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="container">
    <PageHome />
  </div>
</template>

<script>
import PageHome from '@/components/PageHome.vue'
const name = 'mahdi'
export default {
  name: 'App',
  components: {
    PageHome
  }
}
</script>

<style>
@import url('@/assets/css/style.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
