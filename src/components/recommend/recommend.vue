<template>
  <div class="plate-list-wrapper" v-if="showPage === 'recommend'">
    <!--<swiper :data="$store.state.swiperData"></swiper>-->
    <!--<swiper loop-->
            <!--auto-->
            <!--dots-position="center"-->
            <!--dots-class="swiper-dots"-->
            <!--:aspect-ratio="365/750"-->
            <!--:list="$store.state.swiperData"-->
            <!--:index="$store.state.swiperData"-->
            <!--&gt;-->
    <!--</swiper>-->
    <icon-list title="recommend"></icon-list>
    <good-box></good-box>
  </div>
</template>

<script>
  import {Tab, Swiper, SwiperItem, TabItem, Sticky, Divider, XButton,} from 'vux'
  //  import Swiper from '../../components/swiper.vue'
  import IconList from '../../components/iconList.vue'
  import GoodBox from '@/components/goodBox.vue'
  import {mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    props: {
      list: {
        type: Array,
        default: function () {
          return [
            {label: '推荐', name: 'recommend'},
            {label: '拍卖', name: 'seckill'},
            {label: '秒杀', name: 'auction'},
            {label: '尾货', name: 'poop'}
          ]
        }
      },
    },
    data() {
      return {
        imgList: [
          {
            url: 'javascript:',
            img: 'https://static.vux.li/demo/1.jpg',
            title: '送你一朵fua'
          },
          {
            url: 'javascript:',
            img: 'https://static.vux.li/demo/5.jpg',
            title: '送你一次旅行',
            fallbackImg: 'https://static.vux.li/demo/3.jpg'
          }
        ],

        swiperItemIndex: 0,
        activeName: 'recommend'
      }
    },
    components: {
      Tab,
      TabItem,
      Sticky,
      Divider,
      XButton,
      Swiper,
      IconList,
      SwiperItem,
      GoodBox
    },
    computed: {
      ...mapGetters([
        'showPage'
      ])
    },
    methods: {
      ...mapActions([
        'getTableData',
      ]),
      ...mapMutations([
        'TOGGLE_SHOW_PAGE'
      ]),
      activeChange(name) {
        this.activeName = name
        this.TOGGLE_SHOW_PAGE(name)
        this.getTableData({active: this.activeName, category: 1})

      },
      onItemClick(index) {
        console.log('on item click:', index)
      },
    }
  }
</script>

<style scoped lang='less'>
  .vux-icon-dot .active {
    background: #ef0012;
  }
</style>
