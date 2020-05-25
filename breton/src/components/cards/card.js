import Vue from 'vue'
import Cards from '.views/Cards'

Vue.component('card', {
  el: '.card',
  data () {
    return {
      Cards: Cards.card
    }
  }
})
