<template>
      <div class="jingpin">
        <ul class="clearfix">
          <li v-for="goodslist in goods">
            <img :src="goodslist.img" alt="">
            <p>{{goodslist.title}}</p>
            <div class="gwc clearfix">
              <span>￥{{goodslist.price}}</span>
              <span class="iconfont icon-gouwuche-copy"></span>
            </div>
          </li>
        </ul>
      </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props:{
        goods : {
            type:''
        }
      },
      mounted () {

      },
      methods: {

      }
    }
</script>

<style lang="less" scoped>
  /*精品*/
  .jingpin ul{
    width: 100%;
  }
  .jingpin li{
    width:49%;
    font-size: 22/64rem;
    color: #333333;
    overflow: hidden;
    padding-bottom: 40/64rem;
    margin-bottom: 20/64rem;
    background: #ffffff;
  }
  .jingpin li:nth-child(even){
    float: right;
  }
  .jingpin li:nth-child(odd){
    float: left;
  }
  .jingpin li img{
    width: 100%;
    height: 320/64rem;
  }
  .jingpin li p{
    padding: 0 10/64rem;
    box-sizing: border-box;
    height: 60/64rem;
    line-height: 30/64rem;
    margin: 10/64rem 0;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .gwc{
    color: #c50504;
    font-size: 26/64rem;
    padding: 0 10/64rem;
    box-sizing: border-box;
  }
  .gwc span:nth-child(1){
    float: left;
  }
  .gwc span:nth-child(2){
    width: 40/64rem;
    height: 40/64rem;
    background: #c50504;
    display: inline-block;
    border-radius: 50%;
    color: white;
    text-align: center;
    line-height: 40/64rem;
    float: right;
    margin-right: 10/64rem;
    font-size: 25/64rem;
  }
  .gwc span:nth-child(3){
    width: 40/64rem;
    height: 40/64rem;
    background: #c50504;
    display: inline-block;
    border-radius: 50%;
    color: white;
    text-align: center;
    line-height: 45/64rem;
    float: right;
    margin-right: 20/64rem;
    font-size: 25/64rem;
  }
</style>
