import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/City',
      name: 'City',
      component: () => import( './views/City.vue')
    },

    {
      path: '/Search',
      name: 'Search',
      component: () => import( './views/Search.vue')
    }
  ]
})
