<script>
import Vue from 'vue'
import axios from 'axios'

// TODO: values for testing needs to be changed on pagination
const pageNum = '&page=' + 1

const pageSize = '?pageSize=20'
const url = 'https://api.elderscrollslegends.io/v1/cards'
const params = pageSize + pageNum

console.log('URL: ' + url)

Vue.component('cards', {
  data () {
    return {
      cards: null,
      errors: [],
      loading: false
    }
  },
  mounted () {
    axios
      .get(url + params)
      .then(response => {
        console.log('response: ' + response)
        this.cards = response.data
        console.log('getCards: ' + response.data)
      })
      .catch(error => {
        console.log(error)
        this.errors.push(error)
      })
      .finally(() => {
      // this.loading = false
      })
  }
})

export default {
  name: 'CardsMain',
  props: [
    'cards'
  ]
}
</script>

<template>
  <div>
    <h1>H1</h1>
    <p>
      Pull the data on the cards and display it here.
    </p>
    <div id="cards">
      <p>test1</p>
      <div class='cards'>{{cards}}</div>
      <div v-for="card in cards" v-bind:key="card.id">
        <span class="card">
          <span :id="card.id">>{{ card.name }}</span>
        </span>
        <span>test3</span>
      </div>
      <span>test4</span>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}a
a {
  color: #42b983;
}
</style>
