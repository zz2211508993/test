<template>
  <div id="app">
      <!-- <Loading></Loading> -->
      <button @click='myFn1'>显示</button>
      <button @click='myFn2'>隐藏</button>
  </div>
</template>
<script>
  // import Vue from 'vue';
// import Loading from '../src/plugin/Loading.vue'
export default{
  // components:{
  //   Loading
  // }
  methods:{
    myFn1:function(){
      this.$showLoading()
    },
    myFn2:function(){
      this.$hiddenLoading();
    }
  }
}
</script>


<style lang="scss">
</style>
