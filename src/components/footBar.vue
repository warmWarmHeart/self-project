<template>
  <div class="footer-bar-wrapper" v-show="this.$store.state.showFooterBar">
    <ul class="footer-bar">
      <li @click="barClick(0)">
        <router-link to="/index">
          <span>
          <img v-show="index !== 0" src="../assets/img/index.png">
          <img v-show="index === 0"  src="../assets/img/index-choice.png">
        </span>
        </router-link>
      </li>
      <li @click="barClick(1)">
        <router-link to="/shopping-cart">
          <span>
          <img v-show="index !== 1" src="../assets/img/cart.png">
          <img v-show="index === 1"  src="../assets/img/cart-choice.png">
        </span>
        </router-link>
      </li>
      <li @click="barClick(2)">
        <router-link to="/mine">
           <span>
             <img v-show="index !== 2" src="../assets/img/mine.png">
             <img v-show="index === 2"  src="../assets/img/mine-choice.png">
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        index: 0
      }
    },
    methods: {
      barClick (index) {
        this.index = index
      }
    }
  }
</script>

<style scoped lang='less'>
  .footer-bar-wrapper {
    position: fixed;
    bottom: 0;
    height: 100/75rem;
    background: #fff;
    border-top: 1px solid #ccc;
    width: 100%;
    .footer-bar {
      display: -webkit-flex;
      display: flex;
      width: 100%;
      height: 75/75rem;
      align-items: center;
      li {
        list-style: none;
        flex-grow: 1;
        margin-top: 14/75rem;
        span {
          display: block;
          width: 100%;
          height: 100%;
          position: relative;
          img {
            height: 75/74rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
          }
        }

      }
    }
  }
</style>
