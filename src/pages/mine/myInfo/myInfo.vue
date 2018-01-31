<template>
  <div>
    <div class="header-wrapper">
      <div class="header-content">
        <div class="header-content-left">
          <img src="../../../assets/img/zhengche.png" alt="">
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      <group>
        <x-input title="手机号" type="text" placeholder="请输入手机号" v-model="model.phone" :min="11" :max="11"></x-input>
        <x-input title="昵 称" v-model="model.name" type="text" placeholder="请输入您的昵称"></x-input>
        <cell
          title="地址管理"
          is-link
          @click.native="goAddress"></cell>
        <!--:border-intent="false"-->
        <!--:arrow-direction="showAddress ? 'up' : 'down'"-->
        <!--<template v-if="showAddress">-->
          <!--<checklist label-position="left"-->
                     <!--required-->
                     <!--:options="commonList"-->
                     <!--v-model="checkAddressForDel"-->
                     <!--@on-change="changeAddress">-->
          <!--</checklist>-->
        <!--</template>-->
      </group>
    </div>
  </div>
</template>

<script>
  import {XInput, XButton,Checklist, Group, Cell, CellBox} from 'vux'
  export default {
    data () {
      return {
        model: {
          phone: '189****435',
          name: 'Jimmy Li',
        },
        showAddress: false,
        commonList: [
          '1231321',
          '1231322',
          '1231323',
          '1231324',
        ],
        checkAddressForDel: []
      }
    },
    components: {
      XInput,
      XButton,
      Group,
      Cell,
      CellBox,
      Checklist
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.$store.commit('SET_HEADER_TITLE', '我的信息')
      })
    },
    methods: {
      changeAddress () {

      },
      goAddress () {
        this.$router.push({path: '/shopping-cart/shipping-address', query: {openid: 'dfasf'}})
      }
    }
  }
</script>

<style scoped lang='less'>
  .header-wrapper {
    width: 100%;
    height: 350/75rem;
    padding-top: 90/75rem;
    position: relative;
    background: -webkit-linear-gradient(left, #fc3a3a, #fa5b14); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #fc3a3a, #fa5b14); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #fc3a3a, #fa5b14); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #fc3a3a, #fa5b14); /* 标准的语法 */
    .header-content {
      width: 100%;
      height: 100%;
      position: relative;
      .header-content-left {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%,-50%, 0);
        width: 170/75rem;
        height: 170/75rem;
        border-radius: 50%;
        border: 10/75rem solid rgba(255, 255, 255, .4);
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
