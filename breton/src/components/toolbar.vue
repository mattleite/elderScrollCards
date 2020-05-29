<template>
  <div id="toolbar">
    <md-toolbar>
      <md-button class="md-icon-button" @click="showNavigation = true">
        <span>MENU</span>
      </md-button>
    </md-toolbar>
    <md-drawer :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Elder Scroll Cards</span>
      </md-toolbar>
      <md-list>
        <md-list-item>
          <router-link v-on:click.native="loadHome" to="/" :disabled="sending">
            <span class="md-list-item-text">Home</span>
          </router-link>
        </md-list-item>
        <md-list-item>
           <CardNameSearchForm/>
        </md-list-item>
      </md-list>
    </md-drawer>
  </div>
</template>

<script>
import CardNameSearchForm from '@/components/cardNameSearch.vue'
import cardsMixin from '@/mixins/cardsMixin'

export default {
  mixins: [cardsMixin],
  components: {
    CardNameSearchForm
  },
  data () {
    return {
      showNavigation: false,
      sending: false
    }
  },
  methods: {
    async loadHome () {
      if (this.$route.path === '/') {
        this.dumpCards()
        this.sending = true
        await this.loadMoreCards(null, 1).then(() => {
          this.sending = false
        })
      }
    }
  }
}
</script>

<style>
.center {
  text-align: center;
}
form {
  margin: auto;
}
.md-list-item-text{
  color: #fff;
}
</style>
