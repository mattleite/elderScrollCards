import Vue from 'vue'
import axios from 'axios'

// TODO: values for testing needs to be changed on pagination
const pageNum = '&page=' + 1
const pageSize = '?pageSize=20'
const url = 'https://api.elderscrollslegends.io/v1/cards'
const params = pageSize + pageNum
console.log('URL: ' + url)

Vue.component('Cards', {
  el: '#cards',
  data: function () {
    return {
      cards: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    axios
      .get(url + params)
      .then(response => {
        this.cards = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => {
        this.loading = false
      })
  }
})
