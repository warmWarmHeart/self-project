<template>
  <div class="search-input-bar">
    <span class="search-btn" @click="searchEvent"></span>
    <input class="search-input" type="text" placeholder="搜索品牌商品" v-model="searchData" @blur="hindTags"
           @focus="searchInputFocus">
    <transition name="fade">
      <div class="hot-search-tag" v-show="showTag">
        <div class="title">热门搜索</div>
        <div class="tags">
          <template v-for="item in tags">
            <span class="tag">{{item.label}}</span>
          </template>
        </div>
      </div>
    </transition>
    <div class="content">
      <div class="no-good" v-show="noGoods">
        <img src="../../../assets/img/feidie.png" alt="">
        <h3>您的商品飞走了</h3>
      </div>
      <div class="goods">
        <div class="goods-header">
          热门商品
        </div>
        <ul class="good-pai-box-wrapper">
          <template v-for="item in $store.state.recommendTableData">
            <li class="good-pai-box" @click="showAuctionGoodDetails(item)">
              <div class="good-box-left">
                <img :src="'http://47.104.10.147/image/' + item.merchantId + '/' + item.themeImage" alt="">
              </div>
              <div class="good-box-right">
                <div class="good-box-info">
                  <h2> {{item.productName}}</h2>
                  <timer></timer>
                  <span class="price-now" style="width: 100%" v-show="item.type === 2">当前出价：<i>¥{{item.salePrice}}</i>起 </span>
                  <div class="good-box-info-footer" v-show="item.type === 2">
                    <div class="good-pai-handle">
                      <span class="auction">竞拍中</span>
                      <span class="onlookers">围观203</span>
                      <span class="follow-pai">跟拍</span>
                    </div>
                  </div>
                  <span class="price-now" v-show="item.type !== 2">¥{{item.salePrice}} </span>
                  <span class="price-before" v-show="item.type !== 2">¥{{item.price}} </span>
                  <div class="good-box-info-footer" v-show="item.type !== 2">
                    <div class="good-pai-handle">
                      <span class="quantity">剩余数量：{{item.productNumber}}</span>
                      <span class="follow-pai" v-show="item.type === 3">立刻秒杀</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import config from '../../../utils/config'
  import Timer from '@/components/time.vue'
  import {mapGetters,mapActions,mapMutations} from 'vuex'

  export default {
    data() {
      return {
        searchData: '',
        showTag: false,
        noGoods: false,
        currentPage: 1,
        tags: [
          {label: 'ASdds'},
          {label: 'ASdds'},
          {label: 'ASdds'},
        ]
      }
    },
    components: {
      Timer
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.searchData = to.query.searchName
        vm.fetchData()
      })
    },
    methods: {
      ...mapActions([
        'getTableData'
      ]),
      fetchData() {
        let url = config.poop
        if (this.searchData === '') {
          return
        }
        this.$http.get(url + '?currentPage=' + this.currentPage + '&productName=' + this.searchData).then(res => {
          if (res.body.status === 'success') {
            if (!res.body.data.length) {
              this.noGoods = true
              this.getTableData({active: 'recommend'})
            } else {
              this.noGoods = false
              this.$store.commit('SET_RECOMMEND_TABLE_DATA',data.data)
              this.$store.commit('SET_RECOMMEND_PAGE_TOTAL',data.total)
//              this.$store.commit('SET_SEARCH_DATA', res.body.data)
            }
//            this.$store.commit('SET_SEARCH_DATA', res.body.data)
//            this.$router.push({path: '/shopping-cart/submit-order', query: {searchName: this.searchData}})

          }
        })
      },
      showAuctionGoodDetails(item) {
        console.log(item)
        let address = this.getAddress(item.type)
        this.$store.commit('SET_GOOD_DETAILS', item)

        this.$router.push({
          path: `/index/goodDetails`,
          query: {productId: item.productId,parentProductId: item.parentProductId, type: item.type}
        })
      },
      getAddress (num) {
        switch (num) {
          case 2: return 'groupon';
          case 4: return 'auction';
          case 3: return 'seckill';
          case 1: return 'poop';
        }
      },
      searchInputFocus() {
        this.showTag = true
      },
      hindTags() {
        this.showTag = false
      },
      searchEvent() {
        let url = config.poop
        if (this.searchData === '') {
          return
        }
        this.$http.get(url + '?currentPage=1&productName=' + this.searchData).then(res => {
          if (res.body.status === 'success') {
            this.$store.commit('SET_SEARCH_DATA', res.body.data)
            this.$router.push({path: '/index/search', query: {searchName: this.searchData}})

          }
        })
      }
    }
  }
</script>

<style scoped lang='less'>
  .search-input-bar {
    margin-top: 1.6rem;
    width: 715/75rem;
    height: 60/75rem;
    border-radius: 30/75rem;
    /*overflow: hidden;*/
    background: white;
    position: relative;
    margin-left: 20/75rem;

    .content {
      width: 100%;
      height: auto;
      .no-good {
        width: 100%;
        height: 200/75rem;
        img {
          width: 150/75rem;
          height: 2rem;
          margin-left: 50%;
          transform: translateX(-50%);
        }
        h3 {
          padding: 0;
          font-size: 20/75rem;
          color: #ccc;
          text-align: center;
        }
      }
      .goods {
        .goods-header {
          width: 100%;
          height: 60/75rem;
          margin-top: 50/75rem;
          line-height: 60/75rem;
          font-size: 30/75rem;
          color: #999999;
          background: white;
          text-align: center;
        }
        .good-pai-box-wrapper {
          margin-top: 2/75rem;
          .good-pai-box {
            width: 710/75rem;
            height: 3rem;
            overflow: hidden;
            padding: 20/75rem 0;
            border-bottom: 1px solid #dcdcdc;
            background-color: #ffffff;
            .good-box-left {
              width: 220/75rem;
              height: 180/75rem;
              float: left;
              background-color: #ffffff;
              img {
                width: 220/75rem;
                height: 180/75rem;
              }
            }
            .good-box-right {
              width: 472/75rem;
              height: 180/75rem;
              float: left;
              padding-left: 16/75rem;

              position: relative;
              .good-box-info {
                width: 100%;
                height: 100%;
                .price-now {
                  font-size: 22/75rem;
                  display: inline-block;
                  width: 120/75rem;
                  color: #ef0012;
                }
                .price-before {
                  font-size: 22/75rem;
                  text-decoration: line-through;
                  display: inline-block;
                  color: #999;

                }
                h2 {
                  text-overflow: ellipsis;
                  font-size: 24/75rem;
                  color: #333;
                }
                font-size: 24/75rem;
                .good-box-info-footer {
                  position: absolute;
                  height: 40/75rem;
                  width: 100%;
                  bottom: 0;
                  .good-pai-handle {

                    color: #ef0012;

                    .auction {
                      float: left;
                      border-radius: 2px;
                      padding-left: 43/75rem;
                      padding-right: 6/75rem;
                      height: 45/75rem;
                      border: 1px solid #ef0012;
                      background: url("../../../assets/img/chuizi.png") no-repeat;
                      background-size: 28/75rem 29/75rem;
                      background-position: 6/75rem 6/75rem;
                    }
                    .onlookers {
                      float: left;
                      border-radius: 2px;
                      height: 45/75rem;
                      margin-left: 20/75rem;
                      background: url("../../../assets/img/xin.png") no-repeat;
                      background-size: 28/75rem 26/75rem;
                      background-position: 6/75rem 6/75rem;
                      padding-left: 50/75rem;
                      padding-right: 6/75rem;
                      border: 1px solid #ef0012;
                    }
                    .follow-pai {
                      float: right;
                      border-radius: 2px;
                      text-align: center;
                      color: white;
                      width: 130/75rem;
                      height: 45/75rem;
                      line-height: 40/75rem;
                      background: url("../../../assets/img/genpaiBak.png");
                      background-position: center;
                    }
                  }
                  .good-pai-handle:before, .good-pai-handle:after {
                    display: block;
                    content: '';
                    clear: both;
                  }
                }

                h1 {
                  height: 65/75rem;
                }
                .price-now {
                  font-size: 22/75rem;
                  color: #ef0012;
                  i {
                    font-weight: 600;
                  }
                }
              }
            }

          }
        }
      }

    }
    .search-btn {
      position: absolute;
      width: 23/75rem;
      height: 23/75rem;
      background: url(../../../assets/img/search-btn.png) no-repeat;
      background-size: 100% 100%;
      right: 30/75rem;
      top: 20/75rem;
    }
    .search-input {
      width: 640/75rem;
      height: 60/75rem;
      vertical-align: top;
      border-radius: 30/75rem;
      font-size: 24/75rem;
      border: none;
      text-align: center;
    }
    .hot-search-tag {
      position: absolute;
      width: 10rem;
      left: -20/75rem;
      top: 1rem;
      background: white;
      z-index: 1;
      padding: 20/75rem;
      .title {
        font-size: 30/75rem;
        color: #666;
      }
      .tags {
        width: 100%;
        height: 10rem;
        padding-top: 20/75rem;
        .tag {
          float: left;
          padding: 10/75rem 20/75rem;
          font-size: 20/75rem;
          background: #bcbcbc;
          margin-right: 20/75rem;
          color: #666;
        }
      }
    }
  }

  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    background: white;
    /*font-family: 微软雅黑;*/
    color: #999999;
  }

  input:-moz-placeholder, textarea:-moz-placeholder {
    /*font-family: 微软雅黑;*/
    background: white;
    color: #999999;
  }

  input::-moz-placeholder, textarea::-moz-placeholder {
    /*font-family: 微软雅黑;*/
    background: white;
    color: #999999;
  }

  input:-ms-input-placeholder, textarea:-ms-input-placeholder {
    /*font-family: 微软雅黑;*/
    background: white;
    color: #999999;
  }
</style>
