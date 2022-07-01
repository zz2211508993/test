- 特殊 attribute
  - key 防止数据发生混乱，可以给key设置一个唯一的值
  
  - ref 可以获取原生的DOM元素
  
  - ```
    在Vue实例中的方法定义一个方法，
    通过this.$ref可以获取元素.
    如果是组件，获取的就是组件
    <p ref="child">我是元素</p> 设置了才能取到
    ```
  
  - is  可以切换组件
  
  - slot 作用域插槽
  
  - slot-scope 接收的数据的自定义名称
  
  - scope   作用域的插槽的  带作用域的插槽，被slot-scope替代了