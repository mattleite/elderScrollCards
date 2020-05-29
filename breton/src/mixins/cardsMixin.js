import axios from 'axios'
import querystring from 'querystring'
import store from '@/store'

export default {
  methods: {
    async dumpCards () {
      store.commit('dumpCards')
    },
    async loadMoreCards (name, page) {
      let cardsTemp = []
      const params = {
        pageSize: 20,
        page
      }
      if (name) {
        params.name = name
      }
      const apiUrl = this.$store.getters.apiUrl
      const queryString = querystring.stringify(params)
      axios.get(`${apiUrl}/?${queryString}`).then(response => {
        cardsTemp = response.data.cards
      }).then(() => {
        cardsTemp.forEach(card => {
          store.commit('addCard', card)
        })
        store.commit('changeLoadingState', false)
        store.commit('updatePageCount')
      })
    }
  }
}
