// import Vue from 'vue'
import Loading from './Loading'
export default{
    install:function(Vue,o){
        // Vue.component(Loading.name,Loading);
        // 1.根据创建的组件生成构造函数
        let LoadingConstructor=Vue.extend(Loading);
        // 2.根据构造函数创建实例对象
        let LoadingInstantiation=new LoadingConstructor();
        // 3.随便创建一个元素
        let oDiv=document.createElement("div");
        // 4.将元素添加到页面中
        document.body.appendChild(oDiv);
        // 5.将创建好的实例对象挂载到元素中
        LoadingInstantiation.$mount(oDiv);
        //初始化值
        if(o.title && o.title !==null && o.title !=undefined){
            LoadingInstantiation.title=o.title;
        }
        // 全局的属性和全局的方法
        Vue.showLoading = function () {
            LoadingInstantiation.isShow=true;
        }
        Vue.hiddenLoading = function () {
            LoadingInstantiation.isShow=false;
        }
        // 实例的方法
        Vue.prototype.$showLoading = function (methodOptions) {
            // some logic ...
            LoadingInstantiation.isShow=true;
            
        }
        Vue.prototype.$hiddenLoading = function (methodOptions) {
            // some logic ...
            LoadingInstantiation.isShow=false;      
        }
        
    }

}
