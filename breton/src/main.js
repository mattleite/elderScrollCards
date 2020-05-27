import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import VueMaterial from 'vue-material'
// import VeeValidate from 'vee-validate';
import 'vue-material/dist/vue-material.min.css'
import './assets/sass/mytheme.scss'
import infiniteScroll from 'vue-infinite-scroll'
import './registerServiceWorker'

Vue.use(infiniteScroll)
Vue.use(VueMaterial)

// Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
