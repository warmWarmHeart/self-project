<template>
  <div class="pao-info-wrapper">
    <div class="title">
      <span class="tag">
        竞拍中
      </span>
      <span class="name">
        795 LIGHT PARIS-MODENA
      </span>
    </div>
    <div class="time">
      竞拍时间：8月20日 9:00—8月21日20:00
    </div>
    <div class="people">
      <span class="look">围观203</span>
      <span class="doing">参与108人</span>
    </div>
    <div class="attach">
      <span class="qi"><i>起</i>￥1000元</span>
      <span class="qi"><i>加</i>￥200元</span>
      <span class="qi"><i>保</i>￥0元</span>
      <span class="qi"><i>延</i>5分钟</span>
    </div>
    <div class="button-wrapper">
      <x-button type="primary" style="font-style:30/75rem">出价</x-button>
    </div>
  </div>
</template>

<script>
  import {XButton} from 'vux'

  export default {
    props: {},
    data() {
      return {}
    },
    computed: {},
    methods: {
      fetchData() {
      },
    },
    components: {
      XButton
    }
  }
</script>

<style scoped lang='less'>
  .pao-info-wrapper {
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
        background: url("../../../assets/img/xin.png") no-repeat 0 center;
        background-size: 29/75rem 27/75rem;
        padding: 4/75rem 8/75rem 4/75rem 40/75rem;
        font-size: 20/75rem;
        border: 1px solid #ef0012;
        border-radius: 3px;
        color: #ef0012;
      }
      .doing {
        float: left;
        background: url("../../../assets/img/huangguan.png") no-repeat 0 center;
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
          line-height: 50/75rem;
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
  }
</style>
