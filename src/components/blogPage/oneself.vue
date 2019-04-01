<template>
    <div class="sayMySelf">
        <div class="row">
            <h4 class="col-md-12 title">自我独白</h4>
        </div>
        
        
        <div class="myself-show row"> 
            <div class="my-slef-swiper col-md-4">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item,index) in slideImages" :key="index">
                        <a href="#" target="_blank"><img :src="item.imageUrl" /></a>
                    </swiper-slide>
                    <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
                </swiper>
            </div>

            <div class="col-md-6 col-md-offset-1 show-star">
                <h3>个人信息</h3>
                <hr>
                <div style="margin-top:40px;">
                    <p class="my-info" v-for="(item,key) in myInfo" :key="key">
                        <span>{{key}}：</span>
                        <span>{{item}}</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="myself-show row"> 
            <h3 class="text-center">信息简介</h3>
            <hr>
            <div calss="text-left">
                <div class="pageAnalysis">
                    该页面利用Vue所有得知识点进行页面得构造分只是点的归纳: <br>
                    <hr>
                    1，nav导航栏做的一个全局组建，利用Vue提供得方法进行注册（Vue.component('name',import name from '/paht')）。
                    <hr>
                    2，nav条的点击利用的Vuerouter 实现功能，本利用了sessionStorage 来存储点点击后存储的id 对页面刷新路由和nav 不一致情况。
                    <hr>
                    3，nav中的数据利用的Vuex 状态管理的方式来进行的传参，使用将在Vuex 仓库管理中具体讲解。
                    <hr>
                    4，引入了swiper 个人展示中的轮播图。（npm install -S vue-awesome-swiper ， Vue.use(spwier) , 并引入CSS 文件）。
                    <hr>
                    5，在初步Vue中打包时，打包后 index.html 空白！ 初步解决方案是 config/index.js 中 build.assetsPublicPath : './' 值改成  './'最初是 '/'。
                </div>
            </div>
        </div>
        <br><br><br><br><br><br>
    </div>
</template>
<script>
export default {
    name:'onself',
    data(){
        return {
            slideImages:[   
                // 应该把图片,css,等文件引入到src 同级目录中得static 文件夹中（webpack 配置好了的）
                {name:'myImg',imageUrl:'../../../static/imgs/my-img1.jpg'},
                {name:'myImg',imageUrl:'../../../static/imgs/my-img2.jpg'},
                {name:'myImg',imageUrl:'../../../static/imgs/my-img3.jpg'},
                {name:'myImg',imageUrl:'../../../static/imgs/my-img4.jpg'},
                {name:'myImg',imageUrl:'../../../static/imgs/my-img5.jpg'},
                {name:'myImg',imageUrl:'../../../static/imgs/my-img6.jpg'},
                {name:'myImg',imageUrl:'../../../static/imgs/my-img7.jpg'},
                {name:'myImg',imageUrl:'../../../static/imgs/my-img8.jpg'},
                {name:'myImg',imageUrl:'../../../static/imgs/my-img9.jpg'},
            ],
            swiperOption: { //swiper 的配置
                autoplay: {//自动播放
                    delay: 2500,
                    disableOnInteraction: false
                },
                loop:true,
                pagination: {//分页
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet(index, className) {//自定义分页的按钮
                      return `<span class="${className} swiper-pagination-bullet-custom"></span>`
                    }
                }
            },
            myInfo:{
                姓名: '廖翔',
                身份证号: '513030199x071082xx',
                居住地址: '四川省成都市锦江区望江锦苑',
                户籍地址: '四川省达州市渠县',
                当前工作: '前端开发工程师 -- 2年',
                个人爱好: '吃饭，睡觉，二次元，动漫，小说，科技。'
            }
        }
    }
}
</script>
<style scoped>
    h4.title{
        padding: 10px 0;
        border-bottom: 2px solid #ddd;
    }
    .my-slef-swiper{
        text-align: center;
        width:400px;
    }
    .my-slef-swiper .swiper-slide{
        width:400px;
        height:500px;
    }
    .swiper-slide img{
        height:100%;
        width:100%;
    }
    .show-star{
        text-align: center;
    }
    .show-star .my-info{
        padding:10px;
        font-size: 16px;
        font-weight: 400;
        border-bottom: 1px solid #ddd;
    }
    .show-star .my-info span{
        display: inline-block;
    }
    .show-star .my-info span:nth-child(odd){
        text-align: right;
        width:30%;
    }
    .show-star .my-info span:nth-child(even){
        text-align: left;
        width:65%;
    }
    
</style>


