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
  </div>
</template>

<script>
  import config from '../utils/config'
  import {mapGetters,mapActions,mapMutations} from 'vuex'

  export default {
    data() {
      return {
        searchData: '',
        showTag: false,
        currentPage: 1,
        tags: [
          {label: 'ASdds'},
          {label: 'ASdds'},
          {label: 'ASdds'},
        ]
      }
    },
    methods: {
      ...mapActions([
        'getTableData'
      ]),
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
            if (!res.body.data.length) {
              this.getTableData({active: 'recommend', category: 1})
            } else {
              this.$store.commit('SET_RECOMMEND_TABLE_DATA',data.data)
              this.$store.commit('SET_RECOMMEND_PAGE_TOTAL',data.total)
//              this.$store.commit('SET_SEARCH_DATA', res.body.data)
            }
            this.$router.push({ path: '/index/search', query: { searchName: this.searchData}})

          }
        })
      }
    }
  }
</script>

<style scoped lang='less'>
  .search-input-bar {
    width: 640/75rem;
    height: 60/75rem;
    border-radius: 30/75rem;
    /*overflow: hidden;*/
    background: white;
    position: relative;
    z-index: 1;
    .search-btn {
      position: absolute;
      width: 23/75rem;
      height: 23/75rem;
      background: url(../assets/img/search-btn.png) no-repeat;
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
