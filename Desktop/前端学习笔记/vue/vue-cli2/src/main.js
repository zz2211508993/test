import Vue from 'vue'
// 导入App的vue
import App from './App.vue'
// 导入Vuex
import store from './store/index'
// 导入路由
import router from './router/index'
/* eslint-disable no-new */  
// eslint-disable no-new 没有调用不报错 newVue
new Vue({
  el:'#app',
  store:store,
  router:router,
  // 渲染
  render: c => c(App),
})
