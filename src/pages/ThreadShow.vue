<template>
<!-- if an invalid id searched by user, here one of the solutions, add vif for thread -->
  <div
    v-if="thread"
    class="col-large push-top"
  >
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts"/>
  </div>
  <div class="col-full text-center">
    <h1>This Thread does not exist</h1>
    <router-link :to="{name: 'Home'}" >Read some cool threads</router-link>
</div>
</template>

<script>
import dataSource from '@/data.json'
import PostList from '@/components/PostList'
console.log(dataSource)

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    PostList
  },
  data () {
    return {
      threads: dataSource.threads,
      posts: dataSource.posts
    }
  },
  computed: {
    thread () {
      // return this.threads.find(t => t.id === this.id)
      return this.threads.find(t => t.id === this.$route.params.id)
    },
    threadPosts () {
      return this.posts.filter(post => post.threadId === this.id)
    }
  }

}
</script>

<style scoped>

</style>
