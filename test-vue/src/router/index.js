import Vue from 'vue'
import Router from 'vue-router'
import First from '../learnRoute/first.vue'
import Second from '../learnRoute/second.vue'
import UserPage from '../learnRoute/thrid.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstPage',
      component: First
    },
    {
      path: '/second',
      name: 'secondPage',
      component: Second
    },
    {
      path: '/user/:id',
      name: 'userPage',
      component: UserPage
    }
  ]
})
