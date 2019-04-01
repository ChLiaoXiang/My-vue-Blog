<template>
    <div id="base">
        <h4 class="title">{{title}}</h4>
        <hr>
        <!-- Vue 基础入门指令 -->
        <div class="myself-show row"> 
            <h3 class="text-center">Vue 入门知识点</h3>
            <hr>
            <div calss="text-left">
                <div class="pageAnalysis">
                    vue 基本指令: <br>
                    <hr>
                    <pre>
                        let vm = new Vue({      
                            data(){ //如果是子组件 数据要return 出去
                                msg : 'hello Vue.js',
                                userList: [
                                    {name:'lx',age:12,sex:'男'},
                                    {name:'lc',age:12,sex:'男'},
                                    {name:'lcm',age:12,sex:'女'},
                                ]
                            },
                            methods:{
                                hanlderClick(){
                                    console.log('hello bind , 我是一个绑定的click 事件！');
                                }
                            }
                        })
                    </pre>
                    1，Vue双花括号语法{{ }}， 在Vue 中的数据可以直接放入双花括号里， 也可以放入一些比较简单的表达式。 <br><br>
                    2，Vue 中 绑定一个数据 例如： input 输入框绑定一个默认值 v-on:value = "data"; data = >vue中实例的数据。简写 :value <br><br>
                    3，在Vue 中绑定一个方法 用v-bind 来绑定一个事件 v-bind:click="函数" ，简写的方式 @click，方法一般实例在methods里面。<br><br>
                    4，如何动态绑定一个class => :class="{active: boolean }",如何动态绑定一个:style = "",computed:{ } 计算属性中返回一个标准的样式对象即可<br><br>
                    5，条件渲染v-if / v-else-if / v-else 来判断是否渲染。例如：<br>
                    type的值来显示标签里的内容  v-if="type == 1"/显示A  v-else-if="type == 2"/显示B   v-else/ 显示not A B <br><br>
                    6，在标签中渲染列表 v-for 指令： v-for="(item,key,index) in  userList" 分别把里面的内容用{ { item.name } }等模板语法渲染出来。注意在遍历一个对象的时候有三个参数
                    第一个是value,第二个是对象的key,第三个是下标。<br><br>
                    7，事件修饰符： 过去我们阻止事件冒泡 e.stopPropagation Vue 给我们提供了@click.stop 包括还有一下的阻止行为的方式：<br>
                        .stop / 阻止冒泡行为  .prevent / 阻止默认行为  .self / 事件自身（避免冒泡影响） .once / 只触发一次
                </div>
            </div>
        </div>
        <!-- 表单练习内容 -->
        <div class="myself-show row"> 
            <h3 class="text-center">Vue 表单的一个练习</h3>
            <hr>
            <div calss="text-left">
                <div class="pageAnalysis">
                    vue-from 表单:
                    <hr>
                    <form class="form-horizontal">
                        <div class="form-group">
                            <label for="inputEmail3" class="col-sm-2 control-label">邮箱：</label>
                            <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail3" placeholder="Email" v-model="userInfo.email">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputPassword3" class="col-sm-2 control-label">密码：</label>
                            <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword3" placeholder="Password" v-model="userInfo.pwd">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">年龄：</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" placeholder="Password" v-model="userInfo.age">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputPassword3" class="col-sm-2 control-label">爱好：</label>
                            <div class="col-sm-10 checkbox">
                                <label>
                                    <input type="checkbox" value="吃饭" v-model="userInfo.likes"> 吃饭
                                </label>
                                <label>
                                    <input type="checkbox" value="睡觉" v-model="userInfo.likes"> 睡觉
                                </label>
                                <label>
                                    <input type="checkbox" value="打豆豆" v-model="userInfo.likes"> 打豆豆
                                </label>
                                <label>
                                    <input type="checkbox" value="撩妹" v-model="userInfo.likes" checked="checked"> 撩妹
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputPassword3" class="col-sm-2 control-label">备注：</label>
                            <div class="col-sm-10">
                                <textarea class="form-control" rows="3" v-model="userInfo.remark"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputPassword3" class="col-sm-2 control-label">性别：</label>
                            <div class="col-sm-10 checkbox">
                                <label class="radio-inline">
                                    <input type="radio" name="sex" value="1" v-model="userInfo.sex"> 男
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" name="sex" value="0" v-model="userInfo.sex"> 女
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputPassword3" class="col-sm-2 control-label">水平：</label>
                            <div class="col-sm-10">
                                <select class="form-control" v-model="userInfo.level">
                                    <option v-for="(item,index) in nowType" :key="index" :value="item">{{item}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-default" @click.prevent="">Sign in</button>
                            </div>
                        </div>
                    </form>
                    <hr>
                    <div class="form-horizontal">
                        <div class="form-group">
                            <label class="col-sm-2 control-label">邮箱：</label>
                            <div class="col-sm-10">
                                {{userInfo.email}}
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">密码：</label>
                            <div class="col-sm-10">
                                {{userInfo.pwd}}
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">年龄：</label>
                            <div class="col-sm-10">
                                {{userInfo.age}}
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">爱好：</label>
                            <div class="col-sm-10">
                                <span v-for="(item,index) in userInfo.likes" :key="index">{{ item }}，</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">备注：</label>
                            <div class="col-sm-10">
                                {{userInfo.remark}}
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">水平：</label>
                            <div class="col-sm-10">
                                {{userInfo.level}}
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">性别：</label>
                            <div class="col-sm-10">
                                {{userInfo.sex == 1?'男':'女'}}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="pageAnalysis">
                        表单里的笔记
                        <hr>
                        1，渲染数字的时候我们会发现一件事，就是input 输入的内容现在是的时候是 string ，但是我们要得到的是number 类型，Vue 在双向数据绑定的时候给了我们一个.number修饰符
                        v-moodel.number 。<br><br>
                        2，双向数据绑定中，我们在input 框中输入相应渲染的内容也跟着改变，如何让输入完成后内容才发生改变呢？ vue 提供了另外一个修饰符来进行修改 .lazy修饰符，v-model.lazy 。 <br><br>
                        3，在渲染的时候如果前后都出现了空格，那么内容会渲染成相同的空格，提交给后端会造成不必要的麻烦，Vue 也提供的一个相应的修饰符 .trim <br><br>
                        4，如果要要在html 中渲染回车等符号 pre 标签意以外 word-spacing   white-space 两个CSS 属性。 <br><br>
                        5，在Vue中修改数组的里面的内容，时间听不到数据变化的，所以Vue 给我们提供了一个方法，他挂在原型和自己身上Vue.$set(target,index,value);
                        <br> <br>
                        例如：<br>
                        <pre>
                            new Vue({
                                data(){
                                    userLIstanbul:[ 5,6,7,8,9,10 ]
                                },
                                methdos:{
                                    hanlderClick(){ //点击这个让这个userLIstanbul从 没点一次每次每个数加3
                                        this.userLIstanbul.forEach((val,index) = >{
                                            // 如果用这种方式 页面的试图无法被重新渲染。因为栈里的值没变！他存储的内存地址还是userLIstanbul的地址
                                            val = val + 3;  
                                            //利用Vue 提供的方法 Vue.$set(target,index,value);
                                            this.$set(this.userLIstanbul,index, val+3); //改变成功
                                        })
                                    }
                                }
                            })
                            示例：
                        </pre>
                        <ul>
                            <li v-for="(item,index) in userLIstanbul" :key="index">{{item}}</li>
                        </ul>
                        <button class="btn btn-default" @click="hanlderClick"> hanlderClick </button>

                        <br><br>
                        所以Vue 对数组多种方法进行了重写  分别有一下方法以数据列表的形式进行渲染。<br><br>
                        <ol class="myOl">
                            <li v-for="(item,index) in rewriteArrayApis" :key="index">{{item}}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!-- 计算 监听 属性 -->
        <div class="myself-show row"> 
            <h3 class="text-center">Vue 中的计算属性和监听属性</h3>
            <hr>
            <div calss="text-left">
                <div class="pageAnalysis">
                    计算属性: <br>
                    <hr>
                    <pre>
                        new Vue({  //直接通过计算属性来把 ￥符号显示在页面中
                            data(){ 
                                fruits:[
                                    {name:'apple',  price:'12'},
                                    {name:'banana',  price:'15'},
                                    {name:'pear',  price:'13'},
                                ]
                            },
                            computed:{  //计算属性返回的方法 
                                compitedFruits(){ 依赖数据发生改变也将触发 计算属性
                                    return this.fruits.map((v,i) => {
                                        var obj = {},
                                        obj.name = v.name;
                                        obj.price = '￥'+v.price;
                                        return obj;
                                    })
                                }//计算属性默认 getter 方法打 如果有必要可以使用setter方法
                                compitedFruits:{
                                    getter:function(){
                                        //后执行  
                                    },
                                    setter:function(){
                                        //先执行
                                    }
                                }
                            } 
                             
                        })
                    </pre>
                    <!-- 用计算属性处理后显示水果的价格 -->
                    <p>下列数据是经过computed 处理后显示的数据：</p>
                    
                    <ol>
                        <li v-for="(item,index) in compitedFruits" :key="index">{{item.name}}: {{item.price}}斤</li>
                    </ol>
                    <hr>
                    监听属性: <br>
                    <hr>
                    <pre>
                        new Vue({
                            data:{  //老规矩 实例 el被省略
                                fruits:[    
                                    {name:'apple',  price:'12'},
                                    {name:'banana',  price:'15'},
                                    {name:'pear',  price:'13'},
                                ]
                            },
                            methods:{   //使用一个按钮来改变数来触发watch 事件
                                handlerWatch(){
                                    this.fruits.forEach((v,i) => {
                                        v.price = v.price - 0 + 5;
                                    })
                                }
                            },
                            watch:{ // 监听属性，如果数据发生变化触发
                                fruits:{
                                    handler(newVal,oldVal){
                                        console.log(newVal,'这是新值');
                                        console.log(oldVal,'这是旧值');
                                    },
                                    deep:true   //深度监听
                                }
                            }
                        })
                    </pre>
                    <button class="btn  btn-default" @click="handlerWatch"> 监听watch </button>    &lt; == 点击这个按钮打开控制台可见听到数据
                </div>
            </div>
        </div>
        <br><br>
    </div>
</template>
<script>
export default {
    name:'baseStudy',
    data(){
        return {
            title:'Vue基础笔记',
            nowType:['高级','中级','低级'],
            userInfo:{
                email: '12345@qq.com',
                pwd: '123456',
                age: 12,
                likes: [],
                remark :'这是一些胡乱的东西',
                sex: 1,
                level: '中级'
            },
            userLIstanbul:[ 5,6,7,8,9,10 ],
            rewriteArrayApis:[
                'Array中的push的push方法重写，用法未变 arr.push() ==> 数组后添加',
                'Array中的pop的pop方法重写，用法未变 arr.pop() ==> 数组后删除，返回删除的数组',
                'Array中的shift的shift方法重写，用法未变 arr.shift() 数组第一位删除，返回删除的',
                'Array中的unshift的unshift方法重写，用法未变 arr.unshift() 数组第一个添加',
                'Array中的replice的replice方法重写，用法未变 arr.replice() 数组的删除和增加方法',
                'Array中的sort的sort方法重写，用法未变 arr.sort() 排序',
                'Array中的reverse的reverse方法重写，用法未变 arr.reverse() 倒序',
                
            ],
            fruits:[
                {name:'apple',  price:'12'},
                {name:'banana',  price:'15'},
                {name:'pear',  price:'13'},
            ],
            num: 0
        }
    },
    computed:{
        compitedFruits(){
            return this.fruits.map((v,i) => {
                var obj = {};
                obj.name = v.name;
                obj.price = '￥'+v.price;
                return obj;
            })        
        }               
    },
    watch:{
        fruits:{
            handler(newVal,oldVal){
                console.log(newVal,'这是新值');
                console.log(oldVal,'这是旧值');
            },
            deep:true
        }
    },
    methods:{
        hanlderClick(){
            this.userLIstanbul.forEach((v,i) => {
                // v += 3;
                // console.log(v); //大效果已经改变但是内容没发生改变
                this.$set(this.userLIstanbul,i, v+3); //此时内容也放生了改变
            })
        },
        handlerWatch(){
            this.fruits.forEach((v,i) => {
                v.price = v.price - 0 + 5;
            })
        }
    },
    created(){
        // console.log(this.$route.params.title);
    },
    mounted(){
        
    }
    
}
</script>
<style>
    .myOl>li{
        line-height: 40px;
        border-bottom: 1px solid #ddd;
    }
</style>
