<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .myself-show{
    margin-top: 30px;
    border:1px solid #ddd;
    box-shadow: 1px 1px 1px #ddd;
    box-sizing: border-box;
    padding:10px 0;
  }
  .pageAnalysis{
    font-size: 16px;
    font-weight: 400;
    padding:0 40px;
    margin-bottom: 40px;
  }
  img{
    width:100%;height:100%;
  }
</style>
