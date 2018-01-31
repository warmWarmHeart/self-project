<template>
  <div class="message-wrapper">
    <ul class="message-box">
      <li class="message-item">
        <div class="item-header">
          09-23  13:45
        </div>
        <div class="item-content">
          <div class="item-content-title">
            商品信息提示
          </div>
          <div class="item-content-text">
            您的商品已发货，运单编号：9827393081
          </div>
        </div>
      </li>
      <li class="message-item">
        <div class="item-header">
          09-23  13:45
        </div>
        <div class="item-content">
          <div class="item-content-title">
            商品信息提示
          </div>
          <div class="item-content-text">
            您的商品已发货，运单编号：9827393081
          </div>
        </div>
      </li>
      <li class="message-item">
        <div class="item-header">
          09-23  13:45
        </div>
        <div class="item-content">
          <div class="item-content-title">
            商品信息提示
          </div>
          <div class="item-content-text">
            您的商品已发货，运单编号：9827393081
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {XInput, XButton,Checklist, Group, Cell, CellBox} from 'vux'
  export default {
    data () {
      return {
      }
    },
    components: {
      XInput,
      XButton,
      Group,
      Cell,
      CellBox,
      Checklist
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.$store.commit('SET_HEADER_TITLE', '信息通知')
      })
    },
    methods: {
      changeAddress () {

      }
    }
  }
</script>

<style scoped lang='less'>
  .message-wrapper {
    padding: 2rem 20/75rem;
    .message-item {
      padding-top: 20/75rem;
      .item-header {
        text-align: center;
        height: 60/75rem;
        line-height: 60/75rem;
        color: #999999;
        font-size: 24/75rem;
      }
      .item-content {
        padding: 30/75rem;
        background: #ffffff;
        border-radius: 5px;

        .item-content-title {
          font-size: 26/75rem;
          color: #333;
        }
        .item-content-text {
          font-size: 24/75rem;
          height: 60/75rem;
          line-height: 60/75rem;
          color: #999;
        }
      }
    }
  }
</style>
