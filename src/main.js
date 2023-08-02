import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import registryToast from './toast/index.js'

Vue.use(registryToast)

new Vue({
  render: h => h(App),
}).$mount('#app')
