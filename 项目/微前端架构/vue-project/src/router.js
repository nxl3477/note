const routers = [
  { path: '/', component: () => import('./views/test.vue') },
  { path: '/about', component: () => import('./views/about.vue') },
  { path: '/me', component: () => import('./views/me.vue') }
]

export default routers