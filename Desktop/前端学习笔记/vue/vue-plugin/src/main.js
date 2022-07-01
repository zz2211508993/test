import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Loading from './plugin/index'
Vue.use(Loading,{
  title:'皇帝不急太监急',
});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
