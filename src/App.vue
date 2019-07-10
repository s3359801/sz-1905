<template>
  <div id="app">
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <Tobar v-if="$route.meta.flag"/>
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
    #app{
      height:100%;
    }
</style>
