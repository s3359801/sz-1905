<template>
        <div class="banner">
      <div class="swiper-container" ref="banners">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in titleList" :key="index">
            <!-- 如果需要分页器 -->
            <img :src="item.img" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    
</template>

<script>
import {getMovieNow} from "api/movie"
import "../../../public/css/swiper.min.css"
import Swiper from "swiper";
export default {
    name:"banner",
    async created(){
      let data = await getMovieNow();
      this.titleList = data.titleCarouselList
      
    },
    data(){
        return{
            titleList:[]
        }
    },
    watch:{
       titleList(newVal,oldVal){
         if(newVal != oldVal){
           this.$nextTick(()=>{
            this.swiper = new Swiper(this.$refs.banners,{
              autoplay:true,
              disableOnInteraction: true,
              pagination: {
                el: '.swiper-pagination',
                clickable :true,
              },
            })
         })
         }
     }
    } 
}
</script>

<style scoped>
.banner {
    position: absolute;
    top:1rem;
    left:0;
    z-index: 10;
    width: 100%;
    }
.swiper-container img {
  width: 100%;
  height: 3.18rem;
}

.swiper-pagination-bullets.swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    display: inline-block;
}


</style>
