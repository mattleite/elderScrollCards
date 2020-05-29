<template>
  <div>
    <h1>Elder Scroll Legends</h1>
    <Toolbar/>
    <div id="cards" class="md-layout md-gutter md-alignment-center"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
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
    <div v-show="showLoading" class="loading"><ProgressBarIndeterminate/></div>
  </div>
</template>

<script>
// TODO: breakout Cards to individual component
import Toolbar from '@/components/toolbar'
import ProgressBarIndeterminate from '@/components/progressbar'
import { cardsMixin } from '@/mixins/cardsMixin'

export default {
  name: 'CardsMain',
  components: {
    Toolbar,
    ProgressBarIndeterminate
  },
  data () {
    return {
      showLoading: false,
      cards: [],
      page: 1
    }
  },
  mixins: [cardsMixin],
  beforeMount () {
    this.getAllCards()
  },
  methods: {
    async getAllCards () {
      this.showLoading = true
      const response = await this.getCards()
      if (response.ok) this.showLoading = false
      this.cards = response.data.cards
    },
    async loadMore () {
      this.page++
      const response = await this.getCards(this.page)
      if (response.ok) this.showLoading = false
      this.cards = this.cards.concat(response.data.cards)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~vue-material/src/components/MdAnimation/variables";
h1 {
    margin: 0;
    padding: 50px 0;
    font-size: 60px;
    .title{
      color:#000
    }
}

.md-layout-item {
    padding-right: 20px;
    padding-left: 20px;
    margin: 5px 8px;
    margin: 5px 8px;
    flex-direction: column;
    transition: .3s $md-transition-stand-timing;

    &:after {
      width: 100%;
      height: 100%;
      display: block;
      background: md-get-palette-color(purple, 200);
      content: " ";
    }
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
  height: 4vh;
  flex-flow: row;

  .title{
    font-weight: bold;
    width: 3vw;
    display: inline-flex;
    text-align: left;
    margin: 0 10px 0 0;
    height: 4vh;
    flex-flow: column;
  }

  .content{
    font-weight: bold;
    display: inline-flex;
    text-align: left;
    height: 4vh;
    flex-flow: column;
  }
}
.loading{
  width: 300px;
}
</style>
