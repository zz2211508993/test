#### 如何使用vue-lazyload

- ##### 安装

  - ```
    npm install vue-lazyload --save-dev
    ```

    

- ##### 导入

  - ```
    import VueLazyload from "vue-lazyload";
    ```

- ##### 使用

  - ```
    Vue.use(VueLazyload,{
      loading:require('./assets/img/common/placeholder.png')
    });
    
    ```

- ##### 在模板中使用

  - ###### 将src修改成v-lazy

  - ```html
     <img v-lazy="goodsItems.show.img" alt="" @load="loadItemsImages"@click="itemClick" key="">
    ```

    