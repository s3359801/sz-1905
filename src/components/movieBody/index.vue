<template>
<div class="movieBody">
     <div class="top">
            <div class="search">
            <input type="text" placeholder="请输入影院名称或地址">
            </div>
            <button>搜索</button>

        </div>
        <BScroll ref="bscroll">
        <div class="mainBody">
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
import http from "utils/http.js"
import {getCinema} from "api/movie"
import {mapState} from "vuex"
export default {
    name:"movieBody",
     activated(){
        this.handleGetCinema(this.id,this.page)
        this.page=1;
      },

    data(){
        return{
            cinemaList:[],
            page:1
            
        }
    },
     computed:{
          ...mapState({
            id:state=>state.city.id
        })
          
      },
    methods:{
        handleDetail(id){
            this.$router.push({name:"movieChoose",params:{id}})
        },
        async handleGetCinema(id,page){
            let data = await getCinema(id,page)
            this.cinemaList = [this.cinemaList,...data.list];
            this.$refs.bscroll.scroll.finishPullUp()
                this.$refs.bscroll.scroll.refresh()
                if(this.page <= 16){
                    this.page++;
                }else{
                    this.page = ""
                }
                
        }
    },
    mounted(){
        this.$refs.bscroll.handlePullingUp(()=>{
            this.handleGetCinema(this.id,this.page)
        })
        
    }
}
</script>

<style scoped>
.movieBody {
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
    .movieBody .size{
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
    .mainBody{
         width:100%;
        position: absolute;
        left:0;
        top:0;
        overflow: auto;
    }
    .mainBody .shop{
        width:100%;
        height:1.66rem;
        padding:.2rem .3rem;
        border-bottom: .02rem solid #eee;
        font-size: .24rem;
    }
    .mainBody .shop h3{
        font-size: .32rem;
        font-weight: 400;
        margin-bottom:.2rem;
        color:#333;
    }
    .mainBody .shop p{
        color:#999;
    }
    .mainBody .shop .address{
        max-width: 5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .mainBody .shop span{
        color:#c94c23;
    }
</style>
