<template>
  <div class="time" v-if="showOverTime">
    <div class="price">
      当前价格：￥17890
    </div>
    <div class="time-right">
      <div class="time-right-header">
        距离结束还剩
      </div>
      <div class="time-right-bottom">

      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions,mapMutations} from 'vuex'
  export default {
    props: {
      hh: Number,
      mm: Number,
      ss: Number,
    },
    data () {
      return {}
    },
    computed: {
      ...mapGetters([
        'showOverTime'
      ])
    },
    methods: {
      fetchData () {
      },
    },
    components: {
    }
  }
</script>

<style scoped lang='less'>
  .time {
    width: 100%;
    box-sizing: border-box;
    padding-left: 20/75rem;
    height: 80/75rem;
    background: -webkit-linear-gradient(left, #f30670, #e60012); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #f30670, #e60012); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #f30670, #e60012); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #f30670, #e60012); /* 标准的语法 */
    overflow: hidden;
    .price {
      float: left;
      font-size: 18/75rem;
      line-height: 80/75rem;
      color: white;
    }
    .time-right {
      float: right;
      width: 200/75rem;
      height: 100%;
      background: #fee1c7;
      .time-right-header {
        color: #f30670;
        text-align: center;
        font-size: 12/75rem;
      }
    }
  }
</style>
