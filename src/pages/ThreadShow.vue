<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <PostEditor @save="addPost" />
  </div>
</template>

<script>

import PostList from '@/components/PostList'
import PostEditor from '@/components/PostEditor'
// console.log(dataSource)

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    PostList,
    PostEditor
  },
  computed: {
    threads () {
      return this.$store.state.threads
    },
    posts () {
      return this.$store.state.posts
    },
    thread () {
      return this.threads.find((t) => t.id === this.$route.params.id)
    },
    threadPosts () {
      return this.posts.filter((post) => post.threadId === this.id)
    }
  },
  methods: {
    addPost (eventData) {
      const post = {
        ...eventData.post,
        threadId: this.id
      }
      this.$store.dispatch('createPost', post)
    }
  }
}
</script>

<style scoped>
</style>
