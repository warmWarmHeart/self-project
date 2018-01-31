<template>
  <div class="good-comment-wrapper">
    <div class="title">
      <div class="title-left">评论</div>
      <div class="title-right">还有44条评论</div>
    </div>
    <ul class="content">
      <li class="content-item">
        <div class="item-img">
          <img src="../../../assets/img/taojian.png" alt="">
        </div>
        <div class="item-info">
          <span class="name">Jimmy</span>
          <span class="time">2016.02.03  15:23</span>
          <span class="info">建设大街奋笔疾书的回复上岛咖啡你是看见对方黑客技术大富科技山 东矿机废话少说尽快恢复健康闪电借款繁花似锦客户 </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import {XNumber, Group} from 'vux'

  export default {
    props: {},
    data() {
      return {
        quantity: 0,

      }
    },
    computed: {
      ...mapGetters([
        'showOverTime'
      ])
    },
    methods: {
      fetchData() {
      },
    },
    components: {
      XNumber,
      Group
    }
  }
</script>

<style scoped lang='less'>
  .good-comment-wrapper {
    .title {
      overflow: hidden;
      line-height: 80/75rem;
      padding: 0 20/75rem;
      .title-left {
        float: left;
        color: #666;
        font-size: 22/75rem;
      }
      .title-right {
        float: right;
        color: #666;
        font-size: 22/75rem;
      }
    }
    .content-item {
      overflow: hidden;
      padding: 0 20/75rem;
      border-top: 1px solid #999;
      .item-img {
        float: left;
        width: 90/75rem;
        padding-top: 20/75rem;
        img {
          width: 90/75rem;
          height: 90/75rem;
          border-radius: 50%;
        }
      }
      .item-info {
        float: left;
        padding: 20/75rem;
        width: 600/75rem;
        box-sizing: border-box;
        .name {
          font-size: 20/75rem;
          color: #ff8504;
          display: block;
        }
        .time {
          display: block;
          font-size: 20/75rem;

          color: #999;
          line-height: 31/75rem;
        }
        .info {
          display: block;
          width: 600/75rem;
          font-size: 20/75rem;
          color: #999;
          line-height: 31/75rem;
        }
      }
    }
  }
</style>
