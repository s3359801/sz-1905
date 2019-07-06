<template>
  <div>
    <div id="header">
      <router-view></router-view>
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
    

    </div>
    <Banner/>
    <div id="main">
      <component :is="mainIndex"></component>
    </div>
  </div>
</template>

<script>
import HotMovie from "../hotmovie/index.vue";
import Upcoming from "../upcoming/index.vue";
import Banner from "../banner/index.vue"
export default {
  data() {
    return {
      list: [{ title: "正在热映" }, { title: "即将上映" }],
     
      colorIndex: 0,
      mainIndex: "HotMovie"
    };
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
  }
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
}
#header > ul {
  display: flex;
  margin: 0 auto;
  width: 33%;
  height: 100%;
  align-items: center;
}
#header > ul > li {
  width: 50%;
  height: 60%;
  border: 0.01rem solid #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 0.2rem;
  font-size: 0.24rem;
}
#header > ul > li:nth-of-type(1) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
#header > ul > li:nth-of-type(2) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.activeColor {
  background: #fff;
  color: #c94c23;
}
#main {
  width: 100%;
  padding: 0 0.3rem;
  position: absolute;
  top:4.18rem;
  left:0;
  bottom: 1rem;
  overflow-y:auto;
}


</style>
