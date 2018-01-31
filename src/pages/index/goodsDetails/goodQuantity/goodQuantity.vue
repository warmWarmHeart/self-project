<template>
  <div class="good-quantity-wrapper" v-show="$store.state.goodDetails.type !== 4">
    <span class="left">数量</span>
    <yd-spinner class="right" width="140px" height="30px" v-model="quantity"></yd-spinner>
  </div>

</template>

<script>
  import {mapGetters,mapActions,mapMutations} from 'vuex'
  import {XNumber,Group} from 'vux'
  export default {
    props: {

    },
    data () {
      return {
        quantity: 1
      }
    },
    computed: {
      ...mapGetters([
        'showOverTime'
      ])
    },
    methods: {
      ...mapMutations(
        [
          'SET_GOOD_QUANTITY'
        ]
      ),
      fetchData () {
      },
    },
    watch: {
      quantity (val) {
        this.SET_GOOD_QUANTITY(val)
      }
    },
    components: {
      XNumber,
      Group
    }
  }
</script>

<style scoped lang='less'>
.good-quantity-wrapper {
  width: 100%;
  padding: 20/75rem;
  background: #fff;
  overflow: hidden;
  .left {
    font-size: 36/75rem;
    vertical-align: middle;
    float: left;
  }
  .right {
    vertical-align: middle;
    float: right;
  }
}
</style>
