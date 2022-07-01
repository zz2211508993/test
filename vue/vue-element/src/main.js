import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 安装饿了么的ui
//1.导入饿了么的对应的文件
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// 1.优化导入的饿了么对应的文件
import { Button, Row, Switch } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
//2.在全局方法中使用饿了么ui
Vue.use(Button)
Vue.use(Row)
Vue.use(Switch);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

