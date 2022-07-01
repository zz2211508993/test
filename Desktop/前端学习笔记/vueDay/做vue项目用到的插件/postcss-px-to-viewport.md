#### 如何使用postcss-px-to-viewport

- ##### 安装

  - ```
    npm install postcss-px-to-viewport --save-dev
    ```

    

- ##### 添加一个postcss.config.js

  - 在里面添加配置文件

    - ```
      module.exports={
        plugins:{
          autoprefixer: {},
          "postcss-px-to-viewport":{
            viewportWidth:375, //视口的宽度，对应着当前项目的宽度
            viewportHeight:667, //视口的高度，对应着当前项目的高度
            minPixelValue:1, //小于或者等于xx px，不转换为vx
            unitPrecision:5, //指定vw留下几位小数,因为很多时候整除不了
            selectorBlackList: ['ignore', 'tab-bar' ,'tab-bar-item'], //指定不需要转换的类
            viewportUnit:'vw', //px需要转换为什么单位
            mediaQuery:false //是否允许在媒体查询中转换'px'
          }
        }
      }
      ```

      

