import Vue from 'vue'
import VueRouter from 'vue-router'
import First from '../views/First.vue'
import Second from '../views/Second.vue'
import Third from '../views/Third.vue'
import Fourth from '../views/Fourth.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/first',
    name: 'first',
    component: First
  },
  {
    path: '/second',
    name: 'second',
    component: Second
  },
  {
    path: '/third',
    name: 'third',
    component: Third
  },
  {
    path: '/fourth',
    name: 'fourth',
    component: Fourth
  }
]

const router = new VueRouter({
  routes
})

export default router
