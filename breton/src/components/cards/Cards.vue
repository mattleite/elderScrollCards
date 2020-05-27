<template>
    <div id="cards">
        <div v-for="card in cards" :key="card.id" class="card">
        <h3 class='name'>{{ card.name }}</h3>
        <span class='cardImg'><img :src="card.imageUrl"/></span>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
// TODO: values for testing needs to be changed on pagination
const pageNum = '&page=' + 1
const pageSize = '?pageSize=20'
const url = 'https://api.elderscrollslegends.io/v1/cards'
const params = pageSize + pageNum
export default {
    props: [
        'card'
    ],
    data () {
        return {
        errors: [],
        loading: true
        }
    },
    mounted () {
        axios
        .get(url + params)
            .then(response => {
                this.cards = response.data.cards
            })
            .catch(error => {
            console.log(error)
                this.errors.push(error)
            })
            .finally(() => {
                this.loading = false
            })
    }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
#cards {
  display:inline-flexbox
}
.card {
  display:flex;
  float:left;
}
</style>