<template>
  <div class="logistics-wrapper">
    <div class="order-message" v-if="active === 0" @click="goLogistics">
      <yd-icon name="checkoff"></yd-icon> 订单已完成
    </div>
    <div class="order-message" v-if="active === 1"  @click="goLogistics">
      <span class="left" ><yd-icon name="time" size=".5rem"></yd-icon> 等待付款</span>
      <span class="right" style="text-align: right">
        剩余 <yd-countdown time="2018/06/06 06:06:06"></yd-countdown>
      </span>
    </div>
    <div class="logistics-content">
      <span class="item">
        物流公司：已签收
      </span>
      <span class="item">
        承运公司：顺丰
      </span>
      <span class="item">
        运单编号：982823822
      </span>
    </div>
  </div>
</template>

<script>
  import {Group, Cell, XButton} from 'vux'

  export default {
    data() {
      return {
        active: 0,
        activeName: 'recommend'
      }
    },
    computed: {},
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.active = Number(to.query['active'])
        vm.$store.commit('SET_HEADER_TITLE', '物流信息')
        vm.$store.commit('TOGGLE_SHOW_FOOT_BAR', false)
        vm.fetchData()
      })
    },
    methods: {
      fetchData() {
      },
      goShippingAddress() {
        this.$router.push({path: '/shopping-cart/shipping-address', query: {searchName: this.searchData}})
      },
      goIndentComment () {
        this.$router.push({path: '/mine/indent/comment', query: {searchName: this.searchData}})

      },
      goLogistics () {
        this.$router.push({path: '/mine/logistics/details', query: {id: getItem('openid')}})
      },
    },
    components: {
      Cell,
      Group,
      XButton
    }
  }
</script>

<style scoped lang='less'>
  .logistics-wrapper {
    padding-top: 90/75rem;
    .order-message {
      line-height: 80/75rem;
      padding:0 20/75rem;
      font-size: 30/75rem;
      color: white;
      background: #fb602c;
      overflow: hidden;
      .left {
        float: left;
      }
      .right {
        float: right;
      }
    }
    .logistics-content {
      margin-top: 10/75rem;
      padding: 40/75rem;
      background: white;
      .item {
        display: block;
        line-height: 50/75rem;
        color: #999;
        font-size: 30/75rem;
      }
    }
  }
</style>
