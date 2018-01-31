<template>
  <div class="goods-details-wrapper">
    <div class="pic" v-show="type === '3' || type === '4'">
      <!--<img :src="imgUrl" alt="">-->
      <swiper height="200px" :data="swiperImageData"></swiper>
    </div>
    <over-time></over-time>

    <pai-info></pai-info>
    <pai-history></pai-history>
  </div>
</template>

<script>
  import OverTime from '../overTime/overTime.vue'
  import PaiInfo from '../paiInfo/paiInfo.vue'
  import PaiHistory from '../paiHistory/paiHistory.vue'
  import config from '../../../../utils/config'
  import Swiper from '@/components/swiper.vue'
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import {getTime} from "@/utils/utils";

  export default {
    scrollBehavior(to, from, savedPosition) {
      return {x: 0, y: 0}
    },
    beforeRouteEnter(to, from, next) {
      next((vm) => {
        vm.type = to.query.type
        vm.fetchData(to.query.parentProductId, to.query.id)
        vm.getSwiper({url: `${config.goodDetailsSwiper}?id=${to.query.parentProductId}`})
        vm.getCommandList({
          currentPage: 1,
          productId: to.query.productId
        })
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
      imgUrl () {
        return `http://47.104.10.147/image/' + ${this.$store.state.goodDetails.merchantId} + '/' + ${this.$store.state.goodDetails.picName}`

      }
    },
    methods: {
      ...mapActions([
        'getSwiper',
        'getCommandList',
      ]),
      fetchData(parentProductId, id) {
        let url = config.auctionDetails + '?parentProductId=' + parentProductId
        let that = this
        this.$http.get(url).then(res => {
          if (res.status === 200) {
            console.log(res.body.data)
            let k = ''
            let data = res.body.data
            let detailsModel= {
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
              })
            }
            Object.assign(detailsModel, data[k])
            for (let item of data[k].picName.split(',')) {
              swiperImageData.push({imgpath: `http://47.104.10.147/image/${data[k].merchantId}/${item}`})
            }
            that.swiperImageData = JSON.parse(JSON.stringify(swiperImageData))
            that.$store.commit('SET_GOOD_DETAILS', detailsModel)
          }
        })
      },
    },
    components: {
      OverTime,
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
  }
</style>
