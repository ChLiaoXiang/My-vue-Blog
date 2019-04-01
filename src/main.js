// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import navList from './components/layout/navList'
//引入swiper
import swiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(swiper, /* { default global options } */);

Vue.config.productionTip = false
//引入全局组建
Vue.component('navList',navList);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
