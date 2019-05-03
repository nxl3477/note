<template>
  <div>
    asyncData异步数据获取
    名称: {{name}}
  </div>
</template>
<script>
export default {
  data () {
    return { name: 'default' }
  },
  asyncData (context) {
    console.log('asyncData上下文', context)
    return { name: 'nuxt' }
  }
}
</script>
