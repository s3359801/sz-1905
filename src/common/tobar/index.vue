<template>
    <div id="footer">
        <ul>
            <router-link v-for="(item,index) in tobars" 
            :key="index"
            :to="item.path"
            tag="li">
                <i v-html="item.icon" class="iconfont"></i>
                <span>{{item.title}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Tobar",
    data(){
        return{
            tobars:[
                {
                    icon:"&#xe621;",
                    title:"影片",
                    path:"/movie"
                },
                 {
                    icon:"&#xe61e;",
                    title:"影院",
                    path:"/cinema"
                },
                 {
                    icon:"&#xeca2;",
                    title:"我的",
                    path:"/mine"
                },
            ],
    
        }
    },
 
 }

</script>

<style scoped>
    #footer {
        width:100%;
        height:1rem;
        border-top:1px solid #C94C23;
        position: fixed;
        bottom: 0;
        left:0;

    }
    #footer>ul {
        width:100%;
        height:100%;
        display: flex;
    }
    #footer>ul>li{
        width:33%;
        height:100%;
        text-align: center;
        display: flex;
        flex-direction:column;
        padding-top:3px;
    }
    #footer>ul>li .iconfont {
        font-size: 0.48rem;
    }
 
    #footer>ul>.router-link-active{
        color:#C94C23;
    }
</style>
