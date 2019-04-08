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
                    <h4 class="text-center">Vue 组件挂在过程：</h4>
                    <div style="width:38%;margin:0 auto;">
                        <a href="../../../static/imgs/vue-img/hookFun.png" target="_Blank">
                            <img src="../../../static/imgs/vue-img/hookFun.png" alt="">
                        </a>
                    </div>
                    <pre>
                        <ol>
                            <li>在 new Vue()  完成以后会触发beforCreate（创建组件前的钩子函数）。</li>
                            <li>然后观察数据，初始化事件，这个阶段是实例Vue 中的一个初始化阶段，这个阶段完成后就能访问到Vue中的事件和数据了，出发钩子函数created。</li>
                            <li>初始化阶段完成后，Vue开始解析HTML 准备挂在到DOM 中（分别会分析数据是el 还是 template）如果是el 也要把el 里面的内容解析成模板。</li>
                            <li>解析完成后，准备挂入DOM 节点的时候,这是会触发beforMount 钩子函数，现在这时是无法访问DOM 节点的。</li>
                            <li>挂入DOM节点后将会触发mounted 钩子函数，现在所有的vDOM都挂载到了DOM树上，此时可以访问到DOM树上的节点。</li>
                            <hr>
                            <li>整个完成以后我一致mounted 这个阶段，来识别是否有数据发生改变，若发生改变，是否重新渲染相应节点</li>
                            <ol>
                                <li>数据发生前出发的钩子函数beforUpdate</li>
                                <li>数据发生改变后触发的钩子函数update</li>
                            </ol>
                            <li>组件销毁是也会触发两个相应的函数  销毁组件的方法是 this.$destroy()</li>
                            <ol>    
                                <li>销毁前触发beforDestroy 这个钩子函数</li>
                                <li>销毁后触发destroy 这个钩子函数</li>
                            </ol>
                        </ol>

                        注：整个组件的渲染过程基本介绍完成。 Vue 渲染过程可以反复观看  <a href="https://www.cnblogs.com/zhaodagang8/p/7819414.html" target="_Blank">这里</a>
                    </pre>
                </div>
            </div>
        </div>
        <!-- 组件之间的通信 -->
        <div class="myself-show row"> 
            <h3 class="text-center">vue组件之间的通信</h3>
            <hr>
            <div calss="text-left">
                <div class="pageAnalysis">
                    父组件与子组件之间的通信：
                    <hr>
                    <pre>
                        //在此例中我们在整个项目中在建立一个此组件的子组件，在整个项目中navList 就已经是一个全局组件了，我们就不引入这个组件

                        父组件HTML代码：
                        &lt;div&gt;
                            &lt;son-component sather-to-son="我是他爸爸=。="&gt; &lt;/son-component&gt;
                        &lt;/div&gt;
                        父组件中注册子组件 javaScript:
                        improt sonCompoent from './path'
                        new Vue({
                            data(){
                                return{

                                }
                            },
                            components:{
                                'son-component': sonCompoent,
                            }
                        })

                        子组件HTML 代码：
                        &lt;div&gt;
                            &lt;p&gt; 这是来自辅助见的一个值：{ {father-to-son} } &lt;/p&gt;          
                        &lt;/div&gt;
                        子组件javaScript 代码：
                        new Vue({
                            data(){
                                return {

                                }
                            },
                            props:['father-to-son'],
                        })

                        props可以是个对象来限定传入的值的内容
                         props:{
                             'father-to-son':{
                                 type:[], // 可以是个数组也可以是一规则。
                                 required: true, //必填
                                 default: xx //默认值
                            }
                         }

                         props 具体的验证信息 <a href="https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E9%AA%8C%E8%AF%81">查看我</a>
                    </pre>
                    <br><br>
                    展示如下：   
                    <son-compoent v-startColor fTos="我是父组件穿过来的值！"></son-compoent>
                </div>
            </div>
        </div>
        <div class="myself-show row"> 
            <h3 class="text-center">vue组件之间的通信</h3>
            <hr>
            <div calss="text-left">
                <div class="pageAnalysis">
                    子组件和父组件之间的通信：
                    <hr>
                    <pre>
                        //子组件与父组件之间的通信需要通过事件提示
                        父组件HTML代码：
                        &lt;div&gt;
                            &lt;son-component @toFather="fromSonCompoent" &gt; &lt;/son-component&gt;
                        &lt;/div&gt;
                        父组件中注册子组件 javaScript:
                        improt sonCompoent from './path'
                        new Vue({
                            data(){
                                return{

                                }
                            },
                            components:{
                                'son-component': sonCompoent,
                            },
                            methods:{
                                fromSonCompoent(msg){
                                    console.log(msg)
                                }
                            }
                        })

                        子组件HTML 代码：
                        &lt;div&gt;
                            &lt;p&gt; 这是来自辅助见的一个值：{ {father-to-son} } &lt;/p&gt;       
                            &lt;button @click="msgToFather" &gt; click me &lt;/button&gt;
                        &lt;/div&gt;
                        子组件javaScript 代码：
                        new Vue({
                            data(){
                                return {
                                    
                                }
                            },
                            methods:{
                                msgToFather(){
                                    this.$emit('toFather','我是子组件传给负组件的值');
                                }
                            }
                        })
                    </pre>
                    <br><br>
                    展示如下：   
                    <son-compoent  @toFather="fromSonCompoent"></son-compoent>
                    <p v-startColor>{{msg}}
                        <button class="btn btn-default btn-xs"  @click="msg = '我是初始值'"> 还原初始值 </button> 
                    </p>
                </div>
            </div>
        </div>
        <div class="myself-show row"> 
            <h3 class="text-center">slot component keep-live 标签</h3>
            <hr>
            <div calss="text-left">
                <!-- slot -->
                <div class="pageAnalysis">
                    slot 标签用法
                    <hr>
                    <pre>
                        此方法是在子组件中想让父组件插入相应的HTML  使用
                        以test.vue 为例：
                            代码直接放入 test.vue中
                    </pre>
                    <son-compoent>
                        <div>我是一个没有名字的插槽</div>
                        <div slot="ooo">我是命了名字的插槽，可以精准的插如子组件的某个位置</div>
                        <div>我没有名字  但是我会默认插入没有命名的插槽中去  我在命了名字插槽的下面，但是我会显示在他的上面</div>
                    </son-compoent>
                </div>
                <!-- component -->
                <div class="pageAnalysis">
                    component 标签用法
                    <hr>
                    <pre>
                        component 标签里面有一个 is 属相
                        &lt;component is="sonCompoent"&gt; &lt;/component&gt;

                        //这样就能显示我们test.vue中的组件了， 注：每次他的切换都会重新加载一次数据，我们骚后就会介绍keep-live
                    </pre>
                    component 来引入子组件
                    <component :is="page"></component>
                </div>
                <!-- keep-live -->
                <div class="pageAnalysis">
                    keep-live 标签用法
                    <hr>
                    <pre>
                        import router form 'router'
                    </pre>
                </div>
            </div>
        </div>
        <br><br><br>
    </div>
</template>
<script>
import sonCompoent from '../layout/test';    //引入的子组件
export default {
    name:'compoentStudy',
    data(){
        return {
            title:'Vue组建的学习',
            msg:'我是初始值',
            page:'son-compoent'
        }
    },
    components:{    //注册子组件
        'son-compoent': sonCompoent,
    },
    methods:{
        fromSonCompoent(msg){
            this.msg = msg;
        }
    },
    created(){
        this.title = this.$route.params.title;
    }
}
</script>
<style>

</style>