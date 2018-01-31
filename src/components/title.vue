<template>
    <div>
      <!--登陆头部-->
      <div class="header clearfix">
        <span class="iconfont icon-iconfontjiantouzuo fanhui"></span>
        <span class="login_title">{{title}}</span>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            title :{
                type : String
            }
        }
    }
</script>

<style lang="less">
  .header {
    width: 100%;
    height: 1.40625rem;
    line-height: 1.40625rem;
    text-align: center;
    font-size: 0.5rem;
    background: #1c1b20;
    color: white;
    padding: 0 0.3125rem;
    box-sizing: border-box;
   /* position: fixed;
    top: 0;*/
  }
  .header .login_title{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .header .fanhui {
    float: left;
  }
</style>
