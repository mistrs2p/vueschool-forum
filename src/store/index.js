import { createStore } from 'vuex'
import sourceData from '@/data'
export default createStore({
  state: {
    ...sourceData,
    authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
  },
  getters: {
    authUser: state => state.users.find(user => user.id === state.authId)
  },
  actions: {
    createPost (context, post) {
      post.id = 'gggg' + Math.random()
      // Set the post
      context.commit('setPost', { post })
      // Append the post to the thread
      context.commit('appendPostToThread', { postId: post.id, threadId: post.threadId })
      this.thread.posts.push(post.id)
    }
  },
  mutations: {
    setPost (state, { post }) {
      state.posts.push(post)
    },
    appendPostToThread (state, { postId, threadId }) {
      const thread = state.threads.find(thread => thread.id === threadId)
      thread.posts.push(postId)
    }
  }
})
