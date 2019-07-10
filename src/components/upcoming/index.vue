<template>
    <BScroll>
      <div>
          <Loading v-if="flag"/>
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
                <span>{{item.director}}</span>
                <p class="actor">{{item.actor}}</p>  
                <p>{{item.showTime}}<span class="time">上映</span></p>
                
            </div>  
            </div>
        </v-touch>
    </div>
    </BScroll>
</template>

<script>
import {getMovieNow} from "api/movie";
export default {
  
     async created(){
        let data = await getMovieNow()
        if(data){
            this.flag= false;
        
        }else{
            this.flag= true;
        }  
        this.movieList = data.upcomingMovieList.list;
      },
      data(){
          return{
              movieList:[],
              flag:true
          }
      },
      methods:{
          handleDetail(id){
              this.$router.push({name:"movieComing",params:{id}})
          }
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
        width:100%;
    }
    .movie>.movielist>img {
        float: left;
        margin-right:0.4rem;
        height:2.1rem;
        width:1.5rem;
    }
    .movie>.movielist>.contents {
        float: left;
        width:50%;
    }
    .movie>.movielist>.contents>h2{
        margin:0.2rem 0;
        font-size: .34rem;
        color:#5C5C5C;
        max-width: 3.3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .movie>.movielist>.contents>p {
        font-size: .24rem;
        line-height:0.4rem;
        height:0.4rem;
        color:#A5A5A5;
        
    }
 .movie>.movielist>.contents>.actor {
        max-width: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

    }
    .movie>.movielist>.contents>span{
        font-size: .24rem;
        color:#A5A5A5
    }
    .time{
        float: right;
    }
</style>
