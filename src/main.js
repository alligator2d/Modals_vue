import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import './assets/scss/main.scss'


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
