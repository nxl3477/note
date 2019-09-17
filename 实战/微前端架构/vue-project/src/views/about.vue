<template>
  <div>
    <div v-for="i in getTodoList" :key="i">{{i}}</div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getTodoList'])
  }
}
</script>
