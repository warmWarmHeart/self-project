<template>
  <div class="add-address-wrapper">
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">收货人：</span>
        <yd-input slot="right"
                  v-model="model.username"
                  placeholder="请输入您的昵称"
                  required
        ></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">联系电话：</span>
        <yd-input slot="right"
                  v-model="model.telphone"
                  type="number" placeholder="请输入您的联系电话"
                  regex="mobile"
        ></yd-input>
      </yd-cell-item>
      <yd-cell-item arrow>
        <span slot="left">所在地区：</span>
        <input slot="right" type="text" @click.stop="addressChoice = true" v-model="address" readonly
               placeholder="请选择收货地址">
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">详细地址：</span>
        <yd-input slot="right"
                  v-model="model.dictDetail"
                  placeholder="街道、楼牌号等"
                  required
        ></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <yd-cityselect v-model="addressChoice"
                   ref="cityselectDemo"
                   :callback="result"
                   :items="district"
                   :provance="model.dictArea1"
                   :city="model.dictArea2"
                   :area="model.dictArea3"
    ></yd-cityselect>
    <div class="add-address-footer">
      <span class="button" @click="saveAddress">保存并使用</span>
    </div>
  </div>
</template>

<script>
  import District from 'ydui-district/dist/jd_province_city_area_id';
  import {Group, Cell, XInput, XButton, ColorPicker} from 'vux'
  import config from '@/utils/config'

  export default {
    data() {
      return {
        model: {
          openid: 'dsasd',
          username: '',
          telphone: '',
          dictArea1: '',
          dictArea2: '',
          dictArea3: '',
          dictDetail: '',
          postcode: '000000',
          isDefault: 1,
        },
        address: '',
        addressChoice: false,
        district: District,
        addressId: -1,
        activeName: 'recommend',
        choiceAddress: ''
      }
    },
    computed: {},
    beforeRouteEnter(to, from, next) {
      next(vm => {
        if (to.query.addressId) {
          vm.addressId = to.query.addressId
          vm.fetchData(to.query.addressId)
          vm.$store.commit('SET_HEADER_TITLE', '编辑收货地址')
        } else {
          vm.addressId = -1
          vm.$store.commit('SET_HEADER_TITLE', '新增收货地址')
        }
        vm.$store.commit('TOGGLE_SHOW_FOOT_BAR', false)
      })
    },
    methods: {
      fetchData(id) {
        let url = `${config.getAddressById}?id=${id}`
        let that = this
        this.$http.get(url).then(res => {
          console.log(res.body.data)
          if (res.status === 200) {
            let data = res.body.data
            that.model = {
              openid: data.openid,
              username: data.username,
              telphone: data.telphone,
              dictArea1: data.dictArea1,
              dictArea2: data.dictArea2,
              dictArea3: data.dictArea3,
              dictDetail: data.dictDetail,
              postcode: data.postcode,
              isDefault: 1,
            }
          }
        })
      },
      result(ret) {
        console.log(ret)
        this.model.dictArea1 = ret.itemName1
        this.model.dictArea2 = ret.itemName2
        this.model.dictArea3 = ret.itemName3
        this.address = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
      },
      saveAddress() {
        if (
          this.model.username === '' ||
          this.model.telphone === '' ||
          this.model.dictArea1 === '' ||
          this.model.dictArea2 === '' ||
          this.model.dictArea3 === '' ||
          this.model.dictDetail === '' ||
          this.model.isDefault === ''
        ) {
          this.$dialog.toast({
            mes: '有内容未填写！',
            timeout: 1500
          });
        }
        else {
          let url = this.addressId === -1? config.addAddress : config.updateAddressById
          let that = this
          let obj = Object.assign({}, this.model)
          if (this.addressId !== -1) obj.id = this.addressId
          this.$http.post(url, obj, {emulateJSON: true}).then(res => {
            console.log(res)
            if (res.status === 200) {
              that.$router.push({path: '/shopping-cart/shipping-address', query: {searchName: 1002}})
            }
          })
        }
      },
      changeAddress() {

      }
    },
    components: {
      ColorPicker,
      XInput,
      Cell,
      Group,
      XButton
    }
  }
</script>

<style scoped lang='less'>
  .add-address-wrapper {
    padding-top: 100/75rem;
    .weui-input {
      font-size: 30/75rem;
    }
    .label {
      color: #666666;
      font-size: 30/75rem;
    }
    .add-address-footer {
      position: fixed;
      width: 100%;
      padding: 15/75rem 150/75rem;
      background: white;
      bottom: 0;
      .button {
        display: block;
        font-size: 36/75rem;
        text-align: center;
        line-height: 1rem;
        color: white;
        border-radius: 5/75rem;
        background: -webkit-linear-gradient(left, #f9911a, #fc3b3a); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #f9911a, #fc3b3a); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #f9911a, #fc3b3a); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #f9911a, #fc3b3a); /* 标准的语法 */
      }
    }
  }
</style>
