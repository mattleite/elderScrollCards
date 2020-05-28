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
          <router-link to="/">
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
  name: 'toolbar',
  mixins: [cardsMixin],
  components: {
    CardNameSearchForm
  },
  data () {
    return {
      showNavigation: false
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
