<template>
    <div id="base">
        <h4 class="title">{{title}}</h4>
        <hr>
        <div class="myself-show row"> 
            <h3 class="text-center">vueRouter 基础介绍</h3>
            <hr>
            <div calss="text-left">
                <div class="pageAnalysis">
                    Vue-router  使用方式：
                    <hr>
                    <pre>
                        //在安装Vue-cli时 如果未安装VueRouter 按照以下方法进行安装

                        第一步： npm install -S vue-router

                        第二步： 在main.js中写入路由配置和注册 或者 在建立一个新的js 文件来对他进行配置！
                            这里我们在src的router文件夹建立了一个index.js 文件进行配置

                            import Vue from 'vue'
                            import VueRouter from 'vue-router'

                            import 组件名 from 'path/组件路径'

                            Vue.use(VueRouter)  //vue 插件用法
                            let VueRouter = new VueRouter({
                                routes:[
                                    { 
                                        path:'/路由',
                                        name:'名字/规范跟组件名尽量一致',
                                        component: 组件名
                                    }
                                ]
                            })

                            export default VueRouter //暴露出来  ES6（组件开发） 
                        注：在子路由的情况下，父路由写name 会有警告。因为当某个路由有子级路由的时候，这时候父级路由需要一个默认的路由，所以父级路由不能定义name属性!

                        第三步：如果直接在main.js 中配置就不需引入index.js
                            import router from './router/index.js'
                            new Vue({
                                router, //注册Vue中
                            }}

                        //基本这样一个VueRouter的插件就注册完成了
                    </pre>
                    <br><br>
                    <pre>
                        //在该项目中，我们navlist 组件就是一个路由导航！
                        使用的方法，现在需要写一个放入路由的盒子 &lt;router-view/&gt; 来盛放路由组件
                        
                        然后可以通过 &lt;router-link :to="路由" &gt;  点击我跳转路由 &lt;/router-link&gt; 类似a标签
                        
                        或者用事件处理 this.$router.push()
                    </pre>
                </div>
            </div>
        </div>
        <div class="myself-show row"> 
            <h3 class="text-center">VueRouter 路由传参</h3>
            <hr>
            <div calss="text-left">
                <div class="pageAnalysis">
                    路由传参的方式： <br>
                    <hr>
                    方案一：
                    <pre>
                        //事件下：
                        handerActive(id){ //methods
                            this.$router.push({
                                path:`/path/$(id)`
                            })
                        }

                        在路由下：
                        {
                            path:'/path/:id',
                            name:'xxx',
                            compoennt: 路由名
                        }

                        //在子组件中获取路由穿过来的参数方法
                        this.$route.params.id
                    </pre>
                    方案二：
                    <pre>
                        //通过路由属性中的name来确定匹配的路由，通过params来传递参数。
                        this.$router.push({
                            name:'xxxx',
                            params:{
                                id:id
                            }
                        })

                        //路由配置必须有name 值
                        {
                            path:'/path',
                            name:'xxxx',
                            component: 路由名
                        }
                        //在子组件中获取参数
                        this.$route.params.id     
                        注： 这样的方式在url 中不会显示出来要传的值
                    </pre>
                    方案三：
                    <pre>
                        //使用path来匹配路由，然后通过query来传递参数这种情况下 query传递的参数会显示在url后面?id=？
                        this.$router.push({
                            path:'/path',
                            query:{
                                id:id
                            }
                        })

                        //路由配置必须有name 值
                        {
                            path:'/path',
                            name:'xxxx',
                            component: 路由名
                        }
                        //在子组件中获取参数
                        this.$route.query.id
                    </pre>
                </div>
            </div>
        </div>
        <div class="myself-show row"> 
            <h3 class="text-center">Vue 路由守卫</h3>
            <hr>
            <div calss="text-left">
                <div class="pageAnalysis">
                    路由守卫: <br>
                    <hr>
                    <pre>
                        //什么是路由守卫：
                        路由守卫，控制路由的权限! 路由守卫 可以分为全局守卫和路由独立守卫
                        全局守卫：
                            router.beforEach(to,from,next){
                                to//从什么地方来
                                from//到什么地方去
                                next()//目标路由，如果不能通过跳转，或者通过
                            }
                            注：在路由还未跳转之前是无法获取到组件的数据。

                        //定制路由
                        router：[
                            {
                                path:'/path',
                                name:'xxx',
                                beforEnter: (to,from,next) => {
                                    to//从什么地方来
                                    from//到什么地方去
                                    next()//目标路由，如果不能通过跳转，或者通过
                                }
                            }
                        ]

                        注： 该项目页面均用的router来实现的，所以所有实际情况操作均以这个项目来实现，页面的title 中的数据是通过路由传参获取！
                        要通过login 页面才能进入个人展示页面（oneSelf组件）;
                    </pre>
                </div>
            </div>
            <div calss="text-left">
                <div class="pageAnalysis">
                    路由守卫2: <br>
                    <hr>
                    <pre>
                        //在每个组件中有两个路由钩子函数 用来处理进入这个路由之前干什么（beforeRouterEnter）（beforeRouterLeave）
                        export default {
                            beforeRouteEnter(to,from,next){
                                next( vm => {
                                    //vm 可以拿到该组件的实例
                                    // console.log(vm); 
                                    next(); //在这我们直接通过了
                                });
                            },
                            beforeRouteLeave(to,from,next){

                            }
                        }
                        <h4 style="color:red">路由守卫2 钩子函数卸载了页面中</h4>
                    </pre>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    beforeRouteEnter(to,from,next){
        alert('你确定要进入路由组件？  -- from beforeRouteEnter');
        next( vm => {
            //vm 可以拿到该组件的实例
            // console.log(vm);
            next(); //在这我们直接通过了
        });
    },
    beforeRouteLeave(to,from,next){
        alert('你确定要离开路由组件？  -- from beforeRouteLeave');
        next( vm => {
            //vm 可以拿到该组件的实例
            next(); //在这我们直接通过了
        });
    },
    name:'routerStudy',
    data(){
        return {
            title:'VueRouter学习笔记'
        }
    },
    created(){
        this.title ? this.$route.params.title : '';
    }
}
</script>
<style>

</style>


