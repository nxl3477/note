<template>
  <div>
    <!-- <router-link to="/">index</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/me">me</router-link>
    <router-view></router-view> -->
    <helloWorld />
  </div>
</template>
<script>
import helloWorld from './helloworld.vue'
export default {
  name: 'app',
  components: {
    helloWorld
  }
}
</script>
<style lang="sass">

</style>
