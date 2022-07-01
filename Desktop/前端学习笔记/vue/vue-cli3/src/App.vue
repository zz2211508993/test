<template>
  <div class="app">
    <router-link to='/one'>1234</router-link>
    <br>
    <router-link to='/two'>1234</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'App',
  data:function(){
    return {
      name:'111',
    }
  },
  methods:{
    myFn:function(){
      console.log(this.$store.state)
    }

  },
  components:{
    // One:One,
    // Two:Two,
  }
}
</script>

<style>

</style>