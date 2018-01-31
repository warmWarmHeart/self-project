<template>
  <div class="input-wrapper">
    <head-bar></head-bar>
    <template v-if="!showGoodsDetails">
      <div class="search">
        <div class="left">
          <search-input></search-input>
        </div>
        <div class="right">
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="content">
        <plate-list></plate-list>
        <swiper v-if="showPage ==='recommend'||showPage ==='poop' "
                loop
                auto
                dots-position="center"
                dots-class="swiper-dots"
                :aspect-ratio="365/750"
                :list="$store.state.swiperData"
                :index="$store.state.swiperData"
        >
        </swiper>
        <recommend></recommend>
        <seckill></seckill>
        <auction></auction>
        <poop></poop>
        <!--<see-more></see-more>-->
      </div>
    </template>
  </div>
</template>

<script>
  import HeadBar from '@/components/headBar.vue'
  import SearchInput from '@/components/searchInput.vue'
  import PaiCircle from '@/components/paiCircle.vue'
  import SeeMore from '@/components/seeMore.vue'
  import PlateList from '@/components/plateList.vue'
  import Recommend from '@/components/recommend/recommend.vue'
  import Seckill from '@/components/seckill/seckill.vue'
  import Auction from '@/components/auction/auction.vue'
  import Poop from '@/components/poop/poop.vue'
  import config from '../../utils/config'
  import {mapGetters,mapActions,mapMutations} from 'vuex'
  import {Swiper} from 'vux'
  export default {
    data () {
      return {

        activeName: 'recommend'
      }

    },
    computed: {
      ...mapGetters([
        'recommendTableData',
        'showGoodsDetails',
        'showPage'
      ])
    },
    beforeRouteEnter (to, from, next) {
      next(vm=>{
        vm.$store.commit('SET_HEADER_TITLE', '四两饭')
        vm.$store.commit('TOGGLE_SHOW_FOOT_BAR', true)
        vm.fetchData()
      })
    },
    methods: {
      ...mapActions([
        'getTableData',
        'getSwiper',
      ]),
      ...mapMutations([
        'TOGGLE_SHOW_GOODS_DETAILS',
        'TOGGLE_SHOW_PAGE'
      ]),
      fetchData () {
        this.TOGGLE_SHOW_PAGE(this.activeName)
        this.getSwiper({url: `${config.swiper}?currentPage=1`, })
        this.getTableData({active: this.activeName,currentPage: 1, category: 1})
      },
    },
//    beforeRouteEnter (to,from,next) {
//      next((vm)=> {
////        vm.fetchData()
//      })
//    },
    components: {
      HeadBar,
      SearchInput,
      PaiCircle,
      SeeMore,
      PlateList,
      Recommend,
      Seckill,
      Swiper,
      Auction,
      Poop
    }
  }
</script>

<style scoped lang='less'>
.search {
  margin-top: 75/75rem;
  padding: 0 20/75rem;
  .left {
    float: left;
    margin-top: 40/75rem;
  }
  .right {
    width: 40/75rem;
    height: 56/75rem;margin-top: 0.6rem;
    background: url("../../assets/img/mail-message.png") no-repeat ;
    background-size: 100%;
    float: right;
  }
  .clearfix {
    clear: both;
  }
}
  .content {
    margin-top: 22/75rem;
  }
</style>
