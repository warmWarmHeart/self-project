<template>
  <div class="plate-list-wrapper">
    <tab active-color="#e60012"
         bar-active-color="#e60012"
    >
      <tab-item selected @on-item-click="activeChange('recommend')">推荐</tab-item>
      <tab-item @on-item-click="activeChange('auction')">拍卖</tab-item>
      <tab-item @on-item-click="activeChange('seckill')">秒杀</tab-item>
      <tab-item @on-item-click="activeChange('poop')">尾货</tab-item>
    </tab>
  </div>
</template>

<script>
  import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
  import config from '@/utils/config'
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
      SwiperItem
    },
    computed: {
      ...mapGetters([
        'showPage'
      ])
    },
    methods: {
      ...mapActions([
        'getTableData',
        'getSwiper',
      ]),
      ...mapMutations([
        'TOGGLE_SHOW_PAGE',
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
  .plate-list-wrapper {
    font-size: 24/75rem;
    color: #666;
    width: 100%;
    .plate-list {
      display: flex;
      li {
        flex-grow: 1;
        text-align: center;
        overflow: hidden;
        height: 60/75rem;
        .item {
          height: 100%;
          width: 100%;
          position: relative;
          .item-label {
            display: block;
            width: 100%;
            line-height: 58/75rem;
          }
          .item-rail {
            position: absolute;
            display: block;
            bottom: 0;
            border: 1px solid #ef0012;
            width: 100%;
          }
        }
      }
    }

  }
</style>
