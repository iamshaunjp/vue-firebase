import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/components/home/Map'
import Signup from '@/components/auth/signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Map',
      component: Map
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
