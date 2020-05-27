<template>
  <div id="toolbar">
    <md-toolbar>
      <md-button class="md-icon-button" @click="showNavigation = true">
        <span>MENU</span>
      </md-button><CardNameSearchForm/>
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
      </md-list>
    </md-drawer>
    <div id="search"></div>
  </div>
</template>

<script>
import CardNameSearchForm from '@/components/cardNameSearch.vue'

export default {
  name: 'toolbar',
  components: {
    CardNameSearchForm
  },
  data: () => {
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
  width: 95vw;
  margin: 0 auto;
}
</style>
