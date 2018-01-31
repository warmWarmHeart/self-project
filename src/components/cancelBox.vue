<template>
    <div>
      <!--取消收藏弹框-->
      <div class="mask" v-show="mask"></div>
      <div class="removes likai" v-show="removes">
        <p>确定取消收藏吗？</p>
        <div>
          <span @click="cancel">取消</span>
          <span @click="determine">确定</span>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data () {
            return {
              mask:false,
              removes:false
            }
        },
        methods:{
//            确定
          determine:function () {
            this.mask = false;
            this.removes = false;
          },
//          取消
          cancel :function () {
            this.mask = false;
            this.removes = false;
          }
        }
    }
</script>

<style lang="less" scoped>

  //确定删除商品弹框
  .mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index:2;
    -moz-opacity: 0.3;
    opacity:.30;
    filter: alpha(opacity=40);
  }
  .removes{
    width: 80%;
    background:white;
    position: fixed;
    top: 35%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 26/64rem;
    border-radius: 10/64rem;
    z-index: 10;
  }
  .removes p{
    text-align: center;
    color: #333333;
    padding-top: 75/64rem;
    padding-bottom: 75/64rem;
  }
  .removes div span {
    color: #c50504;
    width: 48%;
    display: inline-block;
    text-align: center;
    padding-bottom: 20/64rem;
    padding-left: 5/64rem;
  }

</style>
