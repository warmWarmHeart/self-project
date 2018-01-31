<template>
  <div class="solution-wrapper">
   {{solution}}
  </div>

</template>

<script>

  import {XButton,Swiper, XDialog, TransferDomDirective as TransferDom, Tab, TabItem, XInput} from 'vux'
  import {getTime} from "@/utils/utils"
  import config from "@/utils/config"

  export default {
    directives: {
      TransferDom
    },
    data () {
      return {
        id: 1,
        solution: '暂无答案，请联系客服',

      }
    },
    components: {
      XButton,Swiper, XDialog, Tab, TabItem, XInput
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.id = to.query.id
        vm.fetchData(to.query.id)
        vm.$store.commit('SET_HEADER_TITLE', '查看解决方案')
        vm.$store.commit('TOGGLE_SHOW_FOOT_BAR', false)
      })
    },
    methods: {
      fetchData (id) {
        let url = `${config.serviceSolution}?id=${id}`
        this.$http.get(url).then(res => {
          if (res.status === 200) {
            this.solution = res.body.data.answer
          }
        })
      },
    }
  }
</script>

<style scoped lang='less'>
  .solution-wrapper {
    padding: 120/75rem 40/75rem 120/75rem ;
    font-size: 30/75rem;
  }
</style>

