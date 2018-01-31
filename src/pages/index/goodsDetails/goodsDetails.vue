<template>
  <div class="goods-details-wrapper">
    <swiper loop
            auto
            dots-position="center"
            dots-class="swiper-dots"
            :aspect-ratio="688/750"
            :list="swiperImageData"
            :index="swiperImageData"
    >
    </swiper>
    <over-time></over-time>
    <good-base-info></good-base-info>
    <groupon-info></groupon-info>
    <good-parameter></good-parameter>
    <good-quantity></good-quantity>
    <good-comment></good-comment>
    <pai-info></pai-info>
    <pai-history></pai-history>
    <div class="goods-details-footer" v-show="type === 1">
      <div class="footer">
        <div class="share">
          <img src="../../../assets/img/fenx.png" alt="">
        </div>
        <div class="buy-cart">
          <img src="../../../assets/img/gouwc.png" alt="" @click="goShoppingCart">
          <span class="jiaobiao" v-show="shoppingCartNum">
            <yd-badge type="danger">{{shoppingCartNum}}</yd-badge>
          </span>
        </div>
        <div class="add-cart" @click="addGoodsInShoppingCart">加入购物车</div>
        <div class="buy-now" @click="buyNow">立即购买</div>
      </div>
    </div>
    <div class="goods-details-footer1" v-show="type === 3">
      <div class="footer">
        <div class="share">
          <img src="../../../assets/img/fenx.png" alt="">
        </div>
        <div class="buy-cart">
          <img src="../../../assets/img/gouwc.png" alt="" @click="goShoppingCart">
          <span class="jiaobiao" v-show="shoppingCartNum">
            <yd-badge type="danger">{{shoppingCartNum}}</yd-badge>
          </span>
        </div>
        <div class="add-cart" @click="addGoodsInShoppingCart">加入购物车</div>
        <div class="buy-now" @click="buyNow">立即购买</div>
      </div>
    </div>
    <div class="goods-details-footer2" v-show="type === 2">
      <div class="footer-wrapper">
        <div class="kefu" @click="goService"></div>
        <div class="fenxiang"></div>
        <div class="pay">
          立即参团（保证金￥{{cashDeposit}}）
        </div>
      </div>
    </div>
    <div class="goods-details-footer3" v-show="type === 4">
      <div class="footer-wrapper">
        <div class="guize" @click="showRuleBox=true"></div>
        <div class="yuanzhu">
          <x-button @click.native="aid">场外援助(分享抵现)</x-button>
        </div>
      </div>
    </div>
    <mask-wrapper v-if="num>=max&&type === 2" message="本轮团购名额已抢光请关注下轮信息"></mask-wrapper>
    <div v-transfer-dom class="dialog-demo">
      <x-dialog v-model="showRuleBox" :hide-on-blur="true">
        <div class="jingpai-header"
             style="position: relative;background: #ef0012;font-size: 13px;text-align: center;padding:5px;color: white;border-radius: 5px 5px 0 0;">
          竞拍规则
          <span class="vux-close"
                @click="show=false"></span>
        </div>
        <div class="img-box" style="font-size: 12px; padding: 10px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          AeneanLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        </div>
      </x-dialog>
    </div>
  </div>
</template>

<script>
  import OverTime from './overTime/overTime.vue'
  import PaiInfo from './paiInfo/paiInfo.vue'
  import PaiHistory from './paiHistory/paiHistory.vue'
  import MaskWrapper from '@/components/mask.vue'
  import config from '@/utils/config'
//  import Swiper from '@/components/swiper.vue'
  import GoodParameter from './goodParameter/goodParameter.vue'
  import GoodQuantity from './goodQuantity/goodQuantity.vue'
  import GoodComment from './goodComment/goodComment.vue'
  import GoodBaseInfo from './goodBaseInfo/goodBaseInfo.vue'
  import GrouponInfo from './grouponInfo/grouponInfo.vue'
  import {XButton,Swiper, XDialog, TransferDomDirective as TransferDom} from 'vux'
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import {getTime, getReqUrl} from "@/utils/utils";

  export default {
    directives: {
      TransferDom
    },
    scrollBehavior(to, from, savedPosition) {
      return {x: 0, y: 0}
    },
    beforeRouteEnter(to, from, next) {
      next((vm) => {
        vm.type = Number(to.query.type)
        vm.fetchData(to.query.parentProductId, to.query.productId, to.query.type)
        if (vm.type === 4) {
          vm.addViewCountOne({parentProductId: to.query.parentProductId, productId: to.query.productId})
          vm.getPaiHistory({ productId: to.query.productId})
        }
        vm.getShoppingCartList({cb: vm.makeSureShoppingCartListNum})
//        vm.getSwiper({url: `${config.goodDetailsSwiper}?id=${to.query.parentProductId}`})
        vm.getCommandList({
          currentPage: 1,
          parentProductId : to.query.parentProductId
        })
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
        num: 150,
        max: 200,
        show: false,
        cashDeposit: 5000,
        showRuleBox: false,
        shoppingCartNum: 1,
        swiperImageData: [],
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
        'showGoodParameter',
        'goodModel',
        'goodQuantity',
        'shoppingCartList',
      ]),
      imgUrl() {
        return `http://47.104.10.147/image/${this.$store.state.goodDetails.merchantId}/${this.$store.state.goodDetails.picName}`

      }
    },
    methods: {
      ...mapActions([
        'getSwiper',
        'getCommandList',
        'getPaiHistory',
        'getShoppingCartList',
        'addViewCountOne',
      ]),
      fetchData(parentProductId,productId, type) {
        let arr = [
          config.poopDetails,
          config.groupDetails,
          config.seckillDetails,
          config.auctionDetails,
        ]
        let url = getReqUrl(type, arr) + `?parentProductId=${parentProductId}&productId=${productId}`
        let that = this
        this.$http.get(url).then(res => {
          if (res.status === 200) {
            let k = ''
            let data = res.body.data
            let detailsModel = {
              value: []
            }
            let swiperImageData = []
            for (let key in data) {
              let arr = key.split('|')
              k = key
              detailsModel.value.push({
                productId: arr[0],
                color: arr[1],
                model: arr[2],
                salePrice: data[key].salePrice
              })
            }
            Object.assign(detailsModel, data[k])
            for (let item of data[k].picName.split(',')) {
              swiperImageData.push({img: `http://47.104.10.147/image/${data[k].merchantId}/${item}`})
            }
            that.swiperImageData = JSON.parse(JSON.stringify(swiperImageData))
            that.$store.commit('SET_GOOD_MODEL', data[k])
            that.$store.commit('SET_GOOD_DETAILS', detailsModel)
          }
        })
      },
      buyNow() {
        this.$router.push({path: '/shopping-cart/submit-order', query: {searchName: 1}})
      },
      goShoppingCart() {
        this.$router.push({path: '/shopping-cart', query: {searchName: 1}})
      },
      addGoodsInShoppingCart() {
        // ?
        let url = `${config.addGoodsInshoppingCart}?productId=${this.goodModel.productId}&saleNum=${this.goodQuantity}&payPrice=${this.goodModel.salePrice}&type=${this.type}&openid=dfasf`
        let data = {
          productId: this.goodModel.productId,
          saleNum: this.goodQuantity,
          payPrice: this.goodModel.salePrice,
          type: this.type,
          openid: 'dfasf',
        }
        this.$http.post(url, data).then(res => {
          if (res.bodyText === 'success') {
            this.shoppingCartNum += 1
          }
        })
      },
      makeSureShoppingCartListNum () {
        this.shoppingCartNum = this.shoppingCartList.length
        console.log(   this.shoppingCartNum)
      },
//      getShoppingCartList() {
//        let url = `${config.shoppingCartList}/dfasf`
//        this.$http.get(url).then(res => {
//          console.log(res)
//        })
//      },
      aid() {
        console.log('援助')
      },
      goService () {
        this.$router.push({path: '/mine/service'})
      },
    },
    components: {
      OverTime,
      PaiInfo,
      PaiHistory,
      GoodParameter,
      GoodQuantity,
      GoodComment,
      GoodBaseInfo,
      GrouponInfo,
      Swiper,
      XButton,
      XDialog,
      MaskWrapper
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
          position: relative;
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
    .goods-details-footer1 {
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
          position: relative;
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
    .goods-details-footer2 {
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
          background: url("../../../assets/img/kehu.png") no-repeat;
          background-size: 43/75rem 70/75rem;
          background-position: center;
        }
        .fenxiang {
          flex: 1;
          background: url("../../../assets/img/fx.png") no-repeat;
          background-size: 43/75rem 70/75rem;
          background-position: left center;
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
    .goods-details-footer3 {
      position: fixed;
      background: white;
      bottom: 0;
      .footer-wrapper {
        display: flex;
        width: 10rem;
        height: 100/75rem;
        text-align: center;
        border-top: 1px solid #dcdcdc;
        .guize {
          flex: 1;
          background: url("../../../assets/img/guize.png") no-repeat;
          background-size: 82/75rem 76/75rem;
          background-position: center;
        }
        .yuanzhu {
          flex: 4;
          padding: 10/75rem 20/75rem;
        }
      }
    }
    .dialog-demo {
      .jingpai-header {
        background: #ef0012;
        font-size: 20/75rem;
        text-align: center;
        color: white;
        border-radius: 10/75rem 10/75rem 0 0;
      }
      .img-box {
        font-size: 20/75rem;
        color: #999;
        height: 350px;
      }

    }
    .jiaobiao {
      position: absolute;
      right: 10/75rem;
      top: 0;
    }
  }
</style>
