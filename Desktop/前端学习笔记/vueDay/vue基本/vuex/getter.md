#### getter计算属性

可以获取通过几个属性计算后的结果

##### 1.getter中定义的属性，可以获取state的属性

```
getSquare(state){
      return state.count * state.count;
    },
```

##### 2.还可以获取一个getter(计算属性),包含其它的计算属性

```
    getGreatsLength(state,getter){
      return getter.getGreats.length;
    },
```

##### 3.还可以获取传递进来的参数,需要返回一个函数

```
    getGreatsAge(state,getter){
      return (age)=>{
        return state.students.filter((s)=>{
          return s.age<=age;
        })
      }
    }
```

从标签传递过来的值

```
<h2>{{$store.getters.getGreatsAge(12)}}</h2>
```

