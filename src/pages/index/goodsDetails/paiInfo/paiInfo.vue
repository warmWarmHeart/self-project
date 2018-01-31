<template>
  <div class="pao-info-wrapper" ref="paiInfo" v-if="$store.state.goodDetails.type === 4">
    <div class="title">
      <span class="tag">
        竞拍中
      </span>
      <span class="name">
        {{$store.state.goodDetails.productName}}
      </span>
    </div>
    <div class="time">
      竞拍时间：{{timeInterval}}
      <!--竞拍时间：8月20日 9:00—8月21日20:00-->
    </div>
    <div class="people">
      <span class="look">围观{{$store.state.goodDetails.viewCount}}</span>
      <span class="doing">参与{{$store.state.goodDetails.joinCount}}人</span>
    </div>
    <div class="attach">
      <span class="qi"><i>起</i>￥{{$store.state.goodDetails.topPrice}}元</span>
      <span class="qi"><i>加</i>￥{{$store.state.goodDetails.fareIncrease}}元</span>
      <span class="qi"><i>保</i>￥0元</span>
      <!--<span class="qi"><i>延</i>5分钟</span>-->
    </div>
    <div class="button-wrapper">
      <x-button type="primary"  @click.native="goPay">出价</x-button>
    </div>

    <yd-popup v-model="show7" position="bottom" height="6rem">
      <div class="pop-up-header">
        当前最高价格：{{$store.state.goodDetails.topPrice}}元
      </div>
      <div class="pop-up-warning">
        竞价失败 重新出价
      </div>
      <div class="pop-up-number">
        <div class="left">
          <div class="left-in">
            <span @click="changePrice(false)">-</span>
          </div>

        </div>
        <div class="middle">
          <div class="middle-in">
            {{myPrice}}
          </div>
        </div>
        <div class="right">
          <div class="right-in">
            <span @click="changePrice(true)">+</span>
          </div>
        </div>
      </div>
      <div class="pop-up-button">
        <x-button type="primary" @click.native="addPrice">出价</x-button>
      </div>
    </yd-popup>
 <!--   <div v-transfer-dom>
      <popup v-model="show7" style="height:270px"  is-transparent>
        <div style="width: 95%;background-color:#fff;height:250px;margin:0 auto;border-radius:5px;padding-top:10px;">
          <group>
            <cell title="最高价格" >
              <span style="color: #ef0012" slot="default">
                ￥{{$store.state.goodDetails.topPrice}}
              </span>
            </cell>

            <x-input text-align="center" :value="`￥${myPrice}`" disabled></x-input>
            &lt;!&ndash;<cell title="Total" :value="`￥${myPrice}`"></cell>&ndash;&gt;
          </group>
          <div style="padding:20px 15px;">
            <x-button type="primary" @click.native="addPrice">+ 10</x-button>
            <x-button @click.native="show7 = false">取消</x-button>
          </div>
        </div>
      </popup>
    </div>-->
  </div>
</template>

<script>
  import { TransferDom, Popup, Group, Cell,XInput, XButton, XSwitch, Toast, XAddress, ChinaAddressData } from 'vux'
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import {getDay, getHour, getTimeJ} from '@/utils/utils'
  import config from '@/utils/config'
  export default {
    directives: {
      TransferDom
    },
    props: {},
    data() {
      return {
        maxPrice: 17480,
        myPrice: 17480,
        show7: false
      }
    },
    computed: {
      timeInterval () {
        let time1 = new Date(this.$store.state.goodDetails.starttime)
        let time2 = new Date(this.$store.state.goodDetails.endtime)
        return `${getTimeJ(time1)}-${getTimeJ(time2)}`

      }
    },
    methods: {
      ...mapActions([
        'getPaiHistory',
      ]),
      fetchData() {
      },
      goPay () {
        this.myPrice = this.$store.state.goodDetails.topPrice
        this.show7 = true
      },
      changePrice (bool) {
        if (bool) {
          this.myPrice += this.$store.state.goodDetails.fareIncrease
        } else {
          let num = this.myPrice - this.$store.state.goodDetails.fareIncrease
          if (num >= this.$store.state.goodDetails.topPrice) {
            this.myPrice = num
          }
        }
      },
      addPrice () {
        let url = config.addPrice
        let that = this
        let model = {
          openid: 'dsasd',
          productId: this.$store.state.goodDetails.productId,
          parentProductId: this.$store.state.goodDetails.parentProductId,
          merchantId: this.$store.state.goodDetails.merchantId,
          price: this.myPrice,
        }
        this.$http.post(url, model, {emulateJSON: true}).then(res => {
          if (res.status === 200) {
            that.show7 = false
            let obj = Object.assign({}, that.$store.state.goodDetails)
            obj.topPrice = that.myPrice
            that.$store.commit('SET_GOOD_DETAILS', obj)
            that.getPaiHistory({
              productId: that.$store.state.goodDetails.productId,
            })
          }
        })
      }
    },
    components: {
      Popup,
      Group,
      Cell,
      XSwitch,
      Toast,
      XAddress,
      XButton,
      XInput
    }
  }
</script>

<style scoped lang='less'>
  .pao-info-wrapper {
    margin-top: 20/75rem;
    height: 350/75rem;
    width: 100%;
    .title {
      width: 100%;
      overflow: hidden;
      .tag {
        float: left;
        font-size: 24/75rem;
        padding: 10/75rem 20/75rem;
        border-radius: 0 30/75rem 30/75rem 0;
        color: white;
        background: -webkit-linear-gradient(left, #fc3b3a, #f99119); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #fc3b3a, #f99119); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #fc3b3a, #f99119); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #fc3b3a, #f99119); /* 标准的语法 */
      }
      .name {
        float: left;
        font-size: 30/75rem;
        padding: 10/75rem 20/75rem;
        color: #333;
      }
    }
    .time {
      padding: 0 20/75rem;
      color: #999;
      line-height: 98/75rem;
      font-size: 30/75rem;

    }
    .people {
      overflow: hidden;
      padding: 0 20/75rem;
      .look {
        float: left;
        background: url("../../../../assets/img/xin.png") no-repeat 10/75rem 15/75rem;
        background-size: 29/75rem 27/75rem;
        padding: 4/75rem 8/75rem 4/75rem 40/75rem;
        font-size: 20/75rem;
        border: 1px solid #ef0012;
        border-radius: 3px;
        color: #ef0012;
      }
      .doing {
        float: left;
        background: url("../../../../assets/img/huangguan.png") no-repeat 10/75rem 15/75rem;
        background-size: 29/75rem 27/75rem;
        font-size: 20/75rem;
        padding: 4/75rem 8/75rem 4/75rem 40/75rem;
        border: 1px solid #ef0012;
        border-radius: 3px;
        color: #ef0012;
        margin-left: 20/75rem;

      }
    }
    .attach {
      text-align: center;
      .qi {
        color: #b5b5b5;

        font-size: 20/75rem;
        i {
          display: inline-block;
          width: 50/75rem;
          height: 50/75rem;
          line-height: 25/75rem;
          text-align: center;
          font-style: normal;
          padding: 10/75rem;
          color: white;
          background: #b5b5b5;
          border-radius: 2px;
        }
      }
    }
    .button-wrapper {
      padding: 20/75rem;
    }
    .pop-up-header {
      padding-top: .5rem;
      text-align: center;
      line-height: 1rem;
      font-size: 36/75rem;
    }
    .pop-up-warning {
      text-align: center;
      line-height: 1rem;
      color: #ef0012;
      font-size: 20/75rem;
    }
    .pop-up-number {
      display: flex;
      padding: 20/75rem 50/75rem;

      .left {
        flex: 1;
        .left-in {
          width: 100%;
          height: 100%;
          position: relative;
        }
        span {
          position: absolute;
          height: 1rem;
          width: 1rem;
          top: 0;
          right: 0;
          border-radius: 10/75rem;
          background: #1AAD19;
          text-align: center;
          line-height: 1rem;
          font-size: 36/75rem;
          font-weight: 600;
          color: white;
        }
      }
      .middle {
        flex: 2;
        padding: 0 20/75rem;
        box-sizing: border-box;
        height: 1rem;
        .middle-in {
          background: #dcdcdc;
          text-align: center;
          font-size: 36/75rem;
          line-height: 1rem;
          width: 100%;
          height: 100%;
        }
      }
      .right {
        flex: 1;
        .right-in {
          width: 100%;
          height: 100%;
          position: relative;
        }
        span {
          display: inline-block;
          position: absolute;
          top: 0;
          left: 0;
          height: 1rem;
          width: 1rem;
          border-radius: 10/75rem;
          background: #1AAD19;
          text-align: center;
          line-height: 1rem;
          font-size: 36/75rem;
          font-weight: 600;
          color: white;
        }
      }
    }
    .pop-up-button {
      padding: 20/75rem  50/75rem;
    }
  }
</style>
