export default {
  // user
  set_username (state, str) {
    state.username = str
  },
  set_user_phone (state, str) {
    state.userPhone = str
  },
  set_user_address (state, str) {
    state.userAddress = str
  },
  TOGGLE_SHOW_FOOT_BAR (state, str) {
    state.showFooterBar = str
  },
  SET_HEADER_TITLE (state, str) {
    state.headerTitle = str || '四两饭'
  },
  SET_SHOPPING_CART_LIST (state, arr) {
    state.shoppingCartList = JSON.parse(JSON.stringify(arr))
  },
  UPDATE_LOADING (state, status) {
    state.isLoading = status
  },
  UPDATE_DIRECTION (state, direction) {
    state.direction = direction
  },
  SET_RECOMMEND_TABLE_DATA (state, data) {
    console.log(data)
    let arr = []
    for (let item of data ) {
      let obj = {}
      for (let value in item) {
        if (value !== 'picName') {
          obj[value] = item[value]
        } else {
          obj['picName'] = item['picName']?item['picName'].split(','): null
        }
      }
      arr.push(obj)
    }
    state.recommendTableData = arr
  },
  SET_RECOMMEND_PAGE_TOTAL (state, data) {
    state.recommendPageTotal = data || 0
  },
  TOGGLE_SHOW_GOODS_DETAILS (state, data) {
    state.showGoodsDetails = data || 0
  },
  TOGGLE_SHOW_PAGE (state, data) {
    state.showPage = data || 'recommend'
  },
  TOGGLE_SHOW_OVER_TIME (state, data) {
    state.showOverTime = data || false
  },
  TOGGLE_SHOW_GOOD_PARAMETER (state, data) {
    state.showGoodParameter = data || false
  },
  SET_GOOD_DETAILS (state, data) {
    state.goodDetails = data
  },
  SET_GOOD_TYPE (state, num) {
    state.goodType = num
  },
  SET_GOOD_MODEL (state, str) {
    state.goodModel = str
  },
  SET_GOOD_QUANTITY (state, num) {
    state.goodQuantity = num
  },
  SET_PAI_HISTORY_ACTIVE (state, num) {
    state.paiHistoryActive = num
  },
  SET_SEARCH_DATA (state, data) {
    state.searchData = data
  },
  SET_SWIPER_DATA (state, data) {
    state.swiperData = data
  },
  SET_COMMENT_LIST (state, data) {
    state.commentList = data
  },
  SET_PAI_HISTORY (state, data) {
    state.paiHistory = data
  },
  SET_INDENT_LIST (state, data) {
    state.indentList = data
  },
  SET_MY_INFO (state, data) {
    state.myInfo = data
  },
  SET_MY_AUCTION (state, data) {
    state.myAuction = data
  },

}
