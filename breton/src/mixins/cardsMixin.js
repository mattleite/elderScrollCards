import axios from 'axios'
import querystring from 'querystring'
import store from '@/store'

// import { createStore } from 'vuex-extensions'

axios.defaults.baseURL = 'https://api.elderscrollslegends.io/v1/cards'

export default {
  actions: {
    async getCards (page) {
      const params = {
        page: page,
        pageSize: 20
      }
      const queryString = querystring.stringify(params)
      axios.get(`/?${queryString}`).then((response) => {
        store.commit('updateCards', response.data)
        store.commit('changeLoadingState', false)
        store.commit('updatePageCount')
      })
    },
    async searchCardsByName (name, page) {
      const params = {
        name: name,
        page: page,
        pageSize: 20
      }
      const queryString = querystring.stringify(params)
      axios.get(`/?${queryString}`).then((response) => {
        store.commit('updateCards', response.data)
        store.commit('changeLoadingState', false)
        store.commit('updatePageCount')
      })
    }
  }
}
