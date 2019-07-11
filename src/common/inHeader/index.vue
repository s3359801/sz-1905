<template>
    <div id="inheader">
        <slot name="header" :icon="icon" :city="city" :icons="icons" :cityicon="cityicon"></slot>
        <h2>{{title}}</h2>
        <!-- <slot></slot> -->
    </div>
</template>

<script>
import {mapActions,mapState, mapMutations} from "vuex";
export default {
    props:{
        title:{
            type:String,
            default:"影片详情"
        }
    },
      computed:{
        ...mapState({
            city:state=>state.city.iptVal
        })
    },
    data(){
        return {
            icon:"影片",
            icons:"&#xe610;",
            cityicon:"&#xe674;"
        }
    }
}
</script>

<style scoped>
    #inheader{
        width: 100%;
        height: 1rem;
        background: #c94c23;
        color:#fff;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
    }
    #inheader>p{
        position: absolute;
        left: .2rem;
        font-size:.28rem;
    }
     #inheader>h2{
         font-size:.32rem;
         font-weight: 100;
     }

</style>

