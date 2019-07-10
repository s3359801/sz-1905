<template>
    <div class="movieTicket">
        <router-view></router-view>
        <InHeader title="影院">
           <template v-slot:header="props">
                <p class="big" @click="handleBack()">
                    <i class="iconfont size" v-html="props.icons"></i>
                {{props.icon}}</p>
                <div class="citys">
                <router-link class="city"
                :to='{name:"citys"}'
                tag="span">{{props.city}}
                    <i class="iconfont size" v-html="props.cityicon"></i>
                </router-link>
                </div>
           </template>
        </InHeader>
        <div class="top">
            <div class="search">
            <input type="text" placeholder="请输入影院名称或地址"
            v-model="iptVal">
            </div>
            <button @click="handleSearch()">搜索</button>

        </div>
        <div class="main">
            <Loading v-if="flag"/>
            <router-link class="shop"
            v-for="(item,index) in cinemaList"
            :key="index"
            :to='{name:"movieChoose",params:{id:item.id}}'
            tag="li"
            >
                <h3>{{item.name}}</h3>
                <p class="address">{{item.address}}</p>
                <span>{{item.price}}</span>

            </router-link> 
        </div>
    </div>
</template>

<script>
import  InHeader from "@/common/inHeader"

import http from "utils/http.js"
export default {
    name:"movieTicket",
    components:{
        InHeader

    },
  
     async created(){
        const getMovieNow = ()=>http("get","s/index?lat=&lon=")
        let data = await getMovieNow()
        if(data){
            this.flag= false;
        
        }else{
            this.flag= true;
        }
        console.log(data);
        this.cinemaList = data.cinemaList.list;
        console.log(this.cinemaList);
        
      },

    data(){
        return{
            cinemaList:[],
            flag:true,
            iptVal:"",
            valList:[]
            
        }
    },
    
    methods:{
        handleBack(){
            this.$router.go(-1)
        },
    }
}
</script>

<style scoped>
    .citys{
        position: absolute;
        right:0;
        width:2rem;
        height:100%;
        line-height:1rem;
        text-align: center;
    }
    .citys .city{
        font-size: .28rem; 
    }
    .movieTicket .size{
        font-size: .28rem;
    }
    .top {
        position: absolute;
        top:1rem;
        left:0;
        width: 100%;
        z-index: 10;
    }
    .top .search {
        width: 75%;
        height: 100%;
        float: left;
        margin-left:0.3rem;
        margin-top:.2rem;
    }
    .top .search input{
        width:95%;
        height:.64rem;
        font-size: .28rem;
        border:.02rem solid #ccc;
        padding:.16rem .24rem;
        border-radius: 5px;
    }
    .top  button {
        background: #fff;
        border: 0.02rem solid  #c94c23;
        width:1.26rem;
        height: .64rem;
        font-size: .28rem;
        color:#c94c23;
        border-radius: 5px;
        margin-top:.2rem;
    }
    .main{
        position: absolute;
        top:1.9rem;
        left:0;
        bottom: 0;
        width:100%;
        padding:0 .3rem;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .main .shop{
        width:100%;
        height:1.66rem;
        padding:.2rem .3rem;
        border-bottom: .02rem solid #eee;
    }
    .main .shop h3{
        font-size: .32rem;
        font-weight: 400;
        margin-bottom:.2rem;
        color:#333;
    }
    .main .shop p{
        color:#999;
    }
    .main .shop .address{
        max-width: 320px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .main .shop span{
        color:#c94c23;
    }
</style>
