<template>
  <div class="cards-main">
    <h1>Elder Scroll Legends</h1>
    <Toolbar/>
    <Cards/>
  </div>
</template>

<script>
// TODO: breakout Cards to individual component
import Toolbar from '@/components/toolbar'
import Cards from '@/components/cards/cards'

export default {
  components: {
    Toolbar,
    Cards
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h1 {
    margin: 0;
    padding: 50px 0;
    font-size: 60px;
    .title{
      color:#000
    }
}
.cards-main{
  margin: auto;
  width: 100%;
  padding: 10px;
}

</style>
