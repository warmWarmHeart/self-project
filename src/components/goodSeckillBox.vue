<template>
  <ul class="good-pai-box-wrapper">
    <template v-for="item in recommendTableData">
      <li class="good-pai-box" @click="showGoodDetails(item)">
        <div class="good-box-left">
          <img :src="'http://47.104.10.147/image/' + item.merchantId + '/' + item.themeImage" alt="">
        </div>
        <div class="good-box-right">
          <div class="good-box-info">
            <h2> {{item.productName}}</h2>
            <timer></timer>
            <span class="price-now">¥{{item.salePrice}} </span>
            <span class="price-before">¥{{item.price}} </span>
            <div class="good-box-info-footer">
              <div class="good-pai-handle">
                <span class="quantity">剩余数量：{{item.productNumber}}</span>
                <span class="follow-pai">立刻秒杀</span>
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
      showGoodDetails(item) {
        this.$store.commit('SET_GOOD_DETAILS', item)
        this.$router.push({
          path: '/index/goodDetails',
          query: {productId: item.productId, parentProductId: item.parentProductId, type: item.type}
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
              overflow: hidden;
              color: #ef0012;

              .quantity {
                float: left;

                height: 38/75rem;
              }
              .onlookers {
                float: left;
                border-radius: 2px;
                height: 38/75rem;
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
                font-size: 20/75rem;
                color: white;
                padding: 0 20/75rem;
                height: 40/75rem;
                line-height: 40/75rem;
                background: url("../assets/img/genpaiBak.png");
                background-position: center;
              }
            }
          }

          h1 {
            height: 65/75rem;
          }
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
        }
      }

    }
  }

</style>
