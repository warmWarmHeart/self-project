<template>
  <div class="pai-wrapper" @click="clickEvent">
    <!--<img src="../assets/img/paicircle.png" alt="">-->
    <span>拍</span>
  </div>
</template>

<script>
    export default {
      data () {
        return {}
      },
      methods: {
        clickEvent () {
          this.$emit('click')
        }
      }
    }
</script>

<style scoped lang='less'>
  .pai-wrapper {
    width: 100/75rem;
    height: 100/75rem;
    z-index: 11;
    background-color: #ef0012;
    text-align: center;
    line-height: 100/75rem;
    border-radius: 50%;
    color: #ffffff;
    font-size: 48/75rem;
    font-family: 'Open Sans', sans-serif;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
