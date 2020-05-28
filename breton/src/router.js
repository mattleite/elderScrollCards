import Vue from 'vue'
import Router from 'vue-router'
import CardsMain from '@/views/CardsMain'
import CardsNameSearch from '@/views/CardsNameSearch'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: CardsMain
    },
    {
      path: '/card-name-search/:cardName',
      name: 'card-name-search',
      component: CardsNameSearch
    }
  ]
})
