// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {sync} from 'vuex-router-sync'
import store from './store/index'
import VueKonva from 'vue-konva'
import vueHeadful from 'vue-headful'
import VueHighlightJS from 'vue-highlight.js'
import 'highlight.js/styles/default.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueKonva)
Vue.component('vue-headful', vueHeadful)
Vue.use(VueHighlightJS)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
