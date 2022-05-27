<template>
  <h1>{{ category.name }}</h1>
  <forumList :title="category.name" :forums="getForumsForCategory(category)"  />
</template>

<script>
import ForumList from '@/components/ForumList.vue'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    ForumList
  },
  computed: {
    category () {
      return this.$store.state.categories.find(
        (category) => category.id === this.id
      )
    }
  },
  methods: {
    getForumsForCategory (category) {
      return this.$store.state.forums.filter(
        (forum) => forum.categoryId === category.id
      )
    }
  }
}
</script>

<style>
</style>
