#### .sync是简化版的父子传递

父组件

```vue
 <div class='father'>
     <child :name.sync="name"></child>
     <button button @click="al">点击</button>
     <button @click="change">改变</button>
 </div>
data(){
      return {
        name: 'xiaoming'
      }
    },
    methods:{
       al() {
      alert(this.name);
      },
      change() {
        this.name = '123';
      }
    },
```

子组件

```vue
<div id='child'>
  <input :value="name" @input="abc" type="text">
</div> 
expore default{
props: {
      name: {
        type: String,
        required: true
      }
    },
    methods:{
        abc:function(e){
            this.$emit('update:name',e.target.value)
        }
    }
}

```

