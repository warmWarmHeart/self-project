<template>
  <div class="pao-history-wrapper">
    <tab>
      <tab-item selected @on-item-click="onItemClick">出价历史</tab-item>
      <tab-item @on-item-click="onItemClick">评论</tab-item>
    </tab>
    <div class="content">
      <pay-history></pay-history>
    </div>
  </div>
</template>

<script>
  import {Tab, TabItem} from 'vux'
  import PayHistory from './payHistory/payHistory.vue'

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
        console.log(index)
      }
    },
    components: {
      Tab,
      TabItem,
      PayHistory
    }
  }
</script>

<style scoped lang='less'>
  .pao-history-wrapper {

  }
</style>
