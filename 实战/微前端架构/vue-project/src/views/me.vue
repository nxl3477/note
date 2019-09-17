<template>
  <div>
    <button @click="SAVE_TODOLIST('黑暗时代和')">点我增加</button>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  
  methods: {
    ...mapMutations(['SAVE_TODOLIST'])
  }
}
</script>
