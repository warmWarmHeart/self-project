<template>
  <div v-show="showGoodsDetails" class="goods-details-wrapper">
    <div class="pic">
      <img src="../../assets/img/chejia1.png" alt="">
    </div>
    <over-time></over-time>
    <pai-info></pai-info>
    <!--<good-base-info></good-base-info>-->
    <good-parameter></good-parameter>
    <good-quantity></good-quantity>
    <good-comment></good-comment>
    <pai-history></pai-history>
  </div>
</template>

<script>
  import OverTime from '@/components/goodsDetails/overTime/overTime.vue'
  import GoodParameter from '@/components/goodsDetails/goodParameter/goodParameter.vue'
  import GoodQuantity from '@/components/goodsDetails/goodQuantity/goodQuantity.vue'
  import GoodComment from '@/components/goodsDetails/goodComment/goodComment.vue'
  import GoodBaseInfo from '@/components/goodsDetails/goodBaseInfo/goodBaseInfo.vue'
  import PaiInfo from '@/components/goodsDetails/paiInfo/paiInfo.vue'
  import PaiHistory from '@/components/goodsDetails/paiHistory/paiHistory.vue'

  import {mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    props: {
      hh: Number,
      mm: Number,
      ss: Number,
    },
    data() {
      return {}
    },
    computed: {
      ...mapGetters([
        'showGoodsDetails',
        'showOverTime'
      ])
    },
    methods: {
      ...mapMutations([
        'TOGGLE_SHOW_GOODS_DETAILS'
      ]),
      fetchData() {
      },
    },
    components: {
      OverTime,
      GoodParameter,
      GoodQuantity,
      GoodComment,
      GoodBaseInfo,
      PaiInfo,
      PaiHistory
    }
  }
</script>

<style scoped lang='less'>
  .goods-details-wrapper {
    padding-top: 146/75rem;
    .pic {
      img {
        width: 750/75rem;
        height: 498/75rem;
      }
    }
  }
</style>
