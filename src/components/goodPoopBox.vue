<template>
  <ul class="good-box">
    <template v-for="item in recommendTableData">
      <li class="good-box-wrapper">
        <div class="good-box-header">
          <img :src="'http://47.104.10.147/image/' + item.merchantId + '/' + item.themeImage" alt="">
          <span class="buy-icon">{{item.type}}</span>
        </div>
        <div class="good-box-bottom">
          <div class="good-box-info">
            <ul>
              <li class="good-info-title">
                {{item.productName}}
              </li>
              <li class="good-price">
                <span class="price-now">
                  <i class="price-now1">￥</i>
                  <i class="price-now2">2299</i>
                  <i class="price-now3">起</i>
                </span>
                <span class="price-before">￥5920</span>
              </li>
              <li class="good-do">
                <span>团购</span>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </template>

  </ul>

</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    props: {},
    data () {
      return {}
    },
    computed: {
      ...mapGetters([
        'recommendTableData'
      ])
    }
  }
</script>

<style scoped lang='less'>
  .good-box {
    padding: 20/75rem;
    overflow: hidden;
    .good-box-wrapper {
      float: left;
      margin-bottom: 20/75rem;
      width: 345/75rem;
      height: 380/75rem;
      .good-box-header {
        width: 345/75rem;
        height: 270/75rem;
        background-color: #ffffff;
        position: relative;
        img {
          width: 270/75rem;
          height: 270/75rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
        }
        .buy-icon {
          position: absolute;
          left: 0;
          top: 0;
          font-size: 20/75rem;
          text-align: center;
          width: 65/75rem;
          height: 38/75rem;
          line-height: 38/75rem;
          color: #fff;
          background-color: #e60012;
        }
      }
      .good-box-bottom {
        width: 345/75rem;
        height: 110/75rem;
        box-sizing: border-box;
        padding: 12/75rem 38/75rem 12/75rem 26/75rem;
        background-color: #fff;
        color: #eeeeee;
        font-size: 22/75rem;
        .good-box-info {
          .good-price {
            overflow: hidden;
            .price-now {
              float: left;
              width: 100%;
              .price-now1 {
                  color: #e60012;
              }
              .price-now2 {
                  font-size: 25/75rem;
                  color: #e60012;
              }
              .price-now3 {
                  color: #999;
              }
            }

            .price-before {
              float: right;
              color: #999;
              font-size: 22/75rem;
              text-decoration: line-through;
            }
          }
          .good-info-title {
            color: #333;
            text-overflow:ellipsis;
            font-size: 20/75rem;
            line-height: 31/75rem;

          }
          .good-do {
            span {
              display: inline-block;
              padding: 4/75rem 14/75rem;
              border: 1px solid #e60012;
              border-radius: 2px;
              font-size: 18/75rem;
              color: #e60012;
            }
          }
        }
      }

    }
    .good-box-wrapper:nth-child(even){
      margin-left: 20/75rem;
    }
  }

</style>
