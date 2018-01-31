<template>
  <div class="terrace-wrapper">
    terrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapperterrace-wrapper
  </div>
</template>

<script>
  import { Tab, TabItem,} from 'vux'
  export default {
    data () {
      return {

      }
    },
    components: {
      Tab, TabItem,
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.$store.commit('SET_HEADER_TITLE', '平台介绍')
      })
    },
    methods: {
      activeChange (active) {
        console.log(active)
      }
    }
  }
</script>

<style scoped lang='less'>
.terrace-wrapper {
  width: 100%;
  padding: 2rem 20/75rem;
  font-size: 24/75rem;
  color: #666;
  box-sizing: border-box;
}
</style>
