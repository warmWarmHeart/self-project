<template>
  <div>
    <div class="header-wrapper">
      <div class="header-content">
        <div class="header-content-left">
          <img :src="model.headimgurl" alt="">
        </div>
        <div class="header-content-right">
          <p class="user-name">{{model.nickname}}</p>
          <span class="user-auth">
            四两饭会员
          </span>
        </div>
        <div class="user-info-change-btn">
          <router-link to="/mine/info">
            <span class="iconfont" @click="changeUserInfo">&#xe625;</span>
          </router-link>
        </div>
      </div>
      <div class="header-bottom-navbar">
        <ul>
          <li class="dai-fu-kuan" @click="goMineIndent(1)">
          </li>
          <li class="dai-shou-huo" @click="goMineIndent(2)">
          </li>
          <li class="dai-ping-lun" @click="goMineIndent(3)">
          </li>
          <li class="quan-bu-ding-dan" @click="goMineIndent(0)">
          </li>
        </ul>
      </div>
    </div>
    <div class="content-wrapper">
      <group title="我的信息">
        <router-link to="/mine/auction">
          <cell is-link style="height: 1.5rem">
            <p class="" slot="icon"
               style="margin-right: 10px;color: #ef0012"
            >
              <span class="wdjp"></span>
            </p>
            <span slot="title" style=" color: #666">
            <p style="vertical-align:middle;">{{ '我的竞拍' }}</p>
          </span>
          </cell>
        </router-link>

        <router-link to="/mine/message">
          <cell is-link style="height: 1.5rem">
            <p class="xxtz" slot="icon" style="margin-right: 10px;color: #009944">
              <!--<span class="iconfont icon" style="line-height: 10%">&#xe602;</span>-->
            </p>
            <span slot="title" style=" color: #666">
            <p style="vertical-align:middle;">{{ '信息通知' }}</p>
          </span>
          </cell>
        </router-link>
        <router-link to="/mine/service">
          <cell is-link style="height: 1.5rem">
            <p class="lxkf" slot="icon" style="margin-right: 10px;color: #fd6d60">
              <!--<span class="iconfont icon" style="line-height: 10%">&#xe620;</span>-->
            </p>
            <span slot="title" style=" color: #666">
            <p style="vertical-align:middle;">{{ '联系客服' }}</p>
          </span>
          </cell>
        </router-link>
        <router-link to="/mine/terrace">
          <cell is-link style="height: 1.5rem">
            <p class="ptjs" slot="icon" style="margin-right: 10px;color: #f29b76">
              <!--<span class="iconfont icon" style="line-height: 10%">&#xe60a;</span>-->
            </p>
            <span slot="title" style=" color: #666">
            <p style="vertical-align:middle;">{{ '平台介绍' }}</p>
          </span>
          </cell>
        </router-link>

        <cell is-link style="height: 1.5rem">
          <p class="yqhy" slot="icon" style="margin-right: 10px;color: #0068b7">
            <!--<span class="iconfont icon" style="line-height: 10%">&#xe66e;</span>-->
          </p>
          <span slot="title" style=" color: #666">
            <p style="vertical-align:middle;">{{ '邀请好友' }}</p>
          </span>
        </cell>
      </group>
      <group>
        <router-link to="/mine/info">
          <cell title="个人设置" is-link style="height: 1.5rem">
            <p class="grsz" slot="icon" style="margin-right: 10px;color: #8d8d8d">
              <!--<span class="iconfont icon" style="line-height: 10%">&#xe644;</span>-->
            </p>
            <span slot="title" style=" color: #666">
            <p style="vertical-align:middle;">{{ '个人设置' }}</p>
          </span>
          </cell>
        </router-link>

      </group>
    </div>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem, Group, Cell} from 'vux'
  import {mapMutations, mapActions} from 'vuex'

  export default {
    data() {
      return {
        model: {
          nickname: '',
          headimgurl: "",
          id: '',
          sex: '',
          phoneNo: '',
          openid: '',
        }
      }
    },
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.$store.commit('SET_HEADER_TITLE')
        vm.fetchData()
      })
    },
    methods: {
      ...mapActions([
        'getMyInfo'
      ]),
      fetchData() {
        let cb = (data) => {
          let obj = data.body.data
          console.log(data)
          this.model = {
            nickname: obj.nickname,
            headimgurl: obj.headimgurl,
            id: obj.id,
            sex: obj.sex,
            phoneNo: obj.phoneNo,
            openid: obj.openid,
          }
        }
        this.getMyInfo({cb: cb})
      },
      changeUserInfo(name) {
        let str = name || 'Jimily'
      },
      goMineIndent (active) {
        this.$router.push({path: '/mine/indent', query: {active: active}})
      },
    }
  }
</script>

<style scoped lang='less'>
  .header-wrapper {
    width: 100%;
    height: 400/75rem;
    padding-top: 90/75rem;
    position: relative;
    background: -webkit-linear-gradient(left, #fc3a3a, #fa5b14); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #fc3a3a, #fa5b14); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #fc3a3a, #fa5b14); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #fc3a3a, #fa5b14); /* 标准的语法 */
    .header-content {
      padding: 50/75rem;
      overflow: hidden;
      .header-content-left {
        float: left;
        width: 170/75rem;
        height: 170/75rem;
        border-radius: 50%;
        overflow: hidden;
        border: 10/75rem solid rgba(255, 255, 255, .4);
        img {
          width: 100%;
          height: 100%;
        }
      }
      .header-content-right {
        float: left;
        padding-left: 20/75rem;
        color: white;
        .user-name {
          font-size: 24/75rem;
          line-height: 80/75rem;
        }
        .user-auth {
          font-size: 24/75rem;
          display: block;
          background: #ef0012;
          padding: 10/75rem 20/75rem;
          border-radius: 50/75rem;
        }

      }
      .user-info-change-btn {
        color: white;
        position: fixed;
        right: 20/75rem;
        top: 140/75rem;
      }
    }
    .header-bottom-navbar {
      position: absolute;
      width: 650/75rem;
      height: 150/75rem;
      left: 50%;
      bottom: -75/75rem;
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      transform: translateX(-50%);
      background: white;
      border-radius: 5px 5px 0 0;
      ul {
        display: flex;
        overflow: hidden;
        width: 650/75rem;
        height: 150/75rem;
        li {
          flex-grow: 1;
          text-align: center;
          height: 100%;
        }
        .dai-fu-kuan {
          background: url("../../assets/img/daifk1.png") no-repeat;
          background-size: 60/75rem 60/75rem;
          background-position: center center;
        }
        .dai-shou-huo {
          background: url("../../assets/img/saish.png") no-repeat;
          background-size: 60/75rem 60/75rem;
          background-position: center center;
        }
        .dai-ping-lun {
          background: url("../../assets/img/daipl.png") no-repeat;
          background-size: 60/75rem 60/75rem;
          background-position: center center;
        }
        .quan-bu-ding-dan {
          background: url("../../assets/img/qbdd.png") no-repeat;
          background-size: 80/75rem 60/75rem;
          background-position: center center;
        }
      }

    }
  }

  .content-wrapper {
    padding-top: 100/75rem;
    .wdjp {
      background: url("../../assets/img/chuizi.png") no-repeat;
      background-size: 40/75rem 40/75rem;
      display: inline-block;
      margin-top: 15/75rem;
      width: 40/75rem;
      height: 40/75rem;
    }
    .xxtz {
      background: url("../../assets/img/xxtz.png") no-repeat;
      background-size: 40/75rem 40/75rem;
      display: inline-block;
      width: 40/75rem;
      margin-top: 15/75rem;
      height: 40/75rem;
    }
    .lxkf {
      background: url("../../assets/img/llkf.png") no-repeat;
      background-size: 40/75rem 40/75rem;
      display: inline-block;
      margin-top: 15/75rem;
      width: 40/75rem;
      height: 40/75rem;
    }.ptjs {
       background: url("../../assets/img/ptjs.png") no-repeat;
       background-size: 40/75rem 40/75rem;
       display: inline-block;
           margin-top: 15/75rem;
       width: 40/75rem;
       height: 40/75rem;
     }
    .yqhy {
      background: url("../../assets/img/yqhy.png") no-repeat;
      background-size: 40/75rem 40/75rem;
      display: inline-block;
      width: 40/75rem;
      margin-top: 15/75rem;
      height: 40/75rem;
    }
    .grsz {
      background: url("../../assets/img/sz.png") no-repeat;
      background-size: 40/75rem 40/75rem;
      display: inline-block;
      margin-top: 15/75rem;
      width: 40/75rem;
      height: 40/75rem;
    }
  }
</style>
