import Vue from 'vue'
import VueRouter from 'vue-router'
import demoTable from '~/views/homepage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: demoTable
  }
]

const router = new VueRouter({
  routes
})

export default router
