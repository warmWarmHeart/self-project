
const url = 'http://47.104.10.147:80/slf-weixin/api'
const url1 = 'http://192.168.16.106:8081/slf-weixin/api'

export default {
  recommend: `${url}/index/recommend`,
  seckill: `${url}/seckill/seckill`,
  seckillDetails: `${url}/seckill/getSeckillProductById`,
  auction: `${url}/auction/auctionProductList`,
  poop: `${url}/index/poop`,
  swiper: `${url}/adImage/getAdImageList`,
  goodDetailsSwiper: `${url}/adImage/getAdImageById`,
  auctionDetails: `${url}/auction/getAuctionListByParentId`,
  groupDetails: `${url}/groupbuy/getGroupbuyProductListByParentProductId`,
  poopDetails: `${url}/index/getProductListByParentId`,
  commentList: `${url}/comment/getCommentList`,
  serviceList: `${url}/question/getQuestionList`,
  serviceConnection: `${url}/consumer/getConsumerList`,
  serviceSolution: `${url}/question/getQuestionById`,

  shoppingCartList: `${url}/shopping/queryShoppingByOpenid`,
  addGoodsInshoppingCart: `${url}/shopping/saveShopping`,
  deleteGoodsInshoppingCart: `${url}/shopping/deleteShoppingById`,
  addViewCountOne: `${url}/auction/addViewCountOne`,
  getPaiHistory: `${url}/auction/getAuctionHistoryList`,
  addressList: `${url}/personal/getPersonalData`,
  addAddress: `${url}/personal/saveAddress`,
  getAddressById: `${url}/personal/getAreaById`,
  updateAddressById: `${url}/personal/updateAddressById`,
  deleteAddressById: `${url}/personal/deleteAddressById`,
  addPrice: `${url}/auction/saveAuctionHistory`,
  getMyAuction: `${url}/auction/getMyJoinAuctions`,
}
