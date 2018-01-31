<template>
  <div class="time-wrapper">
    距离结束还有：
    <yd-countdown slot="right" :time="time">
      <em>{%d0}</em><em>{%d1}</em><em>{%d2}</em>天
      <em>{%h1}</em><em>{%h2}</em>:
      <em>{%m1}</em><em>{%m2}</em>:
      <em>{%s1}</em><em>{%s2}</em>
    </yd-countdown>
  </div>
</template>

<script>
  export default {
    props: {
      time: {
        type: String,
        default: '2018-09-08 00:00:00'
      }
    }
  }
</script>

<style scoped lang='less'>
  .time-wrapper {
    color: #666;
    font-size: 20/75rem;
    font-family: 微软雅黑;
  }
</style>
