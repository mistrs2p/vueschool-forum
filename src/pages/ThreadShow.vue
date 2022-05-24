<template>
<!-- if an invalid id searched by user, here one of the solutions, add vif for thread -->
  <div
    v-if="thread"
    class="col-large push-top"
  >
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts"/>
    <div class="col-full">
      <form  @submit.prevent="addPost">
        <div class="form-group">
          <textarea :value="newPostText" @input="newPostText = $event.target.value" name="" id="" cols="30" rows="10" class="form-input"></textarea>
        </div>
        <div class="form-actions">
          <button class="btn-blue">Submit post</button>
        </div>
      </form>
    </div>
  </div>
  <!-- <div class="col-full text-center">
    <h1>This Thread does not exist</h1>
    <router-link :to="{name: 'Home'}" >Read some cool threads</router-link>
  </div> -->
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
      posts: dataSource.posts,
      newPostText: ''
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
  },
  methods: {
    addPost () {
      const postId = 'gggg' + Math.random()
      const post = {
        id: postId,
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: 'rpbB8C6ifrYmNDufMERWfQUoa202'
      }
      this.posts.push(post)
      this.thread.posts.push(postId)
      console.log(post)
      this.newPostText = ''
    }
  }

}
</script>

<style scoped>

</style>
