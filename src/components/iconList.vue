<template>
  <div class="icon-list-wrapper">
    <ul class="icon-list">
      <li @click="activeChange(1)">
        <div class="item">
          <img class="item-rail" src="../assets/img/zhengche.png">
          <span :class="['item-label', {'item-label-active': activeName === 1}]">整车车架</span>
        </div>
      </li>
      <li @click="activeChange(2)">
        <div class="item">
          <img class="item-rail" src="../assets/img/taojian.png">
          <span :class="['item-label', {'item-label-active': activeName === 2}]">套件轮组</span>
        </div>
      </li>
      <li @click="activeChange(3)">
        <div class="item">
          <img class="item-rail" src="../assets/img/renshen.png">
          <span :class="['item-label', {'item-label-active': activeName === 3}]">人身装备</span>
        </div>
      </li>
      <li @click="activeChange(4)">
        <div class="item">
          <img class="item-rail" src="../assets/img/zhoubian.png">
          <span :class="['item-label', {'item-label-active': activeName === 4}]">周边其他</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  export default {
    props: {
      title: String
    },
    data () {
      return {
        activeName: 1
      }
    },
    computed: {
      ...mapGetters([
      ])
    },
    methods: {
      ...mapActions([
        'getTableData'
      ]),
      activeChange(name) {
        this.activeName = name
        this.getTableData({active: this.title,currentPage: 1, category: name})
      },
      onItemClick(index) {
        // console.log('on item click:', index)
      },
    }
  }
</script>

<style scoped lang='less'>
  .icon-list-wrapper {
    font-size: 24/75rem;
    color: #666;
    width: 100%;
    .icon-list {
      display: flex;
      li {
        flex-grow: 1;
        text-align: center;
        list-style: none;
        /*overflow: hidden;*/
        height: 140/75rem;
        .item {
          height: 100%;
          width: 100%;
          position: relative;
          .item-label {
            display: inline-block;
            padding-top: 108/75rem;
          }
          .item-label-active {
            color: #ef0012;
          }
          .item-rail {
            position: absolute;
            left:50%;
            top: 18/75rem;
            transform: translateX(-50%);
            width: 80/75rem;
            height: 80/75rem;
          }
        }
      }
    }

  }
</style>
