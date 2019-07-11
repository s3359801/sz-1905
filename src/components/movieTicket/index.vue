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
            <input v-model="inputVal" type="text" placeholder="请输入影院名称或地址"/>
            </div>
            <button @click="handleSearch()">搜索</button>

        </div>
        <BScroll ref="bscroll">
        <div class="main">
            <Loading v-if="flag"/>
            <v-touch class="shop"
            v-for="(item,index) in cinemaList"
            :key="index"
            @tap="handleDetail(item.id)"
            tag="li"
            >
                <h3>{{item.name}}</h3>
                <p class="address">{{item.address}}</p>
                <span>{{item.price}}</span>

            </v-touch> 
        </div>
        </BScroll>
    </div>
</template>

<script>
import  InHeader from "@/common/inHeader"
import  {getCinema,searchCinema} from "api/movie"
import {mapState} from "vuex"
import http from "utils/http.js"
export default {
    name:"movieTicket",
    components:{
        InHeader

    },
  
     activated(){
        this.handleGetCinema(this.id,this.page);
        this.page=1;
        
      },
    computed:{
          ...mapState({
            id:state=>state.city.id
        })
          
      },
    data(){
        return{
            cinemaList:[],
            flag:true,
            iptVal:"",
            valList:[],
            page:1,
            keyword:"",
            inputVal:'',
        }
    },
    
    methods:{
        handleBack(){
            this.$router.go(-1)
        },
        handleDetail(id){
            this.$router.push({name:"movieChoose",params:{id}})
        },
        async handleGetCinema(id,page){
            let data = await getCinema(id,page)
            if(data){
                this.flag= false;
            
            }else{
                this.flag= true;
            }
            this.cinemaList = [...this.cinemaList,...data.list];
            this.$refs.bscroll.scroll.finishPullUp()
            this.$refs.bscroll.scroll.refresh()
                        this.page++;
              
        },
    },
    mounted(){
             this.$refs.bscroll.handlePullingUp(()=>{
                 this.handleGetCinema(this.id,this.page);
             })  
      }
}
</script>

<style scoped>
    .movieTicket {
        width:100%;
        height:100%;
        overflow: auto;
    }
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
        background: #fff;
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
        width:100%;
        padding:0 .3rem;
        padding-top:2rem;
        overflow: auto;
    }
    .main .shop{
        width:100%;
        height:1.66rem;
        padding:.2rem .3rem;
        border-bottom: .02rem solid #eee;
        font-size: .24rem;        
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
        max-width: 5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .main .shop span{
        color:#c94c23;
    }
</style>
