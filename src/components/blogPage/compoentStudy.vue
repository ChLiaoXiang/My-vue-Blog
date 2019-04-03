<template>
    <div id="base">
        <h4 class="title">{{title}}</h4>
        <hr>
        <div class="myself-show row"> 
            <h3 class="text-center">Vue 组件开发</h3>
            <hr>
            <div calss="text-left">
                <div class="pageAnalysis">
                    component组件开发: <br>
                    <hr>
                    注：该内容全部以cli 为示例，并会讲vue 解析是什么东西，Vue.js 引用组件开发类似。只需要外部引入或者直接注入到页面！ <br> <br>
                    <pre>
                        //在每个cli 中的vue 文件我们可以在全局注册，也可在局部引入！

                        //全局组件注册方法 在main.js 
                        import my-component from '/path';
                        Vue.component('my-component',my-component from);
                        //这样引入以后我们可以在任何组件中使用这个组件，组件具体的内容自己写想要定义的。 

                        注意： Vue 标签还是属性和自定义属性的命名规则，用- 的方式来区别他们，小驼峰的时候 写入应该用 - 来区分组件 
                        例如 myComponent  命名后要写成  my-component 来区分


                        ------------------------------------------------------------------------------------------------------

                        //在局部引入 直接在script 标签中直接引入 引入方式跟全局一样，同时要注册在实例里面
                        import my-component from '/path';
                        //注册的时候在Vue 组件中注册  组件中的写法如下
                        export default{
                            components:{
                                'my-component': my-component,
                            }
                        }
                        //这个时候就可以在template标签中可以使用了。   其实引用的方式类似！深入了解后都是一样的。
                    </pre>
                </div>
            </div>
        </div>
        <div class="myself-show row"> 
            <h3 class="text-center">Vue 声明周期函数</h3>
            <hr>
            <div calss="text-left">
                <div class="pageAnalysis">
                    Vue 常用属性: <br>
                    <hr>
                    注：每个组件都有相应的钩子函数（声明周期函数）且渲染过程也是跟着相应实例更新的。 <br><br>
                    <pre>
                        new Vue({
                            data(){
                                return {
                                    //存放数据  -->因为组件的数据要返回，主组件直接会保留在Vue 实例中
                                }
                            },
                            methods:{
                                //存放方法
                            },
                            computed:{
                                //计算属性返回
                            },
                            watch:{
                                //监控属性的处理
                                '监控数据':{
                                    handler(){  //处理的对对象

                                    },
                                    deep: true // 深度监听
                                }
                            },
                            //声明周期函数
                            beforCreate:function(){
                                //组件创建前
                            },
                            created:function(){
                                //组件创建完毕
                            },
                            beforMount:function(){
                                //组件挂在前
                            },
                            mounted:function(){
                                //组件挂在完成
                            },
                            beforUpdate:function(){
                                //数据发生改变执行  --监听实例中所有数据
                            },
                            update:function(){
                                //数据改变后执行
                            }

                            //执行销毁组件后会执行两个钩子函数 this.$destory()

                            beforDestory:function(){
                                //销毁组件之前执行
                            }
                            destory:function(){
                                //销毁组件之后执行
                            }

                        })
                    </pre>
                </div>
                <div class="pageAnalysis">
                    <a href="../../../static/imgs/vue-img/hookFun.png" target="_Blank">
                        <img src="../../../static/imgs/vue-img/hookFun.png" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'compoentStudy',
    data(){
        return {
            title:'Vue组建的学习'
        }
    },
    created(){
        this.title = this.$route.params.title;
    }
}
</script>
<style>

</style>