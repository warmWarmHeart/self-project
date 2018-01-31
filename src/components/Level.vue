<template>
      <section class="showChose" v-show="showChose">
        <section class="address">
          <section class="title">
            <h4>居住地址</h4>
            <span @click="closeAdd()">×</span>
          </section>
          <section class="title">
            <div class="area" @click="provinceSelected()" :class="Province?'':'active'">{{Province?Province:'请选择'}}</div>

            <div class="area" @click="citySelected()" :class="City?'':'active'" v-show="Province">{{City?City:'请选择'}}</div>
            <div class="area" @click="districtSelected()" :class="District?'':'active'" v-show="City">{{District?District:'请选择'}}</div>
          </section>
          <ul>
            <li class="addList" v-for="(v,k) in info" @click="getProvinceId(v.id, v.name, k)" v-show="showProvince" :class="v.selected ? 'active' : ''">{{v.name}}</li>
            <li class="addList" v-for="(v,k) in showCityList" @click="getCityId(v.id, v.name, k)" v-show="showCity" :class="v.selected ? 'active' : ''">{{v.name}}</li>
            <li class="addList" v-for="(v,k) in showDistrictList" @click="getDistrictId(v.id, v.name, k)" v-show="showDistrict" :class="v.selected ? 'active' : ''">{{v.name}}</li>
          </ul>
        </section>
      </section>
</template>

<script type="text/ecmascript-6">
  import {before_signature} from '@/utils/index'
    export default {
        data () {
            return {
              showChose: false,
              showProvince: true,
              showCity: false,
              showDistrict: false,
              showCityList: false,
              showDistrictList: false,
              province: '',
              city: '',
              district: '',
              GetProvinceId: 2,
              District: '',
              Province: '',
              City: '',
              // v-for循环判断是否为当前
              selected: false,
              addressval:'',
              info:''
            }
        },
      methods:{
        address:function () {
          this.showChose=true;
        },
        closeAdd: function() {
          this.showChose = false;
        },
        _filter(add,name,code) {
          let result = [];
          for(let i=0;i<add.length;i++) {
            if(code == add[i].id){
              result = add[i][name];
            }
          }
          return result;
        },
        getProvinceId: function(code,input,index) {
          this.province = code;
          this.Province = input;
          this.showProvince=false;
          this.showCity=true;
          this.showDistrict = false;
          var token=sessionStorage.getItem('token');
//          前端验证
          const obj={
            timestamp: Date.parse(new Date()),
            ext_sign: 'Aa!@#$%67890',
            token:token,
            province_id: code
          };
          before_signature(obj);
          const phodata={
            timestamp:obj.timestamp,
            signature:before_signature(obj),
            token:obj.token,
            province_id:obj.province_id
          };
          if(!localStorage.getItem('backcity')){
            this.$http.post('/client/getAllCity',phodata).then(res =>{
              console.log(res)
              var backcity=JSON.stringify(res.data.city)
              localStorage.setItem('backcity',backcity)
              this.showCityList=res.data.city;
            });
          }else {
             this.showCityList=JSON.parse(localStorage.getItem('backcity'))
          }
          // 点击选择当前
          this.info.map( a => a.selected = false );
          this.info[index].selected = true;
        },
        provinceSelected: function() {
          // 清除市级和区级列表
          this.showCityList = false;
          this.showDistrictList = false;
          // 清除市级和区级选项
          this.City = false;
          this.District = false;
          // 选项页面的切换
          this.showProvince = true;
          this.showCity = false;
          this.showDistrict = false;
        },
        getCityId: function(code, input, index) {
          var token=sessionStorage.getItem('token');
//          前端验证
          const obj={
            timestamp: Date.parse(new Date()),
            ext_sign: 'Aa!@#$%67890',
            token:token,
            city_id: code
          };
          before_signature(obj);
          const phodata={
            timestamp:obj.timestamp,
            signature:before_signature(obj),
            token:obj.token,
            city_id:obj.city_id
          };
          this.$http.post('/client/getAllCity',phodata).then(res =>{
            var backpress=JSON.stringify(res.data.city);
            localStorage.setItem('backpress',backpress)
            this.showDistrictList=res.data.city
          });
          this.city = code;
          this.City = input;
          this.showProvince=false;
          this.showCity=false;
          this.showDistrict = true;
          this.showDistrictList = this._filter(this.showCityList,'district',this.city);
          // 选择当前添加active
          this.showCityList.map( a => a.selected = false );
          this.showCityList[index].selected = true;
        },
        citySelected: function() {
          this.showProvince=false;
          this.showCity=true;
          this.showDistrict = false;
        },
        getDistrictId: function(code, input, index) {
          this.district = code;
          this.District = input;
          // 选择当前添加active
          this.showDistrictList.map( a => a.selected = false );
          this.showDistrictList[index].selected = true;
          // 选取市区选项之后关闭弹层
          this.showChose = false;
          this.addressval=this.Province+this.City+this.District;
//          addressval的值发送给父组件
          this.$emit('child-say',this.addressval)
        },
        districtSelected: function() {
          this.showProvince=false;
          this.showCity=false;
          this.showDistrict = true;
        },
//        获取 省数据
        getprovincedata () {

          var token=sessionStorage.getItem('token');
//          前端验证
          const obj={
            timestamp: Date.parse(new Date()),
            ext_sign: 'Aa!@#$%67890',
            token:token
          };
          const phodata={
            timestamp:obj.timestamp,
            signature:before_signature(obj),
            token:obj.token
          };
          console.log(phodata)
          console.log(obj)

          //获取省的数据
          if(!localStorage.getItem('backprovince')){
            this.$http.post('/client/getAllCity',phodata).then(res =>{
//            返回数据做验证
              var backdata={
                timestamp:res.data.timestamp,
                ext_sign: 'Aa!@#$%67890'
              };
              if(before_signature(backdata)==res.data.signature){
                var backprovince=JSON.stringify(res.data.city);
                localStorage.setItem('backprovince',backprovince)
                this.info=backprovince
              }
            })
          }else {
               this.info=JSON.parse(localStorage.getItem('backprovince'));
          }

        }
      },

      mounted () {
           this.getprovincedata();
      }
    }
</script>

<style lang="less">
  /*三级联动样式*/
  .myAddress{
    width: 100%;
    background-color: white;
    border-top: 4/64rem solid rgba(245,245,245,1);
    color:#333;
  }
  .myAddress .cont{
    border-bottom: 1px solid rgba(245,245,245,0.8);
  }
  .myAddress .cont span{
    display: inline-block;
    font-size: 0.28rem;
    color: #333;
    line-height: 0.88rem;
    margin-left: 0.32rem;
  }
  .myAddress .cont section{
    float:left;
  }
  .myAddress .cont p{
    display: inline-block;
    font-size: 0.28rem;
    color: #333333;
    line-height: 0.88rem;
    margin-left: 1rem;
  }
  .myAddress .cont .pic2{
    float: right;
    width: 0.14rem;
    height: 0.24rem;
    margin: 0.32rem 0.32rem 0.32rem 0;
  }
  .myAddress .cont p.text{
    margin-left: 0.72rem;
  }
  .showChose{
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:120;
    background:rgba(77,82,113,0.8);
  }
  .address{
    position:absolute;
    bottom:0;
    left:0;
    z-index:121;
    background:#fff;
    width:100%;
  }
  .title h4{
    display:inline-block;
    margin-left:270/64rem;
    font-size:28/64rem;
    line-height:0.88rem;
    font-weight:normal;
    color:#999;
  }
  .title span{
    margin:10/64rem 0 0 180/64rem;
    font-size:0.45rem;
    line-height:0.34rem;
    color:#D8D8D8;
  }
  .area{
    display:inline-block;
    font-size:24/64rem;
    line-height:60/64rem;
    margin-left:30/64rem;
    color:#333;
  }
  .addList{
    width:100%;
    padding-left:20/64rem;
    font-size:0.34rem;
    line-height:0.88rem;
    color:#333;
  }
  /* 修改的格式 */
  .address ul{
    width:95%;
    height:100%;
    max-height: 300/64rem;
    overflow:auto;
  }
  .address ul li{
    padding-left:5%;
    box-sizing: border-box;
  }
  .address .title .active{
    color:#c50504;
    border-bottom:1px solid #c50504;
  }
  .address ul .active{
    color:#c50504;
  }
</style>
