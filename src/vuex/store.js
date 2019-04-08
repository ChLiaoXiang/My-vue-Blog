import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        navList:[
            {name:'Vue基础',path:'/base',rname:'baseStudy'},
            {name:'Vue路由',path:'/router',rname:'routerStudy'},
            {name:'Vue组件',path:'/compoent',rname:'compoentStudy'},
            {name:'Vue指令',path:'/directive',rname:'directiveStudy'},
            {name:'Vue仓库',path:'/store',rname:'storeStudy'},
            {name:'Vue动画',path:'/animation',rname:'animation'},
            {name:'Web网络',path:'/netServer',rname:'netServerStudy'},
        ]
    },
    getters:{

    }
})

export default store;
