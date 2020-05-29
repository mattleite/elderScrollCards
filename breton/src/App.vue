
<template>
  <div id="app">
    <CardsMain msg="This is the ElderScroll Cards Main page Application"/>
  </div>
</template>

<script>
import CardsMain from '@/views/CardsMain.vue'

export default {
  name: 'App',
  components: {
    CardsMain
  }
}
</script>

<style lang="scss">
@import "./assets/sass/global.sass";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #000000;
}
</style>
