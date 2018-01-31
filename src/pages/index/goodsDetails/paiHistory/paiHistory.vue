<template>
  <div class="pao-history-wrapper"  v-if="$store.state.goodDetails.type === 4">
    <tab>
      <tab-item selected @on-item-click="onItemClick">出价历史</tab-item>
      <tab-item @on-item-click="onItemClick">评论</tab-item>
    </tab>
    <div class="content">
      <pay-history></pay-history>
      <pai-comment></pai-comment>
    </div>
  </div>
</template>

<script>
  import {Tab, TabItem} from 'vux'
  import PayHistory from './payHistory/payHistory.vue'
  import PaiComment from './paiComment/paiComment.vue'

  export default {
    props: {},
    data() {
      return {
        active: 'history'
      }
    },
    computed: {},
    methods: {
      fetchData() {
      },
      onItemClick (index) {
        this.$store.commit('SET_PAI_HISTORY_ACTIVE', index)
      }
    },
    components: {
      Tab,
      TabItem,
      PayHistory,
      PaiComment
    }
  }
</script>

<style scoped lang='less'>
  .pao-history-wrapper {
    margin-top: 120/75rem;
  }
</style>
