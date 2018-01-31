<template>
  <div class="see-more-wrapper" @click="seeMore">
    <span>点击加载更多</span>
  </div>
</template>

<script>
    export default {
      methods: {
        seeMore () {
          this.$emit('click')
        }
      }
    }
</script>

<style scoped lang='less'>
  .see-more-wrapper {
    color: #999999;
    font-size: 22/75rem;
    text-align: center;
    width: 100%;
    margin: 16/75rem 0;
  }
</style>
