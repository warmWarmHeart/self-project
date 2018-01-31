<template>
  <ul class="pay-history-wrapper" v-if="$store.state.paiHistoryActive===0">
    <li class="pay-history-item" v-for="(item, index) in $store.state.paiHistory">
      <div class="img">
        <img :src="item.headimgurl" alt="" class="portrait">
        <span class="name">{{item.nickname}}</span>
      </div>
      <div class="price">
      <span class="price-head">
        ￥{{item.price}}
      </span>
        <span class="price-bottom">
        加场外援助：¥0
      </span>
      </div>
      <div class="position">
        <span class="station" v-if="index === 0">领先</span>
        <span class="station1" v-else>跟拍</span>
        <span class="times">{{item.createtime}}</span>
      </div>
    </li>
  </ul>

</template>

<script>
  import {getTime} from '@/utils/utils'
  export default {
    props: {
      active: Number
    },

  }
</script>

<style scoped lang='less'>
  .pay-history-wrapper {
    .pay-history-item {
      padding: 20/75rem;
      height: 140/75rem;
      box-sizing: border-box;
      margin-bottom: 5/75rem;
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
          display: block;
          margin-top: -30/75rem;
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
      .position {
        float: right;
        .station {
          display: block;
          /*float: right;*/
          font-size: 24/75rem;
          border-radius: 3px;
          text-align: center;
          margin-left: 150/75rem;
          color: white;
          width: 130/75rem;
          height: 40/75rem;
          line-height: 40/75rem;
          background: -webkit-linear-gradient(left, #f9921a, #fc3c3a); /* Safari 5.1 - 6.0 */
          background: -o-linear-gradient(right, #f9921a, #fc3c3a); /* Opera 11.1 - 12.0 */
          background: -moz-linear-gradient(right, #f9921a, #fc3c3a); /* Firefox 3.6 - 15 */
          background: linear-gradient(to right, #f9921a, #fc3c3a); /* 标准的语法 */

        }
        .station1 {
          display: block;
          /*float: right;*/
          font-size: 24/75rem;
          border-radius: 3px;
          text-align: center;
          margin-left: 150/75rem;
          color: #333;
          width: 130/75rem;
          height: 40/75rem;
          line-height: 40/75rem;
          background: #dcdcdc;
        }
        .times {
          font-size: 20/75rem;
          color: #666;
          /*float: right;*/
          line-height: 30/75rem;
          margin-top: 20/75rem;
          height: 30/75rem;
          display: block;
        }
      }
    }
  }

</style>
