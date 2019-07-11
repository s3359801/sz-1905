<template>
  <div class="citys" ref="scroll">
    <InHeader title="城市列表">
      <template v-slot:header="props">
        <p class="big" @click="handleBack()">
          <i class="iconfont size" v-html="props.icons"></i>
          {{props.icon}}
        </p>
      </template>
    </InHeader>
    <div>
      <div class="top">
        <ul>
          <li
            v-for="(item,index) in list"
            :key="index"
            :class="topIndex==index?'active':''"
            @touchstart="handleToggle(index)"
          >
            <p>{{item.title}}</p>
            <span>{{item.val}}</span>
          </li>
        </ul>
      </div>
      <div class="tap" :class="topIndex==0?'show':''">
        <div class="main" ref="domTop">
          <div class="citySearch" v-for="(item,index) in AList" :key="index">
            <div class="cs_top">
              <p>{{item.group_id}}</p>
            </div>
            <div class="city">
              <li v-for="(itm,idx) in AList[index].city_list" :key="idx" @click="handleChoose(itm)">
                <span>{{itm.name}}</span>
              </li>
            </div>
          </div>
        </div>
      <div class="chooseList">
        <li v-for="(item,index) in AList" :key="index">
          <span @click="handleMove(index)">{{item.group_id}}</span>
        </li>
      </div>
    </div>

    <div class="tap1" :class="topIndex==1?'show':''">
        <div class="main">
            <div class="city">
              <li v-for="(itm,idx) in districtList" :key="idx" @click="handleChooseDistrict(idx,itm)">
                <span>{{itm.name}}</span>
              </li>
            </div>
      </div>
      </div>
  </div>
  </div>
</template>

<script scoped>
import InHeader from "@/common/inHeader";
import { mapActions, mapState, mapMutations } from "vuex";
import { getDistrict } from "api/movie";
export default {
  name: "citys",
  components: {
    InHeader
  },
  activated() {
    this.getCitys();
    this.handleDistrict(this.id);
    this.handleOn();
  },
  data() {
    return {
      topIndex: 0,
      list: [
        {
          title: "城市",
          val: ""
        },
        {
          title: "行政区",
          val: ""
        },
        {
          title: "特色",
          val: "很贵"
        }
      ],
      districtList:[]
    };
  },
  computed: {
    ...mapState({
      AList: state => state.city.AList,
      iptVal: state => state.city.iptVal,
      flag: state => state.city.flag,
      id: state => state.city.id
    })
  },
  methods: {
    handleToggle(index) {
      this.topIndex = index;
    },
    handleBack() {
      this.$router.go(-1);
    },

    ...mapActions({
      getCitys: "city/getCitys"
    }),
    ...mapMutations({
      handleModifyChoose: "city/handleModifyChoose"
    }),
    handleChoose(itm) {
      this.$router.push("/movie");
      this.handleModifyChoose(itm);
      this.list[0].val = this.iptVal;
    },
    handleOn(){
      this.list[0].val = this.iptVal;
    },
    handleChooseDistrict(idx,itm){
      this.list[1].val = itm.name;
    },
    handleMove(i) {
      let mainDom = this.$refs.domTop.querySelectorAll(".citySearch");

      let Mtop = mainDom[i].offsetTop;

      this.$refs.scroll.scrollTop = Mtop - 200;
    },
    async handleDistrict(id) {
      let datas = await getDistrict(id);
      this.districtList = datas.list
    }
  }
};
</script>

<style scoped>
.citys {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.citys .top {
  position: fixed;
  top: 1rem;
  left: 0;
  height: 1rem;
  background: #fff;
  width: 100%;
  z-index: 10;
}
.citys .top ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  font-size: 0.24rem;
}
.citys .size{
  font-size: .24rem;
}
.citys .top ul li {
  padding-top: 0.2rem;
  width: 33.3%;
  height: 100%;
}
.citys .top ul .active {
  color: #c94c23;
  border-bottom: 0.02rem solid #c94c23;
}
.citys .main {
  width: 100%;
  padding-top: 2rem;
  padding-left: 0.3rem;
  font-size: 0.24rem;
  overflow: auto;
}
.citys .main .citySearch .cs_top {
  color: #c94c23;
}
.citys .main .citySearch li {
  padding: 0.3rem 0;
}
.chooseList {
  position: fixed;
  top: 20%;
  right: 0.1rem;
  font-size: 0.24rem;
  color: #c94c23;
}
.chooseList li {
  height: 0.4rem;
  width: 0.4rem;
}
.citys .tap {
  display: none;
}
.citys .tap1 {
  display: none;
}
.citys .tap1 li{
  padding: 0.3rem 0;
}
.citys .show {
  display: block;
}
</style>
