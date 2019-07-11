<template>
    <div class="movieComing">
        <InHeader title="影片详情">
           <template v-slot:header="props">
                <p class="big" @click="handleBack()">
                    <i class="iconfont size" v-html="props.icons"></i>
                    {{props.icon}}
                </p>
           </template>
        </InHeader>
        <div class="main">
            <Loading v-if="flag"/>
        <div class="module1">
            <img :src="movieList.moviePoster">
            <div class="box">
            <h3>{{movieList.name}}</h3>
            <p>{{movieList.type}}</p>
            <p>语言:{{movieList.language}}</p>
            <p>片长：{{movieList.length}}</p>
            <p class="type">上映时间：{{movieList.showTime}}</p>
            </div>
        </div>
        <div class="module2">
            <div class="title">
                <h2>影片信息</h2>
            </div>
                <div class="row"><span>导演：</span>
                                 <span>{{movieList.director}}</span>
                </div>
                <div class="row toStar"><span>主演：</span>
                                        <span>{{movieList.actor}}</span>
                </div>  
                <div class="title">
                <h2>剧情介绍</h2>
                </div> 
                <div class="plot">
                    <p>{{movieList.desc}}</p>
                                              
                </div>
                  
            </div>
    </div>
    
    <InFooter/>
    </div>
</template>
    
<script>
import  InHeader from "@/common/inHeader"
import  InFooter from "@/common/inFooter"
import http from "utils/http.js"
export default {
    name:"movieComing",
    props:["id"],
    components:{
        InFooter,
        InHeader,
    },
     async activated(){
        const movieComing =()=>http("get","s/movieDetail?",{id:this.$route.params.id})
        
       
        let data = await movieComing()
        if(data){
            this.flag= false;
        
        }else{
            this.flag= true;
        } 
        this.movieList = data;
        
      },

      data(){
          return{
              movieList:{},
              flag:true
          }
      },
  
    methods:{
        handleBack(){
            this.$router.push("/movie")
        }
    }
}
</script>

<style scoped>

    .movieComing h2{
        font-size: .32rem;
        font-weight: 100;
    }
    .movieComing .size{
        font-size: .28rem;
    }
    .movieComing .module1 span{
        font-size: .30rem;
    }
    .movieComing img {
        width:2rem;
        height:3rem;
        float: left;
    }
    .main {
        width: 100%;
        position: absolute;
        top:1rem;
        left:0;
    }
    .module1{
        background: #eee;
        width:100%;
        height:3.6rem;
        padding:.2rem;
       
    }
    .box {
        float: left;
        margin-left:.5rem;
        color:#333;
        font-size: .26rem;

    }
    .box h3{
        font-size: .30rem;
        font-weight: 400;
        margin-top:.3rem;
        height:.44rem;
        line-height: .44rem;
    }
    .box .type{
        line-height:.44rem;
        height:.44rem;
    }
     .title{
        margin-top:.4rem;
        margin-left:.2rem;
        margin-bottom: .1rem;
        border-left:.04rem solid #c94c23;
        height:.56rem;
        padding-left:.2rem;
        line-height: .56rem;
    }
    .module2 .title h2{
         color:#666666;
         font-size: .36rem;
    }
    .movieComing .module2  .row{
        margin-left:.2rem;
        padding-left:.32rem;
        padding-right:.4rem;
        color:#999;
        font-size: .24rem;
    }
    .toStar {    
        padding-bottom:.2rem;
        padding-right:.2rem;
        border-bottom: .02rem solid #ccc;
    }
    .movieComing .module2 .plot {
        padding-right:.6rem;
        padding-left:.6rem;
        color:#999;
        font-size: .24rem;
    }

</style>
