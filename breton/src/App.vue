<template>
  <div id="app">
    <CardsMain msg="This is the ElderScroll Cards Main page Application"/>
  </div>
</template>

<script>
import CardsMain from './views/cards/CardsMain.vue'

export default {
  name: 'App',
  components: {
    CardsMain
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
