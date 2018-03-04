
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/route'
import store from './store'
// 框架

// 样式
import "./style/common.css"
import "./assets/fonts/iconfont.css"
import "./assets/font-radio/iconfont.css"
//工具
import '@/util/rem' //适配
import axios from 'axios'

// 路由配置
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
