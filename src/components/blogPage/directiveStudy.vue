<template>
    <div id="base">
        <h4 class="title">{{title}}</h4>
        <hr>
        <div class="myself-show row"> 
            <h3 class="text-center">Vue 自定义指令</h3>
            <hr>
            <div calss="text-left">
                <div class="pageAnalysis">
                    自定义指令: <br>
                    <hr>
                    <pre>

                    </pre>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'directiveStudy',
    data(){
        return {
            title:'Vue自定义指令学习'
        }
    },
    created(){
        this.title = this.$route.params.title;
    }
}
</script>
<style>

</style>