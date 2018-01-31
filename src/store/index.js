import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)
const state = {
  // user
  username: 'Jimmy Li',
  userPhone: '186******654',
  userAddress: '北京市海淀区中关村大街某某小区18号楼5单元403',
  showFooterBar: '',
  headerTitle: '四两饭',
  recommendTableData: [],
  recommendPageTotal: 0,
  showGoodsDetails: false,
  showPage: 'recommend',
  isLoading: false,
  direction: 'forward',
  showOverTime: true,
  showGoodParameter: true,
  shoppingCartList: [],
  goodDetails: {},
  goodType: false,
  goodModel: '',
  goodQuantity: 1,
  paiHistoryActive: 0,
  searchData: [],
  swiperData: [],
  commentList: [],
  paiHistory: [],
  indentList: [],
  myInfo: {},
  myAuction: [],
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
