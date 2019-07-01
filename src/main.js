import Vue from 'vue'
import App from './App.vue'
import router from './route/router'
import store from './store/store'
import http from './plugins/axios'

Vue.config.productionTip = false

Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
