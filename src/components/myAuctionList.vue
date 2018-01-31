<template>
  <ul class="good-pai-box-wrapper">
    <template v-for="item in $store.state.myAuction">
      <li class="good-pai-box" @click="showAuctionGoodDetails(item)">
        <div class="good-box-left">
          <img :src="'http://47.104.10.147/image/' + item.merchantId + '/' + item.themeImage" alt="">
        </div>
        <div class="good-box-right">
          <div class="good-box-info">
            <h2> {{item.productName}}</h2>
            <timer  v-if="item.auctionStatus === 2"></timer>
            <span class="price-now"  v-if="item.auctionStatus === 2">当前出价：<i>¥{{item.salePrice}}</i>起 </span>
            <div class="good-box-info-footer">
              <div class="good-pai-handle">
                <span class="auction" v-if="item.auctionStatus === 1">竞拍中</span>
                <span class="auction1" v-else>已结束</span>
                <span class="onlookers">围观{{item.viewCount}}</span>
                <span class="follow-pai" v-if="item.auctionStatus === 2">跟拍</span>
                <span :class="{'follow-pai-no': true, 'follow-pai-no1': false}" v-else>
                </span>
              </div>
            </div>

          </div>
        </div>
      </li>
    </template>
  </ul>
</template>

<script>
  import Timer from '@/components/time.vue'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      Timer
    },
    computed: {
      ...mapGetters([
        'recommendTableData'
      ])
    },
    methods: {
      showAuctionGoodDetails(item) {
        this.$store.commit('SET_GOOD_DETAILS', item)
        this.$router.push({
          path: '/index/goodDetails',
          query: {productId: item.productId,parentProductId: item.parentProductId, type: item.type}
        })
      }
    }
  }
</script>

<style scoped lang='less'>
  .good-pai-box-wrapper {
    padding: 20/75rem;
    margin-top: 20/75rem;
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
                background: url("../assets/img/chuizi.png") no-repeat;
                background-size: 28/75rem 29/75rem;
                background-position: 6/75rem 6/75rem;
              }
              .auction1 {
                float: left;
                border-radius: 2px;
                padding-left: 43/75rem;
                padding-right: 6/75rem;
                height: 45/75rem;
                border: 1px solid #ef0012;
                background: #dcdcdc;
              }
              .onlookers {
                float: left;
                border-radius: 2px;
                height: 45/75rem;
                margin-left: 20/75rem;
                background: url("../assets/img/xin.png") no-repeat;
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
                background: url("../assets/img/genpaiBak.png");
                background-position: center;
              }
              .follow-pai-no {
                background: url("../assets/img/yhlb.png") no-repeat;
                background-size: 120/75rem;

                width: 120/75rem;
                height: 120/75rem;
                float: right;
                margin-top: -100/75rem;
                margin-right: 20/75rem;
              }
              .follow-pai-no1 {
                background: url("../assets/img/jpcg.png") no-repeat;
                background-size: 120/75rem;

                width: 120/75rem;
                height: 120/75rem;
                float: right;
                margin-top: -100/75rem;
                margin-right: 20/75rem;
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

</style>
