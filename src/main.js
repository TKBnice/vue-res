// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import routers from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(VueRouter);
Vue.use(iView);

// 路由配置
const RouterConfig = {
    routes
};
const router = new VueRouter(RouterConfig);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
