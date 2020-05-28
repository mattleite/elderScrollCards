import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [],
    page: null,
    loading: true,
    pageSize: 20
  },
  mutations: {
    updateCards (state, cards) {
      state.cards = cards
    },
    changeLoadingState (state, loading) {
      state.loading = loading
    },
    updatePageCount (state) {
      state.page++
    },
    addCard (state, card) {
      state.cards.push(card)
    }
  }
})
