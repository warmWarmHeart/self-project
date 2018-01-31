<template>
  <div class="goods-details-wrapper">
    <div class="pic">
      <img src="../../../../assets/img/chejia1.png" alt="">
    </div>
    <over-time></over-time>
    <good-base-info></good-base-info>
    <groupon-info></groupon-info>
    <good-parameter></good-parameter>
    <good-quantity></good-quantity>
    <good-comment></good-comment>
    <div class="goods-details-footer">
      <div class="footer-wrapper">
        <div class="kefu"></div>
        <div class="fenxiang"></div>
        <div class="pay">
          立即参团（保证金￥{{cashDeposit}}）
        </div>
      </div>
    </div>
    <mask-wrapper v-if="num>=max" message="本轮团购名额已抢光请关注下轮信息"></mask-wrapper>

  </div>
</template>

<script>
  import OverTime from '../overTime/overTime.vue'
  import MaskWrapper from '@/components/mask.vue'
  import GrouponInfo from '../grouponInfo/grouponInfo.vue'
  import GoodParameter from '../goodParameter/goodParameter.vue'
  import GoodQuantity from '../goodQuantity/goodQuantity.vue'
  import GoodComment from '../goodComment/goodComment.vue'
  import GoodBaseInfo from '../goodBaseInfo/goodBaseInfo.vue'
  import PaiInfo from '../paiInfo/paiInfo.vue'
  import PaiHistory from '../paiHistory/paiHistory.vue'
  import config from '../../../../utils/config'
  import {mapGetters, mapActions, mapMutations} from 'vuex'

  export default {

    scrollBehavior(to, from, savedPosition) {
      return {x: 0, y: 0}
    },
    beforeRouteEnter(to, from, next) {
      next((vm) => {
        vm.type = to.query.type
        vm.fetchData(to.query.productId)
        vm.$store.commit('SET_HEADER_TITLE', '商品详情')
      })
    },

    props: {
      hh: Number,
      mm: Number,
      ss: Number,
    },
    data() {
      return {
        type: 3,
        num: 150,
        max: 200,
        show: false,
        cashDeposit: 5000,
        goodDetails: {
          productId: null,
          productName: null,
          category: null,
          category2: null,
          color: null,
          description: null,
          merchantId: null,
          merchantName: null,
          model: null,
          picIndex: null,
          price: null,
          productNumber: null,
          productStatus: null,
          salePrice: null,
          seckillActualEndTime: null,
          seckillEndTime: null,
          seckillStartTime: null,
          seckillStatus: null,
          shelfOffTime: null,
          shelfOnTime: null,
          sort: null,
          type: null,
        }
      }
    },
    computed: {
      ...mapGetters([
      ])
    },
    methods: {
      ...mapMutations([
        'TOGGLE_SHOW_GOODS_DETAILS'
      ]),
      fetchData(id) {
        let url = config.groupDetails + '?productId=' + id
        let that = this
        this.$http.get(url).then(res => {
          console.log(res.body)
          if (res.status === 200) {
            console.log(res.body.data1[0],1212)
            that.$store.commit('SET_GOOD_DETAILS', res.body.data1[0])
          }
        })
      },
    },
    components: {
      MaskWrapper,
      OverTime,
      GoodParameter,
      GoodQuantity,
      GoodComment,
      GoodBaseInfo,
      PaiInfo,
      GrouponInfo,
      PaiHistory
    }
  }
</script>

<style scoped lang='less'>
  .goods-details-wrapper {
    padding-top: 90/75rem;
    .pic {
      width: 750/75rem;
      height: 498/75rem;
      img {
        width: 750/75rem;
        height: 498/75rem;
      }
    }
    .goods-details-footer {
      position: fixed;
      background: white;
      bottom: 0;
      .footer-wrapper {
        display: flex;
        width: 10rem;
        height: 100/75rem;
        text-align: center;
        .kefu {
          flex: 2;
          background: url("../../../../assets/img/kehu.png") no-repeat;
          background-size: 43/75rem 70/75rem;
          background-position: center;
        }
        .fenxiang {
          flex: 1;
          background: url("../../../../assets/img/fx.png") no-repeat;
          background-size: 43/75rem 70/75rem;
          background-position:left center;
        }
        .pay {
          flex: 3;
          text-align: center;
          line-height: 100/75rem;
          font-size: 20/75rem;
          color: white;
          background: #ef0012;
        }
      }
    }
  }
</style>
