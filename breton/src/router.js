import Router from 'vue-router'
import CardsMain from '@/views/cardsMain'

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
      component: CardsMain
    }
  ]
})
