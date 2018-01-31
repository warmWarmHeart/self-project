<template>
  <div class="my-action-wrapper">
    <tab active-color="#e60012"
         bar-active-color="#e60012"

    >
      <tab-item selected @on-item-click="activeChange('1')">竞拍中</tab-item>
      <tab-item @on-item-click="activeChange('2')">以往竞拍</tab-item>
    </tab>
    <div class="content-wrapper">
      <my-auction-list></my-auction-list>
    </div>
  </div>
</template>

<script>
  import { Tab, TabItem,} from 'vux'
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import MyAuctionList from '../../../components/myAuctionList.vue'
  export default {
    data () {
      return {

      }
    },
    components: {
      Tab, TabItem, MyAuctionList
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.activeChange ('1')
        vm.$store.commit('SET_HEADER_TITLE', '我的竞拍')
      })
    },
    methods: {
      ...mapActions([
        'getMyAuction',
      ]),
      activeChange (active) {
        this.getMyAuction({status: active})
      }
    }
  }
</script>

<style scoped lang='less'>
  .my-action-wrapper {
    padding-top: 1.2rem;
  }
</style>
