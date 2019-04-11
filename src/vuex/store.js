import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        navList:[
            {name:'Vue基础知识',path:'base',rname:'baseStudy'},
            {name:'Vue路由管理',path:'router',rname:'routerStudy'},
            {name:'组件开发',path:'compoent',rname:'compoentStudy'},
            {name:'自定义指令',path:'directive',rname:'directiveStudy'},
            {name:'状态管理器',path:'store',rname:'storeStudy'},
            {name:'Vue动画',path:'animation',rname:'animation'},
            {name:'Web网络',path:'netServer',rname:'netServerStudy'},
        ]
    },
    getters:{

    }
})

export default store;
