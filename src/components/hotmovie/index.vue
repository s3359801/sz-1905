<template>
    <BScroll ref="bscroll">
    <div class="movie_body">
        <Loading v-if="flag"/>
        <div class="loading">
            <i class="fa fa-circle-o-notch fa-spin" v-if="scrollLoading"></i>
        </div>
        <v-touch class="movie" 
        v-for="(item,index) in movieList" 
        :key="index"
        tag="li"
        @tap="handleDetail(item.id)"
        
        >
           <div class="movielist"> 
                <img :src="item.moviePoster">
            <div class="contents">
                <h2>{{item.name}}</h2>
                <span>导演：{{item.director}}</span>
                <p class="actor">主演：{{item.actor}}</p>  
                <div class="pay">
                <router-link class="btn" tag="div"
                :to='{name:"movieTicket",params:{id:item.id}}'
                >购票</router-link>
            </div>
            </div>  
            </div>
        </v-touch>
         
    </div>
    </BScroll>
</template>

<script>
import {getMovie} from "api/movie";
import {mapActions,mapState, mapMutations} from "vuex";

export default {
  
      created(){
        this.handleGetMovie(this.page);
        

      },
      data(){
          return{
              movieList:[],
              flag:true,
              scrollLoading:false,
              page:1
          }
      },
     
      computed:{
          ...mapState({
            city:state=>state.city.iptVal,
            id:state=>state.city.id
        })
          
      },
      methods:{
            handleDetail(id){
                this.$router.push({name:"movieContent",params:{id}})
            },
        async handleGetMovie(page){
                let data =await getMovie(page);
                if(data){
                    this.flag= false;
                
                }else{
                    this.flag= true;
                }    
                this.movieList = [...this.movieList,...data.list]
                this.$refs.bscroll.scroll.finishPullUp()
                this.$refs.bscroll.scroll.refresh()
                if(this.page < 5){
                    this.page++;
                }else{
                    this.page = 0
                }
                
            }
      },
      mounted(){
            this.$refs.bscroll.handleScrollStart(()=>{
                this.scrollLoading = true;
            });
             this.$refs.bscroll.handleScrollEnd(()=>{
                 this.scrollLoading = false;
             });
             this.$refs.bscroll.handlePullingUp(()=>{
                 this.handleGetMovie(this.page);
             })
             
      }
    
   
}
</script>

<style scoped>
    .movie {
      position: relative;
      border:1px solid #fff;
      overflow: hidden;
      padding:10px 0;
    } 
    .movie>.movielist {
        padding:10px 0;
    }
    .movie>.movielist>img {
        float: left;
        margin-right:0.4rem;
        height:2.1rem;
        width:1.5rem;
    }
    .movie>.movielist>.contents {
        float: left;
    }
    .movie>.movielist>.contents>h2{
            margin: 0.2rem 0;
            font-size: .34rem;
            color: #5C5C5C;
            max-width:3.3rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
    }
    .movie>.movielist>.contents>p {
        font-size: .24rem;
        line-height:0.4rem;
        height:0.4rem;
        color:#A5A5A5;
        max-width: 2.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .movie>.movielist>.contents>span{
        font-size: .24rem;
        color:#A5A5A5;
        max-width: 2.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .pay>.btn{
        width: 1.2rem;
        height:.64rem;
        font-size: .28rem;
        color:#C94C23;
        background: #fff;
        border:1px solid #C94C23;
        border-radius:  8px;
        position: absolute;
        top:50%;
        margin-top:-.32rem;
        right:.3rem;
        text-align: center;
        padding-top:.1rem;
    }
    .loading{
        text-align:center;
    }
    .loading .fa {
        font-size: .6rem;
        color: #C94C23;
    }

</style>
