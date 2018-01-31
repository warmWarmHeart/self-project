import url from '../utils/config'
import {getTime} from '../utils/utils'
import Vue from 'vue'
// import axios from 'axios'
// import Resource from 'vue-resource'
// Vue.prototype.$http = axios
// let vm = new Vue()
export default {
  async getTableData ({ commit, state }, data) {
    let address = url[data.active]

    let obj = data || {
      currentPage: 1,
      category: name
    }
    Vue.http.get(`${address}?currentPage=${obj.currentPage}&category=${obj.category}`).then(response => {
      if(response.status === 200){
        let data = response.body
        commit('SET_RECOMMEND_TABLE_DATA',data.data.length? data.data[0]: [])
        commit('SET_RECOMMEND_PAGE_TOTAL',data.total)
      }

    })
  },
  async getPageData ({ commit, state }, data) {
    let url = url.recommend
  },
  async getSwiper ({ commit, state }, data) {
    let url = data.url
    Vue.http.get(url).then(res=> {
      let arr = []
      for (let item of res.body.data) {
        arr.push({
          img: item.imgpath
        })
      }
      // console.log(res.body.data, 'asdasfasdfa')

      commit('SET_SWIPER_DATA', arr)
    })
  },
  async getCommandList ({ commit, state }, data) {
    let that = this
    let address = `${url.commentList}?currentPage=${data.currentPage}&parentProductId=${data.parentProductId}`
    Vue.http.get(address).then(res => {
      if (res.status === 200) {
        let data = res.body.data
        for (let item of data) {
          item.createtime = getTime(item.createtime)
        }
        commit('SET_COMMENT_LIST', data)
      }
    })
  },
  async getPaiHistory ({ commit, state }, data) {
    let that = this
    let address = `${url.getPaiHistory}?productId=${data.productId}`
    Vue.http.get(address).then(res => {
      if (res.status === 200) {
        let data = res.body.data
        for (let item of data) {
          item.createtime = getTime(item.createtime)
        }
        commit('SET_PAI_HISTORY', data)
      }
    })
  },
  async getShoppingCartList ({ commit, state }, data) {
    let that = this
    let address = `${url.shoppingCartList}/dfasf`
    Vue.http.get(address).then(res => {
      if (res.status === 200) {
        let data1 = res.body.data
        commit('SET_SHOPPING_CART_LIST', data1)
        if (data.cb) {
          data.cb()
        }

      }
    })
  },
  async addViewCountOne ({ commit, state }, data) {
    let that = this
    let address = `${url.addViewCountOne}?productId=${data.productId}&parentProductId=${data.parentProductId}`
    Vue.http.get(address).then(res => {
      // console.log(res, 1231321)
      if (res.status === 200) {
        // let data1 = res.body.data
        // commit('SET_SHOPPING_CART_LIST', data1)
        // if (data.cb) {
        //   data.cb()
        // }
      }
    })
  },
  async getMyInfo ({ commit, state }, data) {
    let address = `${url.addressList}?openid=ogHsV06e2TWk4dTmHETHfYmGJ1NE`
    Vue.http.get(address).then(res => {
      if (res.status === 200) {
        commit('SET_MY_INFO', res.body.data)
        data.cb(res)
      }
    })
  },
  async getMyAuction ({ commit, state }, data) {
    let address = `${url.getMyAuction}?openid=ogHsV06e2TWk4dTmHETHfYmGJ1NE&currentPage=1&auctionStatus=${data.status}`
    Vue.http.get(address).then(res => {
      console.log(res, 'res, getMyAuction')
      if (res.status === 200) {
        commit('SET_MY_AUCTION', res.body.data)
        // data.cb(res)
      }
    })
  },
}
