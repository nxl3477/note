import Vue from "vue";
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import routes from './router'
import store from './store'
import App from './App.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});