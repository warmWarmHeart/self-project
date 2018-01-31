<template>
  <div class="swiper-wrapper">
    <swiper
      dots-position="center"
      :height="height"
      :auto="true"
      :loop="true"
      @on-index-change="onSwiperItemIndexChange"
      v-model="swiperItemIndex">
      <template v-for="(item, index) in swiperSlides">
        <swiper-item class="swiper-demo-img" :key="index">
          <img :src='item.imgpath'>
        </swiper-item>
      </template>
    </swiper>
  </div>

</template>

<script>
  import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import config from '../utils/config'
  export default {
    components: {
      Swiper,
      SwiperItem,
      GroupTitle,
      XButton,
      Divider
    },
    props: {
      data: Array,
      height: {
        type: String,
        default: '170px'
      }
    },
    name: 'carrousel',
    data () {
      return {
        swiperItemIndex: 0,
        swiperSlides: [
          '../assets/img/zixingche.png',
          '../assets/img/zixingche.png',
          '../assets/img/zixingche.png',
          '../assets/img/zixingche.png',
        ]
      }
    },
    watch: {
      data (val) {
        this.swiperSlides = val
      }
//      this.fetchData()
    },
    methods: {
      onSwiperItemIndexChange (index) {
//        console.log('demo item change', index)
      },
//      fetchData () {
//        let url = config.swiper
//        this.swiperSlides = []
//        this.$http.get(url).then(res=> {
//          for (let item of res.body.data) {
//            this.swiperSlides.push(item)
//          }
//        })
//
//      }
    }
  }
</script>

<style scoped lang='less'>
  .swiper-wrapper {
    width: 750/75rem;
    height: 360/75rem;
    .swiper-demo-img {
      img {
        width: 750/75rem;
        height: 360/75rem;
      }
    }
  }


</style>
