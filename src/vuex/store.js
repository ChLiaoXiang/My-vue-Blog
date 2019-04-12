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
        ],
        userList:[
            {name:'liaoxiang',age:'22',sex:'男',salary:15000.00},
            {name:'luocimei',age:'21',sex:'女',salary:30000.00},
            {name:'luokeni',age:'20',sex:'女',salary:10000.00},
        ],
        inputValue: '我是store初始值',
        inputValue1: '我是另一个处理双向数据绑定的数据',

    },
    getters:{
        getterUserList(state){  //state 既是 store.state对象
            state.userList.forEach( (item,index) => {
                item.salary =  item.salary*2;
            })
            return state.userList;
        }
    },
    mutations:{
        mutationUserList(state,param){   
            console.log(param);
            state.userList.sort( (a,b) => {
                return a.age - b.age;
            })
        },
        addUserList(state,user){
            state.userList = [].concat(state.userList,user);
        },
        alterInputValue(state,newValue){    //  解决双向数据绑定第一种方法
            state.inputValue = newValue;
        },
        alterInputValue1(state,newValue){   // 解决双向数据绑定第二种方法
            state.inputValue1 = newValue;
        }
    },
    actions:{
        actionUserList(context){    //store 的上下文
            console.log(context);
            setTimeout( () => { //模拟一个异步请求
                var user = [
                    { name:'lx', age:'25', sex:'男', salary: 18000}
                ]
                //我们将上面的数据添加到userList数据中 此时我们在mutation写个方法
                context.commit('addUserList',user);
            },1000)
        }
    },
    modules:{

    }
})

export default store;
