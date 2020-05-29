import Vue from 'vue'
import Vuex from 'vuex'
import { createStore } from 'vuex-extensions'
Vue.use(Vuex)

export default createStore(Vuex.Store, {
  state: {
    apiUrl: 'https://api.elderscrollslegends.io/v1/cards',
    cards: [],
    page: 1,
    loading: true,
    pageSize: 20
  },
  getters: {
    apiUrl (state) {
      return state.apiUrl
    }
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
    },
    dumpCards (state) {
      state.cards = []
      state.page = 1
    }
  }
})
