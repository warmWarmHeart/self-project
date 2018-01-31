<template>
  <div class="shipping-address-wrapper">
    <ul class="shipping-address">
      <li class="shipping-address-item" v-for="item in addressList">
        <div class="item-header">
          <p>
            <span class="name">{{item.username}}</span>
            <span
              class="phone">{{item.telphone.slice(0, 3)}}*****{{item.telphone.slice(item.telphone.length - 4, item.telphone.length)}}</span>
          </p>
          <p class="address">
            地址：{{item.dictArea1}}{{item.dictArea2}}{{item.dictArea3}}{{item.dictDetail}}
          </p>
        </div>
        <div class="item-footer">
          <div class="choice" @click="setDefaultAddress(item)">
            <div class="active" v-if="item.isDefault">
              <yd-icon  color="#ef0012" size="0.3rem" name="checkoff"></yd-icon>
            </div>
          </div>
          <span class="delete" @click="deleteAddress(item.id)">
            <yd-icon name="delete" size=".4rem"></yd-icon>删除
          </span>

          <span class="edit" @click="goAddress(item.id)">
            编辑
          </span>
        </div>
      </li>
    </ul>
    <div class="shipping-address-footer">
      <span class="button" @click="goAddress(false)">+ 新增地址</span>
    </div>
  </div>
</template>

<script>
  import {Group, Cell, XButton, ColorPicker} from 'vux'
  import {mapActions, mapMutations, mapGetters} from 'vuex'
  import config from '@/utils/config'
  import {setItem, getItem} from '@/utils/utils'

  export default {
    data() {
      return {
        activeName: 'recommend',
        choiceAddress: '',
        addressList: []
      }
    },
    computed: {},
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.$store.commit('SET_HEADER_TITLE', '收货地址')
        vm.$store.commit('TOGGLE_SHOW_FOOT_BAR', false)
        vm.fetchData()
      })
    },
    methods: {
      ...mapActions([
        'getMyInfo'
      ]),
      fetchData() {
        let cb = (data) => {
          this.addressList = data.body.data.addressList
          setItem('openid', data.body.data.openid)
        }
        this.getMyInfo({cb: cb})
        /*let url = `${config.addressList}?openid=ogHsV06e2TWk4dTmHETHfYmGJ1NE`
        this.$http.get(url).then(res => {
          console.log(res.body.data)
          if (res.status === 200) {
            this.addressList = res.body.data.addressList
            setItem('openid', res.body.data.openid)
          }
        })*/
      },
      goAddress(id) {
        if (id) {
          this.$router.push({path: '/shopping-cart/add-address', query: {addressId: id,}})
        } else {
          this.$router.push({path: '/shopping-cart/add-address', query: {addNewAddress: true}})
        }
      },
      setDefaultAddress (item) {
        console.log(item,111)
        let url = config.updateAddressById
        let that = this
        let obj = {
          openid: item.openid,
          id: item.id,
          username: item.username,
          telphone: item.telphone,
          dictArea1: item.dictArea1,
          dictArea2: item.dictArea2,
          dictArea3: item.dictArea3,
          dictDetail: item.dictDetail,
          postcode: '000000',
          isDefault: 1,
        }
        this.$http.post(url, obj, {emulateJSON: true}).then(res => {
          if (res.status === 200) {
            that.$dialog.toast({mes: '设置默认地址成功', timeout: 1000});
            that.fetchData()
          }
        })
      },
      deleteAddress (id) {
        this.$dialog.confirm({
          title: '删除地址',
          mes: '点击确认按钮进行删除！',
          opts: () => {
            let that = this
            let url = `${config.deleteAddressById}?id=${id}`
            this.$http.get(url).then(res => {
              if (res.status === 200) {
                that.$dialog.toast({mes: '删除成功', timeout: 1000});
                that.fetchData()
              }
            })
          }
        });

      }
    },
    components: {
      ColorPicker,
      Cell,
      Group,
      XButton
    }
  }
</script>

<style scoped lang='less'>
  .shipping-address-wrapper {
    margin-top: 100/75rem;
    .shipping-address {
      .shipping-address-item {
        background: white;
        padding: 20/75rem;
        margin-bottom: 10/75rem;
        .item-header {
          p {
            overflow: hidden;
            .name {
              float: left;
              font-size: 30/75rem;
              color: #666666;
            }
            .phone {
              float: left;
              margin-left: 30/75rem;
              font-size: 30/75rem;
              color: #666666;
            }
          }
          .address {
            font-size: 24/75rem;
            color: #999999;
            padding-bottom: 20/75rem;
            border-bottom: 1px solid #dcdcdc;
          }
        }
        .item-footer {
          padding-top: 20/75rem;
          overflow: hidden;
          .choice {
            float: left;
            width: 40/75rem;
            height: 40/75rem;
            border-radius: 20/75rem;
            border: 1px solid #dcdcdc;
            .active {
              line-height: 40/75rem;
              text-align: center;
              margin-top: -50%;
            }
          }

          .edit {
            float: right;
            color: #999999;
            margin-right: 40/75rem;
            font-size: 30/75rem;
            text-indent: 40/75rem;
            line-height: 30/75rem;
            background: url("../../../assets/img/edit.png") no-repeat;
            background-size: 31/75rem;
            width: 100/75rem;
            height: 31/75rem;
          }
          .delete {
            float: right;
            color: #999999;
            font-size: 30/75rem;

            line-height: 30/75rem;
            background-size: 31/75rem;
            width: 100/75rem;
            height: 31/75rem;
          }
        }
      }
    }
    .shipping-address-footer {
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
