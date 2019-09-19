<template>
  <div class="vue-wrap">
    vue 组件
    <p class="vue-wrap-status">vue组件内状态： {{vueCount}}</p>
    <div>
      <button @click="addVue">点我</button>
    </div>
    <hr />
    <p class="vue-react-status"> react组件内状态： {{reactCount}} </p>
    <div class="vue-react-trigger">
      <button @click="addReact">通信react </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      vueCount: 0,
      reactCount: 0
    }
  },
  mounted() {
    window.eventBus.subscribe('addVueCount', (count) => {
      this.vueCount++
    })
  },
  methods: {
    addVue() {
      this.vueCount++ 
    },
    addReact() {
      this.reactCount++ 
      window.eventBus.dispatch('addReactCount', this.reactCount)
    }
  },
}
</script>
<style lang="scss">
.vue{
  
  &-wrap {
    border: 3px solid green;
    color: green;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
  }

  &-react {
    &-trigger {
      padding-bottom: 20px;

    }
  }
}
</style>
