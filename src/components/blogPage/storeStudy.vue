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
        <!-- Vuex -->
        <div class="myself-show row"> 
            <h3 class="text-center">Vuex 状态管理器</h3>
            <hr>
            <div calss="text-left">
                <div class="pageAnalysis">
                    Vuex 使用: <br>
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

                            const store = new.Vuex.Store({

                            })
                            export default sotre;
                    </pre>
                </div>
            </div>
        </div>
        <br> <br> <br>
    </div>
</template>
<script>
export default {
    name:'storeStudy',
    data(){
        return {
            title:'Vuex 状态管理器',
            busFromval: '初始值',
        }
    },

    methods:{
        
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