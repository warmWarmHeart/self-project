<template>
  <div class="good-comment-wrapper" v-show="$store.state.goodDetails.type !== 4">
    <div class="title">
      <div class="title-left">评论</div>
      <div class="title-right">还有{{commentList.length}}条评论</div>
    </div>
    <ul class="content">
      <li class="content-item" v-for="item in commentList">
        <div class="item-img">
          <img src="../../../../assets/img/taojian.png" alt="">
        </div>
        <div class="item-info">
          <span class="name">Jimmy</span>
          <span class="time">{{item.createtime}}</span>
          <span class="info">{{item.content}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import {getTime} from '@/utils/utils'
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
        'showOverTime',
        'commentList'
      ])
    },
    methods: {
      fetchData() {
      },
      doTime (num) {
        getTime(num)
      }
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
