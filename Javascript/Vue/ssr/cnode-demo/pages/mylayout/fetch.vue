<template>
  <div>
    asyncData异步数据获取
    名称: {{name}}
  </div>
</template>
<script>
export default {
  data () {
    return { 
      name: 'default',
      posts: []
    }
  },
  async fetch ({params, $axios, store}) {
    const res = await $axios.get('http://jsonplaceholder.typicode.com/posts')
    console.log(res)
    // store.commit('setUserInfo', res)
  },
  mounted() {
    this.$axios.get('http://jsonplaceholder.typicode.com/posts').then(res=> {
      // console.log('哈哈', res)
      this.$store.commit('fetch/setPosts', res.data)
      // 命名空间
      this.posts = this.$store.getters['fetch/getPosts'] 
      console.log('vuex使用成功', this.posts)
    })
  }
}
</script>
