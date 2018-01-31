<template>
  <div class="slf-mask-wrapper">
    <div class="mask-wrapper">
    </div>
    <div class="message-wrapper">
      {{message}}
    </div>
  </div>
</template>

<script>
    export default {
      props: {
        message: {
          type: String,
          default: '提示信息'
        }
      }
    }
</script>

<style scoped lang='less'>
  .slf-mask-wrapper {
    position: fixed;
    left: 0;
    top: 108/75rem;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    .mask-wrapper {
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.3);
    }
    .message-wrapper {
      position: fixed;
      top: 200/75rem;
      left: 50/75rem;
      width: 640/75rem;
      height: 300/75rem;
      border-radius: 10/75rem;
      box-sizing: border-box;
      padding: 100/75rem 150/75rem;
      text-align: center;
      background: #ef0012;
      color: white;
      font-size: 36/75rem;
    }
  }
</style>
