<template>
  <group>
    <x-number :value="quantity" title="数量" :min="0" button-style="color:#666"></x-number>
  </group>
</template>

<script>
  import {mapGetters,mapActions,mapMutations} from 'vuex'
  import {XNumber,Group} from 'vux'
  export default {
    props: {

    },
    data () {
      return {
        quantity: 0
      }
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
      XNumber,
      Group
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
