<template>
<div>Hello from pageHome</div>
<div v-for="thread in threads" :key="thread.id">
    <h2>{{ thread.title }}</h2>
    <div v-for="postId in thread.posts" :key="postId">
        <p>{{ userById(postById(postId).userId).name }}</p>
        <p>{{ postById(postId).text }}</p>
    </div>
</div>
</template>

<script>
import dataSource from '@/data.json'
console.log(dataSource)

export default {
  data () {
    return {
      threads: dataSource.threads,
      posts: dataSource.posts,
      users: dataSource.users
    }
  },
  methods: {
    postById (postId) {
      return this.posts.find(post => post.id === postId)
    },
    userById (userId) {
      return this.users.find(user => user.id === userId)
    }
  }
}
</script>

<style>

</style>
