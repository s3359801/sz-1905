<template>
    <div id="inheader">
        <slot name="header" :icon="icon" :city="city" :icons="icons" :cityicon="cityicon"></slot>
        <h2>{{title}}</h2>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:"影片详情"
        }
    },
    data(){
        return {
            icon:"影片",
            icons:"&#xe610;",
            city:"上海市",
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

