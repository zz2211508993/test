import Vue from 'vue'
// 导入路由
import Router from 'vue-router'
// 导入One组件
import One from '../components/One.vue'
// 导入Two组件
import Two from '../components/Two.vue'

Vue.use(Router)
// 路由规则
const routes = [
    { path: '/one', component: One },
    { path: '/two', component: Two }
]
// 路由对象
const router = new Router({
    routes 
    //routes 相当于 routes:routes
})
// 将路由对象暴露给外界
export default router;


