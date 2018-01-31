<template>
  <div id="app" style="height:100%;">
    <div style="height:100%;">
      <view-box ref="viewBox">
        <x-header slot="header"
                  :left-options="{backText: ''}"
                  style="width:100%;position:fixed;left:0;top:0;z-index:100;background: #e60012">
          {{$store.state.headerTitle}}
        </x-header>
        <router-view></router-view>
        <foot-bar></foot-bar>
      </view-box>
    </div>
  </div>
</template>

<script>
  import { Radio, Group, Cell, Badge, Drawer, Actionsheet, ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, TabbarItem, Loading, TransferDom } from 'vux'

  import FootBar from '@/components/footBar.vue'
export default {
  directives: {
    TransferDom
  },
  data () {
    return {
      index: 0
    }
  },
  methods: {
    barClick (index) {
      this.index = index
    }
  },
  name: 'app',
  components: {
    FootBar,
    Radio,
    Group,
    Cell,
    Badge,
    Drawer,
    ButtonTab,
    ButtonTabItem,
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Loading,
    Actionsheet
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './assets/css/reset.css';

body {
  background-color: #fbf9fe;

}
.vux-header .vux-header-left .left-arrow:before {
   content: "";
   position: absolute;
   width: 12px;
   height: 12px;
   border-top: 2px solid #fff !important;
   border-left: 2px solid #fff !important;
   -webkit-transform: rotate(315deg);
   transform: rotate(315deg);
   top: 8px;
   left: 7px;
 }
</style>
