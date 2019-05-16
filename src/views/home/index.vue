<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <img alt="Vue logo" src="../../assets/hive.svg">
    <div class="hive" ref="dive"></div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" ref="hello" @tab="tab"/>
  </div>
</template>

<script lang="ts">
import entry from './entry'
export default entry
</script>
<style>
  .hive {
    height:50px;
    width:40px;
    background-image: url("../../assets/hive.svg");
  }
</style>
