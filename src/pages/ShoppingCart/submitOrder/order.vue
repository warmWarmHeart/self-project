<template>
  <div class="order-wrapper">
    <div class="order-message" @click="goLogistics">
      温馨提示：订单中含有不支持7天无理由退货的商品，请确认相关商 品信息后提交
    </div>
    <div class="user-name">
      <span class="name">
        {{addressData.username}}
      </span>
      <span class="phone">
        {{addressData.telphone}}
      </span>
    </div>
    <div class="user-address" @click="goShippingAddress(addressData.id)">
      <span class="address">
        地址：{{addressData.dictArea1}}{{addressData.dictArea2}}{{addressData.dictArea3}}{{addressData.dictDetail}}
      </span>
      <span class="change-address">

      </span>
    </div>
    <div class="order-content">
      <ul class="content">
        <li class="content-item">
          <div class="good-img">
            <img src="../../../assets/img/zixingche.png" alt="">
          </div>
          <div class="good-info">
            <div class="good-title">
              765 BLACK WHI
            </div>
            <div class="good-num">
              <span>数量:1</span>
              <span>颜色:黑</span>
              <span class="good-price">
              $2890
            </span>
            </div>

          </div>
        </li>
      </ul>
      <div class="pay-method">
        <span class="title">
          支付配送
        </span>
        <div class="method">
          <span>
            微信支付
          </span>
          <span>
            淑芬快递
          </span>
        </div>
      </div>
      <group>
        <cell title="发票" is-link></cell>
      </group>

    </div>
    <div class="order-footer">
      <div class="footer">
        <div class="price">
          实付款： ￥5994.00
        </div>
        <div class="submit-btn">
          <x-button mini :gradients="['#FF5E3A', '#FF9500']">提交订单</x-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapMutations, mapGetters} from 'vuex'
  import config from '@/utils/config'
  import {setItem, getItem} from '@/utils/utils'
  import {Group, Cell, XButton} from 'vux'

  export default {
    data() {
      return {
        addressData: {
          dictArea1: "北京",
          dictArea2: "密云区",
          dictArea3: "城区",
          dictDetail: "1街道2号路3单元405室",
          id: 12,
          isDefault: 1,
          openid: "ogHsV06e2TWk4dTmHETHfYmGJ1NE",
          postcode: "000000",
          telphone: "18000000000",
          updatetime: 1516694077000,
          username: "刘艳军",
        },
        activeName: 'recommend'
      }
    },
    computed: {},
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.$store.commit('SET_HEADER_TITLE', '订单详情')
        vm.$store.commit('TOGGLE_SHOW_FOOT_BAR', false)
        vm.fetchData()
      })
    },
    methods: {
      ...mapActions([
        'getMyInfo'
      ]),
      fetchData() {
        this.getAddressData()
      },
      getAddressData() {
        let cb = (data) => {
          let arr = {}
          for (let item of data.body.data.addressList) {
            if (item.isDefault === 1) {
              arr = JSON.parse(JSON.stringify(item))
            }
          }
          this.addressData = arr
          setItem('openid', data.body.data.openid)
        }
        this.getMyInfo({cb: cb})
      },
      goShippingAddress() {
        this.$router.push({path: '/shopping-cart/shipping-address', query: {searchName: this.searchData}})
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
  .order-wrapper {
    margin-top: 90/75rem;
    .order-message {
      padding: 30/75rem;
      font-size: 30/75rem;
      color: white;
      background: #fb602c;
    }
    .user-name {
      font-size: 30/75rem;
      padding: 30/75rem;
      color: #666;
      .phone {
        display: inline-block;
        padding-left: 40/75rem;
      }
    }
    .user-address {
      padding: 0 30/75rem;
      overflow: hidden;
      .address {
        color: #666666;
        width: 80%;
        font-size: 30/75rem;
        float: left;
      }
      .change-address {
        float: right;
        width: 11/75rem;
        height: 22/75rem;
        background: url("../../../assets/img/you.png") no-repeat;
        background-size: 11/75rem 22/75rem;
        margin-top: 10/75rem;
      }
    }
    .order-content {
      .content {
        padding: 0 20/75rem;
        background: white;
        margin-top: 50/75rem;
        .content-item {
          overflow: hidden;
          background: #fff;
          padding: 20/75rem 0;
          border-bottom: 1px solid #dcdcdc;
          .good-img {
            float: left;
            width: 2rem;
            height: 120/75rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .good-info {
            float: left;
            width: 550/75rem;
            padding-left: 20/75rem;
            .good-title {
              font-size: 30/75rem;
              color: #666666;

            }
            .good-num {
              font-size: 24/75rem;
              color: #999;
              .good-price {
                float: right;
                font-size: 26/75rem;
                color: #ef0012;
              }
            }
          }
        }

      }
      .pay-method {
        padding: 20/75rem;
        margin-top: 10/75rem;
        font-size: 30/75rem;
        background: white;
        color: #999;
        overflow: hidden;
        .title {
          float: left;
        }
        .method {
          float: right;
          span {
            display: block;
          }
        }
      }
    }
    .order-footer {
      position: fixed;
      bottom: 0;
      height: 100/75rem;
      width: 100%;
      background: white;
      font-size: 30/75rem;
      .footer {
        width: 100%;
        height: 100%;
        display: flex;
        .price {
          color: #ef0012;
          text-align: right;
          line-height: 100/75rem;
          flex-grow: 2;
        }
        .submit-btn {
          flex-grow: 1;
          color: white;
          text-align: right;
          padding: 15/75rem 20/75rem;
        }
      }
    }
  }
</style>
