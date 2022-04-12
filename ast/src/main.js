import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// import { newCode } from './components/demo3'
// import newCode from './views/About'
// console.log(newCode, 111)
// Vue.component('demo', newCode);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')