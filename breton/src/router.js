import Vue from 'vue'
import Router from 'vue-router'
import CardsMain from './views/CardsMain.vue';
//import Search from './views/Search.vue';
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
    // {
    //   path: '/search',
    //   name: 'search',
    //   component: Search
    // }
  ]
})