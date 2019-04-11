import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
//page components
import oneSelf from '@/components/blogPage/oneself' 
import baseStudy from '@/components/blogPage/baseStudy' 
import compoentStudy from '@/components/blogPage/compoentStudy' 
import directiveStudy from '@/components/blogPage/directiveStudy' 
import netServerStudy from '@/components/blogPage/netServerStudy' 
import routerStudy from '@/components/blogPage/routerStudy' 
import storeStudy from '@/components/blogPage/storeStudy' 
import { resolve } from 'path';
// import animation from '@/components/blogPage/animation' 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: login
    },{
      path:'/index',
      component: index,
      children: [
        {
          path:'/',
          name:'oneSelf',
          component:oneSelf,
          beforeEnter: (to,from,next) => {  //简单的权限设置
            // console.log(to,'to');
            // console.log(from,'from');
            if(from.path === '/'){
              next();
            }else{
              alert('我这里做了路由守卫，只能从login 页面登陆！否则将会被拦截。')
              next('/');
            }
          }
        },
        {path:'base',name:'baseStudy',component:baseStudy},
        {path:'compoent',name:'compoentStudy',component:compoentStudy},
        {path:'directive',name:'directiveStudy',component:directiveStudy},
        {path:'netServer',name:'netServerStudy',component:netServerStudy},
        {path:'router',name:'routerStudy',component:routerStudy},
        {path:'store',name:'storeStudy',component:storeStudy},
        {
          path:'animation',
          name:'animation',
          component: resolve => { //webpack 路由懒加载
            require(['../components/blogPage/animation.vue'],resolve);
          }
        }
      ]
    },
  ],
  mode: 'history'
})
