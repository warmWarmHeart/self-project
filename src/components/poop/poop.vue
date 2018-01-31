<template>
  <div class="plate-list-wrapper" v-if="showPage === 'poop'">
    <!--<swiper></swiper>-->

    <icon-list title="poop"></icon-list>
    <good-box></good-box>
  </div>
</template>

<script>
  import { Tab, TabItem, Sticky, Divider, XButton, SwiperItem } from 'vux'
  import Swiper from '../../components/swiper.vue'
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
        activeName: 'poop'
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
//    created() {
//      this.activeChange(this.activeName)
//    },
    computed: {
      ...mapGetters([
        'showPage'
      ])
    },
    methods: {
      ...mapActions([
        'getTableData'
      ]),
      ...mapMutations([
        'TOGGLE_SHOW_PAGE'
      ]),
      activeChange(name) {

        this.activeName = name
        this.TOGGLE_SHOW_PAGE(name)
        this.getTableData({active: this.activeName,currentPage:1, category: 1})
      },
      onItemClick(index) {
        console.log('on item click:', index)
      },
    }
  }
</script>

<style scoped lang='less'>
.plate-list-swiper {
  height: 366/75rem;
}
</style>
