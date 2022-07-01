import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import MintUI from 'mint-ui'
import {Button,Switch} from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Button.name,Button)
Vue.component(Switch.name,Switch)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
