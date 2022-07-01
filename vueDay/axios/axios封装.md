#### 如何封装axios

##### 1.创建实例对象

```
        const instance = axios.create({
            baseURL:'https://lianghj.top:3000',
            timeout:3000,
        });
```

##### 2.请求拦截

```
        instance.interceptors.request.use((res)=>{
            return res.data;
        },error => {
            console.log(error);
        })
```

##### 3.响应拦截

```
        instance.interceptors.response.use((res)=>{
            return res.data;
        },error => {
            console.log(error);
        })
```



##### 4.通过实例发送网络请求

```
   instance(options).then(res=>{
            //执行传进来的那个
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
```



##### 5.如何使用封装的请求

在需要发送请求的js文件中这样使用

```
import {request} from "./network";

export function banner(){
    return request({
        url:'/banner'
    })
}
```



##### 6.在组件模板中如何使用

```
  created() {
    banner().then(res=>{
      console.log(res +'' +123);
    })
  }
```





##### ---完整代码---

network.js 文件

```
mport axios from 'axios';

export function request(options){
    return new Promise((resolve, reject) => {
        //1.创建实例
        const instance = axios.create({
            baseURL:'https://lianghj.top:3000',
            timeout:3000,
        });
        //2.拦截发送出去之后还没接收到的
        instance.interceptors.response.use((res)=>{
            return res.data;
        },error => {
            console.log(error);
        })
        //4.通过实例发送网络请求
        instance(options).then(res=>{
            //执行传进来的那个
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })

}
```

