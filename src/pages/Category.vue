<template>
  <h1>{{ category.name }}</h1>
  <forumList :title="category.name" :forums="getForumsForCategory(category)"  />
</template>

<script>
import ForumList from '@/components/ForumList.vue'
import sourceData from '@/data.json'
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
      return sourceData.categories.find(
        (category) => category.id === this.id
      )
    }
  },
  methods: {
    getForumsForCategory (category) {
      return sourceData.forums.filter(
        (forum) => forum.categoryId === category.id
      )
    }
  }
}
</script>

<style>
</style>
