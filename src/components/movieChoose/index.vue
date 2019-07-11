<template>
  <div class="movieChoose">
    <InHeader title="影院信息">
      <template v-slot:header="props">
        <p class="big" @click="handleBack()">
          <i class="iconfont size" v-html="props.icons"></i>
          {{props.icon}}
        </p>
      </template>
    </InHeader>
    <div class="top">
      <h3>
        {{cinemaName}}
        <i class="iconfont size" v-html="icon"></i>
      </h3>
    </div>
    <div class="banner">
      <ul>
        <li
          class="bannerList"
          :class="activeIndex==index?'show':''"
          v-for="(item,index) in movieList"
          :key="index"
          @click="handleToggle(index)"
        >
          <img :src="item.imagePoster" />
          <div :class="activeIndex==index?'active':''" class="delta"></div>
        </li>
      </ul>
    </div>
    <div
      class="main_top"
      v-for="(item,index) in movieList"
      :key="index"
      :class="activeIndex==index?'showOn':''"
    >
      <h3>
        {{item.name}}
        <i class="iconfont size" v-html="icon"></i>
      </h3>
    </div>
    <div class="tips">
      <span>温馨提示:电影开场前15分钟关闭在线售票</span>
    </div>
    <div class="tap">
      <div
        v-for="(item,index) in movieList[activeIndex].planList"
        class="day"
        :key="index"
        @click="handleDayToggle(index)"
      >
        <button :class="dayIndex==index?'dayShow':''">{{item.date}}</button>
      </div>
    </div>
    <div class="main">
      <div
        class="mainInner"
        v-for="(item,index) in movieList[activeIndex].planList"
        :key="index"
        :class="dayIndex==index?'dayActive':''"
      >
        <li
          v-for="(item,index) in movieList[activeIndex].planList[dayIndex].sessionList"
          :key="index"
        >
          <!-- 使用变量保存记录要记录的循环的需要下标 -->
          <div class="up">
            <span class="row2">{{item.startTime}}</span>
            <span class="row4">{{item.type}}</span>
            <strong>{{item.price}}</strong>
            <b>元</b>
          </div>
          <div class="down">
            <span class="row2">{{item.endTime}}结束</span>
            <span class="row4">{{item.hallName}}</span>
            <div class="original">
              <strong>{{item.orgPrice}}</strong>
              <b>元</b>
            </div>
          </div>
          <router-link 
          :to='{name:"moviePay",params:{id:id}}'
          class="buy"
          tag="div"
          >选座购票</router-link>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import InHeader from "@/common/inHeader";
import http from "utils/http.js";
export default {
  name: "movieChoose",
  props: ["id"],
  components: {
    InHeader
  },
  async activated() {
    const movieChoose = () =>
      http("get", "s/cinemaDetail?", { id: this.$route.params.id }, "&idDK=0");
    let data = await movieChoose();
    this.cinemaName = data.name;
    this.movieList = data.movieList;
    var obj = data.movieList; //定义对象（data为获取到的对象，在这里定义）
    var arr = Object.values(obj); //对象转化为数组
    this.plan = this.movieList[0].planList;

  },
  data() {
    return {
      icon: "&#xe611;",
      cinemaName: {},
      movieList: [{ plan: [] }],
      activeIndex: 0,
      dayIndex: 0,
      timeIndex: 0
    };
  },
  methods: {
    handleBack() {
      this.$router.go(-1);
    },
    handleToggle(index) {
      this.activeIndex = index;
      this.dayIndex =0;
    },
    handleDayToggle(index) {
      this.dayIndex = index;
    }
  }
};
</script>

<style scoped>
.movieChoose .size {
  font-size: 0.28rem;
}
.movieChoose .top {
  width: 100%;
  height: 1rem;
  margin-top: 1rem;
  padding-left: 0.6rem;
}
.movieChoose .top h3 {
  line-height: 1rem;
  font-size: 0.32rem;
  color: #333;
  font-weight: 400;
}
.movieChoose .top .size {
  float: right;
  margin-right: 0.2rem;
}
.movieChoose .banner {
  height: 2.8rem;
  overflow-x: auto;
  overflow-y: hidden;
  background: #252526;
}
.movieChoose .banner ul {
  display: flex;
  margin-top: 0.2rem;
}
.movieChoose .banner ul li:nth-of-type(1) {
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}
.movieChoose .banner ul li {
  margin-right: 0.2rem;
  position: relative;
}
.movieChoose .banner ul .show {
  border: 0.02rem solid #c94c23;
}
.movieChoose .banner ul li .delta {
  position: absolute;
  bottom: -0.2rem;
  left: 50%;
  display: none;
  width: 0.37rem;
  height: 0.2rem;
  margin-left: -0.185rem;
  background-image: url(../../../public/img/bottom.png);
  background-size: cover;
  z-index: 10;
}
.movieChoose .banner ul li .active {
  display: block;
}
.movieChoose .banner .bannerList img {
  width: 1.72rem;
  height: 2.4rem;
}
.movieChoose .main_top {
  width: 100%;
  height: 1rem;
  padding-left: 0.6rem;
  display: none;
}

.movieChoose .showOn {
  display: block;
}
.movieChoose .main_top h3 {
  line-height: 1rem;
  font-size: 0.32rem;
  color: #333;
  font-weight: 400;
}
.movieChoose .main_top .size {
  float: right;
  margin-right: 0.2rem;
}
.movieChoose .tips {
  font-size: 0.24rem;
  border-top: 0.02rem solid rgba(247, 147, 30, 0.3);
  border-bottom: 0.02rem solid rgba(247, 147, 30, 0.3);
  background-color: #fcf2cc;
  color: #ea9634;
  padding: 0.08rem 0.3rem;
}
.movieChoose .tap {
  margin: 0 0.2rem;
  padding: 0.2rem 0;
  display: flex;
  overflow: auto;
  border-bottom: 0.02rem solid #ccc;
}
.movieChoose .tap .day {
  width: 33%;
}
.movieChoose .tap .day button {
  width: 1.8rem;
  background: #fff;
  border: 0;
  font-size: 0.24rem;
  padding: 0.15rem 0.2rem;
  margin: 0 0.2rem;
}
.movieChoose .tap .day .dayShow {
  background: #c94c23;
  color: #fff;
  border-radius: 0.1rem;
}
.movieChoose .main {
  width: 100%;
  overflow-y: auto;
  position: absolute;
  top: 7.34rem;
  left: 0;
  bottom: 0;
}
.movieChoose .main .mainInner {
  display: none;
}
.movieChoose .main .dayActive {
  display: block;
}
.movieChoose .main li {
  padding: 0.2rem 0 0.2rem 0.34rem;
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 0.1rem;
  font-size: .24rem;
}
.movieChoose .main .up {
  width: 75%;
  color: #333;
}

.movieChoose .main .row2 {
  display: inline-block;
  width: 25%;
}
.movieChoose .main .row4 {
  display: inline-block;
  width: 45%;
}
.movieChoose .main .up strong {
  font-size: 0.36rem;
  color: #ef0f38;
  font-weight: 400;
}
.movieChoose .main .up b {
  color: #ef0f38;
}
.movieChoose .main .down {
  width: 75%;
  color: #999;
}
.movieChoose .main .down strong {
  text-decoration: line-through;
}
.movieChoose .main .original {
  width: 22%;
  display: inline-block;
  padding: 0 0.2rem;
  text-align: right;
  float: right;
  margin-right: .3rem;
}
.movieChoose .main .buy {
  width: 1.4rem;
  height: 0.6rem;
  line-height: 0.6rem;
  color: #fff;
  background: #c94c23;
  text-align: center;
  position: absolute;
  top: 42%;
  right: 0.3rem;
  margin-top: -0.3rem;
  border-radius: 0.1rem;
  font-weight: 400;
}
</style>
