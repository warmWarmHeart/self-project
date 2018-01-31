<template>
  <div class="plate-list-wrapper" v-if="showPage === 'seckill'">
    <!--<icon-list></icon-list>-->
    <good-seckill-box></good-seckill-box>
  </div>
</template>

<script>
  import { Tab, TabItem, Sticky, Divider, XButton, SwiperItem } from 'vux'
  import GoodSeckillBox from '../goodSeckillBox.vue'
  import IconList from '../iconList.vue'
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
        activeName: 'seckill'
      }
    },
    components: {
      Tab,
      TabItem,
      Sticky,
      Divider,
      XButton,
      GoodSeckillBox,
      IconList,
      SwiperItem,
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
        this.getTableData({active: this.activeName})
      },
      onItemClick(index) {
        console.log('on item click:', index)
      },
    }
  }
</script>

<style scoped lang='less'>

</style>
