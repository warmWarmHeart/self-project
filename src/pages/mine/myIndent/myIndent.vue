<template>
  <div class="my-indent-wrapper">
    <tab active-color="#e60012"
         bar-active-color="#e60012"
         v-model="tabItem"
    >
      <tab-item selected @on-item-click="activeChange(0)">全部订单</tab-item>
      <tab-item @on-item-click="activeChange(1)">待付款</tab-item>
      <tab-item @on-item-click="activeChange(2)">待收货</tab-item>
      <tab-item @on-item-click="activeChange(3)">待评论</tab-item>
    </tab>
    <div class="content-wrapper">

      <ul class="indent-list">
        <li class="indent-item" @click="goIndentDetails">
          <div class="indent-item-header">
            已完成 <yd-icon name="delete" size=".45rem"></yd-icon>
          </div>
          <div class="indent-item-details">
            <img class="indent-item-img" src="../../../assets/img/zixingche.png" alt="">
            <div class="indent-item-title">
              765 BLACK WHITE RED SHIMANO  FULL ULTEGRA
            </div>
          </div>
          <div class="indent-item-footer">
            共1件商品  实付款：￥2980.00
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
  import { Tab, TabItem,} from 'vux'

  export default {
    data () {
      return {
        tabItem: 0,
        acitve: 0,
      }
    },
    components: {
      Tab, TabItem,
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.activeChange(to.query.active)
        vm.$store.commit('SET_HEADER_TITLE', '我的订单')
      })
    },
    methods: {
      activeChange (active) {
        this.tabItem = Number(active)
      },
      goIndentDetails () {
        this.$router.push({path: '/mine/indent/details', query: {active: this.tabItem}})
      },
    }
  }
</script>

<style scoped lang='less'>
  .my-indent-wrapper {
    padding-top: 1.2rem;
    .content-wrapper {
      margin-top: 10/75rem;
      .indent-list {
        .indent-item {
          height: 256/75rem;
          background: white;
          margin-bottom: 5/75rem;
          .indent-item-header {
            box-sizing: border-box;
            padding-right: 20/75rem;
            font-size: 30/75rem;
            line-height: 50/75rem;
            text-align: right;
            height: 50/75rem;
          }
          .indent-item-details {
            background: #f9f9f9;
            box-sizing: border-box;
            padding: 20/75rem;
            height: 156/75rem;
            overflow: hidden;
            .indent-item-img {
              float: left;
              width: 130/75rem;
              height: 116/75rem;
            }
            .indent-item-title {
              float: left;
              width: 500/75rem;
              margin-left: 20/75rem;
              font-size: 32/75rem;
            }
          }
          .indent-item-footer {
            box-sizing: border-box;
            padding-right: 20/75rem;
            font-size: 30/75rem;
            line-height: 50/75rem;
            text-align: right;
            height: 50/75rem;
          }
        }
      }
    }
  }
</style>
