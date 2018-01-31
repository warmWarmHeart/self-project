import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Index from '../pages/index/index.vue'
import GoodDetails from '../pages/index/goodsDetails/goodsDetails.vue'
import seckillGoodDetails from '../pages/index/goodsDetails/seckill/goodsDetails.vue'
import grouponGoodDetails from '../pages/index/goodsDetails/groupon/goodsDetails.vue'
import auctionGoodDetails from '../pages/index/goodsDetails/auction/goodsDetails.vue'
import poopGoodDetails from '../pages/index/goodsDetails/poop/goodsDetails.vue'
import search from '../pages/index/search/goods.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import SubmitOrder from '../pages/ShoppingCart/submitOrder/order.vue'
import ShippingAddress from '../pages/ShoppingCart/shippingAddress/shippingAddress.vue'
import AddAddress from '../pages/ShoppingCart/addAddress/addAddress.vue'
import Mine from '../pages/mine/mine.vue'
import MyInfo from '../pages/mine/myInfo/myInfo.vue'
import MyAuction from '../pages/mine/myAuction/myAuction.vue'
import MyIndent from '../pages/mine/myIndent/myIndent.vue'
import MineSolution from '../pages/mine/solution/solution.vue'
import IndentDetails from '../pages/mine/myIndent/indentDetails/indentDetails.vue'
import LogisticsDetails from '../pages/mine/myIndent/logisticsDetails/logisticsDetails.vue'
import IndentComment from '../pages/mine/myIndent/indentComment/indentComment.vue'
import Message from '../pages/mine/message/message.vue'
import Service from '../pages/mine/service/service.vue'
import Terrace from '../pages/mine/terrace/terrace.vue'

export default new Router({
  routes: [
    // 根路径
    {
      path: '/',
      redirect: '/index',
      component: Index,
      name: 'route',
    },
    // 首页
    {
      path: '/index',
      component: Index,
      name: 'index',
    },
    {
      path: '/index/goodDetails/seckill',
      component: seckillGoodDetails,
      name: 'seckillGoodDetails',
    },
    {
      path: '/index/goodDetails',
      component: GoodDetails,
      name: 'GoodDetails',
    },
    {
      path: '/index/goodDetails/groupon',
      component: grouponGoodDetails,
      name: 'grouponGoodDetails',
    },
    {
      path: '/index/goodDetails/auction',
      component: auctionGoodDetails,
      name: 'auctionGoodDetails',
    },
    {
      path: '/index/goodDetails/poop',
      component: poopGoodDetails,
      name: 'poopGoodDetails',
    },
    {
      path: '/index/search',
      component: search,
      name: 'search',
    },
    /*// 商家模块
    {
      path: '/restaurant',
      redirect: '/restaurant/goods',
      component: RestaurantDetail,
      children: [
        {
          path: 'goods',
          component: Goods
        },
        {
          path: 'ratings',
          component: Ratings
        },
        {
          path: 'seller',
          component: Seller
        }
      ]
    },*/
    // 购物车
    {
      path: '/shopping-cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/shopping-cart/submit-order',
      name: 'SubmitOrder',
      component: SubmitOrder
    },
    {
      path: '/shopping-cart/shipping-address',
      name: 'ShippingAddress',
      component: ShippingAddress
    },
    {
      path: '/shopping-cart/add-address',
      name: 'AddAddress',
      component: AddAddress
    },
    // 个人中心
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
    },
    {
      path: '/mine/info',
      name: 'MineInfo',
      component: MyInfo,
    },
    {
      path: '/mine/indent',
      name: 'MineIndent',
      component: MyIndent,
    },
    {
      path: '/mine/indent/details',
      name: 'MineIndentDetails',
      component: IndentDetails,
    },
    {
      path: '/mine/logistics/details',
      name: 'logisticsDetails',
      component: LogisticsDetails,
    },
    {
      path: '/mine/indent/comment',
      name: 'IndentComment',
      component: IndentComment,
    },
    {
      path: '/mine/auction',
      name: 'MineAuction',
      component: MyAuction,
    },
    {
      path: '/mine/message',
      name: 'MineMessage',
      component: Message,
    },
    {
      path: '/mine/service',
      name: 'MineService',
      component: Service,
    },
    {
      path: '/mine/service/solution',
      name: 'MineSolution',
      component: MineSolution,
    },
    {
      path: '/mine/terrace',
      name: 'MineTerrace',
      component: Terrace,
    },
  ]
})
