<template>
  <div class="groupon" v-if="$store.state.goodDetails.type === 2">
    <div class="groupon-top">
      <ul class="groupon-price">
        <li class="item" v-for="item in list" :style="{'left': left(item.num)+'rem'}">
          <span class="man">满<i>{{item.num}}</i>人</span>
          <div class="price">
            ￥{{item.price}}
            <span class="circle">

            </span>
          </div>
        </li>
      </ul>
      <div class="progress-wrapper">
        <span class="progress" :style="{'width': num/max*10 + 'rem'}"></span>
        <span class="num"  :style="{'left': num/max*10-0.8 + 'rem'}">
          {{num}}
        </span>
      </div>
    </div>
    <div class="groupon-bottom">
      <div class="left" @click="show=true">
        <span class="icon"
              style="color: #f98a1c"></span>
        <span class="">优惠说明 </span>
      </div>
      <div class="middle">
        <span class="icon"
              style="color: #f98a1c"></span>
        <span>3档当前优惠</span>
      </div>
      <div class="right">
        <span class="icon"
              style="color: #f98a1c"></span>
        <span><i style="color: #ef0012">1023</i>当前参团人数</span>
      </div>
    </div>
    <div v-transfer-dom class="dialog-demo">
      <x-dialog v-model="show" :hide-on-blur="true">
        <div class="jingpai-header"
             style="position: relative;background: #ef0012;font-size: 13px;text-align: center;padding:5px;color: white;border-radius: 5px 5px 0 0;">
          优惠说明
          <span class="vux-close"
                @click="show=false"></span>
        </div>
        <div class="img-box" style="font-size: 12px; padding: 10px" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          AeneanLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        </div>
      </x-dialog>
    </div>
  </div>
</template>
<script>
  import { XDialog, XButton, Group, XSwitch, TransferDomDirective as TransferDom } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    scrollBehavior(to, from, savedPosition) {
      return {x: 0, y: 0}
    },
    data () {
      return {
        show: false,
        list: [
          {
            num: 40,
            price: 100,
          },
          {
            num: 80,
            price: 90
          },
          {
            num: 160,
            price: 70
          },
          {
            num: 200,
            price: 50
          },
        ],
        num: 150,
        max: 200
      }
    },
    components: {
      XDialog,
      XButton,
      Group,
      XSwitch,
    },
    methods: {
      left (num) {
        return num/this.max*9-1 <=0 ? 0 : num/this.max*9-1
      }
    }
  }
</script>

<style lang="less" scoped>
  .groupon {
    .groupon-top {
      position: relative;
      padding-bottom: 100/75rem;
      margin-bottom: 10/75rem;
      height: 120/75rem;
      .groupon-price {
        width: 10rem;
        box-sizing: border-box;
        padding: 20/75rem;
        background: white;
        .item {
          font-size: 20/75rem;
          color: #999;
          position: absolute;
          .man {
            display: block;
            font-size: 18/75rem;
            i {
              font-size: 20/75rem;
            }
          }
          .price {
            position: relative;
            border-right: 1px dashed #ef0012;
            .circle {
              position: absolute;
              width: 10/75rem;
              height: 10/75rem;
              border: 1px solid #ef0012;
              border-radius: 50%;
              right: -6/75rem;
              top: -6/75rem;
            }
          }
        }
      }
      .progress-wrapper {
        border: 1px solid #dcdcdc;
        width: 710/75rem;
        margin-left: 20/75rem;
        margin-top: 0.8rem;
        border-radius: 11/75rem;
        height: 20/75rem;
        position: relative;
        .progress {
          display: block;
          height: 18/75rem;
          border-radius:  11/75rem;
          background: -webkit-linear-gradient(left, #fc3b3a, #f98d1b); /* Safari 5.1 - 6.0 */
          background: -o-linear-gradient(right, #fc3b3a, #f98d1b); /* Opera 11.1 - 12.0 */
          background: -moz-linear-gradient(right, #fc3b3a, #f98d1b); /* Firefox 3.6 - 15 */
          background: linear-gradient(to right, #fc3b3a, #f98d1b); /* 标准的语法 */
        }
        .num {
          border: 1px solid #ef0012;
          border-radius: 30/75rem;
          position: absolute;
          top: -10/75rem;
          padding: 0 10/75rem;
          font-size: 20/75rem;
          background: white;
        }
      }
    }
    .groupon-bottom {
      background: #d2fefe;
      height: 60/75rem;
      padding: 40/75em 0;
      width: 100%;
      font-size: 18/75rem;
      margin-top: 40/75rem;
      display: flex;
      .icon {
        display: inline-block;
        width: 24/75rem;
        height: 24/75rem;
      }
      .left {
        flex-grow: 3;
        line-height: 30/75rem;
        text-align: right;
        padding-right: 20/75rem;
        .icon {
          line-height: 30/75rem;
          background: url("../../../../assets/img/youhuism.png") no-repeat;
          background-size: 24/75rem;
        }
      }
      .middle {
        flex-grow: 2;
        border-left: 1px solid #dcdcdc;
        border-right: 1px solid #dcdcdc;
        line-height: 30/75rem;
        text-align: center;
        .icon {
          line-height: 30/75rem;
          background: url("../../../../assets/img/wujiaoxin.png") no-repeat;
          background-size: 24/75rem;
        }
      }
      .right {
        text-indent: 20/75rem;
        flex-grow: 3;
        line-height: 30/75rem;
        text-align: left;
        .icon {
          line-height: 30/75rem;
          background: url("../../../../assets/img/rentou.png") no-repeat;
          background-size: 24/75rem;
        }
      }
    }
    .dialog-demo {
      .jingpai-header {
        background: #ef0012;
        font-size: 20/75rem;
        text-align: center;
        color: white;
        border-radius: 10/75rem 10/75rem 0 0;
      }
      .img-box {
        font-size: 20/75rem;
        color: #999;
        height: 350px;
      }

    }

  }  .vux-close {
       background: url('../../../../assets/img/closeicon.png') no-repeat;
       background-size: 20px;
       width:20px;
       height:20px;

     }
</style>
