<template>
    <div id="login" class="container">
      <h1>{{msg}}</h1>
      <hr>
      <button class="btn btn-default" @click="handerLogin">登陆</button>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Login 登陆页面'
    }
  },
  methods:{
    handerLogin(){
      this.$router.push('/index');
      sessionStorage.setItem('id',-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
