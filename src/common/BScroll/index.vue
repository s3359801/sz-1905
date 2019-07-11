<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
     name:"BScroll",
     data(){
         return{};
     },
     mounted(){
          this.scroll = new BScroll(this.$refs.wrapper,{
          probeType:1,
          tap:true,
          click:true,
          pullUpLoad:true
          });
     },
    methods:{
        handleScrollStart(cb){
            this.scroll.on("scroll",({x,y})=>{
                if(y > 10){
                    cb()
                }
            })
        },
        handleScrollEnd(cb){
            this.scroll.on("scrollEnd",()=>{                   
                setTimeout(()=>{
                    cb() 
                },2000)     
                })
            },
        handlePullingUp(cb){
            this.scroll.on("pullingUp",()=>{ 
                cb()
            })
        }
    },
        
}
</script>

<style>
    .wrapper {
        height:100%;
    }
</style>
