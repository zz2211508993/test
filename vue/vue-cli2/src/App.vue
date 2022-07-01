<!-- 
        template这里面写标签
     -->
<template>
  <header title="ssss">
    <div class="app">
      <!-- <h1>{{title}}</h1>
      <router-link to='/one'>1234</router-link>
      <br>
      <router-link to='/two'>1234</router-link>
      <router-view></router-view> -->
      <home></home>
    </div>
  </header>
</template>

<script>
import home from "./components/home.vue";
export default {
  // 这里面写JS相关的操作之类的
  name: "App",
  props: {
    titie: String,
  },
  data: function() {
    return {
      name: "111",
    };
  },
  methods: {
    myFn: function() {
      console.log(this.$store.state);
    },
  },
  components: {
    // One:One,
    // Two:Two,\
    home,
  },
};
</script>
<!--  
        这里面写组件的样式
        scoped表示设置样式，只对当前组件的样式生效

    -->
<style scoped></style>
