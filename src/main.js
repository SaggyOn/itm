import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { VueTypedJs } from 'vue-typed-js'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueTypedJs)

import 'remixicon/fonts/remixicon.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
