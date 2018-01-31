<template>
  <div class="good-parameter-wrapper" v-show="$store.state.goodDetails.type !== 4" >
    <div class="title">
      产品参数
    </div>
    <ul class="parameter-box">
      <li class="parameter-item">
        <span class="item-label">商品规格:</span>
        <div class="item-content">
          <ul class="item-tags">
            <li :class="{'item-tag': true,'item-active': goodModel.productId == item.productId}"
                v-for="item in $store.state.goodDetails.value"
                @click="choiceModel(item)"
            >
              {{item.color}}+{{ item.model}}
            </li>
          </ul>
        </div>
      </li>
     <!-- <li class="parameter-item">
        <span class="item-label">变速选择:</span>
        <span :class="['item-one', 'item-active']">前变速</span>
        <span :class="['item-two', {}]">前变速</span>
      </li>
      <li class="parameter-item">
        <span class="item-label">颜色:</span>
        <span :class="['item-one', 'item-active']">白色</span>
        <span :class="['item-two', {}]">黑色</span>
      </li>-->
    </ul>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    props: {},
    data() {
      return {}
    },
    computed: {
      ...mapGetters([
        'showGoodParameter',
        'goodModel'
      ])
    },
    methods: {
      ...mapMutations([
        'SET_GOOD_MODEL'
      ]),
      fetchData() {
      },
      choiceModel (item) {
        this.SET_GOOD_MODEL(item)
      }
    },
    components: {}
  }
</script>

<style scoped lang='less'>
  .good-parameter-wrapper {
    width: 100%;
    box-sizing: border-box;
    padding:0 20/75rem;
    height: 300/75rem;
    overflow: hidden;
    .title {
      line-height: 60/75rem;
      font-size: 24/75rem;
      color: #666;
      border-bottom: 1px solid #dcdcdc;
    }
    .parameter-box {
      padding-top: 25/75rem;
      .parameter-item {
        display: flex;
        .item-label {
          flex: 1;
          text-align: right;
          font-size: 22/75rem;
          color: #666;
        }
        .item-content {
          flex: 3;
          .item-tags {
            width: 100%;
            .item-tag {
              float: left;
              padding: 0 10/75rem;
              height: 50/75rem;
              margin-left: 20/75rem;
              text-align: center;
              line-height: 50/75rem;
              border: 1px solid #666;
              border-radius: 2px;
              font-size: 22/75rem;
              color: #666;
            }
            .item-active {
              border: 1px solid #e60012;
              color: #e60012;
            }
          }
        }
      }

    }
  }
</style>
