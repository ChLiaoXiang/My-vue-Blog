<template>
    <div id="index">
        <nav-list></nav-list>
        <div class="container">
            <transition enter-active-class="animated zoomIn" appear>
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    name:'index',
    data(){
        return {
            
        }
    },
    methods:{

    },
    mounted(){
        //  nav calss 效果
        // sessionStorage.setItem('id',-1);
    }
}
</script>
<style>

</style>


