// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import YDUI from 'vue-ydui'
import wx from 'weixin-js-sdk'
import 'vue-ydui/dist/ydui.rem.css';
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */

Vue.use(YDUI);
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import router from './router/index'
import VueResource from 'vue-resource'
// import auth from '@@/utils/auth'

Vue.use(router)
Vue.use(VueResource)
Vue.http.options.emulateHTTP = true
Vue.http.headers.common['X-Requested-With'] = 'XMLHttpRequest'
Vue.http.headers.common['Accept'] = 'application/json'
Vue.use(VueRouter)
Vue.use(Vuex)
// import YDUI from 'vue-ydui';
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */

// Vue.use(YDUI);

FastClick.attach(document.body)
import store from './store/index'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
router.afterEach(function (to) {
  if (window.ga) {
    window.ga('set', 'page', to.fullPath) // 你可能想根据请求参数添加其他参数，可以修改这里的 to.fullPath
    window.ga('send', 'pageview')
  }
})
