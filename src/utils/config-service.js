import Vue from 'vue'
import router from 'vue-router'
import VueResource from 'vue-resource'
// import auth from '@@/utils/auth'

Vue.use(router)
Vue.use(VueResource)
Vue.http.options.emulateHTTP = true
Vue.http.headers.common['X-Requested-With'] = 'XMLHttpRequest'
Vue.http.headers.common['Accept'] = 'application/json'
// Vue.http.interceptors.push((request, next) => {
//   // 这里对请求体进行处理
//   // request.headers = request.headers || {}
//   const token = auth.getToken()
//   if (token) {
//     Vue.http.headers.common['Authorization'] = token
//   }
//   Vue.http.headers.common['Accept'] = 'application/json'
//   next((response) => {
//     // 这里可以对响应的结果进行处理
//     let data = response.data || {}
//     // console.log(data)
//     if (data.code === 403 || data.code === 40317) {
//       // Vue.router.redirect('/login')
//       window.location.pathname = '/login'
//     }
//   })
// })

