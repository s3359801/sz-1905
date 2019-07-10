<template>
    <div>
        <Loading v-if="flag"/>
        <router-link class="movie" 
        v-for="(item,index) in movieList" 
        :key="index"
        tag="li"
        :to='{name:"movieContent",params:{id:item.id}}'
        >
           <div class="movielist"> 
                <img :src="item.moviePoster">
            <div class="contents">
                <h2>{{item.name}}</h2>
                <span>导演：{{item.director}}</span>
                <p class="actor">主演：{{item.actor}}</p>  
                <div class="pay">
                <router-link tag="button"
                :to='{name:"movieTicket",params:{id:item.id}}'>购票</router-link>
            </div>
            </div>  
            </div>
        </router-link>
         
    </div>
</template>

<script>
import {getMovieNow} from "api/movie";
import {mapActions,mapState, mapMutations} from "vuex";
export default {
  
     async created(){
        let data =await getMovieNow();
        if(data){
            this.flag= false;
        
        }else{
            this.flag= true;
        }    
        this.movieList = data.hotMovieList.list;
        

      },
      data(){
          return{
              movieList:[],
              flag:true,
          }
      },
      computed:{
          ...mapState({
            city:state=>state.city.iptVal,
            id:state=>state.city.id
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
        max-width: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .movie>.movielist>.contents>span{
        font-size: .24rem;
        color:#A5A5A5
    }
    .pay>button{
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
    }

</style>
