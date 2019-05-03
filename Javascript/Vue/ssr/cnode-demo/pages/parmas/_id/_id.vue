<template>
  <div>在必填路由之后的可选路由, 参数=>{{name}}</div>
</template>

<script>
export default {
  // 定义参数路由校验方法
  validate ({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  },
  data() {
    return {
      name: this.$route.params.id
    }
  },
  mounted()  {
    console.log('asdasd', this)
  }
}
</script>
