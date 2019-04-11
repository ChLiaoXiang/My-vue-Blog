<template>
    <div id="base">
        <h4 class="title">{{title}}</h4>
        <hr>
        <!-- 自定义指令 -->
        <div class="myself-show row"> 
            <h3 class="text-center">Vue 自定义指令</h3>
            <hr>
            <div calss="text-left">
                <div class="pageAnalysis">
                    自定义指令: <br>
                    <hr>
                    <pre>
                        //全局指令
                        Vue.directive('startColor', {
                            //一共有五个钩子函数  常用绑定的就bind 
                            bind(el, bind, vnode) { //只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
                                // el 绑定所在的元素   bind 绑定的数据   Vnode  绑定虚拟DOM对象的数据
                                // 功能： 给绑定一个全聚德start  
                                el.style.backgroundColor = 'red';
                                el.style.color = '#fff';
                                el.style.padding = '5px 10px';
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
                    </pre>
                </div>
            </div>
            <div class="pageAnalysis text-center">
                <p v-startColor> 我是全局自定义指令 v-starColor</p>
            </div>
            <div class="pageAnalysis">
                <pre>
                    //我是局部自定义指令
                    new Vue({
                        directives:{
                            myOn:{
                                bind(el,bind,vnode){    //实现一个类似于 v-on的功能
                                    //属性绑定和钩子函数均跟全局绑定方式一致！
                                    // el 当前绑定的元素  bind 当前绑定的数据  vnode 当前绑定虚拟dom 对象的数据
                                    el.style.cursor = 'pointer';
                                    console.log(bind);  //打印出来查看绑定的数据
                                    if(bind.arg === "click"){
                                        el.addEventListener('click',function(e){
                                            bind.modifiers.stop && e.stopPropagation;
                                            bind.value();
                                        })
                                    }
                                    
                                }
                            }
                        },
                        methods:{
                            myOnClick(){
                                cosnole.log('这是我做的一个myOn自定属性模仿 v-on:click 实现的功能！');
                            }
                        },
                    })
                </pre>
            </div>
            <div class="pageAnalysis text-center">
                点击我下面能看到我是否绑定到click 事件 同时stop 也能实现！ <br><br> 
                <p v-startColor v-myOn:click.stop="myOnClick"> 我是局部自定义指令 v-myOn</p>
            </div>
        </div>
        <!-- fillter过滤  -->
        <div class="myself-show row"> 
            <h3 class="text-center">Vue fillter过滤属性</h3>
            <hr>
            <div calss="text-left">
                <div class="pageAnalysis">
                    fileter过滤属性: <br>
                    <hr>
                    <pre>
                        // Vue fillter 过滤属性比较局限，可以处理简单的东西，computed计算属性能完全处理 
                        new Vue({
                            data:{
                                msg: 'fillter 过滤属性的值',
                            }
                            filters:{
                                myFillter(msg){
                                    console.log(msg); //fillter 过滤属性的值  通过 | 管道把数据传输到了过滤属性中
                                    
                                    console.log(this,'????');  // this 并不是Vue 实例 所以在操作比较复杂混合处理的时候并不好用
                                    //我们可以对这个过滤属性进行操作然后返回出去 也可以直接返回
                                    return '我是 filtter 处理后的数据';
                                }
                            },
                        })

                        //注意 fillter 也可以用做一个全局的属性 
                        Vue.fillter('name',function( msg ){ reutrn '想要返回的数据' });

                        整个fillter 主要的不同他的this 指向一个undefined --> 同时有一个管道语法，多个管道是从左往右执行。
                    </pre>
                    <div>
                        <p>过滤属性要处理渲染的东西如下:</p>
                        <p>{{ msg | myFillter}}</p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        <br><br>
    </div>
</template>
<script>
export default {
    name:'directiveStudy',
    data(){
        return {
            title:'Vue自定义指令学习',
            msg: 'fillter 过滤属性的值'
        }
    },
    filters:{
        myFillter(msg){
            console.log(msg); //fillter 过滤属性的值  通过 | 管道把数据传输到了过滤属性中
            
            console.log(this,'????');  // this 并不是Vue 实例 所以在操作比较复杂混合处理的时候并不好用
            //我们可以对这个过滤属性进行操作然后返回出去 也可以直接返回
            return '我是 filtter 处理后的数据';
        }
    },
    directives:{
        myOn:{
            bind(el,bind,vnode){    //实现一个类似于 v-on的功能
                //属性绑定和钩子函数均跟全局绑定方式一致！
                // el 当前绑定的元素  bind 当前绑定的数据  vnode 当前绑定虚拟dom 对象的数据
                el.style.cursor = 'pointer';
                console.log(bind);  //打印出来查看绑定的数据
                if(bind.arg === "click"){
                    el.addEventListener('click',function(e){
                        bind.modifiers.stop && e.stopPropagation;
                        bind.value();
                    })
                }
                
            }
        }
    },
    methods:{
        myOnClick(){
            console.log('这是我做的一个myOn自定属性模仿 v-on:click 实现的功能！');
            alert('这是我做的一个myOn自定属性模仿 v-on:click 实现的功能！');
        }
    },
    created(){
        this.title ? this.$route.params.title : '';
    }
}
</script>
<style>
    

</style>