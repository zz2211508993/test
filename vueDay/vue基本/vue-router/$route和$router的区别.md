$route 是当前跳转的对象，可以获取name/params/query等等方法

$route是router中index.js中的router中的一个活跃(当前跳转)的对象

$router是VueRouter的实例对象，可以实现跳转不同的URL，使用$router.push方法



为什么在组件中可以使用$route,$router

组件中继承了Vue类的原型

只要在Vue原型上定义，组件就可以使用

Vue.prototype.$route='xxx'

Vue.prototype.$router



