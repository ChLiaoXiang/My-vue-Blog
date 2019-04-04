<template>
    <div>
        <p>  这是测试组件： {{fTos}} </p>
        <p> <button class="btn btn-default"  @click="msgToFather">click me</button> </p>

        <!-- 这里放入一个solt 标签，让父组件来插入 -->
        <slot></slot>
        <!-- 这里给solt 一个name 属性，让父组件准确插入 -->
        <slot name="ooo"></slot>
    </div>
</template>
<script>
export default {
    name:'test',
    data(){
        return {

        }
    },
    props:['fTos'],
    methods:{
        msgToFather(){
            this.$emit('toFather','我是子组件传给负组件的值');
        }
    }
}
</script>
<style scoped>

</style>


