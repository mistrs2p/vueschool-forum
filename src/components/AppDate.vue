<template>
  <span :title="humanFriendlyDate()">
    {{ diffForHuman() }}
  </span>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedData from 'dayjs/plugin/localizedFormat'
dayjs.extend(relativeTime)
dayjs.extend(localizedData)
export default {
  props: {
    timestamp: {
      type: Number,
      required: true
    }
  },
  methods: {
    diffForHuman () {
      return dayjs.unix(this.timestamp).fromNow()
    },
    humanFriendlyDate () {
      return dayjs.unix(this.timestamp).format('llll')
    }
  }
}
</script>

<style>
</style>
