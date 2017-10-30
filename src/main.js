// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import routes from './router';
//框架
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);

// 路由配置
console.log(routes)
const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
// vue-resource vue-router
// npm uninstall --save-dev autoprefixer
// npm uninstall --save-dev vue-resource
// phantomjs-prebuilt karma-phantomjs-launcher vue-router vue-resource 