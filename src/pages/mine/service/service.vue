<template>
  <div class="service-wrapper">
    <yd-cell-group>
      <yd-cell-item v-for="item in serviceData" :key="item.id" arrow @click.native="goSolution(item.id)">
        <span slot="left">{{item.title}}</span>
      </yd-cell-item>
    </yd-cell-group>
    <div v-transfer-dom class="dialog-demo">
      <x-dialog v-model="showServiceBox" :hide-on-blur="true">
        <div class="jingpai-header"
             style="position: relative;background: #ef0012;font-size: 13px;text-align: center;padding:5px;color: white;border-radius: 5px 5px 0 0;">
          客服联系方式
          <span class="vux-close"
                @click="show=false"></span>
        </div>
        <div class="img-box" style="font-size: 12px; padding: 10px">
          <yd-cell-group v-for="item in connectionData" :key="item.clientName">
            <yd-cell-item>
              <span slot="left">客服名</span>
              <span slot="right">{{item.clientName}}</span>
            </yd-cell-item>
            <yd-cell-item>
              <span slot="left">固定电话</span>
              <span slot="right">{{item.clientName}}</span>
            </yd-cell-item>
            <yd-cell-item>
              <span slot="left">微信号</span>
              <span slot="right">{{item.wechatAccount}}</span>
            </yd-cell-item>
            <yd-cell-item>
              <span slot="left">QQ号</span>
              <span slot="right">{{item.qqAccount}}</span>
            </yd-cell-item>
            <yd-cell-item>
              <span slot="left">邮箱</span>
              <span slot="right">{{item.email}}</span>
            </yd-cell-item>
          </yd-cell-group>
        </div>
      </x-dialog>
    </div>
    <div class="service-footer">
      <div class="footer-content">
        <x-button type="primary" @click.native="showConnection">联系客服</x-button>
      </div>

    </div>
  </div>
</template>

<script>

  import {XButton, Swiper, XDialog, TransferDomDirective as TransferDom, Tab, TabItem, XInput} from 'vux'
  import {getTime} from "@/utils/utils"
  import config from "@/utils/config"

  export default {
    directives: {
      TransferDom
    },
    data() {
      return {
        showServiceBox: false,
        nowTime: '',
        chatList: [
          {
            auth: 0,
            name: 'Jimmy-客服',
            content: '请问有什么可以帮到您，输入后敬请回复，我们的工作人员会尽快给您答复'
          },
          {
            auth: 1,
            name: '我',
            content: '我的车什么时候可以到啊'
          },
        ],
        connectionData: [{
          clientName: "总客服",
          telphone: "",
          qqAccount: "",
          wechatAccount: "",
          email: "11@qq.com",
        }],
        serviceData: []
      }
    },
    components: {
      XButton, Swiper, XDialog, Tab, TabItem, XInput
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.nowTime = getTime(new Date())
        vm.fetchData()
        vm.$store.commit('SET_HEADER_TITLE', '联系客服')
        vm.$store.commit('TOGGLE_SHOW_FOOT_BAR', false)
      })
    },
    methods: {
      fetchData() {
        let url = `${config.serviceList}?merchantId=-1&currentPage=1`
        this.$http.get(url).then(res => {
          if (res.status === 200) {
            this.serviceData = res.body.data
          }
        })
      },
      showConnection() {
        this.$http.get(`${config.serviceConnection}?currentPage=${1}&merchantId=-1`).then(res => {
          if (res.status === 200) {
            this.connectionData = res.body.data
            this.showServiceBox = true
          }
        })
      },
      goSolution(id) {
        this.$router.push({path: '/mine/service/solution', query: {id: id}})
      },
      activeChange(active) {
        console.log(active)
      }
    }
  }
</script>

<style scoped lang='less'>
  .service-wrapper {
    padding: 90/75rem 0 120/75rem;
    font-size: 30/75rem;
    .time {
      text-align: center;
      line-height: 100/75rem;
    }
    .service-chat-list {
      padding: 20/75rem;
      .service-chat-item {
        .head-portrait {
          width: 90/75rem;
          height: 90/75rem;
          border-radius: 50%;
          img {
            width: 90/75rem;
            height: 90/75rem;
          }

        }
        .chat-details {
          .top {
            padding: 0 20/75rem;
          }
          .bottom {
            padding: 0 20/75rem;
            position: relative;
            .bottom-badge {
              position: absolute;
              width: 0;
              height: 0;
            }
            .bottom-content {
              display: inline-block;
              max-width: 400/75rem;
              padding: 15/75rem 20/75rem;
              border-radius: 20/75rem;
            }
          }
        }
      }
      .service-chat-item:after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        clear: both;
      }
      .left {
        float: left;
        .auth-name {
          text-align: left;
        }
        .bottom {
          .bottom-badge {
            left: 0;
            border-bottom: 20/75rem white solid;
            border-left: 40/75rem transparent solid;
            border-right: 40/75rem transparent solid;
          }
          .bottom-content {
            background: white;
            color: #666;
          }
        }

      }
      .right {
        float: right;
        .auth-name {
          text-align: right;
        }
        .bottom {
          .bottom-badge {
            right: 0;
            border-bottom: 20/75rem #98e165 solid;
            border-left: 40/75rem transparent solid;
            border-right: 40/75rem transparent solid;
          }
          .bottom-content {
            background: #98e165;
            color: #333;
          }
        }
      }
    }
    .service-footer {
      position: fixed;
      height: 120/75rem;
      bottom: 0;
      background: white;
      width: 100%;
      .footer-content {
        padding: 10/75rem 20/75rem;
        box-sizing: border-box;
        display: flex;
      }
      .input {
        flex: 3;
        padding-left: 20/75rem;
      }
      .submit-button {
        line-height: 90/75rem;
        text-align: right;
        flex: 1;
        padding-right: 20/75rem;
      }
    }
  }
</style>

