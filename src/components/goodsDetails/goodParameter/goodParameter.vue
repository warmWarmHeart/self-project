<template>
  <div class="good-parameter-wrapper" v-if="showGoodParameter">
    <div class="title">
      产品参数
    </div>
    <ul class="parameter-box">
      <li class="parameter-item">
        <span class="item-label">变速选择:</span>
        <span :class="['item-one', 'item-active']">前变速</span>
        <span :class="['item-two', {}]">前变速</span>
      </li>
      <li class="parameter-item">
        <span class="item-label">变速选择:</span>
        <span :class="['item-one', 'item-active']">前变速</span>
        <span :class="['item-two', {}]">前变速</span>
      </li>
      <li class="parameter-item">
        <span class="item-label">颜色:</span>
        <span :class="['item-one', 'item-active']">白色</span>
        <span :class="['item-two', {}]">黑色</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    props: {},
    data() {
      return {}
    },
    computed: {
      ...mapGetters([
        'showGoodParameter'
      ])
    },
    methods: {
      fetchData() {
      },
    },
    components: {}
  }
</script>

<style scoped lang='less'>
  .good-parameter-wrapper {
    width: 100%;
    box-sizing: border-box;
    padding:0 20/75rem;
    height: 300/75rem;
    overflow: hidden;
    .title {
      line-height: 60/75rem;
      font-size: 24/75rem;
      color: #666;
      border-bottom: 1px solid #dcdcdc;
    }
    .parameter-box {
      padding-top: 25/75rem;
      .parameter-item {
        height: 70/75rem;
        overflow: hidden;
        .item-label {
          float: left;
          width: 120/75rem;
          text-align: right;
          font-size: 22/75rem;
          color: #666;
        }
        .item-one {
          float: left;
          width: 100/75rem;
          height: 50/75rem;
          margin-left: 20/75rem;
          text-align: center;
          line-height: 50/75rem;
          border: 1px solid #666;
          border-radius: 2px;
          font-size: 22/75rem;
          color: #666;
        }
        .item-two {
          float: left;
          border-radius: 2px;
          width: 100/75rem;
          height: 50/75rem;
          margin-left: 20/75rem;
          text-align: center;
          line-height: 50/75rem;
          border: 1px solid #666;
          font-size: 22/75rem;
          color: #666;
        }
        .item-active {
          border: 1px solid #e60012;
          color: #e60012;
        }
      }

    }
  }
</style>
