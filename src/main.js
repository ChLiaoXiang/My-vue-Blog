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
Vue.use(swiper, /* { default global options } */); //使用swiper

Vue.config.productionTip = false
//引入全局组建
Vue.component('navList',navList);//创建一个全局指令
//自定义指令
Vue.directive('startColor', {
  //一共有五个钩子函数  常用绑定的就bind 
  bind(el, bind, vnode) { //只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
    // el 绑定所在的元素   bind 绑定的数据   Vnode  绑定虚拟DOM对象的数据
    // 功能： 给绑定一个全聚德start  
    var color = 'red'
    el.style.backgroundColor = color;
    el.style.color = '#fff';
    el.style.padding = '5px 10px';
    setInterval(()=>{
      color === "red"?color = "blue" : color = "red";
      el.style.backgroundColor = color;
    },5000)
    
  },
  inserted(){ //被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。

  },
  update(){ //所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。

  },
  componentUpdated(){ //指令所在组件的 VNode 及其子 VNode 全部更新后调用。

  },
  unbind(){ //只调用一次，指令与元素解绑时调用。

  }
});

//全局路由守卫
router.beforeEach((to,from,next) => {
  // console.log(to,'全局to 守卫');
  // console.log(from,'全局from 守卫');
  next();
});

//创建一个Bus 总线进行组件通信
let bus = new Vue();
Vue.prototype.bus = bus;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
