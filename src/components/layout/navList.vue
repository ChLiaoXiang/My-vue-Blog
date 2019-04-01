<template>
    <div id="navList">
        <nav class="navbar navbar-inverse navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="https://chliaoxiang.github.io/">
                        LiaoXiang
                    </a>
                </div>
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li :class="{active: haigLine == index}" v-for="(item,index) in navList" :key="index" @click="handerActive(item.rname,item.path,index,item.name)">
                            <a href="javascript:void(0)">{{item.name}}</a>
                        </li>
                    </ul>
                </div><!--/.nav-collapse -->
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name:'navList',
    data(){
        return {
            haigLine: -1,
            navList: this.$store.state.navList,  //练习将仓库放入其中
        }
    },
    methods:{
        handerActive(rname,path,index,name){
            sessionStorage.setItem('id',index);
            this.haigLine = index;
            this.$router.push({
                name:rname,
                params:{
                    title: name
                }
            });
        }
    },
    created(){
        if(sessionStorage.getItem('id') != null){   //将高亮位置存入缓存刷新页面不会跳走高亮
            this.haigLine = sessionStorage.getItem('id');
        }
    }
}
</script>
<style spcoed>
    .navbar-brand{
        font-size:20px;
        font-weight: 600;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow';
    }
    .navbar-nav{
        margin-left: 40px;
    }
    .navbar-nav>li{
        width: 120px;
        text-align: center;
    }
</style>

