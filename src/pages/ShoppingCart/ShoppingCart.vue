<template>
  <div class="shopping-cart-wrapper">
    <div class="cart-header">
      <span class="back-icon" v-show="editStatus" @click="stopEditShoppingCart()">
        <span class="iconfont">&#xe604;</span>
      </span>
      <span class="edit-icon" v-show="!editStatus" @click="editShoppingCart()">编辑</span>
    </div>
    <div class="cart-shopping">
      <ul class="shopping-list" v-show="!showEdit">
        <li class="shopping-item" v-for="(item, index) in shoppingCartList">
          <div class="item-left">
            <div class="circle"
                 v-show="checkList.indexOf(item.id) === -1"
                 @click="choiceGood(item)">
            </div>
            <div class="circle-active"
                 v-show="checkList.indexOf(item.id) !== -1"
                 @click="choiceGood(item)">
              <span>✔</span>
            </div>
          </div>
          <div class="item-middle">
            <div class="middle-content">
              <img :src="`http://47.104.10.147/image/${item.merchantId}/${item.themeImage}`" alt="">
              <div class="middle-content-right">
                <div class="good-title">
                  {{item.name}}
                </div>
                <div class="good-bottom">
                  <span class="price">
                    ￥{{item.payPrice}}
                  </span>
                  <div class="good-num">
                    <span :class="['subtract', {'subtract-disabled': item.saleNum<=0}]"
                          @click="changeQty(false, item, index)">-</span>
                    <span class="number">{{item.saleNum}}</span>
                    <span :class="['add', {'add-disabled': item.saleNum>=item.max}]"
                          @click="changeQty(true, item, index)">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <swipeout v-show="showEdit">
        <swipeout-item :threshold=".5" v-for="(item, index) in shoppingCartList" :key="item.id" underlay-color="#ccc">
          <div slot="right-menu">
            <swipeout-button @click.native="deleteShoppingCartList(item)"
                             background-color="#D23934">
              删除
            </swipeout-button>
          </div>
          <div slot="content" class="demo-content vux-1px-tb">
            <div class="shopping-item">
              <div class="item-left">
                <div class="circle"
                     v-show="checkList.indexOf(item.id) === -1"
                     @click="choiceGood(item)">
                </div>
                <div class="circle-active"
                     v-show="checkList.indexOf(item.id) !== -1"
                     @click="choiceGood(item)">
                  <span>✔</span>
                </div>
              </div>
              <div class="item-middle">
                <div class="middle-content">
                  <img :src="`http://47.104.10.147/image/${item.merchantId}/${item.themeImage}`" alt="">
                  <div class="middle-content-right">
                    <div class="good-title">
                      {{item.name}}
                    </div>
                    <div class="good-bottom">
                  <span class="price">
                    ￥{{item.payPrice}}
                  </span>
                      <div class="good-num">
                    <span :class="['subtract', {'subtract-disabled': item.saleNum<=0}]"
                          @click="changeQty(false, item, index)">-</span>
                        <span class="number">{{item.saleNum}}</span>
                        <span :class="['add', {'add-disabled': item.saleNum>=item.max}]"
                              @click="changeQty(true, item, index)">+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swipeout-item>
      </swipeout>
    </div>
    <div class="order-footer">
      <div class="footer">
        <div class="price">
          实付款： ￥{{totalPrice}}
        </div>
        <div class="submit-btn">
          <x-button mini :gradients="['#FF5E3A', '#FF9500']">提交订单</x-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import config from '@/utils/config'
  import {Tab, TabItem, Icon, GroupTitle, Swipeout, SwipeoutItem, SwipeoutButton, XButton} from 'vux'

  export default {
    data() {
      return {
        editStatus: false,
        totalPrice: 0,
        commonList: [],
        checkList: [],
        infor: '',
        showEdit: false
      }
    },
    components: {
      Tab, TabItem, Icon, GroupTitle,
      Swipeout,
      SwipeoutItem,
      SwipeoutButton,
      XButton
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.getShoppingCartList({cb: vm.getTotalPrice})
        vm.$store.commit('SET_HEADER_TITLE', '购物车')
        vm.$store.commit('TOGGLE_SHOW_FOOT_BAR', false)
      })
    },
    computed: {
      ...mapGetters([
        'shoppingCartList',
      ]),
    },
    methods: {
      ...mapMutations([
        'SET_SHOPPING_CART_LIST'
      ]),
      ...mapActions([
        'getShoppingCartList',
      ]),
      fetch() {

      },
      getTotalPrice() {
        let num = 0
        for (let item of this.shoppingCartList) {
          num += item.payPrice
        }
        this.totalPrice = 0
//        this.totalPrice = num
      },
      editShoppingCart() {
        this.editStatus = true
        this.showEdit = true
      },
      stopEditShoppingCart() {
        this.editStatus = false
        this.showEdit = false
      },
      choiceGood(item) {
        let index = this.checkList.indexOf(item.id)
        if (index !== -1) {
          this.checkList.splice(index, 1)
          this.totalPrice -= item.payPrice
        } else {
          this.checkList.push(item.id)
          this.totalPrice += item.payPrice
        }
      },
      //      购物车加减
      changeQty(isNotAdd, item, index) {
        let arr = JSON.parse(JSON.stringify(this.shoppingCartList))
        if (!isNotAdd) {
          if (item.saleNum > 0) {
            arr[index].saleNum--
            arr[index].payPrice = arr[index].price * arr[index].saleNum
            this.SET_SHOPPING_CART_LIST(arr)
//            this.getTotalPrice()
//            this.commonList[index].saleNum--
//            localStorage.setItem('cartData', JSON.stringify(this.commonList))
          }
        }
        else {
          if (item.saleNum < item.maxProductNum) {
            arr[index].saleNum++
            arr[index].payPrice = arr[index].price * arr[index].saleNum
            this.SET_SHOPPING_CART_LIST(arr)
//            this.getTotalPrice()
//            this.commonList[index].saleNum++
//            localStorage.setItem('cartData', JSON.stringify(this.commonList))
          }
        }
      },
      deleteShoppingCartList(item) {
        let url = `${config.deleteGoodsInshoppingCart}/${item.id}`
        let that = this
        this.$http.get(url).then(res => {
          if (res.status === 200) {}
          that.getShoppingCartList({cb: that.getTotalPrice})
        })
      }
    }
  }
</script>

<style scoped lang='less'>
  .shopping-cart-wrapper {
    width: 100%;
    padding: 1.5rem 20/75rem;
    box-sizing: border-box;
    .cart-header {
      height: 100/75rem;
      overflow: hidden;
      .back-icon {
        float: left;
        font-size: 24/75rem;
      }
      .edit-icon {
        float: right;
        font-size: 24/75rem;
        color: #666;
      }
    }
    .cart-shopping {
      .shopping-item {
        padding: 20/75rem 0;
        border-bottom: 1px solid #dcdcdc;
        overflow: hidden;
        .item-left {
          float: left;
          width: 55/75rem;
          height: 180/75rem;
          position: relative;
          .circle {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40/75rem;
            height: 40/75rem;
            border: 1px solid #dcdcdc;
            border-radius: 50%;
            font-size: 24/75rem;
            .active {
              color: #ef0012;

            }
          }
          .circle-active {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40/75rem;
            height: 40/75rem;
            border-radius: 50%;
            font-size: 24/75rem;
            text-align: center;
            border: 1px solid #ef0012;
            color: #ef0012;
            line-height: 40/75rem;
          }
        }
        .item-middle {
          float: left;
          width: 650/75rem;
          height: 180/75rem;
          .middle-content {
            width: 100%;
            height: 100%;
            img {
              float: left;
              width: 220/75rem;
              height: 100%;
            }
            .middle-content-right {
              padding-left: 20/75rem;
              box-sizing: border-box;
              position: relative;
              float: left;
              width: 430/75rem;
              height: 100%;
              font-size: 24/75rem;
              .good-bottom {
                position: absolute;
                bottom: 0;
                width: 100%;
                .price {
                  color: #ef0012;
                }
                .good-num {
                  position: absolute;
                  right: 20/75rem;
                  bottom: 0;
                  /*border: 1px solid #ef0012;*/
                  border-radius: 3px;
                  width: 200/75rem;
                  height: 60/75rem;
                  overflow: hidden;
                  font-size: 24/75rem;
                  text-align: center;
                  line-height: 60/75rem;
                  .subtract {
                    float: left;
                    width: 0.71rem;
                    height: 100%;
                    background: #ef0012;
                    border-right: 1px solid #dcdcdc;
                    color: #fff;
                  }
                  .subtract-disabled {
                    background: #dcdcdc;
                    border-right: 1px solid #dcdcdc;
                    color: #999;
                  }
                  .number {
                    float: left;
                    width: 1.2rem;
                    margin-left: -1px;
                    height: 100%;
                    text-align: center;
                    border-bottom: 1px solid #ef0012;
                    border-top: 1px solid #ef0012;
                  }
                  .add {
                    background: #ef0012;
                    height: 100%;
                    color: #fff;
                    border: 1px solid #ef0012;
                    border-radius: 0 3px 3px 0;
                    width: 0.7rem;
                    float: left;
                  }
                  .add-disabled {
                    background: #dcdcdc;
                    border: 1px solid #dcdcdc;
                    color: #666;
                  }
                }
              }
            }
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
