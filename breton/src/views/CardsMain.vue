<template>
  <div>
    <h1>Elder Scroll Legends</h1>
    <Cards/>
  </div>
</template>

<script>
import Cards from './components/cards/Cards.vue'

export default {
  name: 'CardsMain',
  components: {
    Cards
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin: 40px 0 0;
}

</style>
