<template>
  <div class="order-wrapper">
    <div class="order-content">
      <ul class="content">
        <li class="content-item">
          <div class="good-img">
            <img src="../../../../assets/img/zixingche.png" alt="">
          </div>
          <div class="good-info">
            <div class="good-title">
              描述与实物相符：
            </div>
            <div class="good-num">
              <yd-rate slot="left" v-model="conformToEntity" size="18px"></yd-rate>
            </div>

          </div>
        </li>
      </ul>

      <div class="comment-text">
        <yd-textarea slot="right" v-model="model.content" placeholder="分享您的购物心得" maxlength="100"></yd-textarea>
      </div>
      <div class="upload-img">
        <div class="icon"></div>
        <ul class="img-list" >
          <li class="img-item" v-for="item in uploadImgList">
            <img :src="item.src" alt="">
          </li>
        </ul>
      </div>
      <div class="logistics-comment">
        <div class="top">
          物流评价
        </div>
        <div class="bottom">
          <ul class="list">
            <li class="item">
              <div class="left">
                服务评价
              </div>
              <div class="right">
                <yd-rate slot="left" v-model="model.serviceComment" size="18px"></yd-rate>
              </div>
            </li>
            <li class="item">
              <div class="left">
                物流评价
              </div>
              <div class="right">
                <yd-rate slot="left" v-model="model.logisticsComment" size="18px"></yd-rate>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="order-footer">
      <div class="footer">
        <div class="submit-btn">
          <x-button mini :gradients="['#FF5E3A', '#FF9500']">提交评价</x-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Group, Cell, XButton} from 'vux'
  import Exif from 'exif-js'

  export default {
    data() {
      return {
        active: 0,
        conformToEntity: 0,
        uploadImgList: [],
        model: {
          content: '',
          serviceComment: 0,
          logisticsComment: 0,
        },
        activeName: 'recommend'
      }
    },
    computed: {},
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.active = Number(to.query['active'])
        vm.$store.commit('SET_HEADER_TITLE', '订单详情')
        vm.$store.commit('TOGGLE_SHOW_FOOT_BAR', false)
        vm.fetchData()
      })
    },
    methods: {
      fetchData() {
      },
      goShippingAddress() {
        this.$router.push({path: '/shopping-cart/shipping-address', query: {searchName: this.searchData}})
      }
    },
    components: {
      Cell,
      Group,
      XButton
    }
  }
</script>

<style scoped lang='less'>
  .order-wrapper {
    padding-top: 90/75rem;
    .order-content {
      .content {
        padding: 0 20/75rem;
        background: white;
        margin-top: 10/75rem;
        .content-item {
          overflow: hidden;
          background: #fff;
          padding: 20/75rem 0;
          border-bottom: 1px solid #dcdcdc;
          .good-img {
            float: left;
            width: 2rem;
            height: 120/75rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .good-info {
            float: left;
            width: 550/75rem;
            padding-left: 20/75rem;
            .good-title {
              font-size: 30/75rem;
              color: #666666;

            }
            .good-num {
              font-size: 24/75rem;
              color: #999;
              .good-price {
                float: right;
                font-size: 26/75rem;
                color: #ef0012;
              }
            }
          }
        }

      }
      .comment-text {
        padding: 20/75rem;
        background: white;
        margin-top: 10/75rem;
      }
      .upload-img {
        background: white;
        margin-top: 5/75rem;
        padding: 20/75rem;
        .icon {
          width: 44/75rem;
          height: 34/75rem;
          background: url("../../../../assets/img/xiangji.png") no-repeat;
          background-size:  44/75rem 34/75rem;
        }
      }
      .logistics-comment {
        padding: 20/75rem;
        margin-top: 20/75rem;
        background: white;
        .top {
          background: url("../../../../assets/img/kache.png") no-repeat 0 center ;
          background-size: 33/75rem 23/75rem;
          line-height: 50/75rem;
          text-indent: 40/75rem;
          font-size: 30/75rem;
          margin-bottom: 5/75rem;
        }
        .bottom{
          .list {
            .item {
              overflow: hidden;
              font-size: 30/75rem;
              .left {
                float: left;
                text-indent: 70/75rem;

              }
              .right {
                float: right;
              }
            }
          }
        }
      }
    }
    .order-footer {
      position: fixed;
      bottom: 0;
      height: 100/75rem;
      width: 100%;
      background: white;
      font-size: 30/75rem;
      .footer {
        width: 100%;
        height: 100%;
        display: flex;
        .price {
          color: #ef0012;
          text-align: right;
          line-height: 100/75rem;
          flex-grow: 2;
        }
        .submit-btn {
          flex-grow: 1;
          color: white;
          text-align: right;
          padding: 15/75rem 20/75rem;
        }
      }
    }
  }
</style>
