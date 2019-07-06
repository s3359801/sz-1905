<template>
  <div id="app">
    <router-view></router-view>
    <Tobar/>
  </div>
</template>

<script>
import Tobar from "./common/tobar"
export default {
   name:"app",
   components:{
     Tobar
   }
}
</script>

<style>

</style>
