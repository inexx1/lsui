import Vue from 'vue'
import App from './App.vue'
import LsUi from '../packages'
Vue.config.productionTip = false
Vue.use(LsUi)
new Vue({
  render: h => h(App)
}).$mount('#app')
