import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import VueRouter from 'vue-router'
import router from './router'
import './assets/styles/styles.scss'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
