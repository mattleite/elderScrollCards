import Vue from 'vue'
import Vuex from 'vuex'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import VueMaterial from 'vue-material'
import Vuelidate from 'vuelidate'
import infiniteScroll from 'vue-infinite-scroll'
import Router from 'vue-router'

import 'vue-material/dist/vue-material.min.css'
import '@/assets/sass/mytheme.scss'
import '@/registerServiceWorker'

Vue.use(infiniteScroll)
Vue.use(VueMaterial)
Vue.use(Vuelidate)
Vue.use(Router)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
