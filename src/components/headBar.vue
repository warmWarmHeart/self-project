<!-- 顶部栏 组件 -->

<template>
  <div class="header-bar">
    <i class="icon-arrow_lift" @click="back"></i>
    <span>{{text}}</span>
  </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {}
    },
    props: {
      text: {
        type: String,
        default: '四两饭'
      }
    },
    watch: {},
    methods: {
      back () {
        this.$emit('back')
      }
    },
    filters: {},
    computed: {},
    created () {},
    mounted () {}
  }
</script>

<style lang="less" scoped>
  .header-bar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 88/75rem;
    background: #e60012;
    text-align: center;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    z-index: 10;
    i {
      display: block;
      float: left;
      background: url("../assets/img/back-icon.png") no-repeat;
      width: 23/75rem;
      height: 40/75rem;
      background-size: cover;
      margin: 25/75rem 0 0 20/75rem;
    }
    span {
      position: absolute;
      top: 50%;
      left:50%;
      transform: translate3d(-50%,-50%,0);
      height: 36/75rem;
      font-size: 36/75rem;
      color: #fff;
    }
  }
</style>
