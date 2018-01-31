<template>
  <div class="time" v-if="$store.state.goodDetails.type !== 1">
    <div class="price">
      当前价格：￥{{$store.state.goodDetails.salePrice}}
    </div>
    <div class="time-right">
      <div class="time-right-header" v-show="getOverTime()!=='已结束'">
        距离结束还剩
      </div>
      <div class="time-right-bottom">
        <yd-countdown slot="right" :time="getOverTime()">
          <em>{%h1}</em><em>{%h2}</em>小时
          <em>{%m1}</em><em>{%m2}</em>时
          <em>{%s1}</em><em>{%s2}</em>秒
        </yd-countdown>
        <!--<clocker :time="getOverTime" style="margin: 0 auto">-->
          <!--<span class="day">%H</span>时-->
          <!--<span class="day">%M</span>分-->
          <!--<span class="day">%S</span>秒-->
        <!--</clocker>-->
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions,mapMutations} from 'vuex'
  import {Clocker} from 'vux'
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
        'showOverTime',
        'goodDetails'
      ]),

    },
    methods: {
      fetchData () {
        console.log(this.$store.state.goodDetails)
      },
      getOverTime () {
        let str = new Date(this.$store.state.goodDetails.seckillActualEndTime)
        let str2 = str.toLocaleDateString()
        let arr = [str.getHours(), str.getMinutes(), str.getSeconds()]
        return str2 + ' ' + arr.join(':')
      }
    },
    components: {
      Clocker
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
    /*margin-top: -15px;*/
    .price {
      float: left;
      font-size: 30/75rem;
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
      .time-right-bottom {
        font-size: 18/75rem;
        text-align: center;
        .day {
          background-color:#000;
          color:#fff;
          text-align:center;
          font-size: 18/75rem;
          display:inline-block;
          padding:0 3px;
          border-radius:3px;
        }
      }

    }
  }
</style>
