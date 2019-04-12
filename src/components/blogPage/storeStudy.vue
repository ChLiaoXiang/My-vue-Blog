<template>
    <div id="base">
        <h4 class="title">{{title}}</h4>
        <hr>
        <!-- vue Bus -->
        <div class="myself-show row"> 
            <h3 class="text-center">Vue Bus->总线通信</h3>
            <hr>
            <div calss="text-left">
                <div class="pageAnalysis">
                    Vuex 前篇: <br>
                    <hr>
                    <pre>
                        //我们在使用Vuex的时候要了介绍一下bus 总线进行数据交互！
                    <div style="height:300px;width:400px;">
                        <img src="../../../static/imgs/vue-img/vue-bus.png" alt="" style="height:100%;width:100%;">
                    </div>

                        //在通讯的时候我们通常用的是eventEmit来进行子组件与父组件的通信，props来用于父组件与子组件的通信 

                        //如果当碰到子组件与子组件的通信要通过父级组件通信才能实现。
                        
                        注：若不了解子组件通信请跳往 <router-link to="/compoent">组件章节</router-link>

                        子组件与父组件通信的过程：
                            在子组件创建一个 eventEmit事件  this.$emit('事件名',数据,数据);
                        并在父组件中的子组件注册 Emit 事件 父组件中的子组件上 @事件名="方法名" ==> 接受的参数就是子组件的数据

                    </pre>
                    <br><br>
                    <p style="color:red;font-size:14px;">从组件间中的通信我们观察到 子与父通信建立时间通信，那么我们创建一个总线，对总线进行通信就能做出一个公用的模式。</p>
                    <pre>
                        //现在我们在项目中创建一个总线，来实现一个bus总线的数据交互！
                        //在创建一个bus 总线我们可以用两种方式 单独创建一个js模块导入  直接在mian.js 中创建在这用第二种

                        let bus = new Vue();

                        winodw.bus = bus;  /  Vue.prototype.bus = bus; // 全局添加/vue中添加
                        //如果是在js 文件单独-每个文件每次引入 （订阅模式）。

                        bus.$on('事件名',function(msg){     //绑定一个事件
                            console.log(msg); //传递过来的参数
                        })
                        bus.$emit('事件名','需要传递的数据！'); //触发这个事件

                        注：补充--ref 寻找节点的同时也能找到实例里的数据。
                    </pre>
                    <br> <br>
                    <h3 style="color:red;">
                        注： 在绑定bus 遇到问题， $on绑定事件，需要触发$emit 会出现先触发$emit 后绑定$on 。
                        <br>
                        附上组件切换的声明周期打印表：<br>
                        <div style="width:100%">
                            <img src="../../../static/imgs/vue-img/router-switch.png" alt="" style="width:100%;">
                            <img src="../../../static/imgs/vue-img/router-switch2.png" alt="" style="width:100%;">
                        </div>
                    </h3>
                    所以在绑定的时候，我们应该在销毁组件前后触发 $emit 。 $nexTick( ) //DOM更新完成之后执行（！尝试发现有问题）<br><br>
                    <div>
                        获取conponent 组件传过来的数据：{{busFromval}}
                    </div>
                </div>
            </div>
        </div>
        <!-- Vuex 引入-->
        <div class="myself-show row"> 
            <h3 class="text-center">Vuex 状态管理器</h3>
            <hr>
            <div calss="text-left">
                <div class="pageAnalysis">
                    Vuex 安装: <br>
                    <hr>
                    <p style="text-indent:2em">什么是Vuex？？
                        Vuex 是Vue官方提供的一个状态管理工具，组件间相互使用，一若改变，都进行视图更新。
                        在比较繁琐和大的项目中使用，平时我们利用 Bus 总线或者 本地存储进本就能满足要求。
                        </p>
                    <pre>
                        1，在Vue 脚手架就中使用他，我们先要下载该插件
                            npm install vuex --save 
                        2，下载完成后我们要在Vue中使用，此时我们可以直接在main.js 注册，也可以建立一个数据他专属的JS （跟router一样）  
                            建立一个store.js 
                            import Vue from 'vue'
                            import Vuex from 'vuex'

                            Vue.use(Vuex);  //Vue插件使用   -->install 方法

                            const store = new.Vuex.Store({

                            })
                            export default sotre;
                        3，此时我们需要在main.js 中引用该注册
                            import store import './vuex/store'

                            new Vue({
                                store,
                            })
                    </pre>
                </div>
            </div>
        </div>
        <!-- Vuex 内容讲解 -->
        <div class="myself-show row"> 
            <h3 class="text-center">Vuex 属性详解</h3>
            <hr>
            <div calss="text-left">
                <div class="pageAnalysis">
                    <h4>Vuex Store属性介绍</h4>
                    <hr>
                    <pre>

                        // Vuex.Store 属性介绍！
                        const store = Vuex.Store({
                            state:{     //vuex  存储数据 （类似data） 建议组件不要直接对state的数据进行操作 

                            },
                            getters:{   //vuex  计算处理 （类似computed）属性，可以对state的数据进行批处理返回 

                            },
                            mutations:{ //同步操作函数处理，里面的所有内容都同步操作

                            },
                            actions:{   //异步函数处理 请求数据 等方式通过这

                            },
                            modules:{   //Store 模块化，在大型项目中不同的模块数据封开管理, 利用次属性来融合在一起方便管理

                            }
                        })
                    </pre>
                </div>
            </div>
            <div calss="text-left">
                <div class="pageAnalysis">
                    <h4>Store state属性</h4>
                    <hr>
                    <pre>

                        // Store state属性  用来存储公用数据的
                        state:{ 
                            userList:[
                                {name:'liaoxiang',age:'22',sex:'男',salary:15000},
                                {name:'luocimei',age:'21',sex:'女',salary:30000},
                                {name:'luokeni',age:'20',sex:'女',salary:10000},
                            ]
                        }

                        //在其他组件中怎么获取这个数据呢
                        
                        1，可以直接对组件中的变量赋值
                        data(){
                            return {
                                userList: this.$store.state.userList; //这样就把userList中的数据赋值给了组件中的userList
                            }
                        }

                        2，推荐使用 利用conputed对页面进行渲染。
                        computed:{
                            userList(){ //通过一个计算属性进行渲染，可以实时监控这个数据的变化。
                                return this.$store.state.userList;
                            }
                        }
                        
                    </pre>
                </div>
            </div>
            <div calss="text-left">
                <div class="pageAnalysis">
                    <h4>Store getters属性</h4>
                    <hr>
                    <pre>

                        // Store getters属性  类似组件中的computed 属性（官方解释） 

                            //使用场景： 在多个组件都要使用state的数据进行相同的处理，我们就可以用它！
                        
                        例： 我们要对userList中的salary（薪资*2）
                        getters:{
                            getterUserList(state){  //state 既是 store.state对象
                                state.userList.forEach( (item,index) => {
                                    item.salary =  item.salary*2;
                                })
                            }
                        }

                        //此时我们在组件中渲染
                        computed:{  
                            userList(){ //此时组件通过该数据渲染即可
                                return this.$store.getters.getterUserList;
                            }
                        }
                        
                    </pre>
                </div>
            </div>
            <div calss="text-left">
                <div class="pageAnalysis">
                    <h4>Store mutations属性</h4>
                    <hr>
                    <pre>

                        // Store mutations属性  刚我们讲了官方建议不要直接对state进行操作。 所以数据操作将在这个里面进行处理
                        mutations:{
                            //我们要对里面的年龄进行排序
                            mutationUserList(state){    
                                state.userList.sort( (a,b) => {
                                    return a.age - b.age;
                                })
                            },
                            addUserList(state,user){
                                state.userList = [].concat(state.userList,user);
                            }
                        }

                        //在组件中调该事件
                        methos:{
                            userListSort(){
                                thsi.$store.commit('mutationUserList',params); //可以传递一个参数
                            }
                        }
                    </pre>
                    <p style="color:red">
                        注：这如果做异步操作，vue devtools 无法追溯到数据信息。 在大型项目数据出错我们可以通过 devtools 进行调试
                    </p>
                </div>
            </div>
            <div calss="text-left">
                <div class="pageAnalysis">
                    <h4>Store actions属性</h4>
                    <hr>
                    <pre>

                        // Store actions属性  actions 中可以进行异步操作，如果接受异步传送过来的数据 应该在这里面进行处理
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
                        }

                        //在组件中使用
                        methods:{
                            addUserList(){
                                this.$store.dispatch('actionUserList'); //也可接受一个参数。 例子模拟异步返回的数据
                            }
                        }
                    </pre>
                </div>
            </div>
            <div calss="text-left">
                <div class="pageAnalysis">
                    <h4>Store modules属性</h4>
                    <hr>
                    <pre>

                        // Store modules属性 用于模块比较多的时候进行使用。 一些组件只用这部分数据，一些组件只用另外一部分数据，所有的都写在一起，不方便维护。
                            //vue 给我提供了个modules 来进行不同组件 数据之间的管理
                        例：
                            A组 组件需要这一部分仓库的数据 我们可以给他写成 a.js
                            {
                                state:{     //vuex  存储数据 （类似data） 建议组件不要直接对state的数据进行操作 

                                },
                                getters:{   //vuex  计算处理 （类似computed）属性，可以对state的数据进行批处理返回 

                                },
                                mutations:{ //同步操作函数处理，里面的所有内容都同步操作

                                },
                                actions:{   //异步函数处理 请求数据 等方式通过这

                                },
                                modules:{   //Store 模块化，在大型项目中不同的模块数据封开管理, 利用次属性来融合在一起方便管理

                                }
                            }
                        在store.js 中进行引入

                        import { a_Soter } from './a.js';

                        modules:['a_Soter']    //这样就把a.js 仓库中的数据柔和到了store 中方便我们开发和维护
                    </pre>
                </div>
            </div>
        </div>
        <!-- vuex 实际操作 -->
        <div class="myself-show row"> 
            <h3 class="text-center">Vuex 实际操作</h3>
            <hr>
            <div calss="text-left">
                <div class="pageAnalysis">
                    Vuex 获取stare数据: <br>
                    <hr>
                    <p style="color:red;font-size:13px;">下表从store仓库中获取数据进行渲染：</p>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>序号</th>
                                <th>姓名</th>
                                <th>年龄</th>
                                <th>性别</th>
                                <th>薪资（￥）</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in userList" :key="index">
                                <td>{{ index }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.age }}</td>
                                <td>{{ item.sex }}</td>
                                <td>{{ item.salary }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="pageAnalysis">
                    Vuex 操作表格数据: <br>
                    <hr>
                    <div>
                        <p style="color:red;font-size:13px;">我们对表格中的数据进行操作：</p>
                        <button class="btn btn-default" type="button" @click="sortUserList">sort userList（排序）</button>
                        <button class="btn btn-default" type="button" @click="asynAddUserlist">asynchronous add（异步添加）</button>
                    </div>
                </div>
                <div class="pageAnalysis">
                    Vuex 操作表格数据: <br>
                    <hr>
                    <div>
                        <p style="color:red;font-size:13px;">利用store 进行数据双向绑定：</p>
                        <div style="border:1px solid #ddd;padding:10px;margin-top:20px;">
                            <input type="text" class="form-control" v-model="inputValue">
                            <br>
                            <p class="alert alert-success">{{inputValue}}</p>
                            <p style="color:red;font-size:13px;">注：如果直接绑定inputValue后改变数据会报错 （Computed property "inputValue" was assigned to but it has no setter）</p>
                        </div>
                        
                        <div style="border:1px solid #ddd;padding:10px;margin-top:20px;">
                            <p style="color:red;font-size:13px;">处理方式 1：</p>
                            <input type="text" class="form-control" :value="inputValue" @input="$store.commit('alterInputValue',$event.target.value)">
                            <br>
                            <p class="alert alert-success">{{inputValue}}</p>
                            <p style="color:red;font-size:13px;">双向数据绑定  :value 然后 然后触发了input 事件，然后通过mutations改变</p>
                        </div>

                        <div style="border:1px solid #ddd;padding:10px;margin-top:20px;">
                            <p style="color:red;font-size:13px;">处理方式 2：</p>
                            <input type="text" class="form-control" v-model="inputValue1">
                            <br>
                            <p class="alert alert-success">{{inputValue1}}</p>
                            <p style="color:red;font-size:13px;">利用计算属性中的 get set 方法。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="myself-show row"> 
            <h3 class="text-center">Vuex 辅助函数</h3>
            <hr>
            <div calss="text-left">
                <div class="pageAnalysis">
                    Vuex 操作器，用于发变操作: <br>
                    <hr>
                    <p style="color:red;font-size:13px;">在我们实际操作中每次调用 this.$store 比较麻烦代码较多 Vuex 给我们提供了操作器</p>
                    <pre>
                        // 此时我们在改页面中引入 Vuex 并对Vuex进行打印
                        import Vuex from 'vuex';
                        console.log(vuex);

                        我们能看到4个函数。
                        mapActions   mapGetters   mapMutations   mapState

                        此时我们对4个里面的数据分别打分别得出的是一个对象
                    </pre>
                    <button class="btn btn-default" @click="consoleFun"> 打印 辅助函数 </button>
                    <p style="color:red;font-size:13px;">里面的数据都返回的是一个对象，可用展开符 ...Vuex.mapState(['inputValue','inputValue1']) 操作</p>
                </div>
            </div>
        </div>
        <br> <br> <br>
    </div>
</template>
<script>
import Vuex from 'vuex';
console.log(Vuex,'打印的Vuex');
export default {
    name:'storeStudy',
    data(){
        return {
            title:'Vuex 状态管理器',
            busFromval: '初始值',
        }
    },
    computed:{
        userList(){
            //直接获取仓库数据
            // return this.$store.state.userList;

            //被getter 处理后的数据
            return this.$store.getters.getterUserList;
        },
        inputValue(){
            return this.$store.state.inputValue;
        },
        inputValue1:{   //解决双向数据绑定 方法2
            get(){
                return this.$store.state.inputValue1;
            },
            set(num){
                this.$store.commit('alterInputValue1',num);
            }
        }
        
    },
    methods:{
        sortUserList(){
            this.$store.commit('mutationUserList','参数可接受')
        },
        asynAddUserlist(){
            this.$store.dispatch('actionUserList');
        },
        consoleFun(){
            console.log(Vuex.mapState(['inputValue','inputValue1']));
            console.log(Vuex.mapActions(['actionUserList']));
            console.log(Vuex.mapGetters(['getterUserList']));
            console.log(Vuex.mapMutations(['mutationUserList','addUserList']));
        }
    },
    beforeCreate(){
        // console.log('B组件初始化之前 beforeCreate');
    },
    created(){
        // console.log('B组件初始化之后 created');
        this.title ? this.$route.params.title : '';
        this.bus.$on('changeComponet', msg => {
            this.busFromval = msg;
            console.log(msg);
        });
    },
    beforeMount(){
        // console.log('B组件DOM加载之前 beforeMount');
    },
    mounted(){
        // console.log('B组件DOM加载之后 mounted');
    },
    
    beforeDestroy(){ //销毁
        // console.log('B组件销毁之前 beforeDestroy')
        this.bus.$off('changeComponet'); // 废弃 防止重复注册
    },
    destroyed(){
        // console.log('B组件销毁之后 destroyed')
    }
}
</script>
<style>

</style>