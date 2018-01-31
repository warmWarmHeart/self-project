<template>
  <div class="goods-details-wrapper">
    <div class="pic">
      <img src="../../../../assets/img/chejia1.png" alt="">
      <swiper height="200px" :data="swiperImageData"></swiper>
    </div>
    <over-time></over-time>
    <good-base-info></good-base-info>
    <good-parameter></good-parameter>
    <good-quantity></good-quantity>
    <good-comment></good-comment>
    <div class="goods-details-footer">
      <div class="footer">
        <div class="share">
          <img src="../../../../assets/img/fenx.png" alt="">
        </div>
        <div class="buy-cart">
          <img src="../../../../assets/img/gouwc.png" alt="" @click="goShoppingCart">
        </div>
        <div class="add-cart">加入购物车</div>
        <div class="buy-now" @click="buyNow">立即购买</div>
      </div>
    </div>
  </div>
</template>

<script>
  import OverTime from '../overTime/overTime.vue'
  import GoodParameter from '../goodParameter/goodParameter.vue'
  import GoodQuantity from '../goodQuantity/goodQuantity.vue'
  import GoodComment from '../goodComment/goodComment.vue'
  import GoodBaseInfo from '../goodBaseInfo/goodBaseInfo.vue'
  import PaiInfo from '../paiInfo/paiInfo.vue'
  import PaiHistory from '../paiHistory/paiHistory.vue'
  import Swiper from '@/components/swiper.vue'
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
        vm.$store.commit('TOGGLE_SHOW_FOOT_BAR', false)
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
      ...mapGetters([])
    },
    methods: {
      ...mapMutations([
        'TOGGLE_SHOW_GOODS_DETAILS'
      ]),
      fetchData(id) {
        let url = config.seckillDetails + '?productId=' + id
        let that = this
        this.$http.get(url).then(res => {
          if (res.status === 200) {
            that.$store.commit('SET_GOOD_DETAILS', res.body.data1[0])
          }
        })
      },
      buyNow () {
        this.$router.push({path: '/shopping-cart/submit-order', query: {searchName: 1}})
      },
      goShoppingCart () {
        this.$router.push({path: '/shopping-cart', query: {searchName: 1}})

      }
    },
    components: {
      OverTime,
      GoodParameter,
      GoodQuantity,
      GoodComment,
      GoodBaseInfo,
      PaiInfo,
      PaiHistory,
      Swiper
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
      width: 100%;
      bottom: 0;
      background: #fff;
      .footer {
        width: 100%;
        height: 100/75rem;
        font-size: 30/75rem;

        display: flex;
        text-align: center;
        .share {
          flex-grow: 3;
          img {
            width: 44/75rem;
            height: 41/75rem;
            margin-top: 30/75rem;
          }
        }
        .buy-cart {
          flex-grow: 3;
          img {
            width: 44/75rem;
            height: 41/75rem;
            margin-top: 30/75rem;
          }
        }
        .add-cart {
          flex-grow: 3;
          color: white;
          line-height: 100/75rem;
          background: #fc7a07;
        }
        .buy-now {
          flex-grow: 3;
          color: white;
          line-height: 100/75rem;
          background: #ef0012;
        }
      }
    }
  }
</style>
