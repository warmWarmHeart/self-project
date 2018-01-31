<template>
  <div class="pay-history-wrapper">
    <div class="img">
      <img src="../../../../assets/img/zixingche.png" alt="" class="portrait">
      <span class="name">Jimmy</span>
    </div>
    <div class="price">
      <span class="price-head">
        ￥17,160
      </span>
      <span class="price-bottom">
        加场外援助：¥210
      </span>
    </div>
    <!--<div class="position">-->
      <span class="station">
        领先
      </span>
      <span class="times">
        2016.02.03 15:23
      </span>
    <!--</div>-->
  </div>
</template>

<script>
    export default {}
</script>

<style scoped lang='less'>
  .pay-history-wrapper {
    padding: 20/75rem;
    height: 140/75rem;
    box-sizing: border-box;
    overflow: hidden;
    .img {
      width: 90/75rem;
      margin-top: -10/75rem;
      height: 100%;
      float: left;
      img {
        width: 90/75rem;
        height: 90/75rem;
        border-radius: 50%;
      }
      .name {
        color: #fb8906;
        width: 100%;
        font-size: 20/75rem;
        text-align: center;
        margin-top: -40/75rem;
        display:block;

      }
    }
    .price {
      float: left;
      padding-left: 30/75rem;
      .price-head {
        display: block;
        font-size: 24/75rem;
        color: #ef0012;
      }
      .price-bottom {
        display: block;
        color: #666;
        font-size: 24/75rem;
      }
    }
    /*.position {*/
      float: right;
      .station {
        display: block;
        float: right;
        font-size: 24/75rem;
        border-radius: 2px;
        text-align: center;
        color: white;
        width: 130/75rem;
        height: 40/75rem;
        line-height: 40/75rem;
        background: -webkit-linear-gradient(left, #f9921a, #fc3c3a); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #f9921a, #fc3c3a); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #f9921a, #fc3c3a); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #f9921a, #fc3c3a); /* 标准的语法 */

      }
      .times {
        font-size: 20/75rem;
        color: #666;
        float: right;
        line-height: 30/75rem;
        margin-top: 20/75rem;
        height: 30/75rem;
        display: block;
      }
    /*}*/
  }
</style>
