// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueHead from 'vue-head'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'

import App from './App'

// sync store and router
import { sync } from 'vuex-router-sync'
import store from './store/index.js'
import router from './router/index.js'
sync(store, router)

Vue.use(VueHead)
Vue.use(VueRouter)
Vue.use(VueAnalytics, {id: 'UA-51029217-1', router: router})
Vue.config.productionTip = false

/* eslint no-unused-vars: 0 */
const app = new Vue({
  router,
  render (h) {
    return h(App)
  },
  store
}).$mount('#app')
