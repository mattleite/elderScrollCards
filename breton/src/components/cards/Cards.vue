<template>
  <div id="cards">
    <div class="md-layout md-gutter md-alignment-center"
        v-infinite-scroll="getAllCards"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="12"
      >
      <md-card v-for="card in cards" :key="card.id" class="card md-layout-item md-xlarge-size-20 md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card-media><img :src="card.imageUrl"/></md-card-media>
        <div class="card-info">
          <h3 class="name info"><span class="title">Name: </span><span class='content'>{{ card.name }}</span></h3>
          <span class="cardText info"><span class="title">Text: </span><span class='content'>{{ card.text }}</span></span>
          <span class="setName info"><span class="title">Set: </span><span class='content'>{{ card.set.name }}</span></span>
          <span class="cardType info"><span class="title">Type: </span><span class='content'>{{ card.type }}</span></span>
        </div>
      </md-card>
    </div>
    <div v-show="this.$store.state.loading" class="loading"><ProgressSpinnerIndeterminate/></div>
  </div>
</template>

<script>
import ProgressSpinnerIndeterminate from '@/components/loadSpinner'
import cardsMixin from '@/mixins/cardsMixin'

export default {
  name: 'Cards',
  mixins: [cardsMixin],
  data () {
    return {
      cardName: null,
      cards: this.$store.cards,
      showLoading: this.$store.state.loading
    }
  },
  components: {
    ProgressSpinnerIndeterminate
  },
  methods: {
    async getAllCards () {
      console.log('Cards.vue - this.cardName: ' + this.cardName)
      if (this.cardName || this.cardName !== '') {
        await this.searchCardsByName(this.cardName).then(
          console.log('Cards.vue getAllCards - searchCardsByName(): '))
      } else {
        await this.getCards().then(
          console.log('Cards.vue getAllCards - getCards(): '))
      }
    }
  },
  beforeMount () {
    console.log('router.params.cardName: ' + this.$route.params.cardName)
    if (this.$route.params.cardName !== undefined) {
      this.cardName = this.$route.params.cardName
      this.getAllCards()
    }
  }

}
</script>

<style scoped lang="scss">

@import "~vue-material/src/components/MdAnimation/variables";
.md-layout-item {
    padding-right: 20px;
    padding-left: 20px;
    margin: 5px 8px;
    margin: 5px 8px;
    flex-direction: column;
    transition: .3s $md-transition-stand-timing;
}
.md-card-media{
  display: inline;
  flex-direction: row;
}
.card-info{
  margin-bottom:25px;
}

.info{
  width: 100%;
  display: inline-flex;
  text-align: left;
  margin: 5px 10px;
  flex-flow: row;

  .title{
    font-weight: bold;
    width: 3vw;
    display: inline-flex;
    text-align: left;
    margin: 0 10px 0 0;
    flex-flow: column;
  }

  .content{
    font-weight: bold;
    display: inline-flex;
    text-align: left;
    flex-flow: column;
    width: 100%;
  }
}

</style>
