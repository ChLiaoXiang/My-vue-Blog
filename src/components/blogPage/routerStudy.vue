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
                        import router form 'router'
                    </pre>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'routerStudy',
    data(){
        return {
            title:'VueRouder学习笔记'
        }
    },
    created(){
        this.title = this.$route.params.title;
    }
}
</script>
<style>

</style>


