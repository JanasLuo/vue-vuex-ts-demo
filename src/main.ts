import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import echarts from 'echarts'

Vue.config.productionTip = false

Vue.prototype = Object.assign(Vue.prototype, {
  echarts
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
