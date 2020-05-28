import axios from 'axios'
import querystring from 'querystring'
import store from '@/store'

// import { createStore } from 'vuex-extensions'

const apiUrl = 'https://api.elderscrollslegends.io/v1/cards'

export default {
  methods: {
    getCards: async function (name, page) {
      const params = {
        pageSize: 20,
        page: page
      }
      if (name) {
        params.name = name
      }
      const queryString = querystring.stringify(params)
      axios.get(`${apiUrl}/?${queryString}`).then(response => {
        store.commit('updateCards', response.data.cards)
        store.commit('changeLoadingState', false)
        store.commit('updatePageCount')
      })
    },
    dumpCards: async function () {
      store.commit('dumpCards')
    },
    loadMoreCards: async function (name, page) {
      let cards = []
      const params = {
        pageSize: 20,
        page: page
      }
      if (name) {
        params.name = name
      }
      const queryString = querystring.stringify(params)
      axios.get(`${apiUrl}/?${queryString}`).then(response => {
        cards = response.data.cards
      }).then(() => {
        cards.forEach(card => {
          store.commit('addCard', card)
        })
        store.commit('changeLoadingState', false)
        store.commit('updatePageCount')
      })
    }
  }
}
