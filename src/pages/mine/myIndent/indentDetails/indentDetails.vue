<template>
  <div class="order-wrapper">
    <div class="order-message" v-if="active === 0">
      <yd-icon name="checkoff"></yd-icon> 订单已完成
    </div>
    <div class="order-message" v-if="active === 1">
      <span class="left" ><yd-icon name="time" size=".5rem"></yd-icon> 等待付款</span>
      <span class="right" style="text-align: right">
        剩余 <yd-countdown time="2018/06/06 06:06:06"></yd-countdown>
      </span>
    </div>
    <div class="indent-address">
      <div class="left">
        <yd-icon name="location"></yd-icon>
      </div>
      <div class="right">
        <div class="user-name">
      <span class="name">
        {{$store.state.username}}
      </span>
          <span class="phone">
        {{$store.state.userPhone}}
      </span>
        </div>
        <div class="user-address" @click="goShippingAddress">
      <span class="address">
        地址：{{$store.state.userAddress}}
      </span>

        </div>
      </div>
    </div>

    <div class="order-content">
      <ul class="content">
        <li class="content-item">
          <div class="good-img">
            <img src="../../../../assets/img/zixingche.png" alt="">
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
      <div class="indent-code">
        <span>订单编号：013484763837383948</span>
        <span>下单时间：2017-09-23  18:45:45</span>
      </div>
      <div class="pay-method">
        支付方式：微信支付
      </div>
      <div class="pay-method">
        配送方式：顺丰快递
      </div>
      <div class="goods-price">
        <div class="top">
          <span class="left">
            发票类型：
          </span>
          <span class="right">
            无
          </span>
        </div>
        <div class="bottom">
 <span class="left">
            发票抬头
          </span>
          <span class="right">
            + 10.00
          </span>
        </div>
        <div class="bottom">
 <span class="left">
            发票内容
          </span>
          <span class="right">
            + 10.00
          </span>
        </div>
      </div>
      <div class="goods-price">
        <div class="top">
          <span class="left">
            商品总额：
          </span>
          <span class="right">
            ￥5900
          </span>
        </div>
        <div class="bottom">
 <span class="left">
            运费：
          </span>
          <span class="right">
            + 10.00
          </span>
        </div>
      </div>
    </div>
    <div class="order-footer">
      <div class="footer">
        <div class="price" v-if="active === 0">
          实付款： ￥5994.00
        </div>
        <div class="price" v-if="active === 1">
          需付款： ￥5994.00
        </div>
        <div class="submit-btn">
          <x-button mini
                    :gradients="['#FF5E3A', '#FF9500']"
                    v-if="active === 0"
                    @click.native="goIndentComment"
          >去晒单</x-button>
          <x-button mini :gradients="['#FF5E3A', '#FF9500']" v-if="active === 1">去付款</x-button>
        </div>
      </div>
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
        vm.$store.commit('SET_HEADER_TITLE', '订单详情')
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

      }
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
    .indent-address {
      overflow: hidden;
      background: white;
      padding: 20/75rem;
      margin-top: 5/75rem;
      margin-bottom: 5/75rem;
      height: 2.5rem;
      display: flex;
      .left {

        flex: 1;
      }
      .right {
        flex: 8;
        .user-name {
          font-size: 30/75rem;
          color: #666;
          .phone {
            display: inline-block;
            padding-left: 40/75rem;
          }
        }
        .user-address {
          overflow: hidden;
          .address {
            color: #666666;
            font-size: 30/75rem;
            float: left;
          }
          .change-address {
            float: right;
            width: 11/75rem;
            height: 22/75rem;
            background: url("../../../../assets/img/you.png") no-repeat;
            background-size: 11/75rem 22/75rem;
            margin-top: 10/75rem;
          }
        }
      }
    }
    .indent-code {
      background: white;
      padding: 20/75rem;
      span {
        font-size: 30/75rem;
        display: block;
        line-height: 40/75rem;
        color: #999;
      }
    }
    .order-content {
      .content {
        padding: 0 20/75rem;
        background: white;
        margin-top: 10/75rem;
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
      }
      .goods-price {
        padding: 20/75rem;
        margin-top: 10/75rem;
        font-size: 30/75rem;
        background: white;
        color: #999;
        .top {
          overflow: hidden;
          .left {
            float: left;
          }
          .right {
            float: right;
          }
        }
        .bottom {
          overflow: hidden;
          .left {
            float: left;
          }
          .right {
            float: right;
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
