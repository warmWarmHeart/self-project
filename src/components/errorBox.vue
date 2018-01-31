<template>
    <div ref="err" v-show="error">
      <div class="error clearfix" >
        <p>提示</p>
        <p>{{infor}}</p>
        <span @click="errorBtn">确定</span>
      </div>
      <div class="mask"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data () {
        return {
          error:false
        }
      },
      props:{
        infor:{
           type : String
        }
      },
        methods:{
          errorBtn:function () {
             this.error=false
          },
          errorShow () {
            this.error=true
          }
        }
    }
</script>

<style lang="less">
  .error {
    position: absolute;
    width: 70%;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 28/64rem;
    padding: 30/64rem 40/64rem;
    box-sizing: border-box;
    background: white;
    z-index: 101;
  }
  .error p:nth-child(1){
    font-size:30/64rem;
    color: black;
  }
  .error p:nth-child(2){
    font-size: 28/64rem;
    color: #999;
    padding-top: 20/64rem;
  }
  .error span{
    color: #c50504;
    float: right;
    padding-top: 20/64rem;
  }
  .mask{
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index:10;
    -moz-opacity: 0.3;
    opacity:.30;
    filter: alpha(opacity=40);
  }
</style>
