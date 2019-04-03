<template>
    <div id="base">
        <h4 class="title">{{title}}</h4>
        <hr>
        <div class="myself-show row"> 
            <h3 class="text-center">Vue animation 动画学习</h3>
            <hr>
            <div calss="text-left">
                <div class="pageAnalysis">
                    Vue 动画基础涉及:
                    <hr>
                    <pre>
                        //在Vue 中 给我们提供了6个class 分别是
                            //进入动画
                            .v-enter{   //进入动画开始的第一帧

                            }
                            .v-enter-active{    //动画类型，动画时间
                                transition: all 1s ... //过渡动画方式
                                animation: ...(动画名)  //动画的方式
                            }
                            .v-enter-to{    //动画结束后的方式

                            }
                            //离开动画 也有一样的三个方式
                            .v-leave{   //离开动画前一帧  -->离开跟进入动画样式一样可以忽略

                            }
                            .v-leave-active{    //离开动画的过程
                                transition: all 1s ... //过渡动画方式
                                animation: ...(动画名)  //动画的方式
                            }
                            .v-leave-to{    //离开动画的样式

                            }
                    </pre>
                    <br><br>
                    <h4>示例：</h4>
                    <hr>
                    <div>
                        <p class="lead">
                            <button class="btn btn-primary" @click="demo1 = !demo1">示例 1 fade</button>    
                        </p>
                        <transition name="fade">
                            <div class="alert alert-info" v-if="demo1"> 这是示例1 的一个动画展示效果淡入淡出 </div>
                        </transition>
                        
                        <p class="lead">
                            <button class="btn btn-success" @click="demo2 = !demo2">示例 2 animation</button>    
                        </p>
                        <!-- type 有两个类型 以什么什么结束 animation / transition -->
                        <!-- appear 初始渲染状态 可取消后查看效果！ -->
                        <transition name="anit" type="animation" appear>
                            <div class="alert alert-success" v-if="demo2"> 这是示例2 Animation 动画效果</div>
                        </transition>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="myself-show row"> 
            <h3 class="text-center"> Vue 结合 Animation 库</h3>
            <hr>
            <div calss="text-left">
                <div class="pageAnalysis">
                    Vue 结合 animation CSS库开发:
                    <hr>
                    <pre>
                        //vue 结合animation 开发 transition 里面只能含有一个块
                            //transition 标签中我们可以对class 进行简写
                            &lt;transition
                                enter-class="enter"
                                enter-active-class="enter-active"
                                enter-to="enter-to"
                                leave-class="leave"
                                leave-active="leave-active"
                                leave-to="leave-to"&gt;

                                &lt;div&gt; 这是我简化后的动画书写方式  里面的名字可以自定义&lt;/div&gt;

                            &lt;transition&gt;
                            //及CSS 写法如下
                            &lt;style&gt;
                                .enter{ //开始动画前的第一帧

                                }
                                .enter-active{  //动画方式
                                    transition / animation ;
                                }
                                .enter-to{  //结束动画的状态

                                }

                                .leave{ //离开动画的第一帧

                                }
                                .leave-active{   //动画方式
                                    transition / animation ;
                                }
                                .leave-to{  //离开动画的状态

                                }
                            &lt;/style&gt;
                    </pre>
                    <br><br>
                    <h4>示例：</h4>
                    <hr>
                    <div>  
                        <p class="lead">
                            <button class="btn btn-success" @click="demo3 = !demo3">示例 3 Animation库</button>    
                        </p>
                        
                        <!-- animation 库都有初始话状态所有不需要结束和开始状态 -->
                        <transition 
                            enter-active-class="animated bounce"
                            leave-active-class="animated shake"
                        appear>
                            <div class="alert alert-success" v-if="demo3"> 这是示例2 Animation 动画效果</div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
        <br><br><br>
    </div>
</template>
<script>
export default {
    name:'routerStudy',
    data(){
        return {
            title:'Vue-animation 学习',

            demo1: true,   
            demo2: true,
            demo3: true,
        }
    },
    created(){

    }
}
</script>
<style>
    /* 示例 1 */
    .fade-enter{   /*进入动画的第一帧*/
        opacity: 0;
    }
    .fade-enter-active{
        transition: opacity 1s;
    }
    .fade-enter-to{ 
        opacity: 1;
    }

    .fade-leave{
        opacity: 1;
    }
    .fade-leave-active{
        transition: opacity 2s;
    }
    .fade-leave-to{
        opacity: 0;
    }

    /* 示例 2 */
    @keyframes alide-in {
        from{
            transform: translateY(20px);
        }
        to{
            transform: translateY(0px);
        }
    }
    @keyframes alide-out {
        from{
            transform: translateY(0px);
        }
        to{
            transform: translateY(20px);
        }
    }
    .anit-enter{
        opacity: 0;
        transform: rotateY(20px);
    }
    .anit-enter-active{
        transition: opacity 1s;
        animation: alide-in 1s ease-out;
    }
    .anit-enter-to{
        opacity: 1;
    }
    .anit-leave{
        opacity: 1;
    }
    .anit-leave-active{
        transition: opacity 1s;
        animation: alide-out 1s ease-out;
    }
    .anit-leave-to{
        opacity: 0;
    }
</style>


