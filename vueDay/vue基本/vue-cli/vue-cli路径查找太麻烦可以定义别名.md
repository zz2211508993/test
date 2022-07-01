定义别名的格式:

每次修改配置文件，都要重启终端

在build中的webpack.base.config

通过设置alias添加别名

```
    alias: {
      '@': resolve('src'),
      'assets':resolve('src/assets'),
      'components':resolve('src/components'),
      'views':resolve('/src/views'),
    }
```

##### 1. js使用的格式

直接通过components找到src/components，如果多创建了多个路径，那么还是找到src中的/components

```
import TabBar from "components/tab-bar/TabBar"
```

##### 2.标签中需要加上~

找到src/assets

```
<img slot='slot-icon' src="~assets/img/tabbar/home.svg" alt="">
```



在vue-cli3中,可以使用在定义一个别名，中使用另一个别名

需要自己创建一个vue.config.js文件

```
    alias: {
      '@': resolve('src'),
      'assets':resolve('@/assets'),
      'components':resolve('@/components'),
      'views':resolve('@/views'),
    }
```

使用@的别名，在别的别名中定义其他的别名

项目中怎么配置

```
module.exports={
    configureWebpack:{
        resolve:{
            alias: {
                //@代表src
                'views': '@/views',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'assets':'@/assets'
            }
        }
    }
}
```

