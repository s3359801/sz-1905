<template>
  <div>
    <div id="header">
       
      <ul>
        <li
          v-for="(item,index) in list"
          :key="index"
          :class="colorIndex == index?'activeColor':''"
          @click="handleColor(index)"
        >
          <span>{{item.title}}</span>
        </li>
      </ul>
          <slot name="headerCom" :city="city"  :cityicon="cityicon"></slot>
           
    </div>
   <Banner/>
   
    <div id="main" ref="movieBody">
      
      <component :is="mainIndex"></component>
      
    </div>
    
    <keep-alive>
             <router-view></router-view>
        </keep-alive>
  </div>
</template>

<script>
import HotMovie from "components/hotmovie/index.vue";
import Upcoming from "components/upcoming/index.vue";
import Banner from "components/banner/index.vue"
import {mapActions,mapState, mapMutations} from "vuex";

export default {
  data() {
    return {
      list: [{ title: "正在热映" }, { title: "即将上映" }],
     
      colorIndex: 0,
      mainIndex: "HotMovie",
      cityicon:"&#xe674;"
    };
  },
        computed:{
        ...mapState({
            city:state=>state.city.iptVal,
            id:state=>state.city.id
        })
    },
  components: {
    HotMovie,
    Upcoming,
    Banner
  },
  methods: {
    handleColor(index) {
      this.colorIndex = index;
      switch (index) {
        case 0:
          this.mainIndex = "HotMovie";
          break;
        case 1:
          this.mainIndex = "Upcoming";
          break;
      }
    }
  },
  
};
</script>

<style>
#header {
  width: 100%;
  height: 1rem;
  background: #c94c23;
  position: fixed;
  top:0;
  left:0;
  z-index: 10;
}
#header i {
  font-size: .28rem;
}
#header > ul {
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  margin:0 auto;
}
#header > ul > li {
  width: 50%;
  height: 60%;
  border: 0.01rem solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  font-size: 0.24rem;
  color: #fff;
}
#header > ul >.activeColor {
  background: #fff;
  color: #c94c23;
}
#header > ul > li:nth-of-type(1) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
#header > ul > li:nth-of-type(2) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

#main {
  width: 100%;
  padding: 4.18rem .3rem 0 .3rem;
  overflow-y:auto;
  height:12.32rem;
}



</style>
