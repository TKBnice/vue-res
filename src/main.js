
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
// 框架

// 样式
import "./style/common.css"

//工具
import '@/util/rem' //适配
// 路由配置
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
