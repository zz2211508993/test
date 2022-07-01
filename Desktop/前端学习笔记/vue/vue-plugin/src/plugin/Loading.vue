<template>
  <div class="father" v-show='isShow'>
      <div class="son"></div>
       <p>{{title}}</p>
  </div>
</template>

<script>
export default {
    name:'Loading',
    data:function(){
        return {
            title:'正在加载...',
            isShow:false,
        }
    }
}
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .father{
        width: 200px;
        height: 200px;
        background: blanchedalmond;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        border-radius: 20px;
        .son{
            width: 100px;
            height: 100px;
            position: relative;
            left:50%;
            top:50%;
            border:1px solid white;
            border-radius: 50%;
            border-right: 1px solid skyblue;
            box-sizing: border-box;
            animation: Loading 2s linear infinite;
        }
        p{
            text-align: center;
            margin-top: 60px;
        }
        @keyframes Loading{
            from{
                transform: translate(-50%,-50%) rotate(0deg);
            }
            to{
                transform: translate(-50%,-50%) rotate(360deg);
            }
        }
    }

    
</style>