<template>
  <div class="good-base-info-wrapper"  v-show="$store.state.goodDetails.type !== 4">
    <div class="name1">
      <span class="groupon-icon" v-show="$store.state.goodDetails.type == 2" >团</span>
      <span class="groupon-icon" v-show="$store.state.goodDetails.type == 3" >秒杀中</span>
      <span class="title">
        {{$store.state.goodDetails.productName}}
      </span>
    </div>
    <div class="name2">
      {{$store.state.goodDetails.productName}}
    </div>
    <div class="quantity" v-show="$store.state.goodDetails.type !== 1">
      剩余数量：<span class="num">{{$store.state.goodDetails.productNumber}}</span>件
    </div>
    <div class="price" v-show="$store.state.goodDetails.type === 1">
      ￥{{$store.state.goodDetails.salePrice}}
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    data () {
      return {
        type: '',
      }
    },
    computed: {},
    method: {}
  }
</script>

<style scoped lang='less'>
  .good-base-info-wrapper {
    padding: 0 20/75rem;
    height: 200/75rem;
    background: white;
    margin-top: -20/75rem;
    margin-bottom: 10/75rem;
    .name1 {
      height: 60/75rem;
      overflow: hidden;
      margin-top: 34/75rem;
      margin-left: -20/75rem;
      .title {
        color: #333;
        font-size: 30/75rem;
        float: left;
        margin-left: 20/75rem;
      }
      .groupon-icon {
        float: left;
        font-size: 24/75rem;

        padding: 10/75rem 20/75rem;
        border-radius: 0 30/75rem 30/75rem 0;
        color: white;
        background: -webkit-linear-gradient(left, #fc3b3a, #f99119); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #fc3b3a, #f99119); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #fc3b3a, #f99119); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #fc3b3a, #f99119); /* 标准的语法 */
      }
    }
    .name2 {
      color: #666;
      font-size: 30/75rem;
    }
    .quantity {
      font-size: 30/75rem;
      color: #666;

      .num {
        color: #e60012;
      }
    }
    .price {
      color: #ef0012;
      font-size: 34/75rem;
    }
  }
</style>
